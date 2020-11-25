<script>

  export let n = 7
  export let blur = 0

  let coords = []
  const base_angle = 2*Math.PI/n

  for (var i = 0; i <= n; i++) {
    let angle = i*base_angle;
    let x = Math.cos(angle);
    let y = Math.sin(angle);
    coords.push({x,y})
  }
  //console.log(coords)
  
  const percs = coords
    .map(c => ({ 
      x: Math.round(( c.x/2 + .5 ) * 100), 
      y: Math.round(( c.y/2 + .5 ) * 100) 
      }))
    .map(c => `${c.x}% ${c.y}%`)
  //console.log(percs)

</script>

<div style="--polygon-blur: {blur}px" class="wrapper" class:blur class:shadow="{!blur}">
  <div class="poly" style={ `clip-path: polygon(${percs.join(", ")})` }>
    <slot></slot>
  </div>
</div>

<style>
  .wrapper {
    display: inline-block;
  }
  .wrapper.blur {
    filter: blur(var(--polygon-blur));
  }
  .wrapper.shadow {
    filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 1));
  }
  .poly {
    width: 100px;
    height: 100px;
    background-color: red;
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  }
</style>