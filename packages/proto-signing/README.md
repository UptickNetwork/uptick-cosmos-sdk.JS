# @uptickjs/proto-signing

[![npm version](https://img.shields.io/npm/v/@uptickjs/proto-signing.svg)](https://www.npmjs.com/package/@uptickjs/proto-signing)

Low-level utilities for **protobuf-based transaction signing** on the Uptick chain
(Cosmos SDK 0.46+), implementing
[ADR-020 — Protobuf transaction encoding](https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-020-protobuf-transaction-encoding.md).

This package is the signing foundation used by
[`@uptickjs/stargate`](../stargate). Use it directly when you need to build, inspect, or
verify raw signed transactions yourself.

## Key exports

- **Wallets** — `DirectSecp256k1Wallet`, `DirectSecp256k1HdWallet`,
  `DirectSecp256k1HdWalletOptions`, `executeKdf`, `KdfConfiguration`
- **Signing primitives** — `makeAuthInfoBytes`, `makeSignBytes`, `makeSignDoc`
- **Decoding** — `decodeTxRaw`, `DecodedTxRaw`
- **Keys** — `encodePubkey`, `decodePubkey`
- **Coins** — `Coin`, `coin`, `coins`, `parseCoins`, `makeCosmoshubPath`

## Example — sign a raw transaction

```ts
import {
  DirectSecp256k1HdWallet,
  makeAuthInfoBytes,
  makeSignBytes,
  makeSignDoc,
} from "@uptickjs/proto-signing";

const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "uptick" });
const [account] = await wallet.getAccounts();

// Build `bodyBytes` (your encoded messages) and `authInfoBytes` first.
const signDoc = makeSignDoc(bodyBytes, authInfoBytes, "uptick_1170-1", accountSequence);
const signBytes = makeSignBytes(signDoc);
const signed = await wallet.signDirect(account.address, signBytes);
```

## Build & test

```sh
yarn install
yarn build
yarn test
```

## License

Apache-2.0.
