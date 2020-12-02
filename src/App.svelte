<script>
	import { Router, Link, Route } from "svelte-routing";

	import LayerBg from './LayerBg.svelte'
	import LayerContent from './LayerContent.svelte'
	import LayerLogo from './LayerLogo.svelte'
	import Layer3D from './Layer3D.svelte'
	import LayerMenu from './LayerMenu.svelte'

	export let url = "";
</script>

<Router url="{url}">
	<main>
		<LayerBg zIndex="0"/>

		<Route path="news/:id"></Route>
		<Route path="about"></Route>

		<Route path="/">
			<LayerContent zIndex="1" />
		</Route>

		<Layer3D zIndex="2" />
		<LayerMenu zIndex="3" />
		<LayerLogo zIndex="4" />
	</main>
</Router>

<style>
	main {
	}

</style>