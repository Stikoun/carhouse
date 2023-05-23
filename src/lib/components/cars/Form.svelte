<script lang="ts">
	// svelte
	import { goto } from "$app/navigation";
	// components
	import Input from "$components/Input.svelte";
	// store
	import { carInitialValues, cars } from "$stores/cars";

	// get current year for input limit
	const currentYear: number = new Date().getFullYear();
	// car object bound to inputs
	let newCar: Car = { ...carInitialValues };
	// storing form errors
	let errors: CarErrors = {};
	// store value of input file - image
	let imageInput = "";

	const handleSubmit = () => {
		if (validateForm(newCar)) {
			const newCarId = cars.add(newCar);

			if (newCarId) {
				// assign initial values to reset form
				newCar = { ...carInitialValues };
				// reset image input
				imageInput = "";
				goto(`/${newCarId}`);
			}
		}
	};

	const validateForm = (car: Car) => {
		// reset errors object
		errors = {};
		let valid = true;
		const requiredFields = ["brand", "model"];
		// make an object from required fields that are not filled
		const errorsArray = requiredFields
			.filter((field) => !car[field as keyof Car])
			.map((field) => [field, "This field is required"]);

		if (errorsArray.length) {
			errors = Object.fromEntries(errorsArray);
			valid = false;
		}

		// check number value for car year
		if (car.year && !/^\d+$/.test(car.year)) {
			errors["year"] = "You have to enter a number value";
			valid = false;
		}
		return valid;
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="input-wrapper">
		<div class="input-group">
			<Input
				type="text"
				name="brand"
				label="Brand"
				placeholder="BMW"
				required
				error={errors.brand}
				bind:value={newCar.brand}
			/>
			<Input
				type="text"
				name="model"
				label="Model"
				placeholder="M4"
				required
				error={errors.model}
				bind:value={newCar.model}
			/>
			<Input
				type="number"
				name="year"
				label="Year"
				placeholder="2020"
				max={currentYear}
				bind:value={newCar.year}
			/>
			<Input
				type="file"
				name="image"
				label="Image"
				accept=".jpg, .jpeg, .png, .webp"
				bind:value={imageInput}
				bind:file={newCar.image}
			/>
		</div>
		<button>Add car</button>
	</div>
</form>

<style>
	form {
		background-color: #fff;
		border-radius: var(--basic-border-radius);
		padding: 10px;
	}

	button {
		min-width: 150px;
		height: 66px;
		background-image: linear-gradient(
			to right,
			var(--primary-color) 40%,
			var(--primary-color-dark) 100%
		);
		background-size: 200% auto;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
		transition: 0.5s;
		color: #fff;
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

	.input-group > :global(.input) {
		border-right: 1px solid var(--gray-color-light);
	}

	.input-group > :global(.input:last-child) {
		border-right: none;
		flex-shrink: 0;
	}

	@media (max-width: 1024px) {
		.input-wrapper {
			align-items: center;
		}

		.input-group {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			border-right: 1px solid var(--gray-color-light);
		}

		.input-group > :global(.input:nth-child(3)) {
			border-right: none;
		}

		.input-group > :global(.input:last-child) {
			margin-top: 10px;
			grid-column: 3 span;
		}
	}

	@media (max-width: 470px) {
		.input-group {
			border-bottom: 1px solid var(--gray-color-light);
			padding-bottom: 10px;
		}

		.input-wrapper {
			display: block;
		}

		.input-group > :global(.input),
		.input-group {
			border-right: none;
		}

		.input-wrapper > :global(button) {
			margin-top: 10px;
			height: 40px;
			width: 100%;
		}
	}
</style>
