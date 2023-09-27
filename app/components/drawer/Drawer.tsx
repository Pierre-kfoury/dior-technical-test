import { BasketIcon } from "@/app/icons/BasketIcon";
import { CloseButton } from "@/app/icons/CloseButton";
import { TrashIcon } from "@/app/icons/TrashIcon";
import Image from "next/image";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Button } from "../button/Button";

export function Drawer() {
  const ref = useRef(null);

  useOnClickOutside(ref, () => handleCloseDrawer());

  const handleCloseDrawer = () => {
    const mySidenav = document.getElementById("mySidenav");
    if (mySidenav) {
      (mySidenav as HTMLElement).style.width = "0";
      document.getElementById("main")!.style.filter = "blur(0px)";
      document.getElementById("main")!.style.filter = "grayscale(0%)";
      document.getElementById("main")!.style.backgroundColor = "transparent";
    }
  };

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
            <div className="taxes-value">Total 19 000 €</div>
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
