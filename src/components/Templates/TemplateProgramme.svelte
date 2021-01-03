<script>
  import { onMount } from 'svelte'

  import CardHeadline from "/components/Widgets/CardHeadline";
  import PageHeader from '/components/Atoms/PageHeader';

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
      <ol class="months"      use:pannable
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

</section>

<style lang="scss">

  section {
    @include grid-padding;
  }

  .dateselector {
    @include typo-grotesk-text-24;
    user-select: none;
  }

  .years, .months-wrapper {
    margin-top: 10px;
    @include media-small {
      margin-top: 8px;
    }
  }

  .months-wrapper { // to hide the scroll bar
    margin-bottom: -20px;
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
    padding-bottom: 20px;

    column-gap: 10px;
    @include media-small {
      column-gap: 8px;
    }
  }

  .year, .month {
    background-color: $color-white; 
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
      background: linear-gradient(90deg, $color-mint 50%, white 50%);
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