<script>
  import { VimeoPlayer } from 'svelte-vimeo-player';

  export let vimeoUrl = ""

  let player

  function setVolume(volume) {
    player.setVolume(volume)
    player.getVolume().then(function(volume) {
      console.log(volume)
    })
  }

  function logEvent(event) {
    console.log(event)
  }
</script>

<VimeoPlayer
  videoId={vimeoUrl}
  bind:player={player}
  on:error={logEvent}
  on:play={logEvent}
  on:pause={logEvent}
/>

<!--
<h1>Set volume</h1>
<button on:click={() => setVolume(0.1)}>10%</button>
<button on:click={() => setVolume(0.5)}>50%</button>
<button on:click={() => player.setVolume(1)}>100%</button>
-->