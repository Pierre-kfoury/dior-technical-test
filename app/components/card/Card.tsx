import React from "react";
import Image from "next/image";

export type CardProps = {
  image: string;
  description: string;
  title: string;
  price: string;
};

export function Card({ image, description, title, price }: CardProps) {
  return (
    <div className="card-card">
      <div className="card-image-container">
        <Image
          className="card-image"
          src={image}
          width={654}
          height={641}
          alt="Card"
          id="card-image"
        />
      </div>
      <div className="card-content">
        <div className="card-description">{description}</div>
        <div className="card-title">{title}</div>
        <div className="card-price">{price} €</div>
      </div>
    </div>
  );
}
