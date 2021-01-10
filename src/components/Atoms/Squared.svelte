<div class="squared">
  <div class="squared-inner">
    <slot />
  </div>
</div>

<style>
  .squared {
    display: block;
    padding-bottom: 100%;
    height: 0;
    position: relative;
    width: 100%;
  }

  .squared-inner {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>