export const NoteDef = `
type Note  @cacheControl(maxAge: 10, scope: PUBLIC) {
    id:ID!
    title:String
    priority:String
    content: String
    user:User
}
`;
