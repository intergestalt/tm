<script>
  import { onMount } from 'svelte';

  let initialDeg = 0;
  
  const svgRotateOffsetDeg = 0 // 135

  onMount(async () => {
    initialDeg = svgRotateOffsetDeg + new Date().getSeconds() * 6;
  })
</script>

<svg style="--start-deg: {initialDeg}deg; --end-deg: {initialDeg+360}deg;" width="266" height="266" viewBox="0 0 266 266" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M135.943,37.843L136.423,223.418" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:7.65px;"/>
  <path class="left" d="M189.647,88.404L45.079,143.614" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:7.65px;"/>
  <path class="right" d="M217.207,153.183L94.079,179.192" style="fill:none;fill-rule:nonzero;stroke:black;stroke-width:7.65px;"/>
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
    animation-name: clock;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .left { 
    transform-origin: 50% 40%; 
    animation-name: rotate;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .right { 
    transform-origin: 50% 60%; 
    animation-name: rotate;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }  

  @keyframes clock {
    from { transform: rotateZ(var(--start-deg)); }
    to   { transform: rotateZ(var(--end-deg)); }
  }

  @keyframes rotate {
    from { transform: rotateY(  0deg); }
    to   { transform: rotateY(360deg); }
  }  

</style>