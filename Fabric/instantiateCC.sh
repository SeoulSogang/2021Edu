export CORE_PEER_LOCALMSPID=“Org0MSP”
export CORE_PEER_MSPCONFIGPATH=/root/testnet/
crypto-config/peerOrganizations/org0/users/Admin@org0/msp
export CORE_PEER_ADDRESS=10.0.1.XX:7051 (Peer 주소)
peer chaincode instantiate -o 10.0.1.XX:7050 -C ch1 -n testnetCC 
-v 1.0 -c ‘{“Args”:[“init”,”a”,”100”,”b”,”200”]}’ (Orderer 주소)
