import {
	AccountSyncer,
	Network,
	ProfileGenerator,
	Transfer
} from "@dusk/w3sper";
import { seeder } from "./shared.js";

// Connect to a node
const network = await Network.connect("https://testnet.nodes.dusk.network/");

// Instantiate ProfileGenerator
// Note that because if seeder is using a randomly generated mnemonic with each execution, the subsequent account will have a zero balance.
// Update the shared.js file to use a specific mnemonic from an account with a balance.
const profiles = new ProfileGenerator(seeder);

// Get the default profile
const defaultProfile = await profiles.default;
const account = defaultProfile.account.toString();

// Output the first generated (default) profile account as a string
console.log({ account });

const [balance] = await new AccountSyncer(network).balances([account]);
console.log({ balance });

// Check the balance and throw and error if it is zero;
if (balance.value === 0n) {
	throw new Error(
		"This account has no balance and therefore cannot continue with the transfer. Put some balance on this account to continue."
	);
}

const amount = 77n; // Example (arbitrary) amount
const to =
	"oCqYsUMRqpRn2kSabH52Gt6FQCwH5JXj5MtRdYVtjMSJ73AFvdbPf98p3gz98fQwNy9ZBiDem6m9BivzURKFSKLYWP3N9JahSPZs9PnZ996P18rTGAjQTNFsxtbrKx79yWu"; // Example public key
const nonce = 22n; // Example (arbitrary) nonce
const gas = { limit: 500_000_000n }; // Example (sensible) gas limit
const transfer = new Transfer(defaultProfile)
	.amount(amount)
	.to(to)
	.nonce(nonce)
	.chain(Network.TESTNET) // valid networks: "LOCALNET", "MAINNET", "TESTNET", "DEVNET"
	.gas(gas)
	.build();

try {
	// Execute the transaction, propagating to the network
	const { hash } = await network.execute(transfer);

	// Wait for the response from the network with the hash of the transaction we just executed
	const evt = await network.transactions.withId(hash).once.executed();

	// Get the gas paid for the transaction
	const gasPaid = evt.gasPaid;

	// Output the transaction hash
	console.log({ hash });

	// Output the gas paid (value in lux)
	console.log({ gasPaid });
} catch (e) {
	console.error("Transaction failed to execute. ", e);
}
