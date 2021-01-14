<script>
  import Polygon from '/components/Atoms/Polygon.svelte'

  export let header, subtitle = null

</script>

<div>
  <Polygon n="10" >
    <h3>
      {header}
    </h3>
    <div>
      <div class="middle">
        <p>
          <slot />
        </p>
        <aside>
          {subtitle}
        </aside>
      </div>
    </div>
  </Polygon>
</div>

<style lang="scss">


  div {
    @include typo-grotesk-title-30;
    hyphens: auto;

    text-align: center;
  }

  .middle {
    display: flex-inline;
    flex-direction: row;
  }

  h3 {
    color: $color-red;
    @include typo-serif-small-caps-28;
    text-align: center;
  }
  
  p {

  }

  aside {
    @include typo-grotesk-text-24;
  }
</style>