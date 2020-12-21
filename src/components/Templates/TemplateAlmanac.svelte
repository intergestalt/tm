<script>
  import { LoremIpsum } from "lorem-ipsum";

  import ContentBox from '/components/Atoms/ContentBox.svelte'
  import Polygon from '/components/Atoms/Polygon.svelte'

  import WidgetTeaser7 from '/components/Widgets/WidgetTeaser7.svelte'
  import WidgetTeaser10 from '/components/Widgets/WidgetTeaser10.svelte'

  import Queer from '/components/Widgets/Queer.svelte'

  const text = new LoremIpsum({
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
    <Queer />
    <WidgetTeaser7>
      { text }
    </WidgetTeaser7>
    <WidgetTeaser10 header="Intervvww" subtitle="Ryan Bishop">
      { short }
    </WidgetTeaser10>
    <Polygon n=6 >{ text }</Polygon>
    <Polygon n=7 >{ text }</Polygon>
  </div>

  <div class="polybox">
    <Polygon insideShape={ false} n=5 >{text }</Polygon>
    <Polygon insideShape={ false} n=6 >{text }</Polygon>
    <Polygon insideShape={ false} n=7 >{text }</Polygon>
  </div>

  <Polygon width="100px" n=5 >{text }</Polygon>
  <Polygon width="100px" n=6 >{text }</Polygon>
  <Polygon width="100px" n=7 >{text }</Polygon>
  <Polygon width="100px" n=8 >{text }</Polygon>
  <Polygon width="100px" n=9 >{text }</Polygon>
  <Polygon width="100px" n=10 >{text }</Polygon>
  <Polygon width="100px" n=11 >{text }</Polygon>
  <Polygon width="100px" n=12 >{text }</Polygon>
  <br />
  <Polygon width="20%" n=5 blur="2"/>
  <Polygon width="20%" n=5 blur="4"/>
  <Polygon width="20%" n=5 blur="6"/>
  <Polygon width="20%" n=5 blur="8"/>
  <Polygon width="20%" n=5 blur="10"/>
  <Polygon width="20%" n=5 blur="12"/>
  <Polygon width="20%" n=5 blur="14"/>
  <Polygon width="20%" n=5 blur="16"/>

</section>

<style lang="scss">
  @import '../../scss/includes.scss';
  section {
    height: 100%;
    width: 100%;
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

  .polybox {
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 100vw;
    @include media-2col {
      grid-template-columns: 50vw 50vw;
      grid-template-rows: 50vw;
    }
    @include media-3col {
      grid-template-columns: 33.33vw 33.33vw 33.33vw;
      grid-template-rows: 33.33vw;
    }    
    @include media-4col {
      grid-template-columns: 25vw 25vw 25vw 25vw;
      grid-template-rows: 25vw;
    }        
  }


</style>