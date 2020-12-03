<script>
  import Polygon from './Polygon.svelte'
  import Logo from './Logo.svelte'

  import { useLocation, navigate } from "svelte-navigator";

  export let zIndex

  const location = useLocation();
  let  type = "normal"

  $: {
    type = $location.pathname === "/almanac" ? "high" : "normal"
  }

  function onClick() {
    navigate($location.pathname === "/almanac" ? "/" : "/almanac");
  }

</script>
  <div class="logo_container {type}" style="--z-index: {zIndex};">
  <Polygon n={7} blur={6} insideShape={false} class="logo_poly"></Polygon>
  <Logo {onClick} />
</div>

<style>
  .logo_container {
    right:0;
    top:200px;
    position: fixed;
    width: 200px;
    height: 200px;
    z-index: var(--z-index);
    transition: top 1s;
  }
  .logo_container.high {
    top: 0px;
  }

  .logo_container :global(svg) {
    position: absolute;
    top: 0;
    left:0;
  }
</style>