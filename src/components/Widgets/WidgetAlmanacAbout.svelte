<script>
  import Polygon from '/components/Atoms/Polygon.svelte'

  export let text
</script>

<div class="container">
  <Polygon n="7" rotate="0.8">
    <div class="content">
      { text }
    </div>
  </Polygon>
</div>

<style lang="scss">

  .container {
  }
  .content {
    @include typo-serif-text-22;
    hyphens: auto;
    text-overflow: ellipsis;
    padding-top: 2em;
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
  }
</style>