import { createServer } from "@graphql-yoga/node";
import { deleteEvent, events, newEvent, updateEvent } from "utils/helper";
import { Event } from "types";

const typeDefs = /* GraphQL */ `
  type Event {
    id: ID!
    title: String!
    start: Int!
    end: Int!
  }

  input EventInput {
    id: ID!
    title: String!
    start: Int!
    end: Int!
  }

  type Query {
    events: [Event!]!
  }

  type Mutation {
    newEvent(title: String!, start: Int!, end: Int): Event
    deleteEvent(id: Int!): Boolean
    editEvent(event: EventInput!): Event
  }
`;

const resolvers = {
  Query: {
    async events() {
      return events;
    },
  },
  Mutation: {
    newEvent: (
      _parent: unknown,
      args: { title: string; start: number; end: number }
    ) => {
      const { title, start, end } = args;
      console.log("New event: ", title);

      return newEvent(title, start, end);
    },
    editEvent: (_parent: unknown, args: { event: Event }) => {
      const { event } = args;
      return updateEvent(event);
    },
    deleteEvent: (_parent: unknown, args: { id: string }) => {
      const { id } = args;
      return deleteEvent(id);
    },
  },
};

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: "/api/graphql",
  // graphiql: false // uncomment to disable GraphiQL
});

export default server;
