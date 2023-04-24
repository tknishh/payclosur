const { ethers } = require("hardhat");

async function main() {
  const UploadFactory = await ethers.getContractFactory("Upload");
  const upload = await UploadFactory.deploy();
  await upload.deployed();
  console.log("Upload deployed to:", upload.address);
}

main()
.then(() => {
  process.exit(0);
})
.catch(error => {
  console.error(error);
  process.exit(1);
});
