import {
	AccountSyncer,
	Network,
	ProfileGenerator,
	Transfer,
	useAsProtocolDriver
} from "@dusk/w3sper";
import { getLocalWasmBuffer, seeder } from "./shared.js";

// We're using the network here to get the balance of the sender ("from" public key)
const network = await Network.connect("https://nodes.dusk.network");

// Example public key
const from =
	"ocXXBAafr7xFqQTpC1vfdSYdHMXerbPCED2apyUVpLjkuycsizDxwA6b9D7UW91kG58PFKqm9U9NmY9VSwufUFL5rVRSnFSYxbiKK658TF6XjHsHGBzavFJcxAzjjBRM4eF";

// Get the balance of the sender public key.
const [balance] = await new AccountSyncer(network).balances([from]);

// Disconnect from the network now that we have a balance
await network.disconnect();

useAsProtocolDriver(
	// See 'local WebAssembly' example for `getLocalWasmBuffer()` implementation
	await getLocalWasmBuffer()
).then(async () => {
	// See `Generate profiles` example for seeder code
	const profileGenerator = new ProfileGenerator(seeder);
	const defaultProfile = await profileGenerator.default;

	// Example public key
	const to =
		"oCqYsUMRqpRn2kSabH52Gt6FQCwH5JXj5MtRdYVtjMSJ73AFvdbPf98p3gz98fQwNy9ZBiDem6m9BivzURKFSKLYWP3N9JahSPZs9PnZ996P18rTGAjQTNFsxtbrKx79yWu";

	const transfers = await Promise.all(
		// Example (arbitrary) amount and nonce values
		[77n, 22n].map((amount, nonce) =>
			new Transfer(defaultProfile)
				.amount(amount)
				.to(to)
				.nonce(balance.nonce + BigInt(nonce))
				.chain(Network.LOCALNET)
				.gas({ limit: 500_000_000n })
				.build()
		)
	);

	console.log(transfers);
});
