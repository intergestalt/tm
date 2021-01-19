<script>
  import { VimeoPlayer } from 'svelte-vimeo-player';
  import { onMount } from 'svelte';

  import { styleVars } from '/helper'

  export let zIndex;
  export let blur = false;
  export let playing = false;

  let backdropFilter, backdropOpacity, prevPlaying, vjs

  $: {
    backdropFilter = blur ? "blur(10px)" :  "none"
    backdropOpacity = blur ? 1 : 1
    // console.log(playing)
    if (typeof(prevPlaying) !== "undefined") {
      if (playing) vjs.play()
      else vjs.pause()
    }
    prevPlaying = playing
  }

  let player;
  let videoplayer
  
  function logEvent(event) {
    console.log(event)
  }

  onMount(async () => {
    //setTimeout(()=>{player.play();}, 2000)
    //player.setVolume(0);
    vjs = videojs(videoplayer)
    vjs.play();
  })

  // live streams: https://vimeo.com/search/page:1?live=now

</script>

<!--
<img alt="bg" src="https://picsum.photos/seed/picsum/1500/1500" />

-->


<!--
<div class="videocontainer">

  <VimeoPlayer
    videoId="481227527"
    bind:player={player}
    on:error={logEvent}
    on:play={logEvent}
    on:pause={logEvent}
  />
</div>
-->
<div class="videocontainer" style={ styleVars({zIndex, backdropFilter, backdropOpacity}) }>
  <video 
    muted 
    bind:this={videoplayer} 
    on:loadeddata={ () => vjs.pause() }
    autoplay 
    playsinline
    class="video-js vjs-default-skin" 
    data-setup={'{ "fluid": true}'}
  >
      <source src="https://rec.stream.intergestalt.cloud/hls/test.m3u8" type="application/x-mpegURL" />
  </video>
</div>

<style lang="scss">
  /*img, :global(.videocontainer iframe)*/ .videocontainer {
    height: 100%;
    width: 100%;
    top:0;
    left:0;
    position: fixed;
    display: block;
    z-index: var(--zIndex);

    /*transform: scale(1.5);*/
    /*filter: blur(8px);*/

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top:0;
      left:0;
      opacity: var(--backdropOpacity);
      backdrop-filter: var(--backdropFilter);
      transition: all 1s;
    }
  }
  :global(video) {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }

  :global(.vjs-tech) { object-fit: cover; }
  :global(.vjs-fluid) {
    height: 100% !important;
  }
</style>