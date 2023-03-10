// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint256 public number;
    address owner;

    constructor() {
        owner = msg.sender;
    }

    function count() external {
        require(msg.sender == owner,"only owner");
        number++;
    }
}
