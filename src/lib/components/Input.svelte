<script lang="ts">
	// props
	export let type = "text";
	export let name: string;
	export let label: string | undefined = undefined;
	export let value = "";
	export let file = "";
	export let error = "";

	// store errors related to file input
	let fileErrors: string[] = [];

	const handleInput = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		value = (e.target as HTMLInputElement).value;

		if (type === "file") {
			handleFileInput(e);
		}
	};

	const handleFileInput = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		const target = e.target as HTMLInputElement;
		let image = target.files && target.files[0];
		fileErrors = [];

		if (image && validateImageFile(image)) {
			let reader = new FileReader();
			reader.readAsDataURL(image);
			reader.onload = (e) => {
				if (e.target?.result) {
					file = e.target.result.toString();
				}
			};
		}
	};

	const validateImageFile = (image: File) => {
		// convert to MB
		const size = Math.round(image.size / 1024);
		// get file extension
		const extension = image.name.split(".").pop();
		const allowedExtensions = ["jpg", "jpeg", "png", "webp"];

		if (extension && !allowedExtensions.includes(extension)) {
			fileErrors = [...fileErrors, "This file extension is not allowed."];
		}

		if (size > 2048) {
			fileErrors = [...fileErrors, "Size of file is bigger than 2MB."];
		}

		return !fileErrors.length;
	};
</script>

<div class="input">
	<div class="input-container">
		{#if label}
			<label for={name}>{label}</label>
		{/if}
		<input
			{type}
			{name}
			{value}
			id={name}
			class={label ? "has-label" : undefined}
			on:input={handleInput}
			{...$$restProps}
		/>
	</div>
	{#if error || fileErrors.length}
		<div class="errors">{`${error ? `${error} ` : ""}${fileErrors.join(", ")}`}</div>
	{/if}
</div>

<style>
	.input-container {
		position: relative;
		display: flex;
		align-items: center;
	}

	.input-container:hover {
		border-color: var(--gray-color-dark);
	}

	input {
		font-size: 20px;
		padding: 10px;
		border: none;
		border-radius: inherit;
		outline: none;
	}

	input.has-label {
		padding: 30px 10px 0;
	}

	input[type="file"],
	input[type="file"]::file-selector-button {
		font-size: 14px;
	}

	input[type="file"]::file-selector-button {
		margin-right: 10px;
		border: none;
		background: var(--primary-color-light);
		padding: 10px 20px;
		border-radius: var(--basic-border-radius);
		color: var(--primary-color);
		cursor: pointer;
		transition: background 0.2s ease-in-out;
	}

	input[type="file"]::file-selector-button:hover {
		background: var(--primary-color);
		color: #fff;
	}

	label {
		position: absolute;
		left: 10px;
		top: 5px;
		font-size: 14px;
		color: var(--gray-color-dark);
		font-weight: 600;
	}

	.errors {
		font-size: 14px;
		color: darkred;
		padding: 5px;
	}

	@media (max-width: 770px) {
		input {
			font-size: 16px;
		}
	}
</style>
