<script lang="ts">
	import List from "../cars/List.svelte";
  import Form from "../cars/Form.svelte";
  import Detail from "../cars/Detail.svelte";

  const cars = [
    {id: 1, brand: "BMW", model: "M4", year: 2022},
    {id: 2, brand: "Audi", model: "A5", year: 1998},
  ];

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Form />


<div class="wrapper">
  <List />

  <Detail />
</div>

<style>
  .wrapper {
    display: flex;
    gap: 20px;
  }
</style>


