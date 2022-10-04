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
    padding: var(--space-3) var(--space-8);
    font-family: var(--font-primary);
    cursor: pointer;
    box-shadow: var(--shadow);
    transition: all 0.2s ease-in-out;

    &:hover {
      background: var(--color-gray);
    }

    &:disabled {
      background: var(--color-gray);
      cursor: not-allowed;
    }

    &.outlined {
      background: transparent;
      color: var(--color-black);
      border: 1px solid var(--color-black);

      &:hover {
        background: var(--color-gray);
        border-color: var(--color-gray);
        color: var(--color-white);
      }
    }
  }
</style>
