<script>
  import { fade } from 'svelte/transition';
  import { Router, Link, Route } from "svelte-navigator";
  
  import { styleVars } from '/helper'
  import TemplateAlmanac from '/components/Templates/TemplateAlmanac.svelte'
  import TemplateHome from '/components/Templates/TemplateHome.svelte'

  export let zIndex;

</script>

<main style={ styleVars({zIndex}) }>
  <Route path="news/:id" let:params></Route>
  <Route path="about"></Route>

  <Route path="/" component={TemplateHome} />
  <Route path="/almanac">
    <div transition:fade>
      <TemplateAlmanac />
    </div>
  </Route>
  
</main>

<style>
  main {
    z-index: var(--zIndex);
  }
</style>