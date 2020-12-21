<script>
  import ContentBox from '/components/Atoms/ContentBox.svelte'
  import Polygon from '/components/Atoms/Polygon.svelte'

  export let zIndex

  const text = "text text text text text text text text text text text text text text text text text"

</script>

<section style="--z-index: {zIndex};">
  <ContentBox>{text}</ContentBox>
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