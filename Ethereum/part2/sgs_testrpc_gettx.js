let Web3 = require("web3");

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.getTransaction("0xaa668bc5e6f5605327d07c51597af2bbbd04b90837ce7bd5561390637cdd5f8f",
    (err, tx) => {
        console.log(tx);
    });