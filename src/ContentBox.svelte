<script>
  // https://stackoverflow.com/questions/20242806/hole-in-overlay-with-css

  import { onMount } from 'svelte';

  let hole

  onMount(async () => {
    const hole_elem = hole;
    // set the clip-path rule
    hole_elem.style.clipPath = makeCircleHoleClipPathRule( 50 );
  })

</script>

  <div class="hole" bind:this={hole}>
    <p>There is an <span class="hole-text">HOLE</span> here</p>
  </div>

  <div class="circle">
  </div>

<style>

  .hole {
    width: 500px;
    height: 200px;
    /* clip-path is set by JS */  
    border-radius: 30px;
    /*background: rgb(255,255,255);*/
    background: radial-gradient(circle at calc(100% - 40px) 40px, rgba(255,255,255,0) 20px, rgba(255,255,252,0.91) 20px);
    display: flex;
    justify-content: center;
    margin: 20px;
    box-shadow: 1px 1px 10px black;
    /*filter: blur(2px);*/
    position: relative;
  }

  .hole::after {
    content: "";
    border-radius: 50%;
    height: 40px;
    width: 40px;
    box-shadow: 0px 0px 10px inset black;
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .hole > p {
    align-self: center;
    font-size: 18px;
    font-weight: bold;
  }
  .hole-text {
    font-size: 100px;
  }
</style>