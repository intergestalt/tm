<script>
  import { Link, link, useResolve } from "svelte-navigator";
  
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
        <span class="entry">
          <Link to={ resolve("/news/" + entry.slug) } >
            {entry.title}
            <slot />
          </Link>
        </span>
        {/if}
    {/each}
    <Link to={ resolve("/news/") } >
      <span class="more">
        <span class="text">Show more</span>
        <IconList class="icon"/>
      </span>
    </Link>
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
    @include typo-grotesk-title-captions-20;
    color: $color-red;
    display: flex;
    justify-content: space-between;
    .icon {
      
    }
  }
</style>