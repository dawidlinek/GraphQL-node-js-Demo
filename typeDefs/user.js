import { gql } from "apollo-server-fastify";

export const User = gql`
  type Picture {
    large: String
    medium: String
    thumbnail: String
  }

  type Id {
    name: String
    value: String
  }

  type Registered {
    date: String
    age: Int
  }

  type Dob {
    date: String
    age: Int
  }

  type Login {
    uuid: String
    username: String
    password: String
    salt: String
    md5: String
    sha1: String
    sha256: String
  }

  type Timezone {
    offset: String
    description: String
  }

  type Coordinates {
    latitude: String
    longitude: String
  }

  type Street {
    number: Int
    name: String
  }
  "Dane dotyczące lokalizacji użytkownika"
  type Location {
    "Miasto użytkownika"
    city: String
    state: String
    country: String
    postcode: Int
    timezone: Timezone
    coordinates: Coordinates
    street: Street
  }

  "Dane dotyczące nazwy użytkownika takie jak:"
  type Name {
    title: String
    first: String
    last: String
  }

  "Użytkownik przykładowego coś tam..."
  type User {
    gender: String
    email: String
    phone: String
    cell: String
    nat: String
    picture: Picture
    id: Id
    registered: Registered
    dob: Dob
    login: Login
    location: Location
    name(title: String): Name
  }

  type Query {
    users(
      search: String
      strictSearch: Boolean
      limit: Int
      gender: String
    ): [User]
  }
`;
