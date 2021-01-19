
<li class="entry">
  <span class="left">
    <slot name="left" />
  </span>
  <span class="dots">
  </span>
  <span class="right">
    <slot name="right" />
  </span>
</li>


<style lang="scss">
  .entry {
    @include typo-serif-text-28;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .dots {
      // border-bottom: dotted black 1px;
      height: 1em;
      // background: red;
      flex:1;
      position: relative;
      overflow: hidden;
      margin: 0 0.7ex;
      &::after {
        content: "........................................................................................................................................................................................................................................................................................................";
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>