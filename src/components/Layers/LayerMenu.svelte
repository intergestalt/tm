<script>
  import { Router, Link, Route, useLocation } from "svelte-navigator";
  import { isMenuActive, isMeditationOn } from '/stores.js';
  import { styleVars } from '/helper'

  export let zIndex

  const onMenu = () => { $isMenuActive = !$isMenuActive }
  const onSilence = () => { $isMeditationOn = !$isMeditationOn }
  const exit = () => { $isMenuActive = false }

  const location = useLocation();

  $: $location && exit() // exit menu whenever there is a route change

</script>

<div class:active={$isMenuActive} class="toggler" style="--zIndex: {zIndex+1};">
  <div class="toggle-menu" on:click={onMenu} ></div>
  <div class="toggle-silence" on:click={onSilence}></div>
</div>

<nav id="main_nav" class:active={$isMenuActive} style={styleVars({ zIndex })} on:click={exit}>
  <ol>
    <li>
      <Link to="theme" >Theme</Link>
    </li>
    <li>
      <Link to="programme" >Programme</Link>
    </li>
    <li>
      <Link to="artists" >Artists</Link>
    </li>
    <li>
      <Link to="/" >Visit</Link>
    </li>
    <li>
      <Link to="about" >About</Link>
    <li>
  </ol>
</nav>

<style lang="scss">


  .toggler {
    position: fixed;
    left: 20px;
    top: 20px;
    z-index: var(--zIndex);
    mix-blend-mode: difference;
    &.active {
      mix-blend-mode: normal;
    }
  }

  [class^="toggle-"] {
    height: 50px;
    border-radius: 25px;
    display: inline-block;
    background-color: $color-mint;
    filter: blur(10px);
    user-select: none;
  }

  [class^="toggle-"]:hover {
    cursor: pointer;
  }

  .toggle-menu {
    width: 200px;
  }


  .toggle-silence {
    margin-left: 50px;
    width: 50px;
  }

  nav:not(.active) {
    display: none;
    pointer-events: none;
  }

  nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #F2F2F2f0;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--zIndex);
  }

  ol {
    @include typo-grotesk-title-100;
    :global(a) {
      text-align: center;
      display: inline-block;
      width: 100%;
    }
  }
  nav:not(.active) {
    display: none;
  }

  li {
    pointer-events: all;
    &:hover {
      color: $color-mint;
    }
  }

  :global(#main_nav a, a:hover, a:active) {
    text-decoration: none;
  }

</style>