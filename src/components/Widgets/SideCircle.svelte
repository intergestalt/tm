<script>
  import Squared from '/components/Atoms/Squared'
</script>

<Squared>
  <div class="container">
    <slot />
  </div>
</Squared>

<style lang="scss">
  .container {
    @include typo-serif-text-sidewidget;
    color: $color-white;
    text-shadow: 0px 0px 10px #FFFFFF;
    height: 100%;
    border: solid 2px $color-white;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: inset 0px 0px 20px 5px #FFFFFF;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top:0;left:0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      box-shadow: 0px 0px 20px 5px #FFFFFF;
    }
  }
</style>

