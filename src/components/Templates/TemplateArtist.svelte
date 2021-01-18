<script>
  import { query } from "svelte-apollo";
  import { Link, useResolve } from "svelte-navigator";

  import MarkdownRenderer from '/components/Groups/MarkdownRenderer'
  import SideGroup from '/components/Groups/SideGroup'
  import CardMainContent from '/components/Widgets/CardMainContent'
  import Related from '/components/Groups/Related'

  export let data

  const resolve = useResolve();

  let artist = data?.artist || {}

  // let body = data.Text && data.Text.body
  // .filter( e => e.__typename === "body_textBlock_BlockType")
  // .map( e => e.textBlock)
  // .join("\n")

</script>

<div class="container">

  <section class="main">
    <CardMainContent
      category="Artists"
      title={ artist.title }
    >
    { JSON.stringify(artist) }
    </CardMainContent>

    <Related data={artist} />

  </section>

  <aside class="side">
    <!--SideGroup /-->
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

  li, a {
    @include typo-grotesk-text-24;
  }

</style>