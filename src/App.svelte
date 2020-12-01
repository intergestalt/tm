<script>
	import LayerBg from './LayerBg.svelte'
	import LayerContent from './LayerContent.svelte'
	import LayerLogo from './LayerLogo.svelte'
	import Layer3D from './Layer3D.svelte'
	import LayerMenu from './LayerMenu.svelte'
	
	import GlobalStyle from './GlobalStyle.svelte' // import global styles
</script>

<main>
	<LayerBg />
	<LayerContent />
	<Layer3D />
	<LayerMenu />
	<LayerLogo />
</main>

<style>
	main {
	}

</style>