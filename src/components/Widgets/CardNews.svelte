<script>
  import { link, useResolve } from "svelte-navigator";
  
  import {styleVars} from '/helper'
  import Card from '/components/Atoms/Card.svelte'
  import IconList from '/components/Icons/IconList.svelte'

  export let entries

  const maxEntries = 2
  const resolve = useResolve();

</script>

<Card bgColorKey="white" >
  <div class="container">
    <h3 class="title">
      News
    </h3>
    {#each entries as entry, i}
      {#if i < maxEntries }
        <a class="entry" href={ resolve("/news/" + entry.slug) } use:link>
          {entry.title}
          <slot />
        </a>
        {/if}
    {/each}
    <a class="more" href={ resolve("/news/") } use:link>
      <span class="text">Show more</span>
      <IconList class="icon"/>
    </a>
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

  .more {
    color: $color-red;
    display: flex;
    justify-content: space-between;
    .icon {
      
    }
  }
</style>