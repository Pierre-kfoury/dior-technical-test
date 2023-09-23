import "app/style.scss";

import { Button } from "@/app/components/button/Button";
import { HeaderCatalog } from "@/app/components/headerCatalog/HeaderCatalog";
import { ShopIconComponent } from "@/app/icons/ShopIcon";
import { Carousel } from "../carousel/Carousel";

const CARDS = 10;
const MAX_VISIBILITY = 3;

export default function Catalog() {
  return (
    <div className="catalog-container">
      <HeaderCatalog />
      <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
          <Card key={i} title={"Card " + (i + 1)} content="Lorem ." />
        ))}
      </Carousel>
      {/* <mainCatalog /> */}
      {/* <Button title="Add To CART" Icon={<ShopIconComponent />} /> */}
    </div>
  );
}

const Card = ({ title, content }: { title: string; content: string }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);
