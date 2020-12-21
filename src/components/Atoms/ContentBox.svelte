<script>
  import { styleVars } from '/helper'

  export let bgImage = ""

  $: console.log(bgImage)

</script>

<div class="container" class:bgImage={bgImage} style={styleVars({imageUrl: `url("${bgImage}")`})}>
  <slot></slot>
</div>

<style lang="scss">
  @import '../../scss/includes.scss';

  $hole-radius-large: 0.5 * $hole-diameter-large;
  $hole-radius-small: 0.5 * $hole-diameter-small;

  .container {
    @include typo-serif-small-caps-28;
    width: 100%;
    min-height: 90px;
    /* clip-path is set by JS */  
    border-radius: 30px;
    background: radial-gradient(
      circle at calc(100% - #{$hole-distance-large + $hole-radius-large}) #{$hole-distance-large + $hole-radius-large}, 
      rgba(255,255,255,0) $hole-radius-large, 
      rgba(255,255,252,0.91) $hole-radius-large
      );
    display: flex;
    justify-content: center;
    margin: 20px;
    padding: 14px 30px;
    @include media-small {
      padding: 10px 20px;
      background: radial-gradient(
      circle at calc(100% - #{$hole-distance-small + $hole-radius-small}) #{$hole-distance-small + $hole-radius-small}, 
      rgba(255,255,255,0) $hole-radius-small, 
      rgba(255,255,252,0.91) $hole-radius-small
      );
    }
    box-shadow: 1px 1px 10px black;
    /*filter: blur(2px);*/
    position: relative;
    /*backdrop-filter: blur(4px);*/
  }

  .container.bgImage {
    background-image: var(--imageUrl);
    background-size: cover;
    &::after {
      display: none;
    }
  }

  .container::after {
    content: "";
    border-radius: 50%;
    box-shadow: 0px 0px 10px inset black;
    position: absolute;
    right: $hole-distance-large;
    top: $hole-distance-large;    
    height: $hole-diameter-large;
    width: $hole-diameter-large;
    @include media-small {
      right: $hole-distance-small;
      top: $hole-distance-small;
      height: $hole-diameter-small;
      width: $hole-diameter-small;
    }
  }

</style>