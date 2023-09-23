import Image from "next/image";

export function HeaderTitle() {
  return (
    <div className="header-title-container">
      <Image src={"/key.png"} width={35} height={76} alt="eiffel-tower" />
      <div className="header-title">THE SECRET COLLECTION</div>
    </div>
  );
}
