export CORE_PEER_LOCALMSPID=“Org0MSP”
export CORE_PEER_MSPCONFIGPATH=/root/testnet/crypto-config/peerOrganizations/org0/users/Admin@org0/msp
export CORE_PEER_ADDRESS=10.0.1.XX:7051 (Peer 주소)
peer chaincode list -C ch1 --instantiated
