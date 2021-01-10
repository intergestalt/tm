<script>
  import SvelteMarkdown from 'svelte-markdown'

  import Card from '/components/Atoms/Card'
  import CardHeadline from '/components/Widgets/CardHeadline'

  export let source

  console.log(source)

  const renderers = {
    paragraph: Card,
    heading: CardHeadline
  }
</script>

<div class="markdown">
  <SvelteMarkdown {source} renderers={renderers}/>
</div>

<style lang="scss" global>
  .markdown {
    em {
      color: $color-red;
    }
  }
</style>