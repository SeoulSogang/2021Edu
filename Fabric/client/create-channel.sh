CORE_PEER_LOCALMSPID="Org0MSP" \
CORE_PEER_TLS_ROOTCERT_FILE=/root/testnet/crypto-config/peerOrganizations/org0/peers/peer0.org0/tls/ca.crt \
CORE_PEER_MSPCONFIGPATH=/root/testnet/crypto-config/peerOrganizations/org0/users/Admin@org0/msp \
CORE_PEER_ADDRESS=10.0.1.41:7051 \
peer channel create -o 10.0.1.61:7050 -c ch1 -f ch1.tx
