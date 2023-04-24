require("@nomiclabs/hardhat-waffle");
const { privateKeys } = require("./keys.json");

module.exports = {
  solidity: "0.8.17",
  networks: {
    fantom: {
      url: "https://rpc.ankr.com/fantom_testnet",
      accounts: privateKeys,
    },
  },
};
