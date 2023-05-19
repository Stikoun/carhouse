<script lang="ts">
    import Detail from "../../cars/Detail.svelte";
    import { page } from "$app/stores";
    import {cars, selectedCar} from "../../stores";
    import {get} from 'svelte/store';

    // let storedCars = get(cars);
    // cars.subscribe(storedCars => selectedCar.select(storedCars.find(car => car.id === $page?.params?.carId)));

    $: queriedCar = $cars.find(car => car.id === $page?.params?.carId);
</script>

{#if $selectedCar}
    <Detail car={$selectedCar} />
{:else}
    TEST
{/if}

{JSON.stringify($selectedCar)};
