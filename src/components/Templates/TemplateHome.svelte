<script>
  import ContentBox from '/components/Atoms/ContentBox.svelte'
  import Polygon from '/components/Atoms/Polygon.svelte'
  import CardExhibition from '/components/Widgets/CardExhibition.svelte'
  import CardVideo from '/components/Widgets/CardVideo.svelte'
  import CardHeadline from '/components/Widgets/CardHeadline.svelte'

  import CardsGroup from '/components/Groups/CardsGroup'

  export let zIndex

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
      props: {
        title: "Ongoing Programme",
      }
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
  <CardsGroup {cards} />
</section>

<style>
  section {
    margin-top: 50vh;
    z-index: var(--z-index);
  }

</style>