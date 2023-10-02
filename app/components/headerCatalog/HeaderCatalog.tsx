import { DiorIcon } from "@/app/icons/DiorIcon";
import { HeaderTitle } from "../headerTitle/HeaderTitle";
import { Filter } from "../filter/Filter";
import { BasketIcon } from "@/app/icons/BasketIcon";
import { useMediaQuerrySSR } from "@/app/hooks/useMediaQuerrySSR";

type Props = {
  onClick: (filter: any) => void;
};

export function HeaderCatalog({ onClick }: Props) {
  const { mediaQuery } = useMediaQuerrySSR();

  function handleOpenDrawer() {
    const main = document.getElementById("main");
    const image = document.getElementById("carousel-container");
    const element = document.getElementById("mySidenav");

    const mediaQueryWidths = {
      desktop: "40%",
      tablet: "70%",
      mobile: "100%",
    };

    if (element && mediaQueryWidths[mediaQuery]) {
      element.style.width = mediaQueryWidths[mediaQuery];
    }

    const commonStyles = {
      filter: "blur(10px)",
      backgroundColor: "black",
      opacity: "0.7",
    };

    if (main) {
      Object.assign(main.style, commonStyles);
    }

    if (image) {
      Object.assign(image.style, commonStyles);
    }

    if (element) {
      setTimeout(() => {
        element.style.transform = "translate(0px, 0px)";
        element.style.visibility = "visible";
        element.style.opacity = "1";
      }, 200);
    }
  }

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
          <Filter onClickFilter={onClick} />
        </div>
        <div className="header-catalog-filter-sort">
          <Filter onClickFilter={onClick} sort />
        </div>
      </div>
    </>
  );
}
