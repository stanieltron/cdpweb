document.addEventListener('DOMContentLoaded', async function () {
    console.log("scriptsFUND.js loaded");
    const tokenDetails = window.tokenDetails;
    const fundExecuteButton = document.getElementById("fund-execute-button");
    
    const fundInput = document.getElementById("fund-input");

    const registryContractAddress = tokenDetails.registryAddress;
    const account = sessionStorage.getItem('connectedAddress');
    const web3 = new Web3(window.ethereum);
    const registryContract = new web3.eth.Contract(cdtTokenRegistryABI, registryContractAddress);

    var fundAmount = "0";
    // Add event listener to update stake input value in displayData function
    fundInput.addEventListener("input", function () {
         fundAmount = parseFloat(fundInput.value);
        const fundAmountString = fundAmount.toString();
        const decimalIndex = fundAmountString.indexOf('.');

        if (decimalIndex !== -1 && fundAmountString.substring(decimalIndex + 1).length > 5) {
            fundInput.value = fundAmount.toFixed(5); // Truncate to 5 decimal places
        }
        fundAmount = parseFloat(fundInput.value);
      
       
        document.getElementById("burn-amount-display").innerText = fundAmount;
    });


    fundExecuteButton.addEventListener("click", async function () {
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
      
        const fundAmount = parseFloat(fundInput.value);
        const fundAmountInWei = BigInt(fundAmount*10**5) * BigInt(10 ** 13)
        const txObject = registryContract.methods.fund();
        
      
        try {
            // Send the transaction to the contract
            const receipt = await txObject.send({
                from: account,
                value: fundAmountInWei.toString(),
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

}); 