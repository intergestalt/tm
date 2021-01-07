<script>
  import { fade } from 'svelte/transition';
  import { links, Router, Link, Route } from "svelte-navigator";

  import { namedRoutes } from '/routes'
  import { styleVars } from '/helper'
  import TemplateAlmanac from '/components/Templates/TemplateAlmanac.svelte'
  import TemplateHome from '/components/Templates/TemplateHome.svelte'
  import TemplateProgramme from '/components/Templates/TemplateProgramme.svelte'
  import TemplateNews from '/components/Templates/TemplateNews'
  import TemplateNewsItem from '/components/Templates/TemplateNewsItem'

  export let zIndex;

</script>

<main style={ styleVars({zIndex}) } use:links >
  <Route path="news/*" >
    <Route path="/">
      <TemplateNews />
    </Route>
    <Route path=":slug" let:params>
      <TemplateNewsItem slug={params.slug} />
    </Route>
  </Route>
  <Route path="about"></Route>

  <Route path="/programme" component={TemplateProgramme} />

  <Route path="/" component={TemplateHome} />
  <Route path="/almanac">
    <div transition:fade>
      <TemplateAlmanac />
    </div>
  </Route>
  
</main>

<style lang="scss">
  main {
    padding-top: 83px; 
    padding-bottom: 20px;
    @include media-small {
      padding-top: 64px; 
    }
    z-index: var(--zIndex);
  }
</style>