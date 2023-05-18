<script lang="ts">
  import Input from "../Input.svelte";

  const currentYear = new Date().getFullYear();
</script>

<form>
  <div class="wrapper">
    <div class="input-group">
      <Input type="text" name="brand" label="Car brand" />
      <Input type="text" name="model" label="Car model" />
      <Input type="number" name="year" label="Car year" max={currentYear} />
      <Input type="file" name="image" />
    </div>
    <button>Add</button>
  </div>
</form>

<style>
  .wrapper, .input-group {
    display: flex;
  }

  .wrapper {
    justify-content: space-between;
    gap: 15px;
  }

  button {
    background-color: #405FF2;
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