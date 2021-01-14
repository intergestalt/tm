<script>
  import { query } from "svelte-apollo";
  import { link, useResolve } from "svelte-navigator";

  import PageHeader from '/components/Atoms/PageHeader'
  import MarkdownRenderer from '/components/Groups/MarkdownRenderer'
  import SideGroup from '/components/Groups/SideGroup'

  export let data

  const resolve = useResolve();

  let body= data.Text.body[0].textBlock

  // let body = data.Text && data.Text.body
  // .filter( e => e.__typename === "body_textBlock_BlockType")
  // .map( e => e.textBlock)
  // .join("\n")

</script>

<div class="container">

  <div class="header">
    <PageHeader>
      Visit
    </PageHeader>
  </div>

  <section class="main">
    {#if body}
      <MarkdownRenderer source={body} />
    {/if}
  </section>

  <aside class="side">
    <SideGroup />
  </aside>

</div>

<style lang="scss">
  .container {
    @include grid-padding;
    @include media-2col {
      @include grid;
    }
  }

  .header {
    grid-column: 1 / span 9;
  }
  .main {
    grid-column: 1 / span 9;
    grid-row: 2;
  }

  .side {
    grid-column: 10 / span 3;
    grid-row: 2;
  }

  code {
    grid-row: 3;
    white-space: pre;
  }

</style>