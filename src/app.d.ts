// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Car {
		id: string,
		brand: string
		model: string
		year: string
		image: string
	}

	interface CarErrors {
		brand?: string,
		model?: string,
		year?: string
	}
}

export {};
