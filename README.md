# w3sper Examples

> w3sper is Dusk's SDK.  It enables developers to write decentralized applications on top of the Dusk blockchain.

The examples contained in this repo are split up by vendor, but should output the same results. See the README files inside each vendor directory for specific instructions on running example code for that vendor.

## Set-up

w3sper requires a WebAssembly that is compiled from the Rusk module [`wallet-core`](https://github.com/dusk-network/rusk/tree/master/wallet-core). The WebAssembly is loaded from the node that you connect to, however, for offline operations, you will not be able to use a hosted WebAssembly, because you will not establish a network connection. Therefore, the user of w3sper (in an offline environment) will need to compile and include the WebAssembly themselves.

This repository provides a compiled WebAssembly in it's [`bin`](https://github.com/kieranhall/w3sper-examples/tree/main/bin) directory that is compatible with the version of w3sper being used in the examples for the purpose of demonstrating offline operations.