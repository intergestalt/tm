<script>
  import { query as query } from "svelte-apollo";

  export let gql, variables = null, component

  const req = query(gql, { variables });

  $: {
    if ($req.data) {
      console.log("Query", gql.definitions[0].name.value, $req.data)
    }
  }

</script>

{#if $req.loading}
  Loading...
{:else if $req.error}
  Error: {$req.error.message}
{:else}
  {#if $req.data}
    <svelte:component this={component} data={$req.data} />
  {/if}
{/if}
