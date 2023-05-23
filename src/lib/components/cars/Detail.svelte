<script lang="ts">
	// store
	import { selectedCar } from "$stores/cars";

	// fields to be shown in same layout
	const fields: Array<keyof Car> = ["brand", "model", "year"];
		
	$: title = [$selectedCar.brand, $selectedCar.model].join(" ");
</script>

<section>
	{#if $selectedCar?.image}
		<img src={$selectedCar?.image} alt={title} />
	{/if}
	<div>
		<header>
			<h2>{title}</h2>
		</header>
		<div class="fields">
			{#each fields as field}
				{#if $selectedCar[field]}
					<div class="field">
						<h3>{field}</h3>
						<div>{$selectedCar[field]}</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		gap: 30px;
		background-color: #fff;
		border-radius: var(--basic-border-radius);
		padding: 20px;
		flex: 1;
	}

	header {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	header > h2 {
		margin-top: 0;
	}

	.fields {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px 80px;
	}

	.field > h3 {
		font-size: 18px;
		margin: 0;
		color: var(--gray-color-dark);
		text-transform: capitalize;
	}

	.field > div {
		font-size: 20px;
	}

	img {
		width: 220px;
		height: 220px;
		border-radius: var(--basic-border-radius);
		object-fit: cover;
	}
</style>
