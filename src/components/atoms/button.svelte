<script lang="ts">
  export let as: "button" | "a" = "button";
  export let outlined = false;
  let clazz = "";
  export { clazz as class };
</script>

<svelte:element
  this={as}
  class={`button ${clazz}`}
  class:outlined
  {...$$restProps}
>
  <slot />
</svelte:element>

<style lang="postcss">
  .button {
    background: var(--color-black);
    color: var(--color-white);
    border: 0;
    padding: var(--space-4) var(--space-8);
    font-family: var(--font-primary);
    cursor: pointer;
    box-shadow: var(--shadow);
    transition: all 0.2s ease-in-out;

    &.outlined {
      background: transparent;
      color: var(--color-black);
      border: 1px solid var(--color-black);
    }

    &:disabled {
      background: var(--color-gray);
      cursor: not-allowed;
    }
  }
</style>
