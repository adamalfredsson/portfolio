<script lang="ts">
  export let label: string;
</script>

<label>
  <span>{label}</span>
  <slot />
</label>

<style>
  label {
    display: flex;
    flex-direction: column;
  }

  label :global(textarea),
  label :global(input) {
    margin-top: var(--space-2);
    padding: var(--space-4);
    background: var(--color-white);
    border: 1px solid var(--color-black);
    font-size: var(--text-lg);
    font-family: var(--font-primary);
  }
</style>
