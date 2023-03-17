// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

error NOT_TAECHER();
error SCORE_MAX_100();

contract Score {
    mapping (address => uint) scores;
    address public teacher;
    constructor(address teacherAddr) {
        teacher = teacherAddr;
    }

    modifier onlyTeacher() {
        if (msg.sender != teacher) revert NOT_TAECHER();
        _;
    }

    function setScore(address student,uint256 score) external onlyTeacher {
        if (score > 100) revert SCORE_MAX_100();
        scores[student] = score;
    }

    function getScore(address student) external view returns (uint256) {
        return scores[student];
    }
}