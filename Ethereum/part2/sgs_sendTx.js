let Web3 = require("web3");
var Tx = require("ethereumjs-tx").Transaction;

let web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/491eebc3b9f7462386b94118154d5df0"));

let ABI = [{
        "constant": false,
        "inputs": [{
            "internalType": "string",
            "name": "_var_1",
            "type": "string"
        }],
        "name": "setString",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "var_1",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

let CA = "0x4db5b19654ecd7128e3f74f37efc2d6c2090749e"

let Contract = new web3.eth.Contract(ABI, CA);

let EOA1 = "0x6b3323b9671447bB3B51dCcC8Dd2f189254E0939"

let PRIVATE_KEY = 'YOUR PRIVATE KEY';

let setStringExec = Contract.methods.setString("SGS sending Tx");
let setStringByteCode = setStringExec.encodeABI();

const GWei = 9;
const uint = 10 ** GWei;
const gasLimit = 310000;
const gasPrice = 21 * uint;

web3.eth.getTransactionCount(EOA1, "pending", (err, nonce) => {
    let rawTx = {
        nonce: nonce,
        gasPrice: gasPrice,
        gasLimit: gasLimit,
        data: setStringByteCode,
        from: EOA1,
        to: CA
    };

    let privateKey = new Buffer.from(PRIVATE_KEY, "hex");

    let tx = new Tx(rawTx, { 'chain': 'rinkeby' });
    tx.sign(privateKey);

    let serializedTx = tx.serialize();

    web3.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"), (err, txHash) => {
        console.log(err);
        console.log(txHash);
    })

});
