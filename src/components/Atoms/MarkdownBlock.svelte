<script>
  import SvelteMarkdown from 'svelte-markdown'

  export let source
</script>

<div class="markdown">
  <SvelteMarkdown {source} />
</div>

<style lang="scss" global>
  .markdown {
    em {
      color: $color-red;
    }
  }
</style>