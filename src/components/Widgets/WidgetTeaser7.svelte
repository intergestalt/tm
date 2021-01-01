<script>
  import Polygon from '/components/Atoms/Polygon.svelte'
</script>

<div>
  <Polygon n="7" >
    <slot />
  </Polygon>
</div>

<style lang="scss">


  div {
    @include typo-serif-text-28;
    :global(*::first-letter) {
      font-family: fantasy;
    }
  }
</style>