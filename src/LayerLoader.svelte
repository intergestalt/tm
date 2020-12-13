<script>
  export let zIndex = 0
</script>

<div class="container">
  <div class="tmask" style="--zIndex: 5">for refusal</div>
</div>

<style>
  .container {
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index: var(--zIndex);
    backdrop-filter: blur(10px);
  }
  .tmask {
      font-size: 150px;
      line-height: 100vh;
      background: linear-gradient(22deg, rgba(2,0,36,1) 21%, rgba(255,234,0,1) 100%);;
      background-clip: text;
      color: transparent;
  }
</style>
