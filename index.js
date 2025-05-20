const express = require('express');
const { Web3 } = require('web3');
const fs = require('fs');
const path = require('path');
const ERC20ABI = require('./abis/ERC20ABI');
const cdtMainABI = require('./abis/cdtMainABI');
const cdtTokenRegistryABI = require('./abis/cdtTokenRegistryABI');
const app = express();
const port = 3000;

const abiDecoder = require('abi-decoder');
const { get } = require('http');
// Connect to the local Ganache node
const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/A8ptSp7H8vI8hdsW0SULkl5u6x8dXSCA');

// const cdtMainAddress = '0x54197C3AB283FdA91fb1d1fB981ED6EE75968aDe';
// const cdtTokenRegistryAddress = '0x123456789ABCDEF';
// const token1Address = '0xAc2919DAd49542FC71fE86bd2C33474c512De8F5';
// const token2Address = '0x3EC0f2A38B6EE873B49e357D77415F891d587954';
// const token3Address = '0x28A95d03564f5980C0e2f5A7e297C0bF63D8653B';

web3.eth.net.isListening()
    .then(() => {
        console.log('Connected to Ethereum node successfully.');
        // You can perform further operations here
    })
    .catch((error) => {
        console.error('Failed to connect to Ethereum node:', error);
    });

// Read deployed addresses from file
const cdtMainAddress = "0x3B0B2f789EB5A7A5D0FC5C4802296c47E315566c"
var tokenRegistryData = {};

var latestBlockNumber = 0;
var transactions = {};

let tokenAttributes = {
  "token1": { crypto: true, guarantee: 1 },
  "token2": { crypto: false, guarantee: 2 },
  "token3": { crypto: true, guarantee: 3 },
  "token3": { crypto: true, guarantee: 3 },
  "erc1": { crypto: true, guarantee: 1 },
  "erc2": { crypto: false, guarantee: 2 },
  "erc3": { crypto: true, guarantee: 3 },
}
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the index page
app.get('/', async (req, res) => {
  const force = req.query.force === 'true';
  await fetchCommonData(force);
  console.log("allRegisteredTokens",allRegisteredTokens)
  console.log("allRegistries",allRegistries)
  console.log("allFundings",allFundings)
  try {
    
    res.render('index', {
      ERC20ABI,

      latestBlockNumberStr: (latestBlockNumber + BigInt("1")).toString(),
      tokenRegistryData,
      tokenAttributes,
      doo: doo
    });
  } catch (error) {
    console.error('Error:', error);
    res.render('error', { message: error.message });
  }
});

// Define a route to render the tokenDetails page
app.get('/tokenDetails', async (req, res) => {
  try {
    await fetchCommonData();
    const tokenAddress = req.query.token;
    const tokenDetails = tokenRegistryData[tokenAddress];

   
    res.render('tokenDetails', {

      tokenRegistryData,
      tokenDetails,
      latestBlockNumberStr: (latestBlockNumber + BigInt("1")).toString(),
     
    });
  } catch (error) {
    console.error('Error:', error);
    res.render('error', { message: error.message });
  }
});

// Define a route to render the tokenDetails page
app.get('/register', async (req, res) => {
  try {
    await fetchCommonData();
    const tokenAddress = req.query.token;
    const tokenDetails = tokenRegistryData[tokenAddress];

    console.log("cdtMainAddress",cdtMainAddress)
    res.render('register', {
      cdtMainAddress,
      tokenRegistryData,
      tokenDetails,
      latestBlockNumberStr: (latestBlockNumber + BigInt("1")).toString(),
     
    });
  } catch (error) {
    console.error('Error:', error);
    res.render('error', { message: error.message });
  }
});

// Define a route to handle the button click
app.get('/click', (req, res) => {
  const text = req.query.text || 'default';
  connectMetamask()
  res.send('Button clicked!');
});


app.get('/faucet/:tokenName', (req, res) => {
  const tokenName = req.params.tokenName.toLowerCase();

  // Find tokenAddress by matching name in tokenRegistryData
  const tokenEntry = Object.values(tokenRegistryData).find(
    token => token.name.toLowerCase() === tokenName
  );

  if (!tokenEntry) {
    return res.status(404).render('error', { message: 'Token not found' });
  }

  const tokenAddress = tokenEntry.tokenAddress;

  res.render('faucet', { tokenName: tokenEntry.name, tokenAddress });
});



// Serve static files from the public directory
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'tokenLogos')));
app.use(express.static(path.join(__dirname, 'tokenDescriptions')));


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Function to read deployed addresses from file
function readDeployedAddresses() {
  const filePath = path.join(__dirname, '../cdtsol/migrations/deployed_addresses.txt');
  const data = fs.readFileSync(filePath, 'utf8');
  const addresses = data.split('\n').map(line => line.split(' ').pop());
  return addresses;
}







async function getFundingsForContract(tokenAddress) {
  const contract = new web3.eth.Contract(cdtTokenRegistryABI, tokenAddress);
  const length = await contract.methods.fundingsAmount().call();
  console.log(`Total entries: ${tokenAddress}, ${length}`);

  const entries = [];

  // Step 1: Fetch all entries with block numbers
  for (let i = 0; i < length; i++) {
    const entry = await contract.methods.fundingEntries(i).call();
    entries.push({
      blockNumber: parseInt(entry.blockNumber),
      amount: entry.amount,
    });
  }
  console.log(entries)
  // Step 2: Use latest block as reference
  const latestBlock = await web3.eth.getBlock("latest");
  const latestBlockNumber = Number(latestBlock.number);
  const latestTimestamp = Number(latestBlock.timestamp);
  const avgBlockTime = 12; // average seconds per block on Ethereum

  // Step 3: Group entries by day
  const groupedByDay = new Map();

  for (let entry of entries) {
    const blocksAgo = latestBlockNumber - Number(entry.blockNumber);
    const estimatedTimestamp = latestTimestamp - blocksAgo * avgBlockTime;

    // Get date string in YYYY-MM-DD format
    const dateObj = new Date(estimatedTimestamp * 1000);
    const dateStr = dateObj.toISOString().slice(0, 10); // YYYY-MM-DD format

    // Accumulate funds for the same day
    if (!groupedByDay.has(dateStr)) {
      groupedByDay.set(dateStr, 0);
    }
    groupedByDay.set(dateStr, groupedByDay.get(dateStr) + Number(entry.amount));
  }

  // Step 4: Calculate cumulative sums and prepare data
  const fundings = [];

  const uniqueDates = Array.from(groupedByDay.keys()).sort();
  
  for (const date of uniqueDates) {
    const dailySum = groupedByDay.get(date);
  
    fundings.push({
      date,
      value: dailySum
    });
  }

  console.log("funding with dates", fundings);
  return fundings;
}

function getFundingSums(fundings) {
  console.log("fundings", fundings);
  try {
    const fundingSums = [];
    let cumulativeSum = 0;

    for (const { date, value } of fundings) {
      cumulativeSum += Number(value);
      fundingSums.push({ date, value: cumulativeSum });
    }

    console.log("funding sums with dates", fundingSums);
    return fundingSums;
  } catch (error) {
    console.error('Error calculating funding sums:', error);
    throw error;
  }
}



function getTokenBuyLink(tokenName) {
  // Map token names to their corresponding logo paths
  const buyLinks = {
    altindex1: 'faucet',
    agentone: 'faucet',
    swapx: 'faucet',
    venturedao: 'faucet',
    yieldplus: 'faucet',
   
    // Add more mappings as needed
  };
  return buyLinks[tokenName.toLowerCase()] || 'no buy link provided';
}

function getTokenLogoPath(tokenName) {
  // Map token names to their corresponding logo paths
  const logoPaths = {
    token1: 't1.png',
    token2: 't2.png',
    token3: 't3.png',
    ai_agent_one: 't4.png',
    erc1: 't1.png',
    erc2: 't2.png',
    erc3: 't3.png',
    glebtoken: 'gl.png',
    // Add more mappings as needed
    agentone: '/agentone.png',
     swapx: '/swapx.png',
     venturedao: '/venturedao.png',
     yieldplus: '/yieldplus.png',

  };
  return logoPaths[tokenName.toLowerCase()] || 'nologo.png';
}

function getTokenAreaIcon(tokenName) {
  // Map token names to their corresponding logo paths
  const logoPaths = {
    token1: '/cr.png',
    token2: '/rl.png',
    token3: '/cr.png',
    ai_agent_one: '/ai.png',
    erc1: '/cr.png',
    erc2: '/rl.png',
    erc3: '/cr.png',
    glebtoken: '/cr.png',
    // Add more mappings as needed
    agentone: '/cr.png',
    swapx: '/cr.png',
    venturedao: '/cr.png',
    yieldplus: '/cr.png',

  };
  return logoPaths[tokenName.toLowerCase()] || 'nologo.png';
}
function getTokenPromiseIcon(tokenName) {
  // Map token names to their corresponding logo paths
  const logoPaths = {
    token1: 'smart.png',
    token2: 'legal.png',
    token3: 'smart.png',
    ai_agent_one: 'smart.png',
    erc1: 'smart.png',
    erc2: 'legal.png',
    erc3: 'pinky.png',
    glebtoken: 'smart.png',
    // Add more mappings as needed
    agentone: 'smart.png',
    swapx: 'pinky.png',
    venturedao: 'legal.png',
    yieldplus: 'smart.png',
  };
  return logoPaths[tokenName.toLowerCase()] || 'nologo.png';
}

function getTokenDescription(tokenName) {
  // Map token names to their corresponding description files
  const descriptionFiles = {
    token1: './tokenDescriptions/t1.txt',
    token2: './tokenDescriptions/t2.txt',
    token3: './tokenDescriptions/t3.txt',
    erc1: './tokenDescriptions/t1.txt',
    erc2: './tokenDescriptions/t2.txt',
    erc3: './tokenDescriptions/t3.txt',
    glebtoken: './tokenDescriptions/glebtoken.txt',
    // Add more mappings as needed
    agentone: './tokenDescriptions/agentone.txt',
    swapx: './tokenDescriptions/swapx.txt',
    venturedao: './tokenDescriptions/venturedao.txt',
    yieldplus: './tokenDescriptions/yieldplus.txt',
  };
  console.log(tokenName.toLowerCase())
  const filePath = descriptionFiles[tokenName.toLowerCase()];
  console.log(filePath)
  if (filePath) {
    // Read the description from the file synchronously
    try {
      return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
      console.error('Error reading description file:', error);
      return 'Description not available1';
    }
  } else {
    return 'Description not available';
  }
}

const bannedTokens = [
  '0xafF570058D45DeBBf9885d925740F5eFEfC068cc'
];

function removeBannedTokens(registeredTokens, bannedTokens) {
  const indicesToRemove = [];

  // Collect indices of banned tokens in registeredTokens[0]
  registeredTokens['0'].forEach((token, index) => {
    if (bannedTokens.includes(token)) {
      indicesToRemove.push(index);
    }
  });

  // Remove from the end to preserve correct indices
  indicesToRemove.sort((a, b) => b - a).forEach(index => {
    registeredTokens['0'].splice(index, 1);
    registeredTokens['1'].splice(index, 1);
  });

  return registeredTokens;
}

let cacheTimestamp = 0;
const CACHE_TTL_MS = 60* 60 * 1000; // 60 minutes

async function fetchCommonData(forceRefresh = false) {
  const now = Date.now();

  if (!forceRefresh && (now - cacheTimestamp < CACHE_TTL_MS) && Object.keys(tokenRegistryData).length > 0) {
    console.log('Using cached token data.');
    return;
  }

  console.log('Fetching data from Ethereum network...');
  const ganacheIsListening = await web3.eth.net.isListening();
  if (!ganacheIsListening) throw new Error('Connection to Ganache is not working.');

  const cdtMain = new web3.eth.Contract(cdtMainABI, cdtMainAddress);
  let registeredTokens = await cdtMain.methods.getAllTokenRegistryEntries().call();
  registeredTokens = removeBannedTokens(registeredTokens, bannedTokens);

  latestBlockNumber = await web3.eth.getBlockNumber();
  allRegisteredTokens = [];
  allRegistries = [];
  allFundings = [];

  for (let i = 0; i < registeredTokens[0].length; i++) {
    const tokenAddress = registeredTokens[0][i];
    const registryAddress = registeredTokens[1][i];

    // Skip if we already have data for this token
    if (tokenRegistryData[tokenAddress]) {
      continue;
    }

    const tokenContract = new web3.eth.Contract(ERC20ABI, tokenAddress);
    const [name, symbol, totalSupply, decimals] = await Promise.all([
      tokenContract.methods.name().call(),
      tokenContract.methods.symbol().call(),
      tokenContract.methods.totalSupply().call(),
      tokenContract.methods.decimals().call()
    ]);

    const fundings = await getFundingsForContract(registryAddress);
    const fundingSums = getFundingSums(fundings);

    const registryContract = new web3.eth.Contract(cdtTokenRegistryABI, registryAddress);
    let totalFunds = await registryContract.methods.getTotalFunds().call();
    totalFunds = (Number(totalFunds) / 10 ** 18).toFixed(4);

    tokenRegistryData[tokenAddress] = {
      tokenAddress,
      registryAddress,
      name,
      symbol,
      decimals,
      totalSupply: totalSupply.toString(),
      totalFunds: totalFunds.toString(),
      fundingSums,
      fundings,
      logoPath: getTokenLogoPath(name),
      description: getTokenDescription(name),
      areaIconPath: getTokenAreaIcon(name),
      promiseIconPath: getTokenPromiseIcon(name),
      buyLink: getTokenBuyLink(name)
    };
  }

  cacheTimestamp = now;
  console.log('Token data refreshed and cached.');
}


function doo(string)  {
  console.log("doo fn",string)
  
}

module.exports = tokenRegistryData;
// app.js


