<script>
  import { query } from "svelte-apollo";

  import HOME_PAGE from '/gql/HomePage'

  import ContentBox from '/components/Atoms/Card.svelte'
  import Polygon from '/components/Atoms/Polygon.svelte'
  import CardExhibition from '/components/Widgets/CardExhibition.svelte'
  import CardVideo from '/components/Widgets/CardVideo.svelte'
  import CardHeadline from '/components/Widgets/CardHeadline.svelte'

  import CardsGroup from '/components/Groups/CardsGroupHome'

  export let zIndex

  const page = query(HOME_PAGE);

  const cards = [
    {
      component: ContentBox,
      content: "right 1",
      column: "right"
    }, 
    {
      component: ContentBox,
      content: "left 1",
      column: "left"
    },     
    {
      component: ContentBox,
      content: "right 2",
      column: "right"
    }, 
    {
      component: ContentBox,
      content: "left 2",
      column: "left"
    },
    {
      component: CardHeadline,
      column: "left",
      content: "Ongoing Programme",
    },     
    {
      component: CardExhibition,
      column: "left",
      props: {
        title: "For Refulas Exhibition" ,
        date: "24.01.–13.03.2021" ,
        image: "https://placeimg.com/640/480/arch/sepia",
      }
    },
    {
      component: CardVideo,
      column: "right",
      props: {
        title:"The Reclamation of Social Time" ,
        subtitle: "Donna Haraway" ,
        image: "https://placeimg.com/640/480/people",
      }
    },
  ]


</script>

<section style="--z-index: {zIndex};">

  {#if $page.loading}
    Loading...
  {:else if $page.error}
    Error: {$page.error.message}
  {:else}
    HomePage Query Result: {JSON.stringify(page)}
  {/if}

  <CardsGroup {cards} />
</section>

<style>
  section {
    margin-top: 50vh;
    z-index: var(--z-index);
  }

</style>