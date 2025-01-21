import { getLocalWasmBuffer, seeder } from "./shared.js";
import { ProfileGenerator, useAsProtocolDriver } from "@dusk/w3sper";

useAsProtocolDriver(await getLocalWasmBuffer()).then(async () => {
	// Instantiate ProfileGenerator with seed
	const profileGenerator = new ProfileGenerator(seeder);

	// Get the default profile
	const defaultProfile = await profileGenerator.default;

	// Output the first generated (default) profile address as a string
	console.log(defaultProfile.address.toString());

	// Output the first generated (default) profile account as a string
	console.log(defaultProfile.account.toString());

	// Get two additional profiles
	const profiles = await Promise.all([
		profileGenerator.next(),
		profileGenerator.next()
		// You can generate as many as you need for your application
	]);

	// Output the profiles array
	console.log(profiles);

	// Output the second generated profile address as a string
	console.log(profiles[0].address.toString());

	// Output the second generated profile account as a string
	console.log(profiles[0].account.toString());

	// Output the third generated profile address as a string
	console.log(profiles[1].address.toString());

	// Output the third generated profile account as a string
	console.log(profiles[1].account.toString());
});
