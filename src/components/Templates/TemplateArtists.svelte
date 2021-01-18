<script>
  import { query } from "svelte-apollo";
  import { Link, useResolve } from "svelte-navigator";

  import PageHeader from '/components/Atoms/PageHeader'
  import MarkdownRenderer from '/components/Groups/MarkdownRenderer'
  import SideGroup from '/components/Groups/SideGroup'
  import Card from '/components/Atoms/Card'

  export let data, title

  const resolve = useResolve();

  let artists = data?.artists

  // let body = data.Text && data.Text.body
  // .filter( e => e.__typename === "body_textBlock_BlockType")
  // .map( e => e.textBlock)
  // .join("\n")

</script>

<div class="container">

  <div class="header">
    <PageHeader>
      {title}
    </PageHeader>
  </div>

  <section class="main">
    <Card standardRadius>
      {#if artists}
        <ol>
          {#each artists as artist}
            <li>
              <Link to={artist.slug}>
                {artist.title}
              </Link>
            </li>
          {/each}
        </ol>
      {/if}
    </Card>
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