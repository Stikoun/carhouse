<script lang="ts">
	import "./style.css";
	import Form from "$components/cars/Form.svelte";
	import Detail from "$components/cars/Detail.svelte";
	import List from "$components/cars/List.svelte";
	import { selectedCar } from "$stores/cars";
</script>

<div class="app">
	<main>
		<div class="form">
			<Form />
		</div>
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
		padding: 16px;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.wrapper {
		display: grid;
		grid-template-columns: 20% 1fr;
		gap: 20px;
		margin-top: 30px;
	}

	.form {
		background-color: #FFF;
		padding: 20px;
		border-radius: var(--basic-border-radius);
	}

	@media (max-width: 900px) {
		.wrapper {
			grid-template-columns: 1fr;
		}
	}
</style>
