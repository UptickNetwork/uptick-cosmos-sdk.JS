const {DirectSecp256k1HdWallet, OfflineSigner} = require('@uptsmart/proto-signing')

const {
    SigningStargateClient
// } = require('@uptsmart/stargate');
} = require('../packages/stargate/build');


// const {Coin, createProtobufRpcClient, QueryClient} = require("@uptsmart/stargate");

const {fromHex, toHex} = require("@cosmjs/encoding");
const {keccak256, Secp256k1, Slip10RawIndex, stringToPath} = require("@cosmjs/crypto");


describe('Calculator',  ()=> {

    beforeEach(function () {

    });

    describe('#add()', async () => {
        it('should1', async () => {
            
            try{
                const make60Path=[
                    Slip10RawIndex.hardened(44),
                    Slip10RawIndex.hardened(60),
                    Slip10RawIndex.hardened(0),
                    Slip10RawIndex.normal(0),
                    Slip10RawIndex.normal(0),
                ];

                let mnemonic='angry twist harsh drastic left brass behave host shove marriage fall update business leg direct reward object ugly security warm tuna model broccoli choice';
                const wallet = await  DirectSecp256k1HdWallet.fromMnemonic(mnemonic,{
                    "hdPaths": [make60Path],
                    "prefix": "uptick",
                })

                const accounts = await wallet.getAccounts()
                const rpcEndpoint = 'http://127.0.0.1:26657/'
                const client = await SigningStargateClient.connectWithSigner(
                    rpcEndpoint,
                    wallet
                )
                const recipient = "uptick10xj8tc3vx3eqd7mhffmgruakvjckw0nepklgw9";
                const amount = {
                    denom: "auptick",
                    amount: "1000000000000000000",
                };
                const fee = {
                    amount: [
                        {
                            denom: "auptick",
                            amount: "100000000000000000",
                        },
                    ],
                    gas: "6000000", // 180k
                };

                let uptickAddress = accounts[0].address
                console.log("uptickAddress",uptickAddress);
                let evmAddress = '0x250bFB91EDD6E9dea59550A25026997A79de9537'
                let tokenId ='uptickaade5b4cf6362497'
                let msg = {
                    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                    value: {
                        fromAddress: accounts[0].address,
                        toAddress: recipient,
                        amount: [amount],
                    },
                };

                // const result = await client.sendMsgsTx(uptickAddress,[msg],fee,"")
                // console.log(result)

                const result = await client.sendTokens(accounts[0].address, recipient, [amount],fee, "");
                // const result = await client.vote(accounts[0].address, 16, VoteOption.VOTE_OPTION_YES,fee,'');

                console.log(result)
                console.log("transactionHash=="+result.transactionHash)

            }catch(error){
                console.error(error)
            }
          
        });



    });


});
