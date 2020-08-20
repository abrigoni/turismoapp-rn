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

const GET_LODGINGS_FILTERS = gql`
query GetLodgingsFilters {
  locations {
    id 
    name
  }
  categories {
    id 
    value
    stars
  }
  classifications {
    id 
    name
  }
}
`;

const GET_GASTRONOMICS_FILTERS = gql`
query GetLodgingsFilters {
  locations {
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
`;


export {
  GET_LODGINGS,
  GET_GASTRONOMICS,
  GET_LODGINGS_FILTERS,
  GET_GASTRONOMICS_FILTERS
};