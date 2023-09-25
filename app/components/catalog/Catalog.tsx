import "app/style.scss";
import { Button } from "@/app/components/button/Button";
import { HeaderCatalog } from "@/app/components/headerCatalog/HeaderCatalog";
import { ShopIconComponent } from "@/app/icons/ShopIcon";
import { Carousel } from "../carousel/Carousel";
import { Card, CardProps } from "../card/Card";
import { Drawer } from "../drawer/Drawer";

const cardsContent: CardProps[] = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "19 000",
    image: "/man-standing.png",
    title: "MEN SHIRT",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "3000",
    image: "/woman-standing.png",
    title: "LADY BAG",
  },
  {
    description:
      "Lorem ipsum lolo sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "100 000",
    image: "/woman2-standing.png",
    title: "DIOR JEWELRY",
  },
];

export default function Catalog() {
  return (
    <>
      <Drawer />
      <div className="catalog-container" id="main">
        <HeaderCatalog />
        <Carousel>
          {cardsContent.map((card, i) => (
            <Card
              description={card.description}
              price={card.price}
              image={card.image}
              title={card.title}
              key={i}
            />
          ))}
        </Carousel>
        <Button title="ADD TO CART" Icon={<ShopIconComponent />} />
      </div>
    </>
  );
}
