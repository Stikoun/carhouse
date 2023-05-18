<script lang="ts">
  export const ssr = false;
  import { cars } from "../stores";

  console.log(cars);

  // const setCars = (cars: object[]) => {
  //   localStorage.setItem('cars', JSON.stringify(cars));
  // }

  // setCars(cars);
</script>

<aside>
  <header>
    <h2>Car list</h2>
    <button type="button">Delete all</button>
  </header>
  <ul>
    {#each $cars as car}
      <li>
        <!-- JOIN -->
        <span>{car.brand}{` ${car.model || ''}`}</span>
        <span>x</span>
      </li>
    {/each}
  </ul>
</aside>

<style>
  aside {
    padding: 10px;
    background-color: #FFF;
    border-radius: 10px;
  }

  h2 {
    font-size: 20px;
    margin: 0;
  }

  button {
    color: blue;
    border: none;
    background-color: transparent;
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
</style>