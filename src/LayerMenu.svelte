<script>
  let isMenuActive = false

  const onMenu = () => { isMenuActive = !isMenuActive }

</script>

<div class="toggler">
  <div class="toggle-menu" on:click={onMenu} ></div>
  <div class="toggle-silence"></div>
</div>

<nav class={ isMenuActive ? "active" : ""}>
  <ol>
    <li>action</li>
    <li>action</li>
    <li>action</li>
    <li>action</li>
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
    background-color: rgba(0,255,0,0.5);  
    user-select: none;
  }

  nav:not(.active) {
    display: none;
  }

  li {
    pointer-events: all;
  }
</style>