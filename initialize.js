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
const web3 = new Web3('http://localhost:7545');

// Sender's address and private key
const senderAddress = '0xcacd4f3dD02c681e5F5810739E98055DfFb78DEB';
const senderPrivateKey = '0xa96b06c3b1cb29b8d8675ef3f1887c99d0d8d312afb8dd663ae743666462d103';

const recipient = '0xfD329dC185f92763B53e62EDe62569d8125936F8'

//token4 0x3862a08dd14EAA5Ca22E1f1b897C23a36A866697

// Read deployed addresses from file
const [cdtMainAddress, token1Address, token2Address, token3Address , token4Address , token5Address , token6Address , token7Address , token8Address , token9Address , token10Address] = readDeployedAddresses();
console.log("Deployed contracts found at:");
console.log("cdtMainAddress", cdtMainAddress);
console.log("token1Address", token1Address);
console.log("token2Address", token2Address);
console.log("token3Address", token3Address);
console.log("token4Address", token4Address);
console.log("token5Address", token5Address);
console.log("token6Address", token6Address);
console.log("token7Address", token7Address);
console.log("token8Address", token8Address);
console.log("token9Address", token9Address);
console.log("token00Address", token10Address);

initialize()

async function initialize(){
    await registerERC20Token(token1Address);
    await registerERC20Token(token2Address);
    await registerERC20Token(token3Address);
   // await registerERC20Token(token4Address);
  //  await registerERC20Token(token10Address);
    
    await approveERC20Token(token1Address);
    await approveERC20Token(token2Address);
    await approveERC20Token(token3Address);
  //  await approveERC20Token(token4Address);
 //   await approveERC20Token(token10Address);

    await fundRegistry(token3Address, "1");
    await fundRegistry(token2Address, "3");
    await fundRegistry(token3Address, "3");
    await fundRegistry(token1Address, "2");
   // await fundRegistry(token4Address, "1");
    await fundRegistry(token2Address, "2");
    await fundRegistry(token2Address, "2");
    await fundRegistry(token1Address, "1");
   // await fundRegistry(token4Address, "4");
   // await fundRegistry(token4Address, "1");
   // await fundRegistry(token10Address, "1");
    await fundRegistry(token1Address, "1");
    await fundRegistry(token1Address, "2");
  //  await fundRegistry(token10Address, "2");
    await fundRegistry(token2Address, "1");
    await fundRegistry(token3Address, "2");
    await fundRegistry(token1Address, "2");
    await fundRegistry(token1Address, "2");
   // await fundRegistry(token4Address, "3");
    await fundRegistry(token2Address, "2");
  //  await fundRegistry(token10Address, "3");
    await fundRegistry(token3Address, "4");
  //  await fundRegistry(token10Address, "1");
 

    await transferERC20Token( token2Address,recipient, 100000000)
    await transferERC20Token( token3Address,recipient, 50000000)
    await transferERC20Token( token4Address,recipient, 100000000)
}

function readDeployedAddresses() {
    const filePath = path.join(__dirname, '../cdtsol/migrations/deployed_addresses.txt');
    const data = fs.readFileSync(filePath, 'utf8');
    const addresses = data.split('\n').map(line => line.split(' ').pop());
    return addresses;
  }

async function approveERC20Token(tokenAddress) {
    const cdtMainContract = new web3.eth.Contract(cdtMainABI, cdtMainAddress);
    const cdtRegistryAddress = await cdtMainContract.methods.tokenRegistry(tokenAddress).call();
    const erc20Contract = new web3.eth.Contract(ERC20ABI, tokenAddress);
    const txObject = erc20Contract.methods.approve(cdtRegistryAddress, "100000000000000000000000");
    const gas = await txObject.estimateGas({ from: senderAddress });
    const txData = txObject.encodeABI();
    const tx = {
        from: senderAddress,
        to: tokenAddress,
        gas: gas,   
        gasPrice: await web3.eth.getGasPrice(),
        data: txData
    };
    const signedTx = await web3.eth.accounts.signTransaction(tx, senderPrivateKey);
    const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Approve Transaction Hash:', txReceipt.transactionHash);
    return txReceipt;
}

async function transferERC20Token(tokenAddress,recipient, amount) {

    const erc20Contract = new web3.eth.Contract(ERC20ABI, tokenAddress);
    const txObject = erc20Contract.methods.transfer(recipient, amount);
    const gas = await txObject.estimateGas({ from: senderAddress });
    const txData = txObject.encodeABI();
    const tx = {
        from: senderAddress,
        to: tokenAddress,
        gas: gas,   
        gasPrice: await web3.eth.getGasPrice(),
        data: txData
    };
    const signedTx = await web3.eth.accounts.signTransaction(tx, senderPrivateKey);
    const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transfer Transaction Hash:', txReceipt.transactionHash);
    return txReceipt;
}

async function registerERC20Token( tokenAddress) {
    const cdtMainContract = new web3.eth.Contract(cdtMainABI, cdtMainAddress);
    const txObject = cdtMainContract.methods.registerToken(tokenAddress);
    const gas = await txObject.estimateGas({ from: senderAddress });
    const nonce = await web3.eth.getTransactionCount(senderAddress);
    const txData = txObject.encodeABI();
    const tx = {
        from: senderAddress,
        to: cdtMainAddress,
        nonce: nonce,
        gas: gas,
        gasPrice: await web3.eth.getGasPrice(),
        data: txData
    };
    const signedTx = await web3.eth.accounts.signTransaction(tx, senderPrivateKey);
    const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Register Transaction Hash:', txReceipt.transactionHash);
    return txReceipt;
}

async function fundRegistry(tokenAddress, amount ) {
    const cdtMainContract = new web3.eth.Contract(cdtMainABI, cdtMainAddress);
    const cdtRegistryAddress = await cdtMainContract.methods.tokenRegistry(tokenAddress).call();
    const cdtRegistryContract = new web3.eth.Contract(cdtTokenRegistryABI, cdtRegistryAddress);
    const txObject = cdtRegistryContract.methods.fund();
    const txData = txObject.encodeABI();
    const value = web3.utils.toWei(amount, 'ether')
    const tx = {
        from: senderAddress,
        to: cdtRegistryAddress,
        gas: "6621975",   
        gasPrice: await web3.eth.getGasPrice(),
        value: value,
        data: txData
    };
    const signedTx = await web3.eth.accounts.signTransaction(tx, senderPrivateKey);
    const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('FUND Transaction Hash:', txReceipt.transactionHash);
    return txReceipt;
}