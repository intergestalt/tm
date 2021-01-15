<script>
  import { Link, link, useResolve } from "svelte-navigator";

  import Card from '/components/Atoms/Card'
  import TriContent from '/components/Atoms/TriContent'
  import IconList from '/components/Icons/IconList.svelte'

  const resolve = useResolve();

  const entries = [
    {
      name: "Text",
      number: 2
    },
    {
      name: "Audio",
      number: 2
    },
    {
      name: "Video",
      number: 2
    },
    {
      name: "Image",
      number: 2
    },
    {
      name: "Artwork",
      number: 20
    },    
  ]

</script>

<Card bgColorKey="mint" standardRadius>
  <TriContent>
    <span slot="top">
      Contents
    </span>
    <span slot="middle">
      <ul class="list">
        {#each entries as entry }
          <li class="entry">
            <span class="category">
              {entry.name}
            </span>
            <span class="dots">
            </span>
            <span class="number">
              { `${entry.number}`.padStart(2, '0')}
            </span>
          </li>
        {/each}
      </ul>
    </span>
    <span slot="bottom">
      <Link to={ resolve("/almanac/list") } >
        <span class="more">
          <span class="text">Show all entries</span>
          <IconList class="icon"/>
        </span>
      </Link>
    </span>
  </TriContent>
</Card>

<style lang="scss">

  .entry {
    @include typo-serif-text-28;
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-transform: uppercase;
    .dots {
      // border-bottom: dotted black 1px;
      height: 1em;
      // background: red;
      flex:1;
      position: relative;
      overflow: hidden;
      margin: 0 0.7ex;
      &::after {
        content: "..................................................................................";
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        
      }
    }
    & + .entry {
      margin-top: 5%;
    }
  }

  .list {
    padding: 0px 0;
  }

  .more {
    @include typo-serif-small-caps-28;
    color: $color-red;
    display: flex;
    justify-content: space-between;
    .icon {
      
    }
  }
</style>