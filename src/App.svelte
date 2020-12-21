<script>
	import { Router } from "svelte-navigator";

	import Layers from '/Layers.svelte'

	export let url = "";
</script>

<Router url="{url}">
	<Layers />
</Router>

<style global src="./scss/global.scss" >
</style>