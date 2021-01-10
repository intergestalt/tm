<script>
  import { fade } from 'svelte/transition';
  import { useLocation, links, Router, Link, Route } from "svelte-navigator";

  import { namedRoutes } from '/routes'
  import { styleVars } from '/helper'

  import Query from '/components/Atoms/Query'
  import TemplateAlmanac from '/components/Templates/TemplateAlmanac.svelte'
  import TemplateHome from '/components/Templates/TemplateHome.svelte'
  import TemplateProgramme from '/components/Templates/TemplateProgramme.svelte'
  import TemplateNews from '/components/Templates/TemplateNews'
  import TemplateNewsItem from '/components/Templates/TemplateNewsItem'

  import HOME_PAGE from '/gql/HomePage.gql'
  import NEWS from '/gql/News.gql'
  import TEXT from '/gql/Text.gql'
  import ALMANAC from '/gql/Almanac.gql'

  export let zIndex;

  const location = useLocation();
  //$: console.log($location)

</script>

<main style={ styleVars({zIndex}) } class:almanac={$location.pathname=="/almanac"} use:links >
  <div class="frame">

    <Route path="/news/*" >
      <Route path="/">
        <Query gql={NEWS} component={TemplateNews} />
      </Route>
      <Route path=":slug" let:params>
        <Query gql={TEXT} variables={{ slug: params.slug }} component={TemplateNewsItem} />
      </Route>
    </Route>

    <Route path="about"></Route>

    <Route path="visit">
      <Query gql={TEXT} variables={{ slug: "visit" }} component={TemplateVisit} title="Visit"/>
    </Route>

    <Route path="/programme" component={TemplateProgramme} />

    <Route path="/">
      <Query gql={HOME_PAGE} component={TemplateHome} />
    </Route>
    <Route path="/almanac">
      <div transition:fade>
        <Query gql={ALMANAC} component={TemplateAlmanac} />
      </div>
    </Route>
  </div>
</main>

<style lang="scss">
  main {
    z-index: var(--zIndex);
    .frame {
      padding-top: 83px; 
      padding-bottom: 20px;
      max-width: $maxwidth;
      margin: auto;
      @include media-small {
        padding-top: 64px; 
      }
    }
    &.almanac {
      background-color: $color-beige;
      .frame {
        padding-top: 0;
        padding-bottom: 0;
      }
    }
  }

</style>