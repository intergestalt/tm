<script>
  import { Link } from "svelte-navigator";

  import AlmanacGrid from '/components/Groups/AlmanacGrid.svelte'
  import AlmanacList from '/components/Groups/AlmanacList.svelte'

  export let data, listview

  const text = "The Almanac Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. The Almanac Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur."

  const short = "Dolore non nostrud quis proident pariatur aute velit magna nulla ut ad id elit"

</script>

<section>

  <h1>
    Almanac
  </h1>

  {#if listview}
    <AlmanacList {data} />
  {:else}
    <AlmanacGrid {data} />
  {/if}
  
</section>

<style lang="scss">

  section {
    box-sizing: border-box;
    min-height: 100vh;
  }

  h1 {
    @include grid-padding;
    font-size: 22vw;
    line-height: 22vw;
    @include media-2col {
      font-size: 16vw;
      line-height: 16vw;
    }
    @include media-4col {
      text-align: center;
    }    
    color: $color-red;
    padding-top: 48px;
  }


</style>