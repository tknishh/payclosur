const Web3 = require('web3');

// Replace YOUR-PROJECT-ID with your Infura project ID
const web3 = new Web3('https://mainnet.infura.io/v3/811eeab4d3314826b98ee79673ef1b63');

// Test the connection by getting the latest block number
web3.eth.getBlockNumber().then(console.log);
