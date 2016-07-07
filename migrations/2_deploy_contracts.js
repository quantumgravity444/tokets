module.exports = function(deployer) {
  deployer.deploy(Tokets);
  deployer.deploy(ToketSales);
  deployer.deploy(EventCreator)
};
