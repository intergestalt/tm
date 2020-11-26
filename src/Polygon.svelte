<script>

  export let n = 7
  export let blur = 0

  let coords = []
  const base_angle = 2*Math.PI/n

  for (var i = 0; i <= n; i++) {
    let angle = i*base_angle;
    let x = Math.cos(angle) / 2 + .5;
    let y = Math.sin(angle) / 2 + .5;
    coords.push({x,y})
  }
  //console.log(coords)
  
  const coordsToCssPolygon = function(coords) {
    const string = coords.map(c => ({ 
      x: Math.round( c.x * 100), 
      y: Math.round( c.y * 100) 
      })).map(c => `${c.x}% ${c.y}%`).join(", ")
    return `polygon(${string})`
  }

  const coordsRight = [
    {x: 1  , y: 0},
    {x: 0.5, y: 0},
    ...coords.filter( c => c.x >= .5).sort( (a,b) => a.y - b.y),
    {x: 0.5, y: 1},
    {x: 1  , y: 1},
  ].map( c => ({...c, x: c.x * 2 - 1}))

  const coordsLeft = [
    {x: 0  , y: 0},
    {x: 0.5, y: 0},
    ...coords.filter( c => c.x <= .5).sort( (a,b) => a.y - b.y),
    {x: 0.5, y: 1},
    {x: 0  , y: 1},
  ].map( c => ({...c, x: c.x * 2}))

</script>

<div 
    style="--polygon-blur: {blur}px" 
    class="wrapper" 
    class:blur 
    class:shadow="{!blur}"
  >
  <div 
    class="poly" 
    style="--polygon-clip-path: {coordsToCssPolygon(coords)};">

    <div class="shape-left" style="--polygon-shape-path: {coordsToCssPolygon(coordsLeft)}">
    </div>

    <div class="shape-right" style="--polygon-shape-path: {coordsToCssPolygon(coordsRight)}">
    </div>

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
    overflow: hidden;
    width: 100px;
    height: 100px;
    background-color: red;
    clip-path: var(--polygon-clip-path);
    padding: 10px;
  }
  .shape-left, .shape-right {
    height: 100px;
    width:50px;
    top:0;
    background: rgba(0,255,0,0.3);
    shape-outside: var(--polygon-shape-path) margin-box;
    clip-path: var(--polygon-shape-path);
  }
  .shape-left {
    float: left;
    left: 0;
  }

  .shape-right {
    float: right;
    right: 0;
  }

</style>