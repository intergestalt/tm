<script>
  import Squared from '/components/Atoms/Squared'

  export let top, bottom
</script>

<Squared>
  <div class="container">
    <div class="top">
      { top }
    </div>
    <hr class="line" />
    <div class="bottom">
      { bottom }
    </div>
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

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

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

  .top, .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    width: 50%;
    position: relative;
  }

  .top {
    top: 3%;
  }

  .bottom {
    bottom: 3%;
  }

  .line {
    border: inherit;
    border-top: none;
    border-left: none;
    border-right: none;
    box-shadow: 0px 0px 20px 5px #FFFFFF;
    margin: 0;
    width: 100%;
  }
</style>

