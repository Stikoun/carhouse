<div on:click on:keydown />

<style>
	div {
		position: relative;
		cursor: pointer;
		height: 16px;
		width: 16px;
		opacity: 0.3;
	}

	div:hover {
		opacity: 1;
	}

	div:before,
	div:after {
		position: absolute;
		content: " ";
		inset: 0;
		left: 8px;
		width: 2px;
		background-color: #333;
	}

	div:before {
		transform: rotate(45deg);
	}

	div:after {
		transform: rotate(-45deg);
	}
</style>
