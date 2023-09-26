import { client } from "@/app/apollo/client";
import Catalog from "@/app/components/catalog/Catalog";
import { ApolloProvider } from "@apollo/client";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

export default function CatalogPage() {
  loadDevMessages();
  loadErrorMessages();

  return (
    <ApolloProvider client={client}>
      <Catalog />
    </ApolloProvider>
  );
}
