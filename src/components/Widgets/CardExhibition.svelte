<script>
  import {styleVars} from '/helper'
  import ContentBox from '/components/Atoms/ContentBox.svelte'

  export let title, date, image

  let imageUrl = `url("${image}")`
</script>

<ContentBox>
  <div class="container" style={styleVars({imageUrl})}>
    <h4 class="date">
      {date}
    </h4>
    <h3 class="title">
      {title}
    </h3>
    <span class="date">&nbsp;</span>
  </div>
</ContentBox>

<style lang="scss">
  @import '../../scss/includes.scss';

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
  }
  
  .date {
    @include typo-grotesk-text-24;
    color: $color-red;
    
  }

  .title {
    @include typo-serif-title-44;
    padding-top:37px;
    padding-bottom:37px;
  }
</style>