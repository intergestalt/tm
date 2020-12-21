<script>
  import Polygon from './Polygon.svelte'
</script>

<div>
  <Polygon n="7" >
    <slot />
  </Polygon>
</div>

<style lang="scss">
  @import './scss/includes.scss';

  div {
    @include typo-serif-text-28;
    :global(*::first-letter) {
      font-family: fantasy;
    }
  }
</style>