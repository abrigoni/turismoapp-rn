import { gql } from '@apollo/client';

const GET_LODGINGS = gql`
  query GetLodgings {
    lodgings {
      id 
      name 
      address
      lat 
      lng 
      location {
        id 
        name 
      }
      category {
        id 
        stars 
      }
      classification {
        id 
        name
      }
    }
  }
`;

const GET_GASTRONOMICS = gql`
  query GetGastronomicos {
    gastronomics {
      id 
      name
      address
      lat 
      lng 
      location {
        id 
        name
      }
      specialities {
        id
        name 
      }
      activities {
        id 
        name 
      }
    }
}
`;

export {
  GET_LODGINGS,
  GET_GASTRONOMICS
};