import { DiorIcon } from "@/app/icons/DiorIcon";
import { HeaderTitle } from "../headerTitle/HeaderTitle";
import { Filter } from "../filter/Filter";
import { BasketIcon } from "@/app/icons/BasketIcon";

export function HeaderCatalog() {
  return (
    <div className="header-catalog-container">
      <div className="header-catalog-logo">
        <DiorIcon />
      </div>
      <div className="header-catalog-title">
        <HeaderTitle />
      </div>
      <div className="header-catalog-filters">
        <Filter />
      </div>
      <div className="header-catalog-filters-sort">
        <Filter sort />
      </div>
      <div className="header-catalog-basket">
        <BasketIcon />
      </div>
    </div>
  );
}
