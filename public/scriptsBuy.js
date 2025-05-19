const faucetABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "total",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "perUser",
				"type": "uint256"
			}
		],
		"name": "FaucetFilled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TokensDispensed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "claims",
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
				"name": "erc20addr",
				"type": "address"
			}
		],
		"name": "faucet",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "faucets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "faucetAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "initialized",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "erc20addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "faucetAmount",
				"type": "uint256"
			}
		],
		"name": "fillFaucet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


document.addEventListener('DOMContentLoaded', async () => {
    const buyLink = document.getElementById('buyLink');
    const tokenName = window.tokenDetails.name;
    const tokenAddress = window.tokenDetails.tokenAddress;
    const buyLinkLink = window.tokenDetails.buyLink;
    const faucetAddress = "0x2b719150fd1D13D712c9fA26c0118Abd2F859b26"
  
    // Case 1: Link not provided
    if (!buyLinkLink) {
      buyLink.innerText = `${tokenName} buy link not provided`;
      buyLink.style.cursor = 'default';
      buyLink.style.color = 'gray';
      return;
    }
  
    // Case 2: Faucet request
    if (buyLinkLink === 'faucet') {
      buyLink.innerText = `Get ${tokenName} Tokens`;
      buyLink.style.cursor = 'pointer';
  
      console.log("fauce",tokenAddress,  faucetAddress)
      buyLink.addEventListener('click', async () => {
        if (typeof window.ethereum === 'undefined') {
          alert('Please install MetaMask to use this feature.');
          return;
        }
  
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];
          const web3 = new Web3(window.ethereum);
  
          const faucetContract = new web3.eth.Contract(faucetABI, faucetAddress);
  
          console.log(`Calling faucet for token: ${tokenAddress}`);
  
          await faucetContract.methods.faucet(tokenAddress).send({ from: account });
  
          alert(`${tokenName} tokens requested successfully!`);
		  window.location.href = '/';
        } catch (err) {
          console.error('Faucet request failed:', err);
          alert('Faucet request failed: ' + (err.message || err));
        }
      });
  
      return;
    }
  
    // Case 3: Valid external link
    buyLink.innerText = buyLinkLink;
    buyLink.style.cursor = 'pointer';
    buyLink.addEventListener('click', () => {
      window.location.href = buyLinkLink;
    });
  });
  
  