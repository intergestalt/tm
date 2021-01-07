<script>
  import { query } from "svelte-apollo";
  import { link, useResolve } from "svelte-navigator";

  import Card from '/components/Atoms/Card'
  import MarkdownBlock from '/components/Atoms/MarkdownBlock'

  import TEXT from '/gql/Text'

  export let slug
  
  const req = query(TEXT, {
    variables: { slug }
  });

  const resolve = useResolve();

  let body = ""

  $: {
    if ($req.data) {
      console.log($req.data)
      body = $req.data.Text.body
        .filter( e => e.__typename === "body_textBlock_BlockType")
        .map( e => e.textBlock)
        .join("\n")
    }
  }
</script>

<section>

  {#if $req.loading}
    Loading...
  {:else if $req.error}
    Error: {$req.error.message}
  {:else}
    <Card>
      <MarkdownBlock source={body} />
    </Card>
  {/if}
</section>

<style lang="scss">
  section {
  }

</style>