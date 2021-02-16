import { gql } from '@apollo/client';

export const GET_MOVIES_BY_TITLE = gql`
  query SearchMovies($title: String!) {
    searchMovies(query: $title) {
      id
      name
      score
      genres {
        name
      }
      socialMedia {
        imdb
      }
      similar(limit: 10) {
        id
        name
        score
        genres {
          name
        }
        socialMedia {
          imdb
        }
      }
    }
  }
`;
