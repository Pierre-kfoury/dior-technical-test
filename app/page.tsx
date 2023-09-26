"use client";
import { LoginPage } from "./components/loginPage/LoginPage";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <LoginPage />
    </ApolloProvider>
  );
}
