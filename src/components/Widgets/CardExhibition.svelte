<script>
  import {styleVars} from '/helper'
  import ContentBox from '/components/Atoms/Card.svelte'

  export let title, subtitle, date, image, large, caps

  let imageUrl = `url("${image}")`
</script>

<ContentBox nohole>
  <div class="container" class:large={large} style={styleVars({imageUrl})}>
    <h4 class="date">
      {date}
    </h4>
    <div class="content">
      <h3 class="title">
        {title}
      </h3>
      {#if subtitle}
        <h4 class="subtitle">
          {subtitle}
        </h4>
      {/if}
    </div>
    <span class="date">&nbsp;</span>
  </div>
</ContentBox>

<style lang="scss">

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    background-image: var(--imageUrl);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 200px;
  }
  
  .content {

  }

  .date {
    @include typo-grotesk-title-captions-20;
    color: $color-red;
  }

  .title, .subtitle {
    @include typo-serif-title-32;
  }

  .large .title,
  .large .subtitle {
    @include typo-serif-title-44;
  }

  .subtitle {
    font-style: italic;
  }

</style>