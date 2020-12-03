<script>
  import { Router, Link, Route } from "svelte-navigator";
  
  export let zIndex

  let isMenuActive = false

  const onMenu = () => { isMenuActive = !isMenuActive }

</script>

<div class="toggler">
  <div class="toggle-menu" on:click={onMenu} ></div>
  <div class="toggle-silence"></div>
</div>

<nav class={ isMenuActive ? "active" : ""} style="--z-index: {zIndex};">
  <ol>
    <li>
      <Link to="theme" on:click={onMenu}>Theme</Link>
    </li>
    <li>
      <Link to="programme on:click={onMenu}">Programme</Link>
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

<style>

  .toggler {
    position: fixed;
    left: 20px;
    top: 20px;
    z-index: 10;
    mix-blend-mode: difference;
  }

  [class^="toggle-"] {
    height: 50px;
    border-radius: 25px;
    display: inline-block;
    background-color: #00FF94;
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
    background-color: #F2F2F2;
    opacity: 0.9;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--z-index);
  }

  ol {

  }
  nav:not(.active) {
    display: none;
  }

  li {
    pointer-events: all;
  }
</style>