uptick-uptick-sdk.js is the Swiss Army knife to power JavaScript based client solutions
ranging from Web apps/explorers over browser extensions to server-side clients
like faucets/scrapers in the Cosmos ecosystem.

"Cosm" is short for Cosmos and "JS" is short for _runs everywhere_ – we actually
develop in TypeScript.

## Documentation

[Here is a list of examples][guided tour] using the Stargate package for use
with [Cosmos SDK 0.41] applications (like [gaia 4]). Take a look at the wiki
page,
["What can uptick-uptick-sdk.js do for me?"](https://github.com/UptickNetwork/uptick-uptick-sdk.js/wiki/What-can-uptick-uptick-sdk.js-do-for-me%3F)
and various tests
([ex](https://github.com/UptickNetwork/uptick-uptick-sdk.js/blob/main/packages/stargate/src/signingstargateclient.spec.ts))
for more example usage of the packages.

[guided tour]:
  https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9
[cosmos sdk 0.41]: https://github.com/cosmos/cosmos-sdk/tree/v0.41.0
[gaia 4]: https://github.com/cosmos/gaia/tree/v4.0.0

### API documentation

The full API documentation is hosted at [cosmos.github.io/uptick-uptick-sdk.js]. This is a bit
tricky to navigate and requires basic TypeScript understanding. It is helpful if
you have want to look up details for advanced use cases. This documentation is
auto-generated based on the current main branch and can occasionally diverge
from the latest release.

[cosmos.github.io/uptick-uptick-sdk.js]: https://cosmos.github.io/uptick-uptick-sdk.js

### Using custom Stargate modules

Documentation on how to use your own custom modules with uptick-uptick-sdk.js for Stargate
chains (Cosmos SDK v0.41) can be found
[here](https://github.com/UptickNetwork/uptick-uptick-sdk.js/blob/main/packages/stargate/CUSTOM_PROTOBUF_CODECS.md).

## Packages

uptick-uptick-sdk.js is a library that consists of many smaller npm packages within the
[@uptick-uptick-sdk.js namespace](https://www.npmjs.com/org/uptick-uptick-sdk.js), a so called monorepo.
Here are some of them to get an idea:

| Package                                                 | Description                                                                                                                                                                                                                              | Latest                                                                                                                                |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [@uptick-uptick-sdk.js/stargate](packages/stargate)                   | A client library for the Cosmos SDK 0.40 (cosmoshub-4), 0.41 and 0.42 (Stargate)                                                                                                                                                         | [![npm version](https://img.shields.io/npm/v/@uptick-uptick-sdk.js/stargate.svg)](https://www.npmjs.com/package/@uptick-uptick-sdk.js/stargate)                   |
| [@uptick-uptick-sdk.js/faucet](packages/faucet)                       | A faucet application for node.js                                                                                                                                                                                                         | [![npm version](https://img.shields.io/npm/v/@uptick-uptick-sdk.js/faucet.svg)](https://www.npmjs.com/package/@uptick-uptick-sdk.js/faucet)                       |
| [@uptick-uptick-sdk.js/cosmwasm-stargate](packages/cosmwasm-stargate) | Client for Stargate chains with the CosmWasm module enabled                                                                                                                                                                              | [![npm version](https://img.shields.io/npm/v/@uptick-uptick-sdk.js/cosmwasm-stargate.svg)](https://www.npmjs.com/package/@uptick-uptick-sdk.js/cosmwasm-stargate) |
| [@uptick-uptick-sdk.js/crypto](packages/crypto)                       | Cryptography for blockchain projects, e.g. hashing (SHA-2, Keccak256, Ripemd160), signing (secp256k1, ed25519), HD key derivation (BIPO39, SLIP-0010), KDFs and symmetric encryption for key storage (PBKDF2, Argon2, XChaCha20Poly1305) | [![npm version](https://img.shields.io/npm/v/@uptick-uptick-sdk.js/crypto.svg)](https://www.npmjs.com/package/@uptick-uptick-sdk.js/crypto)                       |
| [@uptick-uptick-sdk.js/encoding](packages/encoding)                   | Encoding helpers for blockchain projects                                                                                                                                                                                                 | [![npm version](https://img.shields.io/npm/v/@uptick-uptick-sdk.js/encoding.svg)](https://www.npmjs.com/package/@uptick-uptick-sdk.js/encoding)                   |
| [@uptick-uptick-sdk.js/math](packages/math)                           | Safe integers; decimals for handling financial amounts                                                                                                                                                                                   | [![npm version](https://img.shields.io/npm/v/@uptick-uptick-sdk.js/math.svg)](https://www.npmjs.com/package/@uptick-uptick-sdk.js/math)                           |

### Modularity

We're pretty proud of the modularity and a clean dependency tree in this
monorepo. This ensures software quality on our side and lets users pick exactly
what they need. Here you see how everything fits together (every item is a npm
package; right depends on left):

![uptick-uptick-sdk.js dependency tree](docs/uptick-uptick-sdk.js-tree.png)

If this was not enough to scare you away, check out the version including app
runtime dependencies: [uptick-uptick-sdk.js-tree-full.png](docs/uptick-uptick-sdk.js-tree-full.png).

<!--
Build with depsight (https://github.com/webmaster128/depsight), using:

from_npm . | depsight --include "^@uptick-uptick-sdk.js" --format png --dpi 150 --output docs/uptick-uptick-sdk.js-tree.png
from_npm . | depsight --exclude uptick-uptick-sdk.js-monorepo-root --format png --dpi 150 --output docs/uptick-uptick-sdk.js-tree-full.png
optipng docs/uptick-uptick-sdk.js-tree*.png
-->

### Supported JS environments

Currently the codebase supports the following runtime environments:

1. Node.js 12+
2. Modern browsers (Chromium/Firefox/Safari, no Internet Explorer or
   [Edge Spartan](https://en.wikipedia.org/wiki/Microsoft_Edge#Development))
3. Browser extensions (Chromium/Firefox)

Our current JavaScript target standard is ES2018. We use WebAssembly to
implement certain cryptographic functions.

We're happy to adjust this list according to users' needs as long as you don't
ask for Internet Explorer support. If your environment does not support Wasm, we
can work on a solution with swappable implementations.

## Roadmap

We maintain a [development board](https://github.com/orgs/cosmos/projects/6),
use [release milestones](https://github.com/UptickNetwork/uptick-uptick-sdk.js/milestones) and share
important updates in the [CosmWasm Community Call]. For higher level roadmap
discussion please reach out to the team.

[cosmwasm community call]:
  https://github.com/CosmWasm/cosmwasm/issues?q=label%3A%22Community+Call+%F0%9F%97%BA%F0%9F%93%9E%22

## Known limitations

### 0.26

1. When connecting to a Cosmos SDK 0.44+ backend, the verified queries from
   `AuthExtension` and `BankExtension` as well as
   `StargateClient.getAccountVerified` will fail because the storage keys are
   not stable. Unverified queries can be used instead. Those queries are
   deprecated now and will be removed in 0.27 ([#910]).

[#910]: https://github.com/UptickNetwork/uptick-uptick-sdk.js/pull/910

### 0.25

1. Decoding blocks of height 1 is unsupported. This is fixed in [#815] and will
   be released as part of uptick-uptick-sdk.js 0.26.

[#815]: https://github.com/UptickNetwork/uptick-uptick-sdk.js/pull/815

### 0.24

1. `AuthExtension` and all higher level Stargate clients only support
   `BaseAccount`s for all functionality, including getting account numbers and
   sequences for transaction signing. This will be implemented for all common
   Cosmos SDK account types in the 0.25 series.

## Get in touch

The uptick-uptick-sdk.js development team is happy to get in touch with you for all questions
and suggestions.

- [GitHub issues](https://github.com/UptickNetwork/uptick-uptick-sdk.js/issues) for bugs and feature
  requests
- The #uptick-uptick-sdk.js channel on the
  ["Cosmos Community" Discord server](https://discord.gg/vcExX9T) for questions
  and open discussions
- [#uptick-uptick-sdk.js on Twitter](https://twitter.com/search?q=%23uptick-uptick-sdk.js) to spread the
  word

## Development

See [HACKING.md](HACKING.md).
