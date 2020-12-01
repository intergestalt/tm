<script>
  import Polygon from './Polygon.svelte'
  import Logo from './Logo.svelte'

</script>

<div class="logo_container">
  <Polygon n={7} insideShape={false} >
    <Logo />
  </Polygon>
</div>

<style>
div {
  right:0;
  top:0;
  position: fixed;
}
.logo_container :global(.logo_poly) {
  
}
</style>