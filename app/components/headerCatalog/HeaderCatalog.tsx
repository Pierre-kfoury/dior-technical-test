import { DiorIcon } from "@/app/icons/DiorIcon";
import { HeaderTitle } from "../headerTitle/HeaderTitle";
import { Filter } from "../filter/Filter";
import { BasketIcon } from "@/app/icons/BasketIcon";
import { useMediaQuerrySSR } from "@/app/hooks/useMediaQuerrySSR";
import { useEffect } from "react";

export function HeaderCatalog() {
  const { mediaQuery, mounted } = useMediaQuerrySSR();

  function handleOpenDrawer() {
    document.getElementById("main")!.style.filter = "blur(20px)";

    document.getElementById("main")!.style.backgroundColor = "black";
    document.getElementById("main")!.style.opacity = "0.7";
    document.getElementById("main")!.style.filter = "blur(20px)";

    const image = document.getElementById("carousel-container");
    image!.style.filter = "blur(20px)";
    image!.style.opacity = "0.7";
    image!.style.backgroundColor = "black";

    setTimeout(() => {
      const element = document.getElementById("mySidenav");
      element!.style.transform = "translate(0px, 0px)";
      element!.style.visibility = "visible";
      element!.style.opacity = "1";
    }, 200);
  }

  useEffect(() => {
    const element = document.getElementById("mySidenav");
    if (element) {
      if (mediaQuery === "desktop") {
        element.style.width = "40%";
      }
      if (mediaQuery === "tablet") {
        element.style.width = "60%";
      }
      if (mediaQuery === "mobile") {
        element.style.width = "100%";
      }
    }
  }, [mediaQuery, mounted]);

  return (
    <>
      <div className="header-catalog-container">
        <div className="header-catalog-logo">
          <DiorIcon />
        </div>
        <div className="header-catalog-title">
          <HeaderTitle />
        </div>
        <div className="header-catalog-basket" onClick={handleOpenDrawer}>
          <BasketIcon />
        </div>
      </div>
      <div className="header-catalog-filter-container">
        <div className="header-catalog-filter">
          <Filter />
        </div>
        <div className="header-catalog-filter-sort">
          <Filter sort />
        </div>
      </div>
    </>
  );
}
