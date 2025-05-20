
document.addEventListener('DOMContentLoaded', async function () {
    console.log("scriptsBurn.js loaded");

    const tokenDetails = window.tokenDetails;
    const burnExecuteButton = document.getElementById("burn-execute-button");
    
    // Set initial values for total balance, already staked, and already borrowed
    document.getElementById("total-balance-b").innerText = "0";
    document.getElementById("already-staked-b").innerText = "0";
    document.getElementById("already-borrowed-b").innerText = "0";

    // Get stake input element
    const burnInput = document.getElementById("burn-input");

    // Add event listener to update stake input value in displayData function
    burnInput.addEventListener("input", () => {
        displayData2();
    });

    let tokenBalances = sessionStorage.getItem('tokenBalances');
    tokenBalances = JSON.parse(tokenBalances);
    const registryContractAddress = tokenDetails.registryAddress;
    const account = sessionStorage.getItem('connectedAddress');
    const web3 = new Web3(window.ethereum);
    const registryContract = new web3.eth.Contract(cdtTokenRegistryABI, registryContractAddress);

    const balance = tokenBalances[tokenDetails.tokenAddress] ;
    const alreadyStaked = await registryContract.methods.alreadyStakedHolder(account).call();
    const alreadyBorrowed = await registryContract.methods.alreadyBorrowedHolder(account).call();
    const totalBalance = parseInt(balance)  

    const alreadyBorrowedFormatted = (alreadyBorrowed / 10 ** 18).toFixed(5);
    const alreadyStakedFormatted = (alreadyStaked / 10 ** tokenDetails.decimals).toFixed(5);
    const totalBalanceFormatted = (totalBalance / 10 ** tokenDetails.decimals).toFixed(5);
    const balanceFormatted = (balance / 10 ** tokenDetails.decimals).toFixed(5);

    async function displayData2() {

        document.getElementById("total-balance-b").innerText = totalBalanceFormatted;
        document.getElementById("already-staked-b").innerText = alreadyStakedFormatted;
        document.getElementById("already-borrowed-b").innerText = alreadyBorrowedFormatted;

       
        var burnAmount = parseFloat(burnInput.value).toFixed(5) ;        
        
        let burnAmountString = BigInt(burnAmount * 10 ** 5) *  BigInt(10 ** (tokenDetails.decimals-5))
        const newBurnAmount = await registryContract.methods.calculateRestake(account, burnAmountString).call();
        const newBurnAmountFormatted = (newBurnAmount / 10 ** 18 * 10 / 9).toFixed(5);
        document.getElementById("burn-amount-display").innerText = newBurnAmountFormatted;



    }

    
    burnInput.addEventListener("input", function () {
        var burnAmount = parseFloat(burnInput.value);
        const burnAmountString = burnAmount.toString();
        const decimalIndex = burnAmountString.indexOf('.');

        if (decimalIndex !== -1 && burnAmountString.substring(decimalIndex + 1).length > 5) {
            burnInput.value = burnAmount.toFixed(5); // Truncate to 5 decimal places
        }
        burnAmount = parseFloat(burnInput.value);
        if (burnAmount > balanceFormatted) {
            burnInput.value = balanceFormatted;
        }
        displayData2();
    });

  




    burnExecuteButton.addEventListener("click", async function () {
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

        const burnAmountFloat = parseFloat(burnInput.value)
 let burnAmount = BigInt(burnAmountFloat * 10 ** 5) *  BigInt(10 ** (tokenDetails.decimals-5))
 console.log("burnAmount", burnAmount)
        try {
            // Send the transaction to the contract
            const receipt = await registryContract.methods.burn(burnAmount).send({ from: account });
            
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

    displayData2()
    console.log("scriptsBurn.js DONE");
});    