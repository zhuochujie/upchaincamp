// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

interface IScore {
    function setScore(address student,uint256 score) external;
}