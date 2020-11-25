<script>
  import ContentBox from './ContentBox.svelte'
  import Polygon from './Polygon.svelte'
</script>

<div>
<ContentBox />
<Polygon n=5 />
<Polygon n=6 />
<Polygon n=7 />
<Polygon n=8 />
<Polygon n=9 />
<Polygon n=10 />
<Polygon n=11 />
<Polygon n=12 />
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