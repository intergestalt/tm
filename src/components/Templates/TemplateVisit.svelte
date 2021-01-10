<script>
  import { query } from "svelte-apollo";
  import { link, useResolve } from "svelte-navigator";

  import PageHeader from '/components/Atoms/PageHeader'
  import MarkdownRenderer from '/components/Groups/MarkdownRenderer'
  import SideGroup from '/components/Groups/SideGroup'

  export let data

  const resolve = useResolve();

  let body=`

# Headline

text

# headline 2

text 2
  
  `


  // let body = data.Text && data.Text.body
  // .filter( e => e.__typename === "body_textBlock_BlockType")
  // .map( e => e.textBlock)
  // .join("\n")

</script>

<div class="container">

  <section class="main">
    <PageHeader>
      Visit
    </PageHeader>
    {#if body}
      <MarkdownRenderer source={body} />
    {/if}
    <code>
      {body}
    </code>
  </section>

  <aside class="side">
    <SideGroup />
  </aside>
</div>

<style lang="scss">
  .container {
    @include grid;
    @include grid-padding;
  }
  .main {
    grid-column: 1 / span 9;
  }

  .side {
    grid-column: 10 / span 3;
  }

  code {
    white-space: pre;
  }

</style>