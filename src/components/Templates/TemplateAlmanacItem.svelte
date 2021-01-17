<script>
  import { query } from "svelte-apollo";
  import { link, useResolve, navigate } from "svelte-navigator";

  import IconClose from '/components/Icons/IconClose'
  import MarkdownBlock from '/components/Atoms/MarkdownBlock'
  
  export let data

  const resolve = useResolve();

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
      background: rgba(0,255,255,0.3);

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

</style>