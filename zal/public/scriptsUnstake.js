

document.addEventListener('DOMContentLoaded', async function () {
    console.log("scriptsUNStake.js loaded");

    const tokenDetails = window.tokenDetails;
    const stakeInfos = document.getElementById("stake-infos1")
    const rereturnAmountDisplay = document.getElementById("unstake-amount-display1");
    const unstakeExecuteButton = document.getElementById("unstake-execute-button");

    // Set initial values for total balance, already staked, and already borrowed
    document.getElementById("total-balance-u").innerText = "0";
    document.getElementById("already-staked-u").innerText = "0";
    document.getElementById("already-borrowed-u").innerText = "0";

    // Get stake input element
    const unstakeInput = document.getElementById("unstake-input");

    // Add event listener to update stake input value in displayData function
    unstakeInput.addEventListener("input", () => {
        displayData1();
    });

    let tokenBalances = sessionStorage.getItem('tokenBalances');
    tokenBalances = JSON.parse(tokenBalances);
    const registryContractAddress = tokenDetails.registryAddress;
    const account = sessionStorage.getItem('connectedAddress');
    const web3 = new Web3(window.ethereum);
    const registryContract = new web3.eth.Contract(cdtTokenRegistryABI, registryContractAddress);

    const balance = tokenBalances[tokenDetails.tokenAddress];
    const alreadyStaked = await registryContract.methods.alreadyStakedHolder(account).call();
    const alreadyBorrowed = await registryContract.methods.alreadyBorrowedHolder(account).call();
    const totalBalance = parseInt(balance) - parseInt(alreadyStaked)

    const alreadyBorrowedFormatted = (alreadyBorrowed / 10 ** 18).toFixed(5);
    const alreadyStakedFormatted = (alreadyStaked / 10 ** tokenDetails.decimals).toFixed(5);
    const totalBalanceFormatted = (totalBalance / 10 ** tokenDetails.decimals).toFixed(5);
    const balanceFormatted = (balance / 10 ** tokenDetails.decimals).toFixed(5);

    async function displayData1() {

        document.getElementById("total-balance-u").innerText = totalBalanceFormatted;
        document.getElementById("already-staked-u").innerText = alreadyStakedFormatted;
        document.getElementById("already-borrowed-u").innerText = alreadyBorrowedFormatted;

        var returnAmount = parseFloat(unstakeInput.value).toFixed(5);
       
        const rereturnAmount = await registryContract.methods.calculateUnstake(account,BigInt(returnAmount*10**5) * BigInt(10 ** 13)).call();

        const rereturnAmountFormatted = (rereturnAmount / 10 ** tokenDetails.decimals).toFixed(5);
        document.getElementById("unstake-amount-display").innerText = rereturnAmountFormatted;
    }

    unstakeInput.addEventListener("input", function () {
        var returnAmount = parseInt(unstakeInput.value);
        const returnAmountString = returnAmount.toString();
        const decimalIndex = returnAmountString.indexOf('.');

        if (decimalIndex !== -1 && stakeAmountString.substring(decimalIndex + 1).length > 5) {
            unstakeInput.value = returnAmount.toFixed(5); // Truncate to 5 decimal places
        }
        stakeAmount = parseFloat(unstakeInput.value);
        if (returnAmount > alreadyBorrowedFormatted) {
            unstakeInput.value = alreadyBorrowedFormatted;
        }
        displayData1();
    });

    unstakeExecuteButton.addEventListener("click", async function () {
        event.preventDefault();

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        if (!account) {
            // MetaMask is not connected, prompt the user to connect
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
            } catch (error) {
                alert("Please connect to MetaMask to use this feature.");
                return;
            }
        }

        // Create a Web3 instance using the current provider
        const web3 = new Web3(window.ethereum);

        const registryContractAddress = tokenDetails.registryAddress; 
        const registryContract = new web3.eth.Contract(cdtTokenRegistryABI, registryContractAddress);
        console.log("unstakeInput.value: ", unstakeInput.value)
        const returnAmount = parseFloat(unstakeInput.value);
        const returnAmountInWei = BigInt(returnAmount*10**5) * BigInt(10 ** 13)
        const txObject = registryContract.methods.unstakeByBorrowedAmount();
        

        try {
            // Send the transaction to the contract
            const receipt = await txObject.send({
                from: account,
                value: returnAmountInWei.toString(),
            });
            // Transaction successful
            console.log("Transaction successful:", receipt);
            setTimeout(() => {
                window.location.reload();
            }, 100); // Wait for one second before scrolling
           
        } catch (error) {
            // Transaction failed
            console.error("Transaction failed:", error);
        }
    });

    displayData1()
    console.log("scriptsUNStake.js DONE");
});    