<script lang="ts">
	import "./style.css";
	import Form from "$components/cars/Form.svelte";
	import Detail from "$components/cars/Detail.svelte";
	import List from "$components/cars/List.svelte";
	import { selectedCar } from "$stores/cars";
</script>

<div class="app">
	<main>
		<Form />
		<div class="wrapper">
			<List />
			{#if $selectedCar.id}
				<Detail />
			{/if}
			<slot />
		</div>
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 16px;
		width: 100%;
		max-width: 64rem;
		margin: 40px auto 0;
		box-sizing: border-box;
	}

	.wrapper {
		display: grid;
		grid-template-columns: 25% 1fr;
		align-items: start;
		gap: 20px;
		margin-top: 20px;
	}

	@media (max-width: 900px) {
		.wrapper {
			grid-template-columns: 1fr;
		}
	}
</style>
