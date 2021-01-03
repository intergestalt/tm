<script>
  import { onMount } from 'svelte'

  import { styleVars, generateBorderRadiusString } from '/helper'

  export let bgImage = ""
  export let group = "default" // a key to coordniate the combinations ob border radius and columns
  export let bgColorKey = "white"
  export let borderRadiusPreset 
  export let nohole = false

  let borderRadiusStringLarge, borderRadiusStringSmall

  $: console.log(bgImage)

  onMount(function() {
    const {largeString, smallString} = generateBorderRadiusString(group, borderRadiusPreset)
    borderRadiusStringLarge = largeString
    borderRadiusStringSmall = smallString
  })

</script>

<div 
  class="container bg-color-{bgColorKey}" 
  class:bgImage={bgImage} 
  class:nohole={nohole}
  style={styleVars({
    imageUrl: `url("${bgImage}")`,
    borderRadiusStringLarge,
    borderRadiusStringSmall
  })}
><!--span style="position: absolute; color: white;">{borderRadiusStringLarge}</span-->
  <slot></slot>
</div>

<style lang="scss">


  $hole-radius-large: 0.5 * $hole-diameter-large;
  $hole-radius-small: 0.5 * $hole-diameter-small;

  .container {
    @include typo-serif-small-caps-28;
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    padding: 14px 30px;
    min-height: #{ $hole-distance-large + $hole-diameter-large};
    border-radius: var(--borderRadiusStringLarge);
    @include media-small {
      padding: 10px 20px;
      min-height: #{ $hole-distance-small + $hole-diameter-small};
      border-radius: var(--borderRadiusStringSmall);
    }
    box-shadow: 1px 1px 10px black;
    position: relative;
    /*backdrop-filter: blur(4px);*/
  }

  // background in varying colors, including a transparent hole
  @each $name, $color in $card-bg-colors {
    .container.bg-color-#{$name} {
      
      background: radial-gradient(
        circle at calc(100% - #{$hole-distance-large + $hole-radius-large}) #{$hole-distance-large + $hole-radius-large}, 
        transparent $hole-radius-large, 
        $color $hole-radius-large
      );

      @include media-small {
        background: radial-gradient(
        circle at calc(100% - #{$hole-distance-small + $hole-radius-small}) #{$hole-distance-small + $hole-radius-small}, 
        transparent $hole-radius-small, 
        $color $hole-radius-small
        );
      }

    }

    // overwrite in case of nohole
    .container.nohole.bg-color-#{$name} {
      background: $color;
    }
  }

  // optional background image (no hole in this case)
  .container.bgImage {
    background-image: var(--imageUrl);
    background-size: cover;
    &::after {
      display: none;
    }
  }

  // the drop shadow inside the hole
  .container:not(.nohole)::after {
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