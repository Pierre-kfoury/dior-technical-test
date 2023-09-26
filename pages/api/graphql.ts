import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";

type Item = {
  itemId: number;
  itemName: string;
  itemDescription?: string;
  itemPrice: number;
  image?: string;
};

type User = {
  userId: number;
  password?: string;
  firstName: string;
  lastName: string;
  email: string;
};

const typeDefs = gql`
  type Query {
    user(userId: Int): User
    items: [Item]
    item(itemId: Int): Item
  }

  type User {
    userId: Int
    password: String
    firstName: String
    lastName: String
    email: String
  }

  type Item {
    itemId: Int
    itemName: String
    itemDescription: String
    itemPrice: Float
    image: String
  }
`;

const resolvers = {
  Query: {
    user(_parent: any, { userId }: any, context: any, info: any) {
      return users.find((user) => user.userId === userId);
    },
    items: () => items, // Resolver for the 'items' query
    item: (_parent: any, { itemId }: any, context: any, info: any) => {
      return items.find((item) => item.itemId === itemId);
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);

const users: User[] = [
  {
    userId: 1234,
    password: "password",
    firstName: "John",
    lastName: "Smith",
    email: "johnsmith@example.com",
  },
  {
    userId: 1235,
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@example.com",
  },
];

const items: Item[] = [
  {
    itemId: 1,
    itemName: "MEN SHIRT",
    itemPrice: 19000,
    itemDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/man-standing.png",
  },
  {
    itemId: 2,
    itemName: "LADY BAG",
    itemPrice: 3000,
    image: "/woman-standing.png",
    itemDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    itemId: 3,
    itemName: "DIOR JEWELRY",
    itemPrice: 100000,
    image: "/woman2-standing.png",
    itemDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
