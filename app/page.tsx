"use client";
import { LoginPage } from "./components/loginPage/LoginPage";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

export default function Home() {
  loadDevMessages();
  loadErrorMessages();

  return (
    <ApolloProvider client={client}>
      <LoginPage />
    </ApolloProvider>
  );
}
