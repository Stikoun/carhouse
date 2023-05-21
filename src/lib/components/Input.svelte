
<script lang="ts">
	export let type = "text";
	export let name: string;
	export let label: string | undefined = undefined;
	export let value = "";

	const handleInput = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		const target = e.target as HTMLInputElement;
		value = target.value;
	};
</script>

<!-- 
  @component
  Custom input component with inner label
 -->
<div class="input-container">
	{#if label}
		<label for={name}>{label}</label>
		<input
			{type}
			{name}
			id={name}
			{value}
			class="has-label"
			on:input={handleInput}
			{...$$restProps}
		/>
	{:else}
		<input {type} {name} id={name} {value} on:input={handleInput} {...$$restProps} />
	{/if}
</div>

<style>
	.input-container {
		position: relative;
		display: flex;
		align-items: center;
		border: 1px solid var(--gray-color-light);
	}

	.input-container:hover {
		border-color: var(--gray-color-dark);
	}

	input {
		padding: 10px;
		border: none;
		border-radius: inherit;
		outline: none;
	}

	input.has-label {
		padding: 25px 10px 10px;
	}

	label {
		position: absolute;
		left: 10px;
		top: 5px;
		font-size: 14px;
		color: var(--gray-color-dark);
	}
</style>
