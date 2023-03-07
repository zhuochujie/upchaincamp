const hre = require("hardhat");

async function main() {
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  console.log(`交易hash:${counter.deployTransaction.hash}`)

  await counter.deployed();

  console.log(`合约地址:${counter.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
