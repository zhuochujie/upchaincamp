// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint256 public number;

    function add(uint256 x) external {
        number += x;
    }
}
