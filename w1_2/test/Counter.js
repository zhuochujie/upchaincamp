const { expect } = require("chai");
const { it } = require("mocha");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Counter", function () {
  async function deployCounterFixture() {

    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return counter;
  }

  it("owner调用counter",async function() {
    const counter = await loadFixture(deployCounterFixture);
    await counter.count()
    expect(await counter.number()).to.equal(1);
  })

  it("其他账户调用counter",async function() {
    const [owner, other] = await ethers.getSigners();

    const counter = await loadFixture(deployCounterFixture);
    await counter.connect(other).count()
    
  })

});
