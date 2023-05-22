<div class="close" on:click on:keydown></div>

<style>
	.close {
		position: relative;
        cursor: pointer;
		height: 16px;
		width: 16px;
		opacity: 0.3;
	}

	.close:hover {
		opacity: 1;
	}

	.close:before, .close:after {
		position: absolute;
		content: ' ';
		inset: 0;
		left: 8px;
		width: 2px;
		background-color: #333;
	}

	.close:before {
		transform: rotate(45deg);
	}

	.close:after {
		transform: rotate(-45deg);
	}
</style>
