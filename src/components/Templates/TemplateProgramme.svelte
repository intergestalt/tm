<script>
  import { onMount } from 'svelte'

  import CardHeadline   from "/components/Widgets/CardHeadline";
  import PageHeader     from '/components/Atoms/PageHeader';
  import CardsGroup     from '/components/Groups/CardsGroupProgramme';
  import CardExhibition from '/components/Widgets/CardExhibition.svelte'

  import { styleVars, pannable } from '/helper'

  const months = [
    { abbr: "Jan" },
    { abbr: "Feb" },
    { abbr: "Mar" },
    { abbr: "Apr" },
    { abbr: "May" },
    { abbr: "Jun" },
    { abbr: "Jul" },
    { abbr: "Aug" },
    { abbr: "Sep" },
    { abbr: "Oct" },
    { abbr: "Nov" },
    { abbr: "Dec" },
  ]

  const displayMonths = [ ...months, months[0] ]

  let yearPercentage = 0
  let bgPosX = "100%"

  onMount( () => {
    var now = new Date();
    var start = new Date(now.getFullYear(),0,1)
    var end = new Date(now.getFullYear(),11,31)

    var q = Math.abs(now-start);
    var d = Math.abs(end-start);
    var fraction = (q/d)
    yearPercentage = fraction * 100
    bgPosX = 100 - yearPercentage + "%"
  })

  function handlePanMove(obj) {
    //console.log(obj.target, obj.detail.dx, obj.target.scrollLeft)
    obj.target.scrollLeft -= obj.detail.dx
  }

  const events = [
    {
      date: "24.01.–13.03.2021",
      title: "Exhibition",
      subtitle: "refusing to make a title",
      image: "",
      type: "large",
    },
    {
      date: "24.01.–13.03.2021",
      title: "Film Installation",
      subtitle: "remote. response. request.",
      image: "",
      type: "small",
    },
    {
      date: "24.01.–13.03.2021",
      title: "CTM Configuration",
      subtitle: "another subtitle",
      image: "",
      type: "small",
    },
    {
      date: "24.01.–13.03.2021",
      title: "Famme Fitness",
      subtitle: "another subtitle",
      image: "",
      type: "small",
    },    
    {
      date: "24.01.–13.03.2021",
      title: "Exhibition",
      subtitle: "Summer School",
      image: "",
      type: "large",
    },
    {
      date: "24.01.–13.03.2021",
      title: "Outdoor Performance",
      subtitle: "another subtitle",
      image: "",
      type: "small",
    },
    {
      date: "24.01.–13.03.2021",
      title: "Outdoor Cinema",
      subtitle: "another subtitle auch mal ein bischen länger",
      image: "https://placeimg.com/640/480/arch/sepia",
      type: "small",
    },    
    {
      date: "24.01.–13.03.2021",
      title: "Food Market",
      subtitle: "another subtitle",
      image: "https://placeimg.com/640/480/arch/sepia",
      type: "small",
    },    
    {
    date: "24.01.–13.03.2021",
    title: "2022 Event",
    subtitle: "another subtitle",
    image: "https://placeimg.com/640/480/arch/sepia",
    type: "large",
    }
  ].map(card => ({
    component: CardExhibition,
    props: {
      ...card,
      large: card.type === "large"
      },
    type: card.type
  }))      

</script>

<section>

  <PageHeader>
    Programme
  </PageHeader>

  <CardHeadline>
    A Year Long Festival
  </CardHeadline>

  <nav class="dateselector">

    <ol class="years">
      <li class="year this" style={styleVars({ bgPosX })}>
        2021
      </li>
      <li class="year next">
        2022
      </li>
    </ol>

    <div class="months-wrapper">
      <ol class="months"     
        use:pannable
        on:panmove={handlePanMove}
        >
        { #each displayMonths as month }
          <li class="month">
            { month.abbr }
          </li>
        { /each }
      </ol>
    </div>

  </nav>

  <CardsGroup cards={ events } />

</section>

<style lang="scss">

  section {
    @include grid-padding;
  }

  .dateselector {
    @include typo-grotesk-text-24;
    user-select: none;
    margin-bottom: 20px;
  }

  .years, .months-wrapper {
    margin-top: 10px;
    @include media-small {
      margin-top: 8px;
    }
  }

  .months-wrapper { // to hide the scroll bar
    overflow: hidden;
    @include grid-margin(-1);

    height: $pill-height-large;
    @include media-small {
      height: $pill-height-small;
    }
  }

  .months {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat( 13, 1fr );
    grid-auto-flow: column;
    @include grid-padding;
    
    overflow: hidden;
    overflow-x: auto;

    column-gap: 10px;
    @include media-small {
      column-gap: 8px;
    }
  }

  .year, .month {
    background-color: $color-gray6; 
    border-radius: $pill-height-large / 2;
    line-height: $pill-height-large;
    @include media-small {
      line-height: $pill-height-small;
      border-radius: $pill-height-large / 2;
    }

    padding: 0 20px;
    @include media-small {
      padding: 0 15px;
    }
  }

  .years {
    display: flex;
    width: 100%;

    .this {
      flex: 1;
      background: linear-gradient(90deg, $color-mint 50%, $color-gray6 50%);
      background-size: 200% 200%;
      background-position-x: var(--bgPosX);
    }

    .next {
      margin-left: 10px;
      @include media-small {
        margin-left: 8px;
      }
    }

  }

  .month {
    
  }

</style>