<script lang="ts">
	// svelte
	import { goto } from "$app/navigation";
	import { browser } from "$app/environment";
	// store
	import { cars, selectedCar } from "$stores/cars";
	// components
	import Close from "$components/Close.svelte";

	// delete specific car and move to last car if exists
	const deleteCar = (carId: string) => {
		cars.delete(carId);
		const lastCarId = $cars[$cars.length - 1]?.id;

		if (lastCarId) {
			goto(`/${lastCarId}`);
		} else {
			goto("/");
		}
	};

	// reset store and URL
	const deleteAllCars = () => {
		cars.reset();
		goto("/");
	};

	// reset selected car if there are no cars left
	cars.subscribe((storedCars) => {
		if (browser && !storedCars.length && $selectedCar) {
			selectedCar.reset();
		}
	});
</script>

<aside>
	<header>
		<h2>Car list</h2>
		{#if $cars.length}<button type="button" on:click={deleteAllCars}>Delete all</button>{/if}
	</header>
	<ul>
		{#if !$cars.length}
			<li class="placeholder">Add a car to show it here</li>
		{:else}
			{#each $cars as car (car.id)}
				<li>
					<a href={`/${car.id}`}>
						{[car.brand, car.model].join(" ")}
					</a>
					<Close on:click={() => deleteCar(car.id)} on:keydown={() => deleteCar(car.id)} />
				</li>
			{/each}
		{/if}
	</ul>
</aside>

<style>
	aside {
		background-color: #fff;
		border-radius: var(--basic-border-radius);
	}

	h2 {
		font-size: 20px;
		margin: 0;
	}

	button {
		color: var(--primary-color);
		border: none;
		background-color: transparent;
		cursor: pointer;
		font-size: 14px;
	}

	button:hover {
		text-decoration: underline;
	}

	header {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		padding: 15px;
		border-bottom: 1px solid var(--gray-color-light);
	}

	ul {
		list-style-type: none;
		padding: 0 15px;
		margin: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 0;
		border-bottom: 1px solid var(--gray-color-light);
		font-weight: 600;
	}

	ul > li:last-child {
		border-bottom: none;
	}

	li > a {
		color: #000;
	}

	.placeholder {
		background-color: var(--gray-color-light);
		padding: 10px;
		border-radius: var(--basic-border-radius);
		font-size: 14px;
		margin: 20px 0;
		justify-content: center;
	}

	@media (max-width: 770px) {
		ul {
			max-height: 100px;
			overflow: scroll;
		}
	}
</style>
