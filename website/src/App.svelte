<script>
	import { Router } from "svelte-navigator";
	import { ApolloClient, InMemoryCache } from "@apollo/client";
	import { setClient } from "svelte-apollo";

	import Layers from '/Layers.svelte'

	export let url = "";

	console.log(`GraphQL Server URL: ${process.env.GRAPHQL_URL}`)

	// 1. Create an Apollo client and pass it to all child components
	//    (uses svelte's built-in context)
	const client = new ApolloClient({
		uri: process.env.GRAPHQL_URL,
		cache: new InMemoryCache(),
		headers: {
			authorization: 'Bearer ' + process.env.GRAPHQL_BEARER_TOKEN
		}
	});
	setClient(client);

</script>

<Router url="{url}">
	<Layers />
</Router>

<style global src="./scss/global.scss" >
</style>