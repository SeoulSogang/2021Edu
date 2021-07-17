let Web3 = require('web3');
const Tx = require("ethereumjs-tx");
let web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/491eebc3b9f7462386b94118154d5df0'));
let ABI = [{
        "constant": false,
        "inputs": [{
            "internalType": "string",
            "name": "_var_1",
            "type": "string"
        }],
        "name": "setString",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "var_1",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
let CA = "0x4db5b19654ecd7128e3f74f37efc2d6c2090749e";
let Contract = new web3.eth.Contract(ABI, CA);
Contract.methods.var_1().call().then(data => {
    console.log(data)
});
