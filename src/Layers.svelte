<script>
	import { useLocation } from "svelte-navigator";

	import LayerBg from '/components/Layers/LayerBg.svelte'
	import LayerContent from '/components/Layers/LayerContent.svelte'
	import LayerLogo from '/components/Layers/LayerLogo.svelte'
	import Layer3D from '/components/Layers/Layer3D.svelte'
	import LayerMenu from '/components/Layers/LayerMenu.svelte'
	import LayerLoader from '/components/Layers/LayerLoader.svelte'

	import { isCookieAccepted, scrollY, isMeditationOn } from '/stores.js';

	const location = useLocation();

	let blur, show3D

	$: {
		blur = (!$isCookieAccepted || $location.pathname != "/")
					|| ($location.pathname == "/" && $scrollY > 10)

		show3D = $location.pathname == "/" && $scrollY <= 10

		// console.log($isCookieAccepted, $scrollY, $location.pathname, $isMeditationOn)
	}

</script>

<svelte:window bind:scrollY={$scrollY}/>

<LayerBg zIndex="0" {blur} playing={$isMeditationOn}/>
{#if $isCookieAccepted}
	{#if !$isMeditationOn}
		<LayerContent zIndex="1" />
		{#if show3D}
			<Layer3D zIndex="2" />
		{/if}
		<LayerLogo zIndex="4" />
	{/if}
	<LayerMenu zIndex="3" />
{:else}
	<LayerLoader zIndex="5" />
{/if}

