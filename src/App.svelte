<script>
	import { Router, Link, Route } from "svelte-navigator";

	import LayerBg from '/components/Layers/LayerBg.svelte'
	import LayerContent from '/components/Layers/LayerContent.svelte'
	import LayerLogo from '/components/Layers/LayerLogo.svelte'
	import Layer3D from '/components/Layers/Layer3D.svelte'
	import LayerMenu from '/components/Layers/LayerMenu.svelte'
	import LayerLoader from '/components/Layers/LayerLoader.svelte'

	export let url = "";
</script>

<Router url="{url}">
	<LayerBg zIndex="0"/>
	<LayerContent zIndex="1" />
	<Layer3D zIndex="2" />
	<LayerMenu zIndex="3" />
	<LayerLogo zIndex="4" />
	<LayerLoader zIndex="5" />
</Router>

<style global src="./scss/global.scss" >
</style>