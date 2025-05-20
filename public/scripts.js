// const { Web3 } = require('web3');
const ERC20ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "_decimals",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "initialSupply",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];


document.addEventListener('DOMContentLoaded', function () {



  const connectButton = document.getElementById("meta");
  const container = document.getElementById("container");

  console.log("scripts.js loaded");

  // async function getRegistryData() {
  //     const response = await fetch('http://localhost:3000/tokenRegistry');
  //     const data = await response.json();
  //     console.log(data);
  //     return data;
  // }

  const registerButton = document.getElementById("register");
  if (registerButton){

    registerButton.addEventListener('click', function () {
      window.location.href = `/register`;
  });
  }




  async function connectToMetaMask() {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create a new instance of Web3 using the provider from MetaMask
        const web3 = new Web3(window.ethereum);
        sessionStorage.setItem('web3', web3);

        const accounts = await web3.eth.getAccounts();

        // Store the connected address in session storage
        sessionStorage.setItem('connectedAddress', accounts[0]);

        // Update UI
        updateUI();

        // Return the connected address
        return accounts[0];
      } catch (error) {
        console.error(error);
        return null; // Return null if there's an error
      }
    } else {
      // MetaMask is not installed, handle this case
      console.error('MetaMask is not installed');
      return null;
    }
  }

  // Function to handle account change event
  async function handleAccountChange(accounts) {
    console.log("Account changed:", accounts[0]);
    // Store the connected address in session storage
    sessionStorage.setItem('connectedAddress', accounts[0]);

    // Update UI
    updateUI();
  }

  // Function to update UI based on MetaMask connection status
  async function updateUI() {
    const isTokenDetailsPage = window.location.pathname.includes('tokenDetails');
    const connectedAddress = sessionStorage.getItem('connectedAddress');
    console.log("session storage", connectedAddress);


    const addressDisplay = document.getElementById("addressDisplay");
    const fundsDisplay = document.getElementById("fundsDisplay");
    const whenConnected = document.getElementById("whenConnected");

    const tokenItems = document.querySelectorAll('.token-item');
    // Update button text and event listener based on connection status
    if (connectedAddress) {
      const shortenedAddress = connectedAddress.substring(0, 7) + "..." + connectedAddress.substring(connectedAddress.length - 5);
      addressDisplay.innerHTML = `<span class="welcome-text"><h3>Welcome</h3></span> <span class="address-text">${shortenedAddress}</span>`;
      console.log("is connected");
      // MetaMask is connected
      connectButton.innerHTML = `<button class="wholeButton">
      <img src="/MetaMask.svg.png" alt="MetaMask Logo" class="metaLogo">
      <span class="connect-text"> Disconnect</span>
        </button>`;
      connectButton.removeEventListener("click", connectToMetaMask);


      const web3 = new Web3(window.ethereum);
     
      const tokenInfos = window.tokenInfos;
      whenConnected.style.display = "block";

      // Clear existing token balances list
      const tokenBalanceList = document.getElementById('tokenBalanceList');
      tokenBalanceList.innerHTML = '';

      const tokenBalances = {}
      var userFundsEligible = 0;
      var userFundsBorrowed = 0;

      for (const tokenAddress in tokenInfos) {

       
        const tokenContract = new web3.eth.Contract(ERC20ABI, tokenAddress);
        console.log("getting owned tokens")
        const balance = await tokenContract.methods.balanceOf(connectedAddress).call();

        tokenBalances[tokenAddress] = balance;

        
        // Check if the token name contains "erc20"
        if (balance > 0) {
          // Add the 'highlighted' class to the token item

          const tokenName = tokenInfos[tokenAddress].name;
          console.log("Token name:", tokenName);
          const tokenLogo = tokenInfos[tokenAddress].logoPath;
          const registryAddress = tokenInfos[tokenAddress].registryAddress;
          const tokenDecimals = tokenInfos[tokenAddress].decimals

          const totalSupply = tokenInfos[tokenAddress].totalSupply;
          const totalFunds = tokenInfos[tokenAddress].totalFunds;
          const userFunds = totalFunds * balance  / totalSupply 

          console.log("script Token address:", tokenAddress," balance", balance, (balance / 10 ** tokenDecimals).toFixed(5))
          userFundsEligible = userFundsEligible + userFunds;

          // console.log("balance:", balance)
          // console.log("Total supply:", totalSupply);
          // console.log("Total funds:", totalFunds);
          // console.log("User funds:", userFunds);
          // console.log("userFundsEligible:", userFundsEligible);

          

          //HARDCODED DECIMALS !!!
            const listItem = document.createElement('li');
            listItem.classList.add('token-item1'); // Add class to the li element
            listItem.innerHTML = `
              <img src="${tokenLogo}" alt="${tokenName} Logo" class="token-logo">
              <span class="token-details-container">
                  <span class="token-name1">${tokenName}</span>
                  <span class="token-balance1">${(balance / 10 ** tokenDecimals).toFixed(5)}</span>
              </span>
              `;


            listItem.addEventListener('click', function () {
              const tokenInfo = tokenInfos[tokenAddress];
              if (tokenInfo) {
                window.location.href = `/tokenDetails?token=${tokenAddress}`;
              }
            });

            tokenBalanceList.appendChild(listItem);
          
            //tokenDetails

            console.log("script1")


        }

        if (tokenItems) {
          tokenItems.forEach(async tokenItem => {
            const tokenAddress = tokenItem.querySelector('.chart-container').id.replace('token-chart-', '');
            const balance = tokenBalances[tokenAddress];
            if (balance > 0) {
              tokenItem.classList.add('highlighted');
            }
          });
        }


      }

      const storedTokenBalances = sessionStorage.getItem('tokenBalances');
      const tokenBalancesString = JSON.stringify(tokenBalances);
      
      if (storedTokenBalances !== tokenBalancesString) {
          sessionStorage.setItem('tokenBalances', tokenBalancesString);
          console.log("Token balances UPDATED:", tokenBalances);
      
          // Reload the page
          window.location.reload();
          console.log("Token balances UPDATED:", tokenBalances);
      }
     
      

      connectButton.addEventListener("click", function () {
        addressDisplay.textContent = "";
        // Clear session storage
        sessionStorage.removeItem('connectedAddress');
        // Update UI
        updateUI();
      });

      let userFundsEligibleForStake = userFundsEligible * 0.9;
      userFundsEligibleForStake = userFundsEligibleForStake / 1000000000
      userFundsEligible = userFundsEligible / 1000000000
      const fundsText = userFundsEligible + " (" +  userFundsEligibleForStake + ") GWEI";
      fundsDisplay.innerHTML = `<span class="welcome-text"><h3>Your unstaked potential</h3></span> <span class="address-text">${fundsText}</span>`;

    } else {
      //window.ethereum.disconnect()
      // MetaMask is disconnected
      console.log("NOT connected");
      connectButton.innerHTML = `<button class="wholeButton">
      <img src="/MetaMask.svg.png" alt="MetaMask Logo" class="metaLogo">
      <span class="connect-text"> Connect</span>
      </button>`;
      connectButton.removeEventListener("click", function () {
        // Clear session storage
        sessionStorage.removeItem('connectedAddress');
        // Update UI
        updateUI();
      });
      connectButton.addEventListener("click", connectToMetaMask);

      if (tokenItems) {
        tokenItems.forEach(async tokenItem => {
          tokenItem.classList.remove('highlighted');
        });
      }

      whenConnected.style.display = "none";
    }

    showButtons()
  }

async function showButtons() {
  const isTokenDetailsPage = window.location.pathname.includes('tokenDetails');
  if (isTokenDetailsPage) {
     
      const connectedAddress = sessionStorage.getItem('connectedAddress');
        const urlParams = new URLSearchParams(window.location.search);
        tokenAddress = urlParams.get('token');
        let tokenBalances = sessionStorage.getItem('tokenBalances');
        tokenBalances = JSON.parse(tokenBalances);
        let balance = tokenBalances[tokenAddress];

        
        const buyButton = document.getElementById("buyButton");
        const fundButton = document.getElementById("fundButton");
        const stakeButton = document.getElementById("stakeButton");
        const unstakeButton = document.getElementById("unstakeButton");
      //  const burnButton = document.getElementById("burnButton");
        if (connectedAddress) {
            // MetaMask is connected
           
            if (balance > 0) {
                // Display all buttons if balance is greater than 0
                buyButton.style.display = "inline";
                fundButton.style.display = "inline";
                stakeButton.style.display = "inline";
                unstakeButton.style.display = "inline";
             //   burnButton.style.display = "inline";
            } else {
                // Display only buy and fund buttons if balance is 0 or less
                buyButton.style.display = "inline";
                fundButton.style.display = "inline";
                stakeButton.style.display = "none";
                unstakeButton.style.display = "none";
             //   burnButton.style.display = "none";
            }
        } else {
            // MetaMask is not connected
            // Display only buy and fund buttons
            buyButton.style.display = "inline";
            fundButton.style.display = "inline";
            stakeButton.style.display = "none";
            unstakeButton.style.display = "none";
         //   burnButton.style.display = "none";
        }
      }
    }

  // Listen for account change events
  if (typeof window.ethereum !== 'undefined') {
    window.ethereum.on('accountsChanged', handleAccountChange);
  }

  


  // const sendEthButton = document.getElementById('sendEthButton');
  // sendEthButton.addEventListener('click', sendEth);
  // async function sendEth() {
  //   console.log("Asdawdw")
  //   // Check if MetaMask is installed
  //   // Connect to MetaMask and get the connected address
  //   const connectedAddress = await connectToMetaMask();

  //   // Check if MetaMask is connected
  //   if (!connectedAddress) {
  //     console.log("MetaMask is not connected.");
  //     return;
  //   }

  //   // Create a Web3 instance using the current provider
  //   const web3 = new Web3(window.ethereum);

  //   const tokenContract = new web3.eth.Contract(ERC20ABI, '0xbd3fd73d44E8FfBE7aA1D6d688E37099A7D61fD3');
  //   const totalFunds = await tokenContract.methods.totalSupply().call();
  //   console.log("Total funds:", totalFunds);
  //   // Send 0.01 ETH to the specified address
  //   const transactionParameters = {
  //     from: connectedAddress,
  //     to: '0x265092ce377d040c36e47d08ccc217e0c9a7f11d',
  //     value: web3.utils.toWei('0.01', 'ether'),
  //   };

  //   // try {
  //   //     // Send the transaction
  //   //     await window.ethereum.request({
  //   //         method: 'eth_sendTransaction',
  //   //         params: [transactionParameters],
  //   //     });

  //   //     console.log("Transaction sent successfully.");
  //   // } catch (error) {
  //   //     console.error("Error sending transaction:", error);
  //   // }
  // }


  console.log("initial updateUI")
  // Update UI initially
  updateUI();



});

