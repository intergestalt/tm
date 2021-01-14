<script>
  import Polygon from '/components/Atoms/Polygon.svelte'
  import Card from '/components/Atoms/Card.svelte'
  import TriContent from '/components/Atoms/TriContent.svelte'
  import IconAudio from '/components/Icons/IconAudio'

  const type = "card"

  let Container, containerProps

  switch (type) {
    case "poly":
      Container = Polygon
      containerProps = { n: 17, rotate: 0.8, hasPadding: false }
      break;
    default:
      Container = Card
      containerProps = { standardRadius: true, bgColorKey: "beige" }
  }

</script>

<svelte:component this={Container} {...containerProps} let:innerHeight={innerHeight}>
  <div class="innerHeight" style={"height:"+innerHeight+"%"} >
  <TriContent>
    <span slot="top">Podcast</span>
    <span slot="middle">Solidarity Poieiosis</span>
    <span slot="bottom">
      <IconAudio />
    </span>
  </TriContent>
  </div>

</svelte:component>

<style lang="scss">
  .innerHeight {
    display: inline-flex;
    background-color: transparent;
  }
</style>