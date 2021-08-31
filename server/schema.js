import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Query {
        rooms(limit: Int, offset: Int): [Room],
        room(id: Int!): Room!
    }

    type Room {
        id: ID!
        name: String!
    }

    type Post {
        id: ID!
        title: String!
        published: Boolean!
        link: String
    }

    type Comment {
        id: ID!
        comment: String!
    }
`);
