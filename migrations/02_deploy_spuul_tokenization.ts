import { Deployer } from "../utils/deployer";

module.exports = async (deployer: Deployer) => {
  const contract = await deployer.deploy('SpuulTokenization', 'deploy');
  await contract.deployed();
  console.log('contract hash :', contract.codeHash);
};
