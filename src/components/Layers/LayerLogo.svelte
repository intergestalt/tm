<script>
  import { useLocation, navigate } from "svelte-navigator";

  import Polygon from '/components/Atoms/Polygon.svelte'
  import Logo from '/components/Atoms/Logo.svelte'
  import { isMenuActive } from '/stores.js';

  export let zIndex

  const location = useLocation();
  let  type = "normal"

  $: {
    type = $isMenuActive ? "low" : $location.pathname === "/almanac" ? "high" : "normal"
  }

  function onClick() {
    navigate($location.pathname === "/almanac" ? "/" : "/almanac");
  }

</script>
  <div class="logo_container {type}" style="--z-index: {zIndex};">
  <Polygon bgColor="mint" n={7} blur={6} insideShape={false} class="logo_poly"></Polygon>
  <Logo {onClick} />
</div>

<style>
  .logo_container {
    right:0;
    position: fixed;
    width: 200px;
    height: 200px;
    z-index: var(--z-index);
    transition: all 1s;
  }

  .logo_container.normal {
    top: 200px;
  }

  .logo_container.high {
    top: 0px;
  }

  .logo_container.low {
    top: calc( 100vh - 20px );
    transform: translateY(-100%);
  }

  .logo_container :global(svg) {
    position: absolute;
    top: 0;
    left:0;
  }
</style>