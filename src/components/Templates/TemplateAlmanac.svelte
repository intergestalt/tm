<script>
  import { LoremIpsum } from "lorem-ipsum";
  
  import Polygon from '/components/Atoms/Polygon.svelte'

  import WidgetTeaser7 from '/components/Widgets/WidgetTeaser7.svelte'
  import WidgetTeaser10 from '/components/Widgets/WidgetTeaser10.svelte'
  import CardVideo from '/components/Widgets/CardVideo.svelte'

  import Queer from '/components/Widgets/Queer.svelte'

  const text = "The Almanac " + new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    }
  }).generateSentences(5)

  const short = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    }
  }).generateSentences(1)


</script>

<section>

  <h1>
    Almanac
  </h1>

  <div class="container">
    <WidgetTeaser7>
      { text }
    </WidgetTeaser7>
    <CardVideo 
      title="The Reclamation of Social Time"
      image="https://placeimg.com/640/480/people"
      standardRadius
    />
    <WidgetTeaser10 header="Intervvww" subtitle="Ryan Bishop">
      { short }
    </WidgetTeaser10>
    <div class="item">
      <Queer />
    </div>
  </div>

</section>

<style lang="scss">

  section {
    background-color: $color-beige;
  }

  h1 {
    font-size: 22vw;
    line-height: 22vw;
    @include media-2col {
      font-size: 16vw;
      line-height: 16vw;
    }
    @include media-4col {
      text-align: center;
    }    
    color: $color-red;
    padding-top: 48px;
  }

  .container {
    box-sizing: border-box;
    min-height: 100vh;
    display: grid;
    @include grid-margin;

    @include media-1col-only {
      grid-template-columns: repeat( 1, 1fr );
    }

    @include media-2col {
      grid-template-columns: repeat( 2, 1fr );
      @include grid-template-rows-square(2);
    }

    @include media-3col {
      grid-template-columns: repeat( 3, 1fr );
      @include grid-template-rows-square(3);
    }

    @include media-4col {
      grid-template-columns: repeat( 4, 1fr );
      @include grid-template-rows-square(4);
    }

    column-gap: $grid-gap-large;
    row-gap: $grid-gap-large;
    @include media-small {
      column-gap: $grid-gap-small;
      row-gap: $grid-gap-small;
    }
  }

  .item {
    grid-auto-flow: row dense;

    @include media-1col-only {
      @include height-square;
    }

    &.large {
      @include media-3col {
        grid-column: span 2;
      }
    }
  }


</style>