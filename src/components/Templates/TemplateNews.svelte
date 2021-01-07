<script>
  import { query } from "svelte-apollo";
  import { link, useResolve } from "svelte-navigator";
  
  import Card from '/components/Atoms/Card'

  import NEWS from '/gql/News'
  
  const req = query(NEWS);

  const resolve = useResolve();

  $: {
    if ($req.data) {
      console.log($req.data)
    }
  }
</script>

<section>

  {#if $req.loading}
    Loading...
  {:else if $req.error}
    Error: {$req.error.message}
  {:else}
    {#each $req.data.News as news}
      <Card>
        <a href={ resolve(news.slug) } use:link>
          { news.title }
        </a>
      </Card>
    {/each}
  {/if}
</section>

<style lang="scss">
  section {
  }

</style>