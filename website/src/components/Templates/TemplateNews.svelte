<script>
  import { link, useResolve } from "svelte-navigator";
  
  import Card from '/components/Atoms/Card'

  export let data

  const resolve = useResolve();

</script>

<section>

  {#each data.News as news}
    <Card>
      <a href={ resolve(news.slug) } use:link>
        { news.title }
      </a>
    </Card>
  {/each}
  
</section>

<style lang="scss">
  section {
  }

</style>