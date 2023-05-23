<script lang="ts">
	// svelte
	import { page } from "$app/stores";
	// components
	import NotFound from "$components/cars/NotFound.svelte";
	// store
	import { cars, selectedCar } from "$stores/cars";

	// get url param and search for car in store
	$: queriedCar = $cars.find((car) => car.id === $page?.params?.carId);
	$: if (queriedCar) {
		selectedCar.select(queriedCar);
	}
</script>

{#if !queriedCar}
	<NotFound />
{/if}
