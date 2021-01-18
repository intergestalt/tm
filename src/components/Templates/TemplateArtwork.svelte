<script>
  import { query } from "svelte-apollo";
  import { Link, useResolve } from "svelte-navigator";

  import MarkdownRenderer from '/components/Groups/MarkdownRenderer'
  import MarkdownBlock from '/components/Atoms/MarkdownBlock'
  import SideGroup from '/components/Groups/SideGroup'
  import CardMainContent from '/components/Widgets/CardMainContent'
  import Related from '/components/Groups/Related'

  export let data

  const resolve = useResolve();

  let artwork = data?.artwork || {}

  let body = artwork.body ? artwork.body
    .filter( e => e.__typename === "body_textBlock_BlockType")
    .map( e => e.textBlock)
    .join("\n")
    : ""

  const authorGroups = artwork?.relatedPeople.filter(p => p.relationshipType === "author") || []
  let authors = []
  for (let group of authorGroups) {
    if (group.members && group.members.length > 0) authors.push(...group.members)
  }

  const title = authors ? authors.map(p => p.title).join(", ") : artwork.title

</script>

<div class="container">

  <section class="main">
    <CardMainContent
      category="Exhibition"
      title={ title }
    >
    <MarkdownBlock source={body} />
    </CardMainContent>

    <Related data={artwork} />

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