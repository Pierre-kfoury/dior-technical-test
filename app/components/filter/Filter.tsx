import { BagsIcon } from "@/app/icons/BagsIcon";
import { JewelryIcon } from "@/app/icons/JewelryIcon";
import { MenIcon } from "@/app/icons/MenIcon";
import { ShirtsIcon } from "@/app/icons/ShirtsIcon";
import { WomenIcon } from "@/app/icons/WomenIcon";
import { useRef, useState } from "react";
import Image from "next/image";
import { SortIcon } from "@/app/icons/sortIcon";
import { useOnClickOutside } from "usehooks-ts";
import { TopIcon } from "@/app/icons/topIcon";
import { gql } from "@apollo/client";

type Props = {
  sort?: boolean;
  onClickFilter: (filter: any) => void;
};

export function Filter({ sort, onClickFilter }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    return setIsDropdownOpen(false);
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div ref={ref}>
      {sort ? (
        <SortIcon />
      ) : (
        <Image src={"/filterIcon.png"} width={22} height={22} alt="filter" />
      )}
      <button
        onClick={toggleDropdown}
        style={{
          borderBottom: isDropdownOpen ? "1px solid #020202" : "none",
        }}
        className="filter-button"
      >
        {sort ? "SORT" : "FILTERS"}
      </button>

      {isDropdownOpen &&
        (!sort ? (
          <div className="filter-box">
            <div className="container-filter">
              <div className="top-icon">
                <TopIcon />
              </div>
              <div className="container-filter-dropdown">
                <ul className="dropdown-list">
                  <li
                    tabIndex={0}
                    onClick={() =>
                      onClickFilter({
                        gender: "female",
                      })
                    }
                  >
                    <WomenIcon />
                    WOMEN
                  </li>
                  <li
                    tabIndex={1}
                    onClick={() =>
                      onClickFilter({
                        gender: "male",
                      })
                    }
                  >
                    <MenIcon />
                    MEN
                  </li>
                </ul>
                <ul className="dropdown-list">
                  <li tabIndex={2}>
                    <ShirtsIcon />
                    SHIRTS
                  </li>
                  <li tabIndex={3}>
                    <BagsIcon />
                    BAGS
                  </li>
                  <li tabIndex={4}>
                    <JewelryIcon />
                    JEWELRY
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="filter-box">
            <div className="container-filter">
              <div className="top-icon">
                <TopIcon />
              </div>
              <ul className="dropdown-list">
                <li tabIndex={0}>BY PRICE ASC</li>
                <li tabIndex={1}>BY PRICE DESC</li>
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
}
