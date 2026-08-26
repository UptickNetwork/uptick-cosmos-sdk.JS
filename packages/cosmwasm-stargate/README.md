# @uptickjs/cosmwasm-stargate

[![npm version](https://img.shields.io/npm/v/@uptickjs/cosmwasm-stargate.svg)](https://www.npmjs.com/package/@uptickjs/cosmwasm-stargate)

An **SDK to build CosmWasm clients on the Uptick chain**. It is a Uptick-flavoured build
of CosmJS `cosmwasm-stargate`, layered on top of
[`@uptickjs/stargate`](../stargate) and
[`@uptickjs/proto-signing`](../proto-signing), so it inherits the Uptick native message
registry and wallet/signing tooling.

## Key exports

- **Clients** — `CosmWasmClient` (read-only contract queries), `SigningCosmWasmClient`
  (queries + instantiate / execute / migrate), with `SigningCosmWasmClientOptions`
- **Contract data types** — `Code`, `CodeDetails`, `Contract`, `ContractCodeHistoryEntry`
- **Binary helpers** — `fromBinary`, `toBinary`
- **Query extension** — `setupWasmExtension`, `WasmExtension`, `JsonObject`
- **Amino types** — `cosmWasmTypes`

## Example — query and execute a contract

```ts
import { SigningCosmWasmClient } from "@uptickjs/cosmwasm-stargate";
import { DirectSecp256k1HdWallet } from "@uptickjs/proto-signing";

const rpcUrl = "https://rpc.uptick.example"; // replace with your Uptick RPC endpoint
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "uptick" });
const [account] = await wallet.getAccounts();

const client = await SigningCosmWasmClient.connectWithSigner(rpcUrl, wallet);

// Query the contract
const config = await client.queryContractSmart(contractAddress, { get_config: {} });

// Execute the contract
const msg = { mint: { token_id: "1" } };
const fee = "auto";
const result = await client.execute(account.address, contractAddress, msg, fee);
console.log(result.transactionHash);
```

## Build & test

```sh
yarn install
yarn build
yarn test
```

## License

Apache-2.0.
