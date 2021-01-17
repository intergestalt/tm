<script>

  export let data

  const text = "The Almanac Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. The Almanac Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur."

  const short = "Dolore non nostrud quis proident pariatur aute velit magna nulla ut ad id elit"

  const items = [
    {
      title: "Title",
      subtitle: "Subtitle",
      type: "Audio",
      link: "/almanac/about"
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      type: "Audio",
      link: "/almanac/about"
    },
  ]

</script>

  <ul class="container">
    {#each items as item}
      <li class="item" class:large={item.large}>
        <a href={item.link}>
          { item.title }
        </a>
      </li>
    {/each}
  </ul>


<style lang="scss">

  .container {

  }

  .item {

  }


</style>