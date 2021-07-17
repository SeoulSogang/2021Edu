let Web3 = require("web3");

let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

web3.eth.getBalance(web3.eth.accounts[0], (err, balance) => {
    console.log(balance);
});

web3.eth.getBalance(web3.eth.accounts[10], (err, balance) => {
    console.log(balance);
});