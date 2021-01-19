<script>
  import { useLocation, navigate } from "svelte-navigator";

  import Polygon from '/components/Atoms/Polygon.svelte'
  import Logo from '/components/Atoms/Logo.svelte'
  import { isMenuActive, scrollY } from '/stores.js';

  export let zIndex

  const location = useLocation();
  let  type = "normal"

  function onAlmanacIndex(path) {
    return path === "/almanac" || path === "/almanac/list"
  }

  function onAlmanacItem(path) {
    return path.indexOf("/almanac") === 0 && !onAlmanacIndex(path)
  }

  $: {
    type = $isMenuActive ? "low" 
      : onAlmanacIndex($location.pathname) ? "high" 
        : $scrollY > 10 || $location.pathname !== "/" ? "blurred" : "normal"
    if (onAlmanacItem($location.pathname)) type = "gone"
  }

  function onClick() {
    navigate(onAlmanacIndex($location.pathname) ? "/" : "/almanac");
  }

</script>
  <div class="logo_container {type}" style="--z-index: {zIndex};">
  <Polygon bgColor="mint" n={7} blur={type === "blurred" ? 25 : 6} insideShape={false} class="logo_poly"></Polygon>
  <div class="logo">
    <Logo {onClick} />
  </div>
</div>

<style>

  .logo {
    cursor: pointer;
  }
  .logo_container {
    right:49px;
    position: fixed;
    width: 200px;
    height: 200px;
    opacity: 1;
    z-index: var(--z-index);
    transition: all ease-out 2s 0.2s;
  }

  .logo_container.normal {
    top: 394px;
  }
  .logo_container.blurred {
    top: 460px;
  }

  .logo_container.high {
    top: 20px;
  }

  .logo_container.low {
    top: calc( 100vh - 20px );
    transform: translateY(-100%);
  }

  .logo_container.gone {
    top: 0;
    opacity: 0;
    pointer-events: none;
  }

  .logo_container :global(svg) {
    position: absolute;
    top: 0;
    left:0;
  }
</style>