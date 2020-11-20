<script>
  import { VimeoPlayer } from 'svelte-vimeo-player';
  import { onMount } from 'svelte';

  let player;
  
  function logEvent(event) {
    console.log(event)
  }

  onMount(async () => {
    setTimeout(()=>{player.play();}, 2000)
  })

  // live streams: https://vimeo.com/search/page:1?live=now

</script>

<!--
<img alt="bg" src="https://picsum.photos/seed/picsum/1500/1500" />

-->

<div class="videocontainer">
  <VimeoPlayer
    videoId="481227527"
    bind:player={player}
    on:error={logEvent}
    on:play={logEvent}
    on:pause={logEvent}
  />
</div>

<style>
  img, :global(.videocontainer iframe) {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
    position: fixed;
    display: block;
    z-index: -1;

    transform: scale(1.5);
    /*filter: blur(8px);*/
  }
</style>