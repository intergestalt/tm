<script>
  import { fly } from 'svelte/transition';
  import { Router, Link, Route } from "svelte-navigator";
  import TemplateAlmanac from './TemplateAlmanac.svelte'
  import TemplateHome from './TemplateHome.svelte'

  export let zIndex;

  function vars__(vars) {
    return Object.entries(vars)
      .map(([key, value]) => "--" + key + ": " + value)
  }

</script>

<main style={ vars__({zIndex}) }>
  <Router path="news/:id" let:params></Router>
  <Route path="about"></Route>

  <Route path="/" component={TemplateHome} />
  <Route path="/almanac">
    <div transition:fly="{{ y: 200, duration: 2000 }}">
      <TemplateAlmanac />
    </div>
  </Route>

  
</main>

<style>
  main {
    z-index: var(--zIndex);
  }
</style>