<script>
  import ContentBox from '/components/Atoms/Card.svelte'

  export let cards

  // add order
  cards = cards.map( (c, i) => ({...c, order: i }) )

</script>

<div class="container">
  {#each cards as card}
    <div class="card" class:large={card.type === "large"}>
      <svelte:component this={card.component} {...card.props}>
        {card.content}
      </svelte:component>
    </div>
  {/each}
</div>

<style lang="scss">

  .container {
    width: 100%;
    display: grid;
    @include media-3col {
      grid-template-columns: repeat( 4, 1fr );
    }

    column-gap: $grid-gap-large;
    row-gap: $grid-gap-large;
    @include media-small {
      column-gap: $grid-gap-small;
      row-gap: $grid-gap-small;
    }
  }

  .card {
    grid-auto-flow: row dense;

    &.large {
      @include media-3col {
        grid-column: span 2;
      }
    }
  }

</style>