<script>
  import { CardHeadline } from "/components/Widgets";

</script>

<section>

  <h1>
    Programme
  </h1>

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