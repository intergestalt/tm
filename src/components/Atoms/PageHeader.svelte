<script>
</script>

<h1>
  <slot />
</h1>

<style lang="scss">

  h1 {
    @include typo-grotesk-title-150;
    color: $color-white;
    text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
    width: 100%;
    text-align: center;
  }

</style>