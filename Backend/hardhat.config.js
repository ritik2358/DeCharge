require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      // Configuration options for the Hardhat Network
    },
    localhost: {
      url: "http://localhost:8545", // URL of your local node
    },
  },
};
