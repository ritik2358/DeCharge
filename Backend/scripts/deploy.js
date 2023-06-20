const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const ChargingBooking = await ethers.getContractFactory("ChargingBooking");
  const chargingBooking = await ChargingBooking.deploy();

  const address = await chargingBooking.getAddress();
  console.log("ChargingBooking contract address:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
