const { expect } = require("chai");
const { it } = require("mocha");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Bank", function () {
    let bank;
    let user
    before(async () => {
        const Bank = await hre.ethers.getContractFactory("Bank");
        bank = await Bank.deploy();
        await bank.deployed();
        [user] = await ethers.getSigners();
    })

    it("存入ETH", async function () {
        const tx = {
            to: bank.address,
            value: ethers.utils.parseEther("1")
        }

        const receipt = await user.sendTransaction(tx);
        await receipt.wait()
        
        expect(await bank.balanceOf(user.address)).equal(ethers.utils.parseEther("1"))
    })

    it("取出ETH",async function() {
        let tx = await bank.withdraw();
        await tx.wait()
        expect(await bank.balanceOf(user.address)).equal(ethers.utils.parseEther("0"))
    })

});
