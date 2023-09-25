import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

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
      <a onClick={handleCloseDrawer}>&times;</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
}
