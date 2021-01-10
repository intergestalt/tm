<script>
  import { query } from "svelte-apollo";
  import { link, useResolve } from "svelte-navigator";

  import Card from '/components/Atoms/Card'
  import MarkdownBlock from '/components/Atoms/MarkdownBlock'
  
  export let data

  const resolve = useResolve();

  let body = data.Text.body
  .filter( e => e.__typename === "body_textBlock_BlockType")
  .map( e => e.textBlock)
  .join("\n")

</script>

<section>

  <Card>
    <MarkdownBlock source={body} />
  </Card>

</section>

<style lang="scss">
  section {
  }

</style>