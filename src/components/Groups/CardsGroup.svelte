<script>
  import ContentBox from '/components/Atoms/ContentBox.svelte'

  export let cards

  cards = cards.map( (c, i) => ({...c, order: i }) )

  const cardsLeft  = cards.filter( c => c.column !== "right" )
  const cardsRight = cards.filter( c => c.column === "right" )

</script>

<div class="container">
  <div class="left">
    {#each cardsLeft as card}
      <div class="card" style="order: {card.order}" data-sortGroup={card.sortGroup} >
        <svelte:component this={card.component} {...card.props}>
          {card.content}
        </svelte:component>
      </div>
    {/each}
  </div>
  <div class="right">
    {#each cardsRight as card}
      <div class="card" style="order: {card.order}" data-sortGroup={card.sortGroup} >
        <svelte:component this={card.component} {...card.props}>
          {card.content}
        </svelte:component>
      </div>
    {/each}
  </div>  
</div>

<style lang="scss">
  @import '../../scss/includes.scss';

  .container {

    max-width: $maxwidth - 2*$grid-gap-large;
    box-sizing: border-box;

    @include media-xl {
      margin: 0 auto;
    }

    margin: 0 $grid-gap-large;
    @include media-small {
      margin: 0 $grid-gap-small;
    }

    display: flex;
    @include media-1col-only {
      flex-direction: column;
    }

    @include media-2col {
      display: flex;
    }

  }

  @include media-1col-only {
    .left, .right {
      display: contents;
    }
  }

  @include media-2col {
    .left, .right {
      flex: 1;
    }

    .left {
      padding-right: $grid-gap-large / 2;
      @include media-small {
        padding-right: $grid-gap-small / 2;
      }
    }

    .right {
    padding-left: $grid-gap-large / 2;
      @include media-small {
        padding-left: $grid-gap-small / 2;
      }
    }
  }

  .card {
    @include media-2col {
      
      @include media-small {
      }
      &[data-sortGroup="left"] {
      }
      &[data-sortGroup="right"] {
      }
    }
  }
  
</style>