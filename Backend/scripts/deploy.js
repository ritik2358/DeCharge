const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const ChargerManager = await ethers.getContractFactory("ChargerManager");
  const chargerManager = await ChargerManager.deploy();

  const address = await chargerManager.getAddress();
  console.log("ChargerManager contract address:", address);

  
  const Booking = await ethers.getContractFactory("Booking");
  const booking = await Booking.deploy();

  const address2 = await booking.getAddress();
  console.log("Booking contract address:", address2);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
