<script>
  import { onMount } from 'svelte'
  
  import { overlayContent } from '/stores.js';

  import Polygon from '/components/Atoms/Polygon.svelte'

  let result = ""

  const requestUrl = 'https://toknowexactlyhowmanytimestocry.net/queermottoAPI/r1/refusal?rq=generate&org=refuse-tokenisms-tm-2021'
  const refusalUrl = 'https://toknowexactlyhowmanytimestocry.net/queermottoAPI/r1/refusal?rq=gener'

  async function doRequest() {
    const res = await fetch(requestUrl, {
      method: 'GET',
    })
    
    const json = await res.json()
    result = json.replace(/\\n/g, "\n")
    console.log(json)
    $overlayContent = result
  }

</script>

<div class="container" class:valid={!!result}>

  <b class="button" title={requestUrl} on:click={doRequest}>
    Reveal your
    queer motto
    of today
  </b>
  
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

  .button {
    cursor: pointer;
    text-decoration: underline;
    white-space: pre-line;
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