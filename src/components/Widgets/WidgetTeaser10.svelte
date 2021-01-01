<script>
  import Polygon from '/components/Atoms/Polygon.svelte'

  export const header = "Interview"
  export const subtitle = "someone"

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
    :global(*::first-letter) {
      font-family: fantasy;
    }
    text-align: center;
  }

  .center {
    display: flex;
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