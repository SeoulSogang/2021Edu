let Web3 = require("web3");

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.personal.newAccount("tyeun7", (err, createdAddress) => {
    console.log(createdAddress);

    let accounts = web3.eth.accounts
    console.log(accounts);
});