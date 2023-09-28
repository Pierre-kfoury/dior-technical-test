import { BasketIcon } from "@/app/icons/BasketIcon";
import { CloseButton } from "@/app/icons/CloseButton";
import { TrashIcon } from "@/app/icons/TrashIcon";
import Image from "next/image";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Button } from "../button/Button";

export function Drawer() {
  const ref = useRef(null);

  const handleCloseDrawer = () => {
    const mySidenav = document.getElementById("mySidenav");
    if (mySidenav) {
      const main = document.getElementById("main");
      const carouselContainer = document.getElementById("carousel-container");

      mySidenav.style.transform = "translate(100%, 0px)";
      main!.style.filter = "blur(0px)";
      main!.style.opacity = "1";
      main!.style.backgroundColor = "transparent";

      carouselContainer!.style.filter = "blur(0px)";
      carouselContainer!.style.opacity = "1";
      carouselContainer!.style.backgroundColor = "white";
    }
  };
  useOnClickOutside(ref, handleCloseDrawer);

  return (
    <div id="mySidenav" className="sidenav" ref={ref}>
      <div className="drawer-container">
        <div className="basket-and-close">
          <div className="close-button" onClick={handleCloseDrawer}>
            <CloseButton />
          </div>
          <BasketIcon />
        </div>
        <div className="drawer-item">
          <Image
            src="/man-standing.png"
            width={200}
            height={300}
            alt="product"
            className="drawer-item-image"
          />
          <div className="drawer-item-description">
            <div className="text-title">MEN SHIRT</div>
            <div className="drawer-trash-and-price">
              <div className="item-price">19 000 €</div>
            </div>
            <div className="circle-container">
              <div className="circle margin-right">-</div>
              <div className="text">1 item</div>
              <div className="circle margin-left">+</div>
            </div>
          </div>
          <TrashIcon />
        </div>
        <div className="drawer-taxes-total-container">
          <div className="taxes-container">
            <div className="taxes-title">Taxes</div>
            <div className="taxes-value"> 3 166.67 €</div>
          </div>
          <div className="total-container">
            <div className="total-title">Total</div>
            <div className="total-value">19 000 €</div>
          </div>
        </div>
        <Button title="GO TO CHECKOUT" />
      </div>
    </div>
  );
}
