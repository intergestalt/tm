<script>
  import { fade } from 'svelte/transition';
  import { Router, Link, Route } from "svelte-navigator";
  
  import TemplateAlmanac from '/components/Templates/TemplateAlmanac.svelte'
  import TemplateHome from '/components/Templates/TemplateHome.svelte'

  export let zIndex;

  function vars__(vars) {
    return Object.entries(vars)
      .map(([key, value]) => "--" + key + ": " + value)
  }

</script>

<main style={ vars__({zIndex}) }>
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