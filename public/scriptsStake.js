const ERC20ABIa = [
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

const cdtTokenRegistryABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_cdtMainAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_stockTokenAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "fundsAdded",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newFunds",
        "type": "uint256"
      }
    ],
    "name": "FundsUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newBorrowAmount",
        "type": "uint256"
      }
    ],
    "name": "Restaked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "stakedAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newBorrow",
        "type": "uint256"
      }
    ],
    "name": "Staked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "stakedAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newBorrow",
        "type": "uint256"
      }
    ],
    "name": "StakedAndRestaked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "burner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "burnedAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "paidAmount",
        "type": "uint256"
      }
    ],
    "name": "TokensBurned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "unstakedAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "withdrawnAmount",
        "type": "uint256"
      }
    ],
    "name": "Unstaked",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "alreadyBorrowedHolder",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "alreadyBorrowedTotal",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "alreadyStakedHolder",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "alreadyStakedTotal",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stockTokenAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  },
  {
    "inputs": [],
    "name": "getTotalFunds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fund",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "stake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "calculateRestake",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unstakeByBorrowedAmount",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "staker",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "calculateUnstake",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]


document.addEventListener('DOMContentLoaded', async function () {
  console.log("scriptsStake.js loaded");

  const tokenDetails = window.tokenDetails;

  console.log(tokenDetails)
  const stakeExecuteButton = document.getElementById("stake-execute-button");

  // Set initial values for total balance, already staked, and already borrowed
  document.getElementById("total-balance").innerText = "0";
  document.getElementById("already-staked").innerText = "0";
  document.getElementById("already-borrowed").innerText = "0";

  // Get stake input element
  const stakeInput = document.getElementById("stake-input");

  // Add event listener to update stake input value in displayData function
  stakeInput.addEventListener("input", () => {
    displayData();
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
  console.log("balanceFromStake", balance,alreadyStaked,tokenDetails.decimals)
  const totalBalance = parseInt(balance) 
  const alreadyBorrowedFormatted = (alreadyBorrowed / 10 ** 9).toFixed(5);
  const alreadyStakedFormatted = (alreadyStaked / 10 ** tokenDetails.decimals).toFixed(5);
  const totalBalanceFormatted = (totalBalance / 10 ** tokenDetails.decimals).toFixed(5);
  const balanceFormatted = (balance / 10 ** tokenDetails.decimals).toFixed(5);
  
  async function displayData() {

    document.getElementById("total-balance").innerText = totalBalanceFormatted;
    document.getElementById("already-staked").innerText = alreadyStakedFormatted;
    document.getElementById("already-borrowed").innerText = alreadyBorrowedFormatted;


    var stakeAmount = parseFloat(stakeInput.value).toFixed(5);


    let stakeAmountString = BigInt(stakeAmount * 10 ** 5) *  BigInt(10 ** (tokenDetails.decimals-5))
    const newBorrowAmount = await registryContract.methods.calculateRestake(account, stakeAmountString).call();
    console.log("stake scr newBorrowAmount", newBorrowAmount)
    const newBorrowAmountFormatted = (newBorrowAmount / 10 ** 9).toFixed(5);
    
    document.getElementById("restake-amount-display").innerText = newBorrowAmountFormatted;
  }

  stakeInput.addEventListener("input", function () {
    var stakeAmount = parseFloat(stakeInput.value);
    const stakeAmountString = stakeAmount.toString();
    const decimalIndex = stakeAmountString.indexOf('.');

    if (decimalIndex !== -1 && stakeAmountString.substring(decimalIndex + 1).length > 5) {
      stakeInput.value = stakeAmount.toFixed(5); // Truncate to 5 decimal places
    }
    stakeAmount = parseFloat(stakeInput.value);
    if (stakeAmount > balanceFormatted) {
      stakeInput.value = balanceFormatted;
    }

    console.log("stake input",stakeInput.value, balanceFormatted)
    displayData();
  });



  stakeExecuteButton.addEventListener("click", async function (event) {
    event.preventDefault();

    // Get the connected account
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

    // Validate the stake amount
    const stakeAmountfloat =parseFloat(stakeInput.value)
    const stakeAmount = BigInt(stakeAmountfloat * 10 ** 5) *  BigInt(10 ** (tokenDetails.decimals-5))
    console.log("stakeAmount", stakeAmount)
    if (stakeAmount < BigInt(0)) {
        alert("Invalid stake amount.");
        return;
    }
    console.log("tokenAddress", tokenDetails.tokenAddress);
    const erc20Contract = new web3.eth.Contract(ERC20ABI, tokenDetails.tokenAddress);

    const allowance = await erc20Contract.methods.allowance(account, registryContractAddress).call();
    console.log("Current allowance:", allowance);
    console.log("stakeAmount", stakeAmount);

    if (parseFloat(allowance) < stakeAmount) {
      try {
          console.log("Approving allowance...");

          // Approve the registry contract to spend the stake amount
          const approveTx = await erc20Contract.methods.approve(registryContractAddress, stakeAmount).send({ from: account });

          console.log("Allowance approved:", approveTx);

          // Proceed to stake after approval
          await stakeTokens();
      } catch (error) {
          console.error("Allowance approval failed:", error);
          alert("Allowance approval failed: " + error.message);
          return;
      }
  } else {
      // If allowance is sufficient, directly stake
      await stakeTokens();
  }

  // Function to perform the staking
  async function stakeTokens() {
      try {
          console.log("Staking tokens...");

          // Send the transaction to the contract
          const receipt = await registryContract.methods.stake(stakeAmount).send({ from: account });

          // Transaction successful
          console.log("Transaction successful:", receipt);
          setTimeout(() => {
              window.location.reload();
          }, 100); // Wait for one second before scrolling

      } catch (error) {
          // Transaction failed
          console.error("Transaction failed:", error);
          alert("Transaction failed: " + error.message);
      }
  }
});


  displayData()
  console.log("scriptsStake.js DONE");
});    