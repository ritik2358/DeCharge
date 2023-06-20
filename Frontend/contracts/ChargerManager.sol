// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ChargerManager {
  struct Charger {
    string name;
    string location;
    uint256 price;
    string description;
  }

  Charger[] public chargers;

  function addCharger(
    string memory name,
    string memory location,
    uint256 price,
    string memory description
  ) public {
    Charger memory newCharger = Charger(name, location, price, description);
    chargers.push(newCharger);
  }

  function getChargerCount() public view returns (uint256) {
    return chargers.length;
  }

  function getChargerDetails() public view returns (
    Charger[] memory allChargers
  ) {
    return chargers;
  }
}
