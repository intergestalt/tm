import { gql } from '@apollo/client';

export default gql`
  query News {
    News: entries(section: "text", textType: "news", orderBy: "dateCreated DESC") {
      title
      id
      slug
      typeHandle
    }
  }
`