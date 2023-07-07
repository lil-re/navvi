// Make sure to always import gql from "@apollo/client/core"
// https://github.com/apollographql/apollo-client/issues/7318#issuecomment-734422428
import { gql } from "@apollo/client/core";

export const getAllPosts = () => gql`
query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title,
      user{
        id
        name
      }
    }
    meta {
      totalCount
    }
  }
}
`

export const getSearchData = () => gql`
query (
  $options: PageQueryOptions
) {
  users(options: $options) {
    data {
      id
      name,
      email
    }
    meta {
      totalCount
    }
  },
  posts(options: $options) {
    data {
      id
      title
      user {
        id
        name
      }
    }
    meta {
      totalCount
    }
  },
  albums(options: $options) {
    data {
      id
      title
      user {
        id
        name
      }
    }
    meta {
      totalCount
    }
  }
}
`
