<script lang="ts">
  import { selectedCar } from "$stores/cars";
</script>

<section>
	<header>
		<h2>{$selectedCar?.brand || "Unknown brand"}</h2>
		{#if $selectedCar?.year}<span>{$selectedCar.year}</span>{/if}
	</header>
	<img src="https://fakeimg.pl/400x300" alt="test" />
</section>

<style>
	section {
		background-color: #fff;
		border-radius: 10px;
		margin: 10px 0;
		padding: 10px;
	}

	header {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	header > span {
		background-color: aquamarine;
		padding: 5px;
		border-radius: 10px;
		font-size: 14px;
	}
</style>
