<script>
  import { overlayContent } from '/stores.js';

  export let zIndex

  let refused = false

  function onClick() {
    $overlayContent = null
  }

  $: {
    refused = String($overlayContent).indexOf("REFUSAL") !== -1
    console.log($overlayContent, refused)
  }

</script>

{#if $overlayContent }
  <div class="overlay" style="--zIndex: {zIndex};" on:click={onClick} class:refused>

    <div class="result">
      { $overlayContent }
    </div>

    <aside>
      <br />
      <a href="https://hackmd.io/n3coKNZ3TlyVXR3vHQQ7aQ?view#Queer-Motto-API" target="_blank">
        Queer Motto API
      </a>
    </aside>

  </div>
{/if}

<style lang="scss">
  .overlay {
    position: fixed;
    z-index: var(--zIndex);
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: $color-mint;
    color: $color-red;
    &.refused {
      background-color: $color-red;
      color: $color-mint;
    }
  }

  .result {
    white-space: pre-wrap;
    text-align: center;
  }

  aside {
    text-align: center;
  }

</style>