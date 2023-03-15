const { expect } = require("chai");
const { it } = require("mocha");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Bank", function () {
    async function deploy() {
        const Bank = await hre.ethers.getContractFactory("Bank");
        const bank = await Bank.deploy();
        await bank.deployed();
        let [user] = await ethers.getSigners();
        return{bank,user}
    }

    it("存入ETH", async function () {
        const {bank,user} = await loadFixture(deploy)
        const tx = {
            to: bank.address,
            value: ethers.utils.parseEther("1")
        }

        const receipt = await user.sendTransaction(tx);
        await receipt.wait()
        
        expect(await bank.balanceOf(user.address)).equal(ethers.utils.parseEther("1"))
    })

    it("取出ETH",async function() {
        const {bank,user} = await loadFixture(deploy)
        let tx = await bank.withdraw();
        await tx.wait()
        expect(await bank.balanceOf(user.address)).equal(ethers.utils.parseEther("0"))
    })

});
