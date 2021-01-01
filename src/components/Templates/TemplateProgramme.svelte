<script>
  import { onMount } from 'svelte'

  import CardHeadline from "/components/Widgets/CardHeadline";
  import PageHeader from '/components/Atoms/PageHeader';

  import { styleVars } from '/helper'

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

    <ol class="months">
      { #each months as month }
        <li class="month">
          { month.abbr }
        </li>
      { /each }
    </ol>

  </nav>

</section>

<style lang="scss">

  section {
    @include grid-padding;
  }

  .dateselector {
  }

  .years, .months {
    @include grid;
    grid-auto-flow: column;
  }
  .year, .month {
    background-color: $color-white; 
    border-radius: 0.5em;
  }

  .year.this {
    grid-column: 1 / span 9;
    background: linear-gradient(90deg, $color-mint 50%, white 50%);
    background-size: 200% 200%;
    background-position-x: var(--bgPosX);
  }

  .year.next {
    grid-column: 10 / span 3;
  }

  .month {
    
  }

</style>