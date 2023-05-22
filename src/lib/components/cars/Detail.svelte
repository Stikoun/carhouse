<script lang="ts">
  import { selectedCar } from "$stores/cars";
</script>

<section>
	<header>
		<h2>{[$selectedCar.brand, $selectedCar.model].join(" ")}</h2>
		{#if $selectedCar?.year}<span>{$selectedCar.year}</span>{/if}
	</header>
	{#if $selectedCar?.image}<img src="{$selectedCar?.image}" alt={`${[$selectedCar.brand, $selectedCar.model].join(" ")}`} />{/if}
</section>

<style>
	section {
		background-color: #FFF;
		border-radius: var(--basic-border-radius);
		padding: 10px;
		flex: 1;
	}

	header {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	header > span {
		background-color: var(--primary-color);
		color: #FFF;
		padding: 5px;
		border-radius: var(--basic-border-radius);
		font-size: 14px;
	}

	img {
		max-height: 300px;
	}
</style>
