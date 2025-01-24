import { Network } from "@dusk/w3sper";

const network = await Network.connect("https://testnet.nodes.dusk.network");
const blockHeight = await network.blockHeight;

console.log(blockHeight);

await network.disconnect();
