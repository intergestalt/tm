<script>

  import SidePill from '/components/Widgets/SidePill'
  import SideCircle from '/components/Widgets/SideCircle'
  import SideCircleDouble from '/components/Widgets/SideCircleDouble'

  const items = [
    {
      component: SidePill,
      content: "Book Ticket"
    },
    {
      component: SideCircle,
      content: "Theme"
    },
    {
      component: SideCircleDouble,
      props: {
        top: "Künstlerhaus Bethanien",
        bottom: "Silent Green Kulturquartier"
      }
    }    
  ]
</script>

{#each items as item}
  <svelte:component this={item.component} {...item.props}>
    { item.content }
  </svelte:component>
{/each}