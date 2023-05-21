<script lang="ts">
	import Input from "$components/Input.svelte";
	import { carInitialValues, cars } from "$stores/cars";
	import { goto } from "$app/navigation";

	// get current year for input limit
	const currentYear: number = new Date().getFullYear();
	// car object bound to inputs
	let newCar: Car = { ...carInitialValues };

	const handleSubmit = () => {
		const newCarId = cars.add(newCar);

		if (newCarId) {
			// assign initial values to reset form
			newCar = { ...carInitialValues };
			goto(`/${newCarId}`);
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="input-wrapper">
		<div class="input-group">
			<Input type="text" name="brand" label="Car brand" bind:value={newCar.brand} />
			<Input type="text" name="model" label="Car model" bind:value={newCar.model} />
			<Input
				type="number"
				name="year"
				label="Car year"
				max={currentYear}
				bind:value={newCar.year}
			/>
			<Input type="file" name="image" bind:value={newCar.image} />
		</div>
		<button>Add</button>
	</div>
</form>

<style>
	.input-wrapper,
	.input-group {
		display: flex;
	}

	.input-wrapper {
		justify-content: space-between;
		gap: 15px;
	}

	button {
		background-color: var(--primary-color);
		border: none;
		color: #fff;
		border-radius: 10px;
	}

	.input-group > :global(:first-child) {
		border-radius: 10px 0 0 10px;
	}

	.input-group > :global(:last-child) {
		border-radius: 0 10px 10px 0;
	}
</style>
