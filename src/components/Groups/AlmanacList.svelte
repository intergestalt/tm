<script>
  import DottedLine from '/components/Atoms/DottedLine'

  export let data

  const text = "The Almanac Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. The Almanac Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur."

  const short = "Dolore non nostrud quis proident pariatur aute velit magna nulla ut ad id elit"

  const items = [
    {
      title: "On the Endless Infrastructural Reach of a Phoneme",
      subtitle: "Donna Haraway",
      type: "Audio",
      link: "/almanac/about"
    },
    {
      title: "Building Acid Communism",
      subtitle: "A conversation with Marija Bozinovska Jones, Lou Cornum, Daphne Dragona, Maya Indira Ganesh, Tung-Hui Hu, Fernanda Monteiro",
      type: "Audio",
      link: "/almanac/about"
    },
  ]

</script>

  <ul class="container">
    {#each items as item}
      <li class="item" class:large={item.large}>
        <a href={item.link}>
          <span class="title">
            { item.title }
          </span>
          <DottedLine>
            <span class="subtitle" slot="left">
              { item.subtitle }
            </span>
            <span class="category" slot="right">
              { item.type }
            </span>
          </DottedLine>
          
        </a>
      </li>
    {/each}
  </ul>


<style lang="scss">

  .container {
    @include grid-margin;
    padding-left: 60px;
    @include media-small {
      padding-left: 10px;
    }
  }

  .item {
    display: block;
    margin-bottom: 28px;
  }

  .title {
    @include typo-grotesk-title-30;
  }

  .subtitle {
    @include typo-grotesk-text-24;
    max-width: 50vw;
    @include media-small {
      max-width: 70vw;
    }
    display: inline-block;
  }

  .category {

  }


</style>