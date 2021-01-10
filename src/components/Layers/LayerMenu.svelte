<script>
  import { Router, Link, Route, useLocation, link } from "svelte-navigator";
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

<h1 class="transmediale">
  <a href="/" use:link style="--zIndex: {zIndex+1};">transmediale</a>
</h1>

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
      <Link to="visit" >Visit</Link>
    </li>
    <li>
      <Link to="about" >About</Link>
    <li>
  </ol>
</nav>

<style lang="scss">

  .toggler, .transmediale {
    position: fixed;
    z-index: var(--zIndex);
  }

  .toggler {
    left: 20px;
    top: 20px;
    mix-blend-mode: difference;
    
    &.active {
      position: absolute;
      mix-blend-mode: normal;
    }
  }

  .transmediale {
    left: 300px;
    top: 20px;
    line-height: 60px;

    @include media-small {
      left: 240px;
      line-height: 40px;
    }

    @include media-larger {
      left: 356px;
    }

    &, a {
      display:block;
      color: $color-white;
      @include typo-grotesk-title-transmediale;
    }
  }

  .toggle-menu, .toggle-silence {
    display: inline-block;
    background-color: $color-mint;
    user-select: none;

    height: 60px;
    border-radius: 30px;
    //filter: blur(15px);
    filter: blur(10px);
    @include media-small {
      //filter: blur(12px);
      filter: blur(8px);
      height: 40px;
      border-radius: 20px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .toggle-menu {
    width: 180px;
    @include media-small {
      width: 160px;
    }
    @include media-larger {
      width: 236px;
    }
  }


  .toggle-silence {
    width: 60px;
    margin-left: 20px;
    @include media-small {
      width: 40px;
      margin-left: 10px;
    }
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