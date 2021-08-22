ORDERER_GENERAL_LOGLEVEL=info \
ORDERER_GENERAL_LISTENADDRESS=10.0.1.61 \
ORDERER_GENERAL_GENESISMETHOD=file \
ORDERER_GENERAL_GENESISFILE=/root/testnet/crypto-config/ordererOrganizations/ordererorg0/orderers/orderer0.ordererorg0/genesis.block \
ORDERER_GENERAL_LOCALMSPID=OrdererOrg0MSP \
ORDERER_GENERAL_LOCALMSPDIR=/root/testnet/crypto-config/ordererOrganizations/ordererorg0/orderers/orderer0.ordererorg0/msp \
ORDERER_GENERAL_TLS_ENABLED=false \
ORDERER_GENERAL_TLS_PRIVATEKEY=/root/testnet/crypto-config/ordererOrganizations/ordererorg0/orderers/orderer0.ordererorg0/tls/server.key \
ORDERER_GENERAL_TLS_CERTIFICATE=/root/testnet/crypto-config/ordererOrganizations/ordererorg0/orderers/orderer0.ordererorg0/tls/server.crt \
ORDERER_GENERAL_TLS_ROOTCAS=[/root/testnet/crypto-config/ordererOrganizations/ordererorg0/orderers/orderer0.ordererorg0/tls/ca.crt,/root/testnet/crypto-config/peerOrganizations/org0/peers/peer0.org0/tls/ca.crt] \
CONFIGTX_ORDERER_BATCHTIMEOUT=1s \
CONFIGTX_ORDERER_ORDERERTYPE=kafka \
CONFIGTX_ORDERER_KAFKA_BROKERS=[10.0.1.62:9092] \
orderer

