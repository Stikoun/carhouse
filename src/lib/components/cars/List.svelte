<script lang="ts">
	import { cars, selectedCar } from "$stores/cars";
	import { goto } from "$app/navigation";

	const deleteCar = (carId: string) => {
		cars.delete(carId);
		const lastCarId = $cars[$cars.length - 1]?.id;

    if (lastCarId) {
      goto(`/${lastCarId}`);
    } else {
      goto('/');
      selectedCar.reset();
    }
	};
</script>

<aside>
	<header>
		<h2>Car list</h2>
		<button type="button" on:click={cars.reset}>Delete all</button>
	</header>
	<ul>
		{#each $cars as car (car.id)}
			<li>
				<!-- JOIN -->
				<a href={`/${car.id}`}>
					{car.brand}{` ${car.model || ""}`}
				</a>
				<span on:click={() => deleteCar(car.id)} on:keydown={() => deleteCar(car.id)}>x</span>
			</li>
		{/each}
	</ul>
</aside>

<style>
	aside {
		padding: 10px;
		background-color: #fff;
		border-radius: 10px;
	}

	h2 {
		font-size: 20px;
		margin: 0;
	}

	button {
		color: blue;
		border: none;
		background-color: transparent;
	}

	header {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		padding: 15px 0;
		border-bottom: 1px solid #ccc;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10px 0;
	}
</style>
