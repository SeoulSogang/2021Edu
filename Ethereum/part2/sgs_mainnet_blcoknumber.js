let Web3 = require("web3");

let web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/bf3e8b40dbbc43a5874fa764c866151e"));

web3.eth.getBlockNumber((err, blockCount) => {
    console.log(blockCount)
});