<script>
  import {styleVars} from '/helper'
  import Card from '/components/Atoms/Card.svelte'
  import Pill from '/components/Atoms/Pill.svelte'

  export let title, category, subtitle

  $: console.log($$slots.default)
</script>

<Card flow>
  <div class="container">
    <h3 class="category">
      { category }
    </h3>
    <div class="header">
      <h2 class="title">
        { title }
      </h2>
      {#if subtitle}
        <h4 class="subtitle">
          {subtitle}
        </h4>
      {/if}
    </div>
    <div class="content">
      <slot />
    </div>
    <div class="share">
      <Pill title="Share"></Pill>
      <Pill title="Print/Pdf"></Pill>
    </div>
  </div>
</Card>

<style lang="scss">


  .container {
    /*display: flex;
    flex-direction: column;
    justify-content: space-between;*/
    width: 100%;
    text-align: center;
  }
  
  .category {
    @include typo-grotesk-title-captions-20;
    color: $color-red;
    text-align: left;
  }

  .header {
    text-align: center;
    margin-top: 26px;
    padding-bottom: 36px;
  }

  .title {
    @include typo-serif-title-44;
  }

  .subtitle {
    @include typo-grotesk-text-24;
  }

  .content {
    @include typo-grotesk-text-24;
    padding-bottom: 36px;
  }

  .share {
    text-align: left;
  }

</style>