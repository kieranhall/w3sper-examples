import { Network } from "@dusk/w3sper";

const network = await Network.connect("https://testnet.nodes.dusk.network");
const price = await network.blocks.gasPrice;

console.log(price.average);
console.log(price.max);
console.log(price.median);
console.log(price.min);

await network.disconnect();
