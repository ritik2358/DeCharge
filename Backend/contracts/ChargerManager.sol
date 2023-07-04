// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ChargerManager {
  struct Charger {
    string name;
    string location;
    uint256 price;
    string description;
  }

  mapping(uint256 => Charger) public chargers;
  uint256 public chargerCount;

  function addCharger(
    string memory name,
    string memory location,
    uint256 price,
    string memory description
  ) public {
    uint256 id = chargerCount;
    chargers[id] = Charger(name, location, price, description);
    chargerCount++;
  }

  function getChargerCount() public view returns (uint256) {
    return chargerCount;
  }

  function getChargerDetails(uint256 id) public view returns (Charger memory) {
    return chargers[id];
  }
}
