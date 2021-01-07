<script>
  import { link, useResolve } from "svelte-navigator";
  
  import {styleVars} from '/helper'
  import Card from '/components/Atoms/Card.svelte'

  export let entries

  const resolve = useResolve();
  
</script>

<Card bgColorKey="white" >
  <div class="container">
    <h3 class="title">
      News
    </h3>
    {#each entries as entry}
      <a class="entry" href={ resolve("/news/" + entry.slug) } use:link>
        {entry.title}
        <slot />
      </a>
    {/each}
  </div>
</Card>

<style lang="scss">
  .container {

  }
  .title, .entry {
    margin-bottom: 22px;
    @include media-small {
      margin-bottom: 15px;
    }
  }
  .title {
    @include typo-grotesk-title-captions-20;
    color: $color-red;
  }
  .entry {
    @include typo-serif-text-28;
    display: block;
    white-space: pre-line;
  }
</style>