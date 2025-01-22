import bip39 from "npm:bip39@3.1.0";

// Generate a random mnemonic (uses crypto.randomBytes under the hood), defaults to 128-bits of entropy, then split this into an array of strings.
const mnemonic = bip39.generateMnemonic();

console.log({ mnemonic });

// Generate 64 byte seed from the mnemonic.
export const seeder = async () =>
	Uint8Array.from(bip39.mnemonicToSeedSync(mnemonic));

// See the README for information about obtaining the WebAssembly.
const WASM_RELEASE_PATH = "../../bin/wallet_core.wasm";

export function getLocalWasmBuffer() {
	if (typeof Deno !== "undefined") {
		return Deno.readFile(WASM_RELEASE_PATH);
	}
	return Promise.reject("Can't access file system");
}
