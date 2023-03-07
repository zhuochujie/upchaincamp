const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("Counter", function () {
  async function deployCounterFixture() {

    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return counter;
  }

  it("默认number等于0", async () => {
    const counter = await loadFixture(deployCounterFixture);
    expect(await counter.number()).to.equal(0);
  });

  it("测试add方法", async () => {
    const counter = await loadFixture(deployCounterFixture);

    await counter.add(100);
    expect(await counter.number()).to.equal(100);

    await counter.add(50);
    expect(await counter.number()).to.equal(150);
  })
});
