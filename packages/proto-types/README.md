# @uptickjs/proto-types

[![npm version](https://img.shields.io/npm/v/@uptickjs/proto-types.svg)](https://www.npmjs.com/package/@uptickjs/proto-types)

Generated **TypeScript protobuf types for the Uptick chain**, produced from the chain's
`proto/` definitions with `protoc` (CommonJS + binary encoding, plus grpc-web text stubs).

This is the low-level data layer consumed by
[`@uptickjs/proto-signing`](../proto-signing) and
[`@uptickjs/stargate`](../stargate). In most cases you should reach for the higher-level
SDKs instead of importing these types directly.

## What is included

- **Base types** — a snapshot of the protos the Uptick chain depends on: `cosmos`,
  `cosmos_proto`, `ibc`, `tendermint`, `gogoproto`, `google`, `confio`, `ethermint`,
  `irismod`.
- **Uptick chain-specific modules** under `src/uptick/`:

  | Module       | Version  | Purpose                                            |
  | ------------ | -------- | -------------------------------------------------- |
  | `collection` | `v1`     | Uptick NFT collection denom issue / mint / transfer |
  | `nft`        | `v1beta1`| Cross-chain NFT transfer and `MsgSend`             |
  | `erc721`     | `v1`     | ERC-721 ↔ Cosmos NFT bridge messages               |
  | `cw721`      | `v1`     | CW-721 ↔ Cosmos NFT bridge messages                |
  | `evm_ibc`    | `v1`     | EVM ↔ IBC `MsgTransferERC721` bridge message       |

  > The `erc20` module was removed in the chain upgrade; only the modules listed above
  > remain under `src/uptick/`.

## Usage

```ts
import * as nftTx from "@uptickjs/proto-types/src/uptick/nft/v1beta1/tx_pb";

const msg = new nftTx.MsgSend();
msg.setClassId("uptick-nft-class-1");
msg.setId("1");
msg.setSender("uptick1sender...");
msg.setReceiver("uptick1receiver...");

const bytes = msg.serializeBinary();
const restored = nftTx.MsgSend.deserializeBinary(bytes);
console.log(restored.getReceiver());
```

## Regenerating the types

The `.proto` sources live in `../../proto/` (kept in sync with the Uptick chain). To
regenerate the `src/` output:

```sh
bash ../../scripts/protocgen.sh
```

## License

Apache-2.0.
