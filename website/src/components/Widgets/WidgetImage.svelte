<script>
  export let image
</script>

<img src={image} />


<style>
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    display: block;
  }
</style>