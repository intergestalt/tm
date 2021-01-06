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

  <div class="polybox">
    <WidgetTeaser7>
      { text }
    </WidgetTeaser7>
    <CardVideo 
      title="The Reclamation of Social Time"
      image="https://placeimg.com/640/480/people"
    />
    <WidgetTeaser10 header="Intervvww" subtitle="Ryan Bishop">
      { short }
    </WidgetTeaser10>
    <Queer />
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