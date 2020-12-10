<script>
  import { Router, Link, Route } from "svelte-navigator";
  import { isMenuActive } from './stores.js';

  export let zIndex

  const onMenu = () => { $isMenuActive = !$isMenuActive }

</script>

<div class:active={$isMenuActive} class="toggler">
  <div class="toggle-menu" on:click={onMenu} ></div>
  <div class="toggle-silence"></div>
</div>

<nav id="main_nav" class:active={$isMenuActive} style="--z-index: {zIndex};">
  <ol>
    <li>
      <Link to="theme" on:click={onMenu}>Theme</Link>
    </li>
    <li>
      <Link to="programme" on:click={onMenu}>Programme</Link>
    </li>
    <li>
      <Link to="artists" on:click={onMenu}>Artists</Link>
    </li>
    <li>
      <Link to="/" on:click={onMenu}>Visit</Link>
    </li>
    <li>
      <Link to="about" on:click={onMenu}>About</Link>
    <li>
  </ol>
</nav>

<style lang="scss">
  @import './scss/includes.scss';

  .toggler {
    position: fixed;
    left: 20px;
    top: 20px;
    z-index: 10;
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
  }

  nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: #F2F2F2f0;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--z-index);
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