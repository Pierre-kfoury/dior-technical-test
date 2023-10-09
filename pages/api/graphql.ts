import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";

type itemType = "shirt" | "jewelry" | "bag";
type itemGender = "male" | "female";

export type Item = {
  itemId: number;
  itemName: string;
  itemDescription?: string;
  itemPrice: string;
  image: string;
  gender: itemGender;
  type: itemType;
};

type User = {
  userName: string;
  password?: string;
};

const typeDefs = gql`
  type Query {
    user(userName: String, password: String): User
    items(sortOrder: String, gender: String, type: String): [Item]
  }

  type User {
    userName: String
    password: String
  }

  type Item {
    itemId: Int
    itemName: String
    itemDescription: String
    itemPrice: String
    image: String
    gender: String
    type: String
  }
`;

const resolvers = {
  Query: {
    user(_parent: any, { userName, password }: any) {
      const user = users.find((user) => user.userName === userName);
      if (!user) {
        throw new Error(`No user found with userName: ${userName}`);
      }
      if (user.password !== password) {
        throw new Error("Incorrect password");
      }
      return user;
    },
    items: (_parent: any, { sortOrder, gender, type }: any) => {
      let filteredItems = [...items];

      if (gender) {
        filteredItems = filteredItems.filter((item) => item.gender === gender);
      }

      if (type) {
        filteredItems = filteredItems.filter((item) => item.type === type);
      }

      if (sortOrder === "ASC") {
        filteredItems.sort((a, b) => a.itemName.localeCompare(b.itemName));
      } else if (sortOrder === "DESC") {
        filteredItems.sort((a, b) => b.itemName.localeCompare(a.itemName));
      }

      console.log("filtered", filteredItems);

      return filteredItems;
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
    userName: "test",
    password: "test",
  },
  {
    userName: "dior",
    password: "password",
  },
];

const items: Item[] = [
  {
    itemId: 1,
    itemName: "MEN SHIRT",
    itemPrice: "19000",
    itemDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/man-standing.png",
    type: "shirt",
    gender: "male",
  },
  {
    itemId: 2,
    itemName: "LADY BAG",
    itemPrice: "3000",
    image: "/woman-standing.png",
    gender: "female",
    type: "bag",
    itemDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    itemId: 3,
    itemName: "DIOR JEWELRY",
    itemPrice: "100000",
    image: "/woman2-standing.png",
    gender: "female",
    type: "jewelry",
    itemDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
