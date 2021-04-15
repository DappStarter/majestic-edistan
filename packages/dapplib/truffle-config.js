require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remain prosper harvest option blue tail'; 
let testAccounts = [
"0x643ddc61eb66b99c1c9c7d7286ab0c10c4255c56d688cfd95f8d7c4f2fef186f",
"0x22c83f0675e636a921790f8894f98c882311410aced8c31aa86e46843adf997b",
"0x134aae924925f5949d70d13bd8a76c4e3cb31859e1b997296e112656ea29b862",
"0x0409667a05e72aa0c1f53d10942bdd22a387341ac44900c68a5f4af02f03f1a5",
"0xce31ad717665c88883053767dcfae292a78ad50fd6f63c1d92cd4cc825972480",
"0x0e9a521f5d9079d6f426d3342f4675988298d7d9956d0f8f68636acec193d308",
"0x82b2b7add23f7eb55d1270a76a50cf7d6c9bc4cee2a39bc8c5be6aedab7d3d68",
"0x6f25b5e6eed1d8a92bda8bdc140350381737fcd38656a503a6888307f5094e0d",
"0xdbd1792bd34add82d5cf0e78f488ccb72f8bd9fc40e9e54ad9c2d9a051c311a6",
"0x40e0e33d57c412b31e1bbf604f7e7a5ecdd19699f2e009bed2e020fd1bb9c2e8"
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
