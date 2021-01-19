<script>
  import Polygon from '/components/Atoms/Polygon.svelte'

  import WidgetTeaser7 from '/components/Widgets/WidgetTeaser7.svelte'
  import WidgetTeaser10 from '/components/Widgets/WidgetTeaser10.svelte'
  import WidgetImage from '/components/Widgets/WidgetImage.svelte'
  import CardVideo from '/components/Widgets/CardVideo.svelte'
  import CardAlmanacContents from '/components/Widgets/CardAlmanacContents.svelte'
  import WidgetPodcast from '/components/Widgets/WidgetPodcast.svelte'

  import Queer from '/components/Widgets/Queer.svelte'

  export let data

  const text = "The Almanac Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. The Almanac Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Nulla in ut tempor velit ad dolor. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur. Laboris nostrud excepteur consectetur minim non nulla in eiusmod excepteur."

  const short = "Dolore non nostrud quis proident pariatur aute velit magna nulla ut ad id elit"

  const items = [
    {
      component: WidgetTeaser7,
      props: {
        text,
        link: "/almanac/about"
      }
    },
    {
      component: CardVideo,
      large: true,
      props: {
        title: "The Reclamation of Social Time",
        image: "https://placeimg.com/640/480/tech",
        highlight: true,
        standardRadius: true,
      }
    },
    {
      component: CardAlmanacContents,
    },
    {
      component: WidgetImage,
      props: {
        image: "/assets/images/stone.png"
      }
    },
    {
      component: WidgetTeaser10,
      content: short,
      props: {
        header: "Intervvww",
        subtitle: "Ryan Bishop",
      }
    },
    {
      component: Queer,
    },
    {
      component: CardVideo,
      props: {
        title: "The Power of Self-Organization",
        subtitle: "Author Name",
        image: "https://placeimg.com/640/480/people",
        standardRadius: true,
      }
    },
    {
      component: WidgetPodcast,
    },
  ]

</script>

  <div class="container">
    {#each items as item}
      <div class="item" class:large={item.large}>
        <svelte:component this={item.component} {...item.props}>
          { item.content }
        </svelte:component>
      </div>
    {/each}
  </div>

<style lang="scss">

  .container {
    display: grid;
    grid-auto-flow: row dense;
    @include grid-margin;

    @include media-1col-only {
      grid-template-columns: repeat( 1, 1fr );
    }

    @include media-2col {
      grid-template-columns: repeat( 2, 1fr );
      @include grid-template-rows-square(2);
    }

    @include media-3col {
      grid-template-columns: repeat( 3, 1fr );
      @include grid-template-rows-square(3);
    }

    @include media-4col {
      grid-template-columns: repeat( 4, 1fr );
      @include grid-template-rows-square(4);
    }

    column-gap: $grid-gap-large;
    row-gap: $grid-gap-large;
    @include media-small {
      column-gap: $grid-gap-small;
      row-gap: $grid-gap-small;
    }
  }

  .item {

    @include media-1col-only {
      @include height-square;
    }

    &.large {
      @include media-2col {
        grid-column: span 2;
      }
      @include media-1col-only {
        @include height-square(1, 4/3);
      }
    }
  }


</style>