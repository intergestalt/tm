<script>
  import ContentBox from './ContentBox.svelte'
  import Polygon from './Polygon.svelte'

  const text = "text text text text text text text text text text text text text text text text text"

</script>

<div>
<ContentBox>{text}</ContentBox>
<Polygon n=5 >{text }</Polygon>
<Polygon n=6 >{text }</Polygon>
<Polygon n=7 >{text }</Polygon>
<Polygon n=8 >{text }</Polygon>
<Polygon n=9 >{text }</Polygon>
<Polygon n=10 >{text }</Polygon>
<Polygon n=11 >{text }</Polygon>
<Polygon n=12 >{text }</Polygon>
<br />
<Polygon n=5 blur="2"/>
<Polygon n=5 blur="4"/>
<Polygon n=5 blur="6"/>
<Polygon n=5 blur="8"/>
<Polygon n=5 blur="10"/>
<Polygon n=5 blur="12"/>
<Polygon n=5 blur="14"/>
<Polygon n=5 blur="16"/>
<ContentBox />
<ContentBox />
<ContentBox />
<ContentBox />
</div>

<style>
div {
  margin-top: 50vh;
}
</style>