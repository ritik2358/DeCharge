// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Booking {
    uint256 transactionCount;

    event Transfer(address from, address ChargerOwner, uint amount, uint256 startTime, uint256 endTime);
  
    struct TransferStruct {
        address sender;
        address ChargerOwner;
        uint amount;
        uint256 startTime;
        uint256 endTime;
    }

    TransferStruct[] transactions;

    function convertTo24HourTime(uint256 time) internal pure returns (uint256) {
         require(time < 24, "Invalid hour");

        return time*3600;
    }

    function startBooking(address payable ChargerOwner, uint amount, uint256 startTime, uint256 endTime) public {
        transactionCount += 1;
        uint256 convertedStartTime = convertTo24HourTime(startTime);
        uint256 convertedEndTime = convertTo24HourTime(endTime);

        transactions.push(TransferStruct(msg.sender, ChargerOwner, amount, convertedStartTime, convertedEndTime));

        emit Transfer(msg.sender, ChargerOwner, amount, convertedStartTime, convertedEndTime);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
