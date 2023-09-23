import { LeftEnableIcon } from "@/app/icons/LeftEnableIcon";
import { RightDisableIcon } from "@/app/icons/RightDisableIcon";
import { RightEnableIcon } from "@/app/icons/RightEnableIcon";
import React, { useState } from "react";
import ReactDOM from "react-dom";

interface CardProps {
  title: string;
  content: string;
}

const MAX_VISIBILITY = 3;

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const [active, setActive] = useState<number>(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button
          className="nav left"
          onClick={() => setActive((prevActive) => prevActive - 1)}
        >
          <LeftEnableIcon />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 ? (
        <button
          className="nav right"
          onClick={() => setActive((prevActive) => prevActive + 1)}
        >
          <RightEnableIcon />
        </button>
      ) : (
        <RightDisableIcon />
      )}
    </div>
  );
}
