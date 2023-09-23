import { BagsIcon } from "@/app/icons/BagsIcon";
import { JewelryIcon } from "@/app/icons/JewelryIcon";
import { MenIcon } from "@/app/icons/MenIcon";
import { ShirtsIcon } from "@/app/icons/ShirtsIcon";
import { WomenIcon } from "@/app/icons/WomenIcon";
import { useState } from "react";
import Image from "next/image";
import { SortIcon } from "@/app/icons/sortIcon";
import { useOutsideClick } from "@/app/hooks/useClickOutside";

type Props = {
  sort?: boolean;
};

export function Filter({ sort }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("toggleDropdown");
  };

  return (
    <div className="dropdown">
      {sort ? (
        <SortIcon />
      ) : (
        <Image src={"/filterIcon.png"} width={22} height={22} alt="filter" />
      )}
      <button onClick={toggleDropdown} className="filter-button">
        {sort ? "SORT" : "FILTERS"}
      </button>
      {isDropdownOpen &&
        (!sort ? (
          <div className="filter-box">
            <ul className="dropdown-list">
              <li>
                <WomenIcon />
                WOMEN
              </li>
              <li>
                <MenIcon />
                MEN
              </li>
            </ul>
            <ul className="dropdown-list">
              <li>
                <ShirtsIcon />
                SHIRTS
              </li>
              <li>
                <BagsIcon />
                BAGS
              </li>
              <li>
                <JewelryIcon />
                JEWELRY
              </li>
            </ul>
          </div>
        ) : (
          <div className="filter-box">
            <ul className="dropdown-list">
              <li>BY PRICE ASC</li>
              <li>BY PRICE DESC</li>
            </ul>
          </div>
        ))}
    </div>
  );
}