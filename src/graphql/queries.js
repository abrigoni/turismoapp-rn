import { gql } from '@apollo/client';

const GET_LODGINGS = gql`
  query GetLodgings {
    lodgings {
      id 
      name 
      address
      lat 
      lng 
      picture
      location {
        id 
        name 
      }
      category {
        id 
        stars 
        value
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
      picture
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