import { gql } from '@apollo/client';

export default gql`
  query HomePage {
    Almanac: entries(siteId:"1", section: "media", tags: ["and", 468, 469] ) {
      title
      id
      slug
      typeHandle
    }
    Featured: entries(section: "media", tags: ["and", 468, 479]) {
      title
      id
      slug
      typeHandle
      title
    }
    WhatsOn: entries(section: "event") {
      title
      id
      slug
      typeHandle
      ... on event_event_Entry {
        id
        eventDates {
          ... on eventDates_timeRange_BlockType {
            id
            startDateAndTime
            endDateAndTime
          }
        }
      }
    }
    News: entries(section: "text", textType: "news",orderBy: "dateCreated DESC") {
      title
      id
      slug
      typeHandle
    }
    Tags: tags {
      id
      title
    }
  }
`