import { writable } from "svelte/store";
import {browser} from "$app/environment";

// const getCars = () => {
//   const cars = localStorage.getItem('cars');
//   console.log(JSON.parse(cars));
//   return JSON.parse(cars);
// }

export const cars = writable(browser && !!localStorage.getItem("cars") ? JSON.parse(localStorage.getItem("cars")) : []);
cars.subscribe(val => browser && (localStorage.cars = JSON.stringify(val)));

// const setCars = (cars: object[]) => {
//   localStorage.setItem('cars', JSON.stringify(cars));
// }