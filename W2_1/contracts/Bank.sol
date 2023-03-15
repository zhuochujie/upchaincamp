// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Bank {
    mapping (address => uint256) balance;

    function balanceOf(address _user) external view returns (uint256) {
        return balance[_user];
    }
    
    
    function withdraw() external {
        balance[msg.sender] = 0;
        payable(msg.sender).transfer(balance[msg.sender]);
    }

    receive() external payable {
        balance[msg.sender] += msg.value; 
    }
}