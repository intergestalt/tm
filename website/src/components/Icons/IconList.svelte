<script>
  let clazz
  export { clazz as class }
</script>

<svg width="30" height="22" class={clazz} viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 20H30" stroke-width="2"/>
  <line x1="7" y1="2.0625" x2="30" y2="2.0625" stroke-width="2"/>
  <line x1="7" y1="11" x2="30" y2="11" stroke-width="2"/>
  <circle cx="2" cy="2" r="2" />
  <circle cx="2" cy="11" r="2"/>
  <circle cx="2" cy="20" r="2"/>
</svg>

<style lang="scss">
  path, line {
    stroke: $color-red;
  }
  circle {
    fill: $color-red;
  }
</style>