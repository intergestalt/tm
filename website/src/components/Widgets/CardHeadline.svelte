<script>
  import {styleVars} from '/helper'
  import ContentBox from '/components/Atoms/Card.svelte'

  export let title

  const borderRadiusPreset = {
    large: [60, 60, 20, 20],
    small: [35, 35, 15, 15]
  }

</script>

<ContentBox bgColorKey="mint" {borderRadiusPreset}>
  <h3 class="title">
    <slot />
  </h3>
</ContentBox>

<style lang="scss">


  .title {
    @include typo-serif-title-44;
  }
</style>