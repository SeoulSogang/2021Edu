let Web3 = require("web3");

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.sendTransaction({
    from: web3.eth.accounts[0],
    to: web3.eth.accounts[10],
    value: 100
}, (err, txHash) => {
    console.log(txHash);
});