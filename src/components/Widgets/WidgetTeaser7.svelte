<script>
  import Polygon from '/components/Atoms/Polygon.svelte'
</script>

<div>
  <Polygon n="7" rotate="0.8">
    <slot />
  </Polygon>
</div>

<style lang="scss">


  div {
    @include typo-serif-text-28;
    :global(*:first-child::first-letter) {
      font-family: OldEnglishFive, fantasy;
    }
  }
</style>