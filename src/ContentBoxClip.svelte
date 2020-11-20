<script>
  // https://stackoverflow.com/questions/20242806/hole-in-overlay-with-css

  import { onMount } from 'svelte';

  let hole

  function makeCircleHoleClipPathRule( radius ) {

    const inner_path = [];
    const circumference = Math.PI * radius;
    const step = Math.PI * 2 / circumference;
    // we are coming from top-left corner
    const start_step = circumference * (5 / 8);
    for( let i = start_step; i < circumference + start_step; i++ ) {
      const angle = step * i;
      const x = radius * Math.cos( angle );
      const y = radius * Math.sin( angle );
      const str = `calc( 50% + ${ x }px ) calc( 50% + ${ y }px )`;
      inner_path.push( str );
    }
    // avoid rounding issues
    inner_path.push( inner_path[ 0 ] );

    return `polygon( evenodd,
      /* outer rect */
      0 0,       /* top - left */
      100% 0,    /* top - right */
      100% 100%, /* bottom - right */
      0% 100%,   /* bottom - left */
      0 0,       /* and top - left again */
      ${ inner_path.join( "," ) }
     )`;

  }

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

  .circle {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    box-shadow: 1px 1px 10px inset black;
  }
  .hole {
    width: 500px;
    height: 200px;
    /* clip-path is set by JS */  
    border-radius: 30px;
    
    background-color: rgba(10, 161, 232, 1);
    /*background-image: url(https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png);*/
    background-size: 40px;
    /*-webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);*/
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    box-shadow: 1px 1px 10px black;
    /*filter: blur(2px);*/
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