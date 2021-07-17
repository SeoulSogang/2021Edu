const Web3 = require('web3');
const WSS = "wss://rinkeby.infura.io/ws/v3/bf3e8b40dbbc43a5874fa764c866151e";
var provider = new Web3.providers.WebsocketProvider(WSS);
var web3 = new Web3(provider);

let ABI = [{
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "string",
            "name": "var_1",
            "type": "string"
        }],
        "name": "E_SetString",
        "type": "event"
    },
    {
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

let CA = "0x1F74c6c3255b32F1442f331b6bc913241B9AEEd4";

let Contract = new web3.eth.Contract(ABI, CA);


Contract.methods.var_1().call().then(data => {
    console.log(`컨트랙트에서 var_1 변수조회: ${data}`)
});

Contract.events.E_SetString().on('data', (event) => {
    console.log('data set: ');
    console.log(event);

    console.log('data extract:');
    console.log(event.returnValues);

    Contract.methods.var_1().call().then(data => {
        console.log(`컨트랙트에서 var_1 다시조회: ${data}`)
    });

})
