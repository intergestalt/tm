<script>
  import {styleVars} from '/helper'
  import Card from '/components/Atoms/Card.svelte'

  export let title, subtitle, image, standardRadius = false
</script>

<Card bgImage={image} {standardRadius}>
  <div class="container">
    <h2 class="category">
      Video
    </h2>
    <div class="middle">
      <h3 class="title">
        {title}
      </h3>
      {#if subtitle}
        <h4 class="subtitle">
          {subtitle}
        </h4>
      {/if}
    </div>
    <span class="category">&nbsp;</span>
  </div>
</Card>

<style lang="scss">


  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    text-align: center;
  }
  
  .category {
    @include typo-serif-small-caps-28;
    color: $color-red;
  }

  .middle {
    color: $color-mint;
    padding-top: 37px;
    padding-bottom: 37px;
  }

  .title {
    @include typo-grotesk-title-30;
  }

  .subtitle {
    @include typo-grotesk-text-24;
  }

</style>