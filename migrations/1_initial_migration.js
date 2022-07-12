// const ERC20Token = artifacts.require("ERC20Token");

// module.exports = function (deployer) {
//   deployer.deploy(ERC20Token);
// };


const ERC20Token = artifacts.require('ERC20Token');


module.exports = async function (deployer) {
  

  await deployer.deploy(ERC20Token,"block", "BLK", 18, 1000 );
};