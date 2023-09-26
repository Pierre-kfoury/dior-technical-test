import "app/style.scss";
import { Button } from "@/app/components/button/Button";
import { HeaderCatalog } from "@/app/components/headerCatalog/HeaderCatalog";
import { ShopIconComponent } from "@/app/icons/ShopIcon";
import { Carousel } from "../carousel/Carousel";
import { Card, CardProps } from "../card/Card";
import { Drawer } from "../drawer/Drawer";
import { gql, useQuery } from "@apollo/client";
import { Item } from "@/pages/api/graphql";

const GET_ITEMS = gql`
  query User {
    items {
      itemId
      itemName
      itemDescription
      itemPrice
      image
    }
  }
`;

export default function Catalog() {
  const { loading, error, data } = useQuery(GET_ITEMS);

  console.log(data);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Drawer />
      <div className="catalog-container" id="main">
        <HeaderCatalog />
        <Carousel>
          {(data.items as Item[]).map((card, i) => (
            <Card
              description={card.itemDescription as string}
              price={card.itemPrice}
              image={card.image as string}
              title={card.itemName as string}
              key={card.itemId}
            />
          ))}
        </Carousel>
        <Button title="ADD TO CART" Icon={<ShopIconComponent />} />
      </div>
    </>
  );
}
