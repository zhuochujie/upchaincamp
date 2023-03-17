// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

import "./IScore.sol";

contract Teacher {
    IScore scoreContract;

    function initialization(address scoreAddr) external {
        scoreContract = IScore(scoreAddr);
    }

    function setScore(address student,uint256 score) external {
        scoreContract.setScore(student,score);
    }
}