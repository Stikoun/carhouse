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
			{:else}
				TEST
			{/if}
		</div>
		<slot />
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
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.wrapper {
		display: flex;
		gap: 20px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
