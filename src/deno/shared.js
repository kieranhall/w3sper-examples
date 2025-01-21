// Define a seed (you could also use a mnemonic library here)
const SEED = new Uint8Array(64);

// You could apply your own logic here (e.g. encryption / decryption)
export const seeder = async () => SEED;

// TODO this should change to be useful for the user (e.g. import the wasm from the package)
const WASM_RELEASE_PATH = "../../bin/wallet_core.wasm";

export function getLocalWasmBuffer() {
	if (typeof Deno !== "undefined") {
		return Deno.readFile(WASM_RELEASE_PATH);
	}
	return Promise.reject("Can't access file system");
}
