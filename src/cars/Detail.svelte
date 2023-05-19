<script lang="ts">
  export let car;
</script>

<section>
  <header>
    <h2>{car?.brand || "Unknown brand"}</h2>
    {#if car?.year}<span>{car.year}</span>{/if}
  </header>
  <img src="https://fakeimg.pl/400x300" alt="test" />
</section>

<style>
  section {
    background-color: #FFF;
    border-radius: 10px;
    margin: 10px 0;
    padding: 10px;
  }
  header {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  header > span {
    background-color:aquamarine;
    padding: 5px;
    border-radius: 10px;
    font-size: 14px;
  }
</style>
