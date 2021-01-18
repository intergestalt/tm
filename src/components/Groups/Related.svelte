<script>
  import Card from '/components/Atoms/Card'
  import Link from '/components/Atoms/Link'

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
        <Link slug={ artwork.slug } section="artwork">
          <span class="title">
            { artwork.title }
            {#if true}
              <span class="year">
                { artwork.artworkYear }
              </span>
            {/if}
          </span>
          <span class="name">
            Artist Name
          </span>
        </Link>
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

    a {
      display: block;
    }
    .title {
      font-style: italic;
      display: inline-flex;
      .year {
        font-style: normal;
        &:before {
          content: ", "
        }
      }
    }
    .name {
      display: block;
    }
  }
</style>
