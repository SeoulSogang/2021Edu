export CORE_PEER_LOCALMSPID="Org0MSP"
export CORE_PEER_MSPCONFIGPATH=/root/testnet/crypto-config/peerOrganizations/org0/users/Admin@org0/msp
export CORE_PEER_ADDRESS=10.0.1.41:7051
peer chaincode query -C ch1 -n testnetCC -c '{"Args":["query","a"]}'
