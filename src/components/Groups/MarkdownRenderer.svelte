<script>
  import SvelteMarkdown from 'svelte-markdown'

  // import regex rules from marked. should be same version used in svelte-markdown
  // there is probably a smarter way to import it from svelte-markown, of which it is a dependency
  import { block } from 'marked/src/rules'

  import Card from '/components/Atoms/Card'
  import CardHeadline from '/components/Widgets/CardHeadline'

  export let source

  // use regex for hr (---) on multiline string
  // that's actually /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/m
  const regex = new RegExp(block.hr.source, block.hr.flags + "m");

  let parts = ""
  
  // console.log(regex, parts.length, parts)

  $: {
    parts = source.split(regex).filter( (s,i) => i % 2 === 0)
  }

  function heading(string) {
    // console.log(block.heading, string.match(block.heading))
    const match = string.match(block.heading)
    return {
      true: match !== null & match[0] === match.input,
      content: match !== null && match[2]
    }
  }

  const renderers = {
  //   heading: Heading
  }

</script>

<div class="markdown">
  {#each parts as part}
    {#if heading(part).true }
      <CardHeadline> 
        {heading(part).content}
      </CardHeadline>
    {:else}
      <Card>
        <SvelteMarkdown source={part} renderers={renderers}/>
      </Card>
    {/if}
  {/each}
</div>

<style lang="scss" global>
  .markdown {
    em {
      color: $color-red;
    }
  }
</style>