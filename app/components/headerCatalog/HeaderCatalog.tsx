import { DiorIcon } from "@/app/icons/DiorIcon";
import { HeaderTitle } from "../headerTitle/HeaderTitle";
import { Filter } from "../filter/Filter";
import { BasketIcon } from "@/app/icons/BasketIcon";

export function HeaderCatalog() {
  function handleOpenDrawer() {
    const element = document.getElementById("mySidenav");
    if (element) {
      element.style.width = "30%";
      document.getElementById("main")!.style.filter = "blur(6px)";
      document.getElementById("main")!.style.backgroundColor = "#000000b8";
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
          <Filter />
        </div>
        <div className="header-catalog-filter-sort">
          <Filter sort />
        </div>
      </div>
    </>
  );
}
