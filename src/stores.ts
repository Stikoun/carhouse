import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { generateIdentifier } from "./utils";

// Allow only array value to be in localStorage for provided key
const initLocalStorage = key => {
    if (browser && !!localStorage.getItem(key)) {
        try {
            const output = JSON.parse(localStorage.getItem(key));
            if (Array.isArray(output)) {
                return output;
            }
            return [];
        } catch {
            return [];
        }
    }
    return [];
}
const createCars = () => {
    const { subscribe, set, update } = writable(initLocalStorage("cars"));

    return {
        subscribe,
        add: (newCar: Car) => {
            const generatedId = generateIdentifier();
            update(storedCars => [...storedCars, {...newCar, id: generatedId}]);
            return generatedId;
        },
        delete: (id: string) => update(storedCars => storedCars.filter((car: Car) => car.id !== id)),
        reset: () => set([]),
    };
}

export const cars = createCars();
cars.subscribe(storedCars => browser && (localStorage.cars = (storedCars ? JSON.stringify(storedCars) : [])));

const createSelectedCar = () => {
    const { subscribe, set, update } = writable({});

    return {
        subscribe,
        select: ((selectedCar: Car) => update(() => selectedCar)),
        reset: () => set({}),
    };
}

export const selectedCar = createSelectedCar();
