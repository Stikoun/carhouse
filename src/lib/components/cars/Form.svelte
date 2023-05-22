<script lang="ts">
	import Input from "$components/Input.svelte";
	import { carInitialValues, cars } from "$stores/cars";
	import { goto } from "$app/navigation";

	// get current year for input limit
	const currentYear: number = new Date().getFullYear();
	// car object bound to inputs
	let newCar: Car = { ...carInitialValues };
	// storing form errors
	let errors = {};

	const handleSubmit = () => {
		if (validateForm(newCar)) {
			errors = {};
			const newCarId = cars.add(newCar);

			if (newCarId) {
				// assign initial values to reset form
				newCar = { ...carInitialValues };
				goto(`/${newCarId}`);
			}
		}
	};

	const validateForm = (car: Car) => {
		let valid = true;
		const requiredFields = ['brand', 'model'];
		// make an object from required fields that are not filled
		const errorsArray = requiredFields.filter(field => !car[field]).map(field => [field, "This field is required"]);

		if (errorsArray.length) {
			errors = Object.fromEntries(errorsArray);
			valid = false;
		}

		// check number value for car year
		if (car.year && !(/^\d+$/.test(car.year))) {
			errors["year"] = "You have to enter a number value";
			valid = false;
		}
		return valid;
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="input-wrapper">
		<div class="input-group">
			<Input type="text" name="brand" label="Car brand" required error={errors.brand} bind:value={newCar.brand} />
			<Input type="text" name="model" label="Car model" required error={errors.model} bind:value={newCar.model} />
			<Input
					type="number"
					name="year"
					label="Car year"
					max={currentYear}
					bind:value={newCar.year}
			/>
			<Input type="file" name="image" label="Car image" bind:value={newCar.image} accept=".jpg, .jpeg, .png, .webp" />
		</div>
		<button>Add</button>
	</div>
</form>

<style>
	button {
		min-width: 150px;
		max-height: 70px;
		background-image: linear-gradient(to right, var(--primary-color) 40%, var(--primary-color-dark) 100%);
		background-size: 200% auto;
		transition: 0.5s;
		color: #FFF;
		border: none;
		border-radius: var(--basic-border-radius);
		cursor: pointer;
	}

	button:hover {
		background-position: right center;
	}

	.input-wrapper,
	.input-group {
		display: flex;
	}

	.input-wrapper {
		justify-content: space-between;
		gap: 15px;
	}

	.input-group > :global(.input:first-child > .input-container) {
		border-radius: var(--basic-border-radius) 0 0 var(--basic-border-radius);
	}

	.input-group > :global(.input:last-child > .input-container) {
		border-radius: 0 var(--basic-border-radius) var(--basic-border-radius) 0;
	}
</style>
