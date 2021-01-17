<script>
  import { Link } from 'svelte-navigator'

  import Polygon from '/components/Atoms/Polygon.svelte'

  export let text, link
</script>

<div class="container">
  <Polygon n="7" rotate="0.8">
    <div class="content">
      {#if link}
        <Link to={link}>
          { text }
        </Link>
      {:else}
        { text }
      {/if}
    </div>
  </Polygon>
</div>

<style lang="scss">

  .container {
  }
  .content {
    @include typo-serif-text-22;
    hyphens: auto;
    text-align: justify;
    text-overflow: ellipsis;
    padding-top: 2em;
    padding-bottom: 2em;
    height: 100%;
    box-sizing: border-box;

    /*&::after {
      content: "READ MORE";
      position: absolute;
      bottom: 2em;
      width: 100%;
      text-align: center;
      left:0;
      background: $color-beige;
    }*/
    &::first-letter {
      @include typo-old-caps-28;
    }

    .more {
      position: absolute;
      top: 14em;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>