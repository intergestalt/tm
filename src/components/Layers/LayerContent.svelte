<script>
  import { fly } from 'svelte/transition';
  import { useLocation, links, Router, Link, Route } from "svelte-navigator";
  import { sineIn } from 'svelte/easing';

  import { namedRoutes } from '/routes'
  import { styleVars } from '/helper'

  import Query from '/components/Atoms/Query'
  import TemplateAlmanac from '/components/Templates/TemplateAlmanac.svelte'
  import TemplateAlmanacItem from '/components/Templates/TemplateAlmanacItem.svelte'
  import TemplateHome from '/components/Templates/TemplateHome.svelte'
  import TemplateProgramme from '/components/Templates/TemplateProgramme.svelte'
  import TemplateNews from '/components/Templates/TemplateNews'
  import TemplateNewsItem from '/components/Templates/TemplateNewsItem'
  import TemplateSingle from '/components/Templates/TemplateSingle'
  import TemplateArtists from '/components/Templates/TemplateArtists'
  import TemplateArtist from '/components/Templates/TemplateArtist'

  import HOME_PAGE from '/gql/HomePage.gql'
  import NEWS from '/gql/News.gql'
  import TEXT from '/gql/Text.gql'
  import ALMANAC from '/gql/Almanac.gql'
  import PROGRAMME from '/gql/Programme.gql'
  import ARTISTS from '/gql/Artists.gql'
  import ARTIST from '/gql/Artist.gql'

  export let zIndex;

  const location = useLocation();
  //$: console.log($location)

  function slideup(node, { duration }) {
    return {
      duration,
      css: (t,u) => {
        const eased = sineIn(u);

        return `
          transform: translateY(${eased * 100}vh);
          `
      }
    };
  }

</script>

<main style={ styleVars({zIndex}) } class:almanac={$location.pathname.indexOf("/almanac")>-1} use:links >
  <div class="frame">

    <Route path="/" >
      <Query gql={HOME_PAGE} let:data>
        <TemplateHome {data} />
      </Query>
    </Route>

    <Route path="/news/*" >
      <Route path="/">
        <Query gql={NEWS} let:data >
          <TemplateNews {data} />
        </Query>
      </Route>
      <Route path=":slug" let:params>
        <Query gql={TEXT} variables={{ slug: params.slug }} let:data>
          <TemplateNewsItem {data} />
        </Query>
      </Route>
    </Route>

    <Route path="artists/*">

      <Route path="/">
        <Query gql={ARTISTS} let:data >
          <TemplateArtists title="Artists" {data} />
        </Query>
      </Route>

      <Route path=":slug" let:params>
        <Query gql={ARTIST} variables={{ slug: params.slug }} let:data >
          <TemplateArtist {data} />
        </Query>
      </Route>

    </Route>

    <Route path="theme">
      <Query gql={TEXT} variables={{ slug: "theme" }} let:data >
        <TemplateSingle title="Theme" {data} />
      </Query>
    </Route>    

    <Route path="about">
      <Query gql={TEXT} variables={{ slug: "about" }} let:data >
        <TemplateSingle title="About" {data} />
      </Query>
    </Route>

    <Route path="visit">
      <Query gql={TEXT} variables={{ slug: "visit" }} let:data >
        <TemplateSingle title="Visit" {data} />
      </Query>
    </Route>

    <Route path="/programme">
      <Query gql={PROGRAMME} let:data>
        <TemplateProgramme {data} />
      </Query>
    </Route> 

    <Route path="/almanac/*slug" let:params>

      <Query gql={ALMANAC} let:data>
        <TemplateAlmanac {data} listview={params.slug==="list"}/>
      </Query>

      {#if params.slug && params.slug !== "list"}
        <Query gql={TEXT} variables={{ slug: params.slug }} let:data>
          <div class="almanac-overlay" transition:slideup="{{ duration: 400 }}">
            <TemplateAlmanacItem {data} />
          </div>
        </Query>
      {/if}

    </Route>
  </div>
</main>

<style lang="scss">
  main {
    z-index: var(--zIndex);
    .frame {
      box-sizing: border-box;
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

    .almanac-overlay {
      box-shadow: $shadow;
      position: fixed;
      top:0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      
    }
  }

</style>