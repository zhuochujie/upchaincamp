const { expect } = require("chai");
describe("TeacherAndStudent", function () {
    it("setScore",async function() {

        let [user1] = await ethers.getSigners();

        const Teacher = await hre.ethers.getContractFactory("Teacher");
        const teacher = await Teacher.deploy();
        await teacher.deployed();

        const Score = await hre.ethers.getContractFactory("Score");
        const score = await Score.deploy(teacher.address);
        await score.deployed();

        let receipt = await teacher.initialization(score.address);
        await receipt.wait();

        receipt = await teacher.setScore("0x6Ecb1e890b68DFa299DdD4856cf30a3d38867B47",95);
        await receipt.wait();

        let res = await score.getScore("0x6Ecb1e890b68DFa299DdD4856cf30a3d38867B47");
        expect(res).equal(95);

        // receipt = await teacher.setScore("0x6Ecb1e890b68DFa299DdD4856cf30a3d38867B47",150);
        // await receipt.wait();

        await expect(teacher.setScore("0x6Ecb1e890b68DFa299DdD4856cf30a3d38867B47",150)).to.be.revertedWithCustomError(score,"SCORE_MAX_100");

        score.connect(user1);
        await expect(score.setScore("0x6Ecb1e890b68DFa299DdD4856cf30a3d38867B47",90)).to.be.revertedWithCustomError(score,"NOT_TAECHER");
    })
})