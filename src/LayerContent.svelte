<script>
  import ContentBox from './ContentBox.svelte'
  import Polygon from './Polygon.svelte'

  export let zIndex

  const text = "text text text text text text text text text text text text text text text text text"

</script>

<section style="--z-index: {zIndex};">
  <ContentBox>{text}</ContentBox>

  <div class="polybox">
    <span>span</span>
    <span>span</span>
    <span>span</span>
  </div>

  <div class="polybox">
    <Polygon n=5 >{text }</Polygon>
    <Polygon n=6 >{text }</Polygon>
    <Polygon n=7 >{text }</Polygon>
  </div>

  <div class="polybox">
    <Polygon insideShape={false} n=5 >{text }</Polygon>
    <Polygon insideShape={false} n=6 >{text }</Polygon>
    <Polygon insideShape={false} n=7 >{text }</Polygon>
  </div>

  <Polygon width="100px" n=5 >{text }</Polygon>
  <Polygon width="100px" n=6 >{text }</Polygon>
  <Polygon width="100px" n=7 >{text }</Polygon>
  <Polygon width="100px" n=8 >{text }</Polygon>
  <Polygon width="100px" n=9 >{text }</Polygon>
  <Polygon width="100px" n=10 >{text }</Polygon>
  <Polygon width="100px" n=11 >{text }</Polygon>
  <Polygon width="100px" n=12 >{text }</Polygon>
  <br />
  <Polygon width="20%" n=5 blur="2"/>
  <Polygon width="20%" n=5 blur="4"/>
  <Polygon width="20%" n=5 blur="6"/>
  <Polygon width="20%" n=5 blur="8"/>
  <Polygon width="20%" n=5 blur="10"/>
  <Polygon width="20%" n=5 blur="12"/>
  <Polygon width="20%" n=5 blur="14"/>
  <Polygon width="20%" n=5 blur="16"/>
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

  .polybox {
    display: grid;
    grid-template-columns: 33.33vw 33.33vw 33.33vw;
    grid-template-rows: 33.33vw;
  }

  .polybox > span {
    background: green;
    display:block;
    height:100px;
    border: dotted 5px red;
  }

</style>