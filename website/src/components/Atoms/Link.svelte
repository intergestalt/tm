<script>
  import { Link } from 'svelte-navigator'
  import { namedRoutes } from '/routes'

  export let slug, to, section

  if ( !!slug && !!section ) {
    to = namedRoutes[section].replace(":slug", slug)
  }

</script>

<Link to={to} {...$$restProps}>
  <slot />
</Link>

