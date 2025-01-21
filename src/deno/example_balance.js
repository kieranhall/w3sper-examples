import { AccountSyncer, Network } from "@dusk/w3sper";

// We're using the network here to get the balance of a public key
const network = await Network.connect("https://nodes.dusk.network");

// Example public key
const publicKey =
	"ocXXBAafr7xFqQTpC1vfdSYdHMXerbPCED2apyUVpLjkuycsizDxwA6b9D7UW91kG58PFKqm9U9NmY9VSwufUFL5rVRSnFSYxbiKK658TF6XjHsHGBzavFJcxAzjjBRM4eF";

// Get the balance of public key.
const [balance] = await new AccountSyncer(network).balances([publicKey]);

// Disconnect from the network now that we have a balance
await network.disconnect();

// Output the balance object (`{ nonce: <BigInt>, value: <BigInt> }`)
console.log(balance);
