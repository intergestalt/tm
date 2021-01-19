<script>
  import {styleVars} from '/helper'
  import Card from '/components/Atoms/Card.svelte'

  export let entries
  
</script>

<Card bgColorKey="beige" >
  <div class="container">
    <h3 class="headline">
      From the Almanac
    </h3>
    {#if false}<slot />{/if}
    {#each entries as entry}
      <a href={"/almanac/" + entry.slug } class="entry">
        <span class="icon" data-type={entry.typeHandle} />
        <span class="content">
          <span class="title">{entry.title}</span>
          <span class="subtitle">{entry.typeHandle}</span>
        </span>
      </a>
    {/each}
  </div>
</Card>

<style lang="scss">
  .container {
    width: 100%;
  }
  .headline, .entry {
    margin-bottom: 22px;
    @include media-small {
      margin-bottom: 15px;
    }
  }
  .headline {
    @include typo-serif-small-caps-28;
    color: $color-red;
  }
  .entry {
    display: flex;

    .content {
      flex: 1;
      place-self: center;

      .title, .subtitle {
        display: block;
      }

      .title {
        @include typo-grotesk-text-24-multistep;
      }

      .subtitle {
        @include typo-grotesk-title-captions-20;
        color: $color-red;
      }
    }

    .icon {
      @include box-shadow;
      display: block;
      box-sizing: border-box;

      width: 100px;
      height: 100px;
      border-radius: 20px; // ?
      margin-right: 15px;

      @include media-small {
        width: 70px;
        height: 70px;
        border-radius: 15px;
      }

      @include media-larger {
        margin-right: 20px;
      }

      background-repeat: no-repeat;
      background-position: center;

      &[data-type="audio"] {
        background-image: url("/assets/icons/audio.svg");
      }
    }
  }
</style>