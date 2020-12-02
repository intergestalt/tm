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
		<LayerBg />

		<Route path="news/:id"></Route>
		<Route path="about"></Route>

		<Route path="/">
			<LayerContent />
		</Route>

		<Layer3D />
		<LayerMenu />
		<LayerLogo />
	</main>
</Router>

<style>
	main {
	}

</style>