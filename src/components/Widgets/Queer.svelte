<script>
  import { onMount } from 'svelte'

  import Polygon from '/components/Atoms/Polygon.svelte'

  let result = ""

  async function doRequest() {
    const res = await fetch('https://toknowexactlyhowmanytimestocry.net/queermottoAPI/r1/refusal?rq=generate&org=refuse-tokenisms-tm-2021', {
      method: 'GET',
    })
    
    const json = await res.json()
    result = json.replace(/\\n/g, "\n")
    //console.log(json)
  }

</script>

<div>
  <Polygon n="5" >

    <button on:click={doRequest}>Request Queer Motto</button>

    <div class="result">
      { result }
    </div>

    <aside>
      <a href="https://hackmd.io/n3coKNZ3TlyVXR3vHQQ7aQ?view#Queer-Motto-API" target="_blank">Browse API Specifications</a>
    </aside>

  </Polygon>
</div>

<style lang="scss">


  .result {
    white-space: pre-wrap;
    color: $color-red;
    text-align: center;
  }

  aside {
    text-align: center;
  }

  div {
    @include typo-serif-text-28;
    :global(*::first-letter) {
      font-family: fantasy;
    }
  }
</style>