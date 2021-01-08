<script>
  import { onMount } from 'svelte'

  import Polygon from '/components/Atoms/Polygon.svelte'

  let result = ""

  // Text: Reveal your queer motto of today
  // overlay
  // text: Queer Motto API

  const requestUrl = 'https://toknowexactlyhowmanytimestocry.net/queermottoAPI/r1/refusal?rq=generate&org=refuse-tokenisms-tm-2021'
  const refusalUrl = 'https://toknowexactlyhowmanytimestocry.net/queermottoAPI/r1/refusal?rq=gener'

  async function doRequest() {
    const res = await fetch(requestUrl, {
      method: 'GET',
    })
    
    const json = await res.json()
    result = json.replace(/\\n/g, "\n")
    console.log(json)
  }

</script>

<div class="container" class:valid={!!result}>

    {#if !result}
      <b title={requestUrl} on:click={doRequest}>Reveal<br />your queer motto<br />of today</b>
    {/if}

    <div class="content">

      <div class="result" on:click={doRequest}>
        { result }
      </div>

      {#if !!result}
        <aside>
          <br />
          <a href="https://hackmd.io/n3coKNZ3TlyVXR3vHQQ7aQ?view#Queer-Motto-API" target="_blank">Browse API Specifications</a>
        </aside>
      {/if}

  </div>

</div>

<style lang="scss">

  .container {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: $color-mint;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: $round-inset-shadow;

    @include typo-grotesk-text-24;
    &, * {font-family: monospace; }
  }

  b {
    cursor: pointer;
    text-decoration: underline;
  }

  .result {
    white-space: pre-wrap;
    color: $color-red;
    text-align: center;
  }

  aside {
    text-align: center;
  }

  button {
    @include typo-grotesk-title-captions-20;
    position: absolute;
    top:50%;left:50%;
    transform: translateX(-50%) translateY(-50%);
    //border-radius: 10px;

    .valid & {
      opacity: 0.7;
    }
  }

</style>