<script>

  export let n = 7
  export let blur = 0
  export let insideShape = true
  export let width = "100%"
  export let bgColor = "beige"
  export let rotate = 0 // rotate by fraction of the base angle. 1 means rotate just so much that it looks the same

  let coords = []
  const base_angle = 2*Math.PI/n
  const angle_offset = rotate/n * 2 * Math.PI

  for (var i = 0; i <= n; i++) {
    let angle = i*base_angle + angle_offset;
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

  const topMostPoint = coords.reduce((prev, current) => (prev.y < current.y) ? prev : current)
  const bottomMostPoint = coords.reduce((prev, current) => (prev.y > current.y) ? prev : current)

  const coordsRight = [
    {x: 1  , y: 0},
    topMostPoint,
    ...coords.filter( c => c.x >= .5).sort( (a,b) => a.y - b.y),
    bottomMostPoint,
    {x: 1  , y: 1},
  ].map( c => ({...c, x: c.x * 2 - 1}))

  const coordsLeft = [
    {x: 0  , y: 0},
    topMostPoint,
    ...coords.filter( c => c.x <= .5).sort( (a,b) => a.y - b.y),
    bottomMostPoint,
    {x: 0  , y: 1},
  ].map( c => ({...c, x: c.x * 2}))

</script>
<div class="superwrapper" style="width: {width}">
  <div 
      style="--polygon-blur: {blur}px;" 
      class={`wrapper ${$$props.class}`} 
      class:blur 
      class:shadow="{!blur}"
    >
    <div 
      class="poly color-{bgColor}"
      style="--polygon-clip-path: {coordsToCssPolygon(coords)}"
      >

      {#if insideShape}
        <div class="shape-left" style="--polygon-shape-path: {coordsToCssPolygon(coordsLeft)}">
        </div>

        <div class="shape-right" style="--polygon-shape-path: {coordsToCssPolygon(coordsRight)}">
        </div>
      {/if}

      <slot></slot>
    </div>
  </div>
</div>

<style lang="scss">


  .superwrapper {
    display: inline-block;
  }

  .wrapper {
    display: inline-block;
    padding-bottom: 100%;
    height: 0;
    position: relative;
    width: 100%;
    transition: filter 1s;
  }
  .wrapper.blur {
    filter: blur(var(--polygon-blur));
  }
  .wrapper.shadow {
    filter: drop-shadow($shadow);
  }
  .poly {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    clip-path: var(--polygon-clip-path);
    padding: 6%;
    box-sizing: border-box;
    &.color-mint {
      background-color: $color-mint;
    }
    &.color-beige {
      background-color: $color-beige;
    }
  }
  .shape-left, .shape-right {
    height: 100%;
    width:50%;
    top:0;
    background: rgba(0,0,0,0.03);
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