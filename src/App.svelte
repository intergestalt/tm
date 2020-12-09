<script>
	import { Router, Link, Route } from "svelte-navigator";

	import LayerBg from './LayerBg.svelte'
	import LayerContent from './LayerContent.svelte'
	import LayerLogo from './LayerLogo.svelte'
	import Layer3D from './Layer3D.svelte'
	import LayerMenu from './LayerMenu.svelte'


	export let url = "";
</script>

<Router url="{url}">
	<LayerBg zIndex="0"/>
	<LayerContent zIndex="1" />
	<Layer3D zIndex="2" />
	<LayerMenu zIndex="3" />
	<LayerLogo zIndex="4" />
</Router>

<style global src="./scss/global.scss" />