<script>
  import { query } from "svelte-apollo";
  import { link, useResolve, navigate } from "svelte-navigator";

  import IconClose from '/components/Icons/IconClose'
  import MarkdownBlock from '/components/Atoms/MarkdownBlock'
  import Video from '/components/Atoms/Video'
  
  export let data

  const resolve = useResolve();

  const item = data?.gallery

  const type = item.typeHandle === "audio" ? item.audioType : item.typeHandle

  const vimeoUrl = item?.videoSource?.[0]?.vimeoUrl


  let body = data?.Text?.body
  .filter( e => e.__typename === "body_textBlock_BlockType")
  .map( e => e.textBlock)
  .join("\n")

</script>

<section class="almanac-item">
  <div class="close" on:click={()=>navigate(-1)}>
    <IconClose />
  </div>
  <div class="content">
    <h2 class="category">
      { type }
    </h2>
    <div class="media">
      {#if vimeoUrl}
        <Video {vimeoUrl} />
      {/if}
    </div>
    <MarkdownBlock source={body} />
  </div>
</section>

<style lang="scss">
  section {
    height: 100vh;
    background-color: $color-beige;
    overflow-y: scroll;
    position: relative;
    text-align: center;

    //@include grid;
    //@include grid-padding;

    .close {
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
    }

    .content {
      //grid-column: 3 / span 8;
      display: inline-block;
      max-width: 820px;
      margin: auto;
      box-sizing: border-box;
      border: dashed 1px rgba(0,255,255,1);

      margin-left: 40px;
      margin-right: 40px;

      @include media-1col-only {
        margin-left: 20px;
        margin-right: 20px;
      }

      @include media-large-only {
        padding-left: 40px;
        padding-right: 40px;
        // note: images don't have this padding
      }

      margin-top: 88px; 
      margin-bottom: 50px;
      @include media-small {
        margin-top: 88px; 
        margin-bottom: 35px;
      }
    }
  }

  .category {
    @include typo-serif-small-caps-28;
    color: $color-red;
    margin-bottom: 32px;
  }

  .content {
    @include typo-serif-text-28;
  }

</style>