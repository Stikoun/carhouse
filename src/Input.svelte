<script lang="ts">
  export let type: string;
  export let name: string;
  export let label: string | undefined = undefined;
</script>

<div class="input-container">
  {#if label}      
    <label for={name}>{label}</label>
    <input type={type} name={name} id={name} class="has-label" {...$$restProps} />
  {:else}
    <input type={type} name={name} id={name} {...$$restProps} />
  {/if}
</div>

<style>
  .input-container {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
  }

  .input-container:hover {
    border-color: #a2a2a2;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: inherit;
    outline: none;
  }

  input.has-label {
    padding: 25px 10px 10px;
  }

  label {
    position: absolute;
    left: 10px;
    top: 5px;
    font-size: 14px;
    color: #a2a2a2;
  }
</style>