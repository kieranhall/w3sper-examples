# Deno

## Notes

The `shared.js` file contains some exported functions that are used in multiple example files. Importantly, it shows the seed creation, using the [`bip39`](https://www.npmjs.com/package/bip39) library.

Deno does not require packages to be installed.

## Running

- `deno run --allow-read=../../bin/wallet_core.wasm --allow-net example_balance.js`
- `deno run --allow-net example_block_details.js`
- `deno run --allow-net example_block_height.js`
- `deno run --allow-net example_gas_price.js`
- `deno run example_lux.js`
- `deno run --allow-read=../../bin/wallet_core.wasm example_profile_generation.js`
- `deno run --allow-net example_transaction_details.js`
- `deno run --allow-read=../../bin/wallet_core.wasm --allow-net example_transaction.js`
- `deno run --allow-read=../../bin/wallet_core.wasm --allow-net example_transfer.js`