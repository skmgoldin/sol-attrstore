/* global artifacts */

const AttributeStore = artifacts.require('./AttributeStore.sol');

module.exports = function (deployer) {
  deployer.deploy(AttributeStore);
};
