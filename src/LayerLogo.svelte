<script>
  import Polygon from './Polygon.svelte'
  import Logo from './Logo.svelte'

  export let zIndex
</script>

<div class="logo_container" style="--z-index: {zIndex};">
  <Polygon n={7} blur={6} insideShape={false} class="logo_poly"></Polygon>
  <Logo />
</div>

<style>
  .logo_container {
    right:0;
    top:0;
    position: fixed;
    width: 200px;
    height: 200px;
    z-index: var(--z-index);
  }

  .logo_container :global(svg) {
    position: absolute;
    top: 0;
    left:0;
  }
</style>