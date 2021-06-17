export const UserDef = `
  type User @cacheControl(maxAge: 10, scope: PUBLIC) {
    id: ID!
    name: String 
    email: String
    created_at: String
    admin: Boolean
    notes: [Note]
  }

`;
