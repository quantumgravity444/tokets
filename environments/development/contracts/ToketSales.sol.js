// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"eventCreator","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"newEvent","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"withdrawEth","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"retailPrice","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"buyTokets","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"inputs":[{"name":"_owner","type":"address"},{"name":"_event","type":"address"},{"name":"_price","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_recipient","type":"address"},{"indexed":false,"name":"retailPrice","type":"uint256"}],"name":"Sale","type":"event"}],
    binary: "606060405260405160608061023d83395060c06040525160805160a05160008054600160a060020a03199081168517909155600180549091168317905560028190555050506101eb806100526000396000f3606060405260e060020a60003504634ec82aac8114610047578063691db8f114610059578063a0ef91df1461006b578063e84fff9d1461008b578063ef953a5914610094575b005b610145600054600160a060020a031681565b610145600154600160a060020a031681565b610045600054600160a060020a0390811633919091161461017457610002565b61015860025481565b6101626002546000903411156101dc57600254600160a060020a033316908290349003606082818181858883f150505050505b6101993260018054604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a0385811660048301526024820194909452905186939290921691829163a9059cbb916044808301926020929190829003018188876161da5a03f1156100025750505050919050565b600160a060020a03166060908152602090f35b6060908152602090f35b60408051918252519081900360200190f35b60008054600160a060020a039081169190301631606082818181858883f15050505050565b5060408051348152905132600160a060020a0316917fc6851889326b4ff916523ef06f539b4cf0b81d78fc6e0f97c30e6223d1831990919081900360200190a290565b6002543410156100c75761000256",
    unlinked_binary: "606060405260405160608061023d83395060c06040525160805160a05160008054600160a060020a03199081168517909155600180549091168317905560028190555050506101eb806100526000396000f3606060405260e060020a60003504634ec82aac8114610047578063691db8f114610059578063a0ef91df1461006b578063e84fff9d1461008b578063ef953a5914610094575b005b610145600054600160a060020a031681565b610145600154600160a060020a031681565b610045600054600160a060020a0390811633919091161461017457610002565b61015860025481565b6101626002546000903411156101dc57600254600160a060020a033316908290349003606082818181858883f150505050505b6101993260018054604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a0385811660048301526024820194909452905186939290921691829163a9059cbb916044808301926020929190829003018188876161da5a03f1156100025750505050919050565b600160a060020a03166060908152602090f35b6060908152602090f35b60408051918252519081900360200190f35b60008054600160a060020a039081169190301631606082818181858883f15050505050565b5060408051348152905132600160a060020a0316917fc6851889326b4ff916523ef06f539b4cf0b81d78fc6e0f97c30e6223d1831990919081900360200190a290565b6002543410156100c75761000256",
    address: "0x2dbc18a52002e2e9831b0a97d04b30bd2b40c28f",
    generated_with: "2.0.9",
    contract_name: "ToketSales"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("ToketSales error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("ToketSales error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("ToketSales error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("ToketSales error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.ToketSales = Contract;
  }

})();
