<script lang="ts">
  import Input from "../components/Input.svelte";
  import { cars } from "../stores.js";
  import { goto } from '$app/navigation';

  const currentYear = new Date().getFullYear();

  const newCarInitialValues = {
    id: '',
    brand: '',
    model: '',
    year: '',
    image: ''
  };

  let newCar: Car = {...newCarInitialValues};

  const handleSubmit = () => {
    const newCarId = cars.add(newCar);

    if (newCarId) {
      newCar = {...newCarInitialValues};
      goto(`/${newCarId}`);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="wrapper">
    <div class="input-group">
      <Input type="text" name="brand" label="Car brand" bind:value={newCar.brand} />
      <Input type="text" name="model" label="Car model" bind:value={newCar.model} />
      <Input type="number" name="year" label="Car year" max={currentYear} bind:value={newCar.year} />
      <Input type="file" name="image" bind:value={newCar.image} />
    </div>
    <button>Add</button>
  </div>
</form>

{JSON.stringify(newCar)}

<style>
  .wrapper, .input-group {
    display: flex;
  }

  .wrapper {
    justify-content: space-between;
    gap: 15px;
  }

  button {
    background-color: var(--primary-color);
    border: none;
    color: #FFF;
    border-radius: 10px;
  }

  .input-group > :global(:first-child) {
    border-radius: 10px 0 0 10px;
  }

  .input-group > :global(:last-child) {
    border-radius: 0 10px 10px 0;
  }
</style>
