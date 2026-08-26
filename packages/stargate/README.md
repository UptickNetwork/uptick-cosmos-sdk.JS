# @uptickjs/stargate

[![npm version](https://img.shields.io/npm/v/@uptickjs/stargate.svg)](https://www.npmjs.com/package/@uptickjs/stargate)

A **client library for the Uptick chain** (Cosmos SDK based, EVM-compatible). It is a
Uptick-flavoured build of CosmJS `stargate`, extended with the chain's native NFT / token
bridge message types so they can be signed and broadcast out of the box.

Built on top of [`@uptickjs/proto-signing`](../proto-signing) and
[`@uptickjs/proto-types`](../proto-types).

## Key exports

- **Clients** — `StargateClient` (read-only queries), `SigningStargateClient` (queries +
  tx signing/broadcast), with `StargateClientOptions` / `SigningStargateClientOptions`
- **Query extensions** (compose via the client constructor):
  `setupAuthExtension`, `setupBankExtension`, `setupStakingExtension`,
  `setupDistributionExtension`, `setupGovExtension`, `setupIbcExtension`,
  `setupMintExtension`, `setupTxExtension`
- **Accounts & fees** — `Account`, `accountFromAny`, `calculateFee`, `GasPrice`, `StdFee`
- **Amino signing** — `AminoTypes`, `AminoConverter`, `AminoTypesOptions`
- **Coins & misc** — `Coin`, `coin`, `coins`, `parseCoins`, `makeCosmoshubPath`,
  `makeMultisignedTx`, `logs`

## Uptick-specific message registry

`@uptickjs/stargate` ships a `defaultRegistryTypes` that already includes the Uptick
native modules (no extra wiring needed):

| Type URL                         | Message              | Module       |
| -------------------------------- | -------------------- | ------------ |
| `/uptick.collection.v1.Msg*`     | Issue / Mint / Transfer NFT | `collection` |
| `/uptick.nft.v1beta1.MsgSend`    | Send NFT             | `nft`        |
| `/uptick.erc721.v1.Msg*`         | ERC-721 ↔ NFT bridge | `erc721`     |
| `/uptick.cw721.v1.Msg*`          | CW-721 ↔ NFT bridge  | `cw721`      |
| `/uptick.evm_ibc.v1.MsgTransferERC721` | EVM ↔ IBC NFT transfer | `evm_ibc` |

> The `erc20` module was removed in the chain upgrade and is no longer registered.

## Example — send a bank transfer

```ts
import { SigningStargateClient, GasPrice } from "@uptickjs/stargate";
import { DirectSecp256k1HdWallet } from "@uptickjs/proto-signing";

const rpcUrl = "https://rpc.uptick.example"; // replace with your Uptick RPC endpoint
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "uptick" });
const [account] = await wallet.getAccounts();

const client = await SigningStargateClient.connectWithSigner(rpcUrl, wallet, {
  gasPrice: GasPrice.fromString("0.025uuptick"), // confirm the chain's fee denom
});

const amount = { denom: "uuptick", amount: "1000" };
const fee = { amount: [amount], gas: "80000" };
const result = await client.sendTokens(account.address, "uptick1receiver...", [amount], fee, "hi");
console.log(result.transactionHash);
```

Adjust `chainId`/fee denom to your target Uptick network (e.g. `uptick_1170-1`).

## Build & test

```sh
yarn install
yarn build
yarn test            # builds (unless SKIP_BUILD set) then runs node tests
```

## License

Apache-2.0.
