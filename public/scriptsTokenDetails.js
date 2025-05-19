
document.addEventListener('DOMContentLoaded', function () {
    console.log("scriptsTokenDetails.js loaded");
    const isTokenDetailsPage = window.location.pathname.includes('tokenDetails');

    var tokenAddress = "";
    // If the current page is tokenDetails, proceed with the logic
    if (isTokenDetailsPage) {
        // Get the token address from the URL query parameters
        const urlParams = new URLSearchParams(window.location.search);
        tokenAddress = urlParams.get('token');

        // If the token address is available, you can use it in your script
       
    }


    const stakeButton = document.getElementById("stakeButton");
    const stakeContainer = document.getElementById("stakeContainer");
    stakeButton.addEventListener("click", handleStakeButtonClick);

    const unstakeButton = document.getElementById("unstakeButton");
    const unstakeContainer = document.getElementById("unstakeContainer");
    unstakeButton.addEventListener("click", handleUnstakeButtonClick);

    const burnButton = document.getElementById("burnButton");
    const burnContainer = document.getElementById("burnContainer");
    burnButton.addEventListener("click", handleBurnButtonClick);
    // Function to connect to MetaMask and return the connected address

    const buyButton = document.getElementById("buyButton");
    const buyContainer = document.getElementById("buyContainer");
    buyButton.addEventListener("click", handleBuyButtonClick);

    const fundButton = document.getElementById("fundButton");
    const fundContainer = document.getElementById("fundContainer");
    fundButton.addEventListener("click", handleFundButtonClick);


    const container = document.getElementById("container");

    console.log("scriptsTokenDetails.js loaded");





    // Function to handle "Stake" button click
    async function handleStakeButtonClick() {
        if (stakeContainer.style.display === "none") {
            stakeContainer.style.display = "block";
            unstakeContainer.style.display = "none";
            burnContainer.style.display = "none";
            buyContainer.style.display = "none";
            fundContainer.style.display = "none";
            stakeButton.classList.add("active"); // Add the "active" class
            unstakeButton.classList.remove("active")
            burnButton.classList.remove("active")
            buyButton.classList.remove("active")
            fundButton.classList.remove("active")
            setTimeout(() => {
                container.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
            }, 10); // Wait for one second before scrolling
        } else {
            stakeContainer.style.display = "none";
            unstakeContainer.style.display = "none";
            burnContainer.style.display = "none";
            buyContainer.style.display = "none";
            fundContainer.style.display = "none";
            stakeButton.classList.remove("active"); // Remove the "active" class
            unstakeButton.classList.remove("active")
            burnButton.classList.remove("active")
            buyButton.classList.remove("active")
            fundButton.classList.remove("active")
        } 
    }

    async function handleUnstakeButtonClick() {
        if (unstakeContainer.style.display === "none") {
            stakeContainer.style.display = "none";
            unstakeContainer.style.display = "block";
            burnContainer.style.display = "none";
            buyContainer.style.display = "none";
            fundContainer.style.display = "none";
            stakeButton.classList.remove("active"); // Remove the "active" class
            unstakeButton.classList.add("active")
            burnButton.classList.remove("active")
            buyButton.classList.remove("active")
            fundButton.classList.remove("active")
            setTimeout(() => {
                container.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
            }, 10); // Wait for one second before scrolling
        } else {
            stakeContainer.style.display = "none";
            unstakeContainer.style.display = "none";
            burnContainer.style.display = "none";
            buyContainer.style.display = "none";
            fundContainer.style.display = "none";
            stakeButton.classList.remove("active"); // Remove the "active" class
            unstakeButton.classList.remove("active")
            burnButton.classList.remove("active")
            buyButton.classList.remove("active")
            fundButton.classList.remove("active")
        }
    }

    async function handleBurnButtonClick() {
        if (burnContainer.style.display === "none") {
            stakeContainer.style.display = "none";
            unstakeContainer.style.display = "none";
            burnContainer.style.display = "block";
            buyContainer.style.display = "none";
            fundContainer.style.display = "none";
            stakeButton.classList.remove("active"); // Remove the "active" class
            unstakeButton.classList.remove("active")
            burnButton.classList.add("active")
            buyButton.classList.remove("active")
            fundButton.classList.remove("active")
            setTimeout(() => {
                container.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
            }, 10); // Wait for one second before scrolling
        } else {
            stakeContainer.style.display = "none";
            unstakeContainer.style.display = "none";
            burnContainer.style.display = "none";
            buyContainer.style.display = "none";
            fundContainer.style.display = "none";
            stakeButton.classList.remove("active"); // Remove the "active" class
            unstakeButton.classList.remove("active")
            burnButton.classList.remove("active")
            buyButton.classList.remove("active")
            fundButton.classList.remove("active")
        }
    }

    async function handleBuyButtonClick() {
        if (burnContainer.style.display === "none") {
            stakeContainer.style.display = "none";
            unstakeContainer.style.display = "none";
            burnContainer.style.display = "none";
            buyContainer.style.display = "block";
            fundContainer.style.display = "none";
            stakeButton.classList.remove("active"); // Remove the "active" class
            unstakeButton.classList.remove("active")
            burnButton.classList.remove("active")
            buyButton.classList.add("active")
            fundButton.classList.remove("active")
            setTimeout(() => {
                container.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
            }, 10); // Wait for one second before scrolling
        } else {
            stakeContainer.style.display = "none";
            unstakeContainer.style.display = "none";
            burnContainer.style.display = "none";
            buyContainer.style.display = "none";
            fundContainer.style.display = "none";
            stakeButton.classList.remove("active"); // Remove the "active" class
            unstakeButton.classList.remove("active")
            burnButton.classList.remove("active")
            buyButton.classList.remove("active")
            fundButton.classList.remove("active")
        }
    }

    async function handleFundButtonClick() {
        if (burnContainer.style.display === "none") {
            stakeContainer.style.display = "none";
            unstakeContainer.style.display = "none";
            burnContainer.style.display = "none";
            buyContainer.style.display = "none";
            fundContainer.style.display = "block";
            stakeButton.classList.remove("active"); // Remove the "active" class
            unstakeButton.classList.remove("active")
            burnButton.classList.remove("active")
            buyButton.classList.remove("active")
            fundButton.classList.add("active")
            setTimeout(() => {
                container.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
            }, 10); // Wait for one second before scrolling
        } else {
            stakeContainer.style.display = "none";
            unstakeContainer.style.display = "none";
            burnContainer.style.display = "none";
            buyContainer.style.display = "none";
            fundContainer.style.display = "none";
            stakeButton.classList.remove("active"); // Remove the "active" class
            unstakeButton.classList.remove("active")
            burnButton.classList.remove("active")
            buyButton.classList.remove("active")
            fundButton.classList.remove("active")
        }
    }

    const connectedAddress = sessionStorage.getItem('connectedAddress');

    async function showButtons() {
        const urlParams = new URLSearchParams(window.location.search);
        tokenAddress = urlParams.get('token');
        let tokenBalances = sessionStorage.getItem('tokenBalances');
        tokenBalances = JSON.parse(tokenBalances);
        let balance = tokenBalances[tokenAddress];
        if (connectedAddress) {
            // MetaMask is connected
           
            if (balance > 0) {
                // Display all buttons if balance is greater than 0
                buyButton.style.display = "inline";
                fundButton.style.display = "inline";
                stakeButton.style.display = "inline";
                unstakeButton.style.display = "inline";
                burnButton.style.display = "inline";
            } else {
                // Display only buy and fund buttons if balance is 0 or less
                buyButton.style.display = "inline";
                fundButton.style.display = "inline";
                stakeButton.style.display = "none";
                unstakeButton.style.display = "none";
                burnButton.style.display = "none";
            }
        } else {
            // MetaMask is not connected
            // Display only buy and fund buttons
            buyButton.style.display = "inline";
            fundButton.style.display = "inline";
            stakeButton.style.display = "none";
            unstakeButton.style.display = "none";
            burnButton.style.display = "none";
        }
    }
   

    console.log("scriptsTokenDetails.js done");
});


