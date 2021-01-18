<script>
  import Card from '/components/Atoms/Card'

  export let data

  console.log(data)
</script>

{#if data?.relatedArtworks && data.relatedArtworks.length > 0}
  <h6 class="header">
    Related Artworks
  </h6>
  {#each data.relatedArtworks as artwork}
    <Card flow>
      <div class="artwork card">
        <span class="title">
          { artwork.title }
        </span>
        {#if true}
          <span class="year">
            year
          </span>
        {/if}
        <span class="name">
          Artist Name
        </span>
      </div>
    </Card>
  {/each}
{/if}

<style lang="scss">
  .header {
    @include typo-grotesk-title-captions-20;
    margin-top: 34px; // 
    margin-bottom: 15px;
    color: $color-white;
  }
  .card {
    @include typo-serif-text-28;
    .title {
      font-style: italic;
    }
    .year {
      &:before {
        content: ", ";
      }
    }
    .name {
      display: block;
    }
  }
</style>
