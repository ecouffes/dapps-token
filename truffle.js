// mnemonic（ニーモニック）からウォレットを作成し、そのウォレットのアカウントを使ってプログラム上から簡単にトランザクションを発行できる仕組み
var HDWalletProvider = require('truffle-hdwallet-provider');
// metamaskのニーモニック
var mnemonic = process.env.ROPSTEN_MNEMONIC;
// infraのアクセストークン
var accessToken = process.env.INFURA_ACCESS_TOKEN;

module.exports = {

    // truffle コマンド実行時のオプションになる箇所
    // truffle migrate --network development
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "10"
        },
        ropsten: {
            provider: function () {
                return new HDWalletProvider(
                    mnemonic,
                    "https://ropsten.infura.io/" + accessToken
                );
            },
            network_id: 3,
            // テストネットにデプロイするのに必要なgas
            gas: 500000
        }
    }
};