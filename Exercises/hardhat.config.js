import { task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();
  console.log("Accounts:", accounts);
});

export default {};
