<script>
  import {styleVars} from '/helper'

  export let image = null, contain = false, large = false

  let imageUrl = `url("${image}")`
</script>

<div class="container" class:large class:contain style={styleVars({imageUrl})}>
  <div class="top">
    <slot name="top" />
  </div>
  <div class="middle">
    <slot name="middle" />
  </div>
  <div class="bottom">
    <slot name="bottom" />
  </div>
</div>

<style lang="scss">

  .container {
    display: inline-flex;
    width: 100%; height: 100%;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    background-image: var(--imageUrl);
    background-size: cover;
    &.contain {
      background-size: contain;
    } 
    background-repeat: no-repeat;
    background-position: center;
    min-height: 200px;
  }
  
  .top {
    @include typo-serif-small-caps-28;
    color: red;
    min-height: 1em;
  }

  .middle {
    // flex: 1;
  }

  .bottom {
    @include typo-serif-small-caps-28;
    min-height: 1em;
  }

</style>