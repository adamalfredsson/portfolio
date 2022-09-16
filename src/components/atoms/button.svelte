<script lang="ts">
  export let as: "button" | "a";
  export let outlined: boolean;
  let clazz: string;
  export { clazz as class };
</script>

<svelte:element
  this={as}
  class={`button ${clazz || ""}`}
  class:outlined
  {...$$restProps}
>
  <slot />
</svelte:element>

<style>
  .button {
    background: var(--color-black);
    color: var(--color-white);
    border: 0;
    padding: var(--space-4) var(--space-8);
    font-family: var(--font-primary);
    cursor: pointer;
    box-shadow: var(--shadow);
  }

  .button.outlined {
    background: transparent;
    color: var(--color-black);
    border: 1px solid var(--color-black);
  }
</style>
