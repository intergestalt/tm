<script>
  import { Link } from 'svelte-navigator'

  export let title, link
</script>

<div class="container">
  {#if link}
    <Link to={link}>{ title }</Link>
  {:else}
    { title }
  {/if}
</div>

<style lang="scss">
  .container {
    &, a {
      @include typo-grotesk-text-18;
    }
    @include box-shadow;
    display: inline;

    padding: 5px 15px;
    height: 34px;
    border-radius: 20px;
  }

</style>