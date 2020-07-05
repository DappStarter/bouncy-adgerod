require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name radar muscle uncover include kite army gift'; 
let testAccounts = [
"0xca435ae207bbfc06ad3f0f9986aeba379f2afe61b0a2ce2de645468e304d8edf",
"0xc5fbd98ac665320b8e2720980965a50ecc8ef408156fe5d71d88a80cd2e819ac",
"0xb95fa4d9f514398cc95ef37a1c262e2e293773edb9dfcd1ee3edda4a67eb146e",
"0x5de4b71827d2c860ff96640fad022d7d6dbd6ad9eae83ae17d5299d80fbb7fb6",
"0x7a5da281a6c6902a65bcf6e1925de87c2ceb3f9ba37e5d9c074fcd8c2d153e87",
"0x91328e8ab4b30755599b9a6e4f37d26b340293f485fc95b284963296af8f2e97",
"0xea36710eef470922d7368b97a1386bde638848083c292abeda898dc3ae430807",
"0xa965f8f50fd29c905328117b850c5d39e08d24b5c4c9163c5d0ed4373ec8e009",
"0x5146c8f02f6d9eb8e70d4f4ccc8b76615910b9ffff737a38045a93583f30b5d9",
"0x9626372d83564f555b97ff91c7807021db4d98e581e6d80bd9f4f2d634abfac4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
