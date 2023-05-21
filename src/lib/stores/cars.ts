import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { generateIdentifier } from "$lib/utils";

// allow only array value to be in localStorage for provided key
const initLocalStorage = (key: string) => {
	if (browser && localStorage.getItem(key) !== null) {
		try {
			const output = JSON.parse(localStorage.getItem(key) || "{}");
			if (Array.isArray(output)) {
				return output;
			}
			return [];
		} catch {
			return [];
		}
	}
	return [];
};

// creating store as storage of added cars
const createCars = () => {
	const { subscribe, set, update } = writable(initLocalStorage("cars"));

	return {
		subscribe,
		add: (newCar: Car) => {
			// generate random id
			const generatedId = generateIdentifier();
			update((storedCars) => [...storedCars, { ...newCar, id: generatedId }]);
			return generatedId;
		},
		delete: (id: string) => update((storedCars) => storedCars.filter((car: Car) => car.id !== id)),
		reset: () => set([])
	};
};

export const cars = createCars();
cars.subscribe(
	(storedCars) => browser && (localStorage.cars = storedCars ? JSON.stringify(storedCars) : [])
);

// define initial values for car
export const carInitialValues = {
	id: "",
	model: "",
	brand: "",
	year: "",
	image: ""
};

// creating store as storage for selected car
const createSelectedCar = () => {
	const { subscribe, set, update } = writable<Car>({ ...carInitialValues });

	return {
		subscribe,
		select: (selectedCar: Car) => update(() => selectedCar),
		reset: () => set({ ...carInitialValues })
	};
};

export const selectedCar = createSelectedCar();
