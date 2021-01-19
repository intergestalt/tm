<script>
  export let src;
  export let title;
  export let composer;
  export let performer;

  export let zIndex;

  let audio;
  let paused = true;

  import { styleVars } from '/helper'

</script>


<article class:playing={!paused}  style={ styleVars({zIndex}) }>
  <h2>{title}</h2>
  <p><strong>{composer}</strong> / performed by {performer}</p>

  <audio
    bind:this={audio}
    bind:paused
    on:play={stopOthers}
    controls
    {src}
  >
    <track default
    kind="captions"
    />
  </audio>
</article>

<style>
  article { 
    position: fixed;
    bottom: 0;
    height: 50px;
  }

  h2, p { margin: 0 0 0.3em 0; }
  audio { width: 100%; margin: 0.5em 0 1em 0; }
  .playing { color: #ff3e00; }
</style>