<script lang="ts">
  import emailjs from "@emailjs/browser";
  import {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID,
  } from "../config/emailjs";
  import Button from "./atoms/button.svelte";
  import FormField from "./atoms/form-field.svelte";

  let status: "idle" | "loading" | "success" | "error" = "idle";

  $: readonly = status === "loading" || status === "success";

  const sendEmail = (e: any) => {
    status = "loading";
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target,
        EMAILJS_USER_ID
      )
      .then(
        () => {
          status = "success";
        },
        (error) => {
          console.error(error);
          status = "error";
        }
      );
  };
</script>

<form on:submit|preventDefault={sendEmail}>
  <FormField label="Name">
    <input type="text" required name="name" {readonly} />
  </FormField>
  <FormField label="Email">
    <input type="email" required name="email" {readonly} />
  </FormField>
  <FormField label="Message">
    <textarea required name="message" {readonly} />
  </FormField>
  {#if status === "success"}
    <p class="success">Thanks for your message!</p>
  {:else}
    <Button class="button" disabled={status === "loading"}>Submit</Button>
    {#if status === "error"}
      <p class="error">Something went wrong. Please try again.</p>
    {/if}
  {/if}
</form>

<style lang="postcss">
  form {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  form :global(.button),
  .success {
    margin-top: var(--space-4);
    align-self: flex-start;
  }

  .success {
    padding: var(--space-4) 0;
  }
</style>
