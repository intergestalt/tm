<script>
  import ContentBox from '/components/Atoms/ContentBox.svelte'
  import Polygon from '/components/Atoms/Polygon.svelte'
  import CardExhibition from '/components/Widgets/CardExhibition.svelte'
  import CardVideo from '/components/Widgets/CardVideo.svelte'
  import CardHeadline from '/components/Widgets/CardHeadline.svelte'

  export let zIndex

  const text = "text text text text text text text text text text text text text text text text text"

</script>

<section style="--z-index: {zIndex};">
  <ContentBox >{text}</ContentBox>
  <CardExhibition 
    title="For Refulas Exhibition" 
    date="24.01.–13.03.2021" 
    image="https://placeimg.com/640/480/arch/sepia"
  />
  <CardVideo
    title="The Reclamation of Social Time" 
    subtitle="Donna Haraway" 
    image="https://placeimg.com/640/480/people"
  />  
  <CardHeadline
    title="Ongoing Programme"
  />
  <ContentBox />
  <ContentBox />
  <ContentBox />
  <ContentBox />
</section>

<style>
  section {
    margin-top: 50vh;
    width: 70%;
    z-index: var(--z-index);
  }

</style>