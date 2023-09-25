import { useMediaQuerrySSR } from "@/app/hooks/useMediaQuerrySSR";
import { LeftEnableIcon } from "@/app/icons/LeftEnableIcon";
import { RightEnableIcon } from "@/app/icons/RightEnableIcon";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const [active, setActive] = useState<number>(1);
  const count = React.Children.count(children);

  const { mediaQuery, mounted } = useMediaQuerrySSR();

  const handlers = useSwipeable({
    onSwipedRight: () => goToPrevious(),
    onSwipedLeft: () => goToNext(),
  });

  const goToPrevious = () => {
    setActive((prevActive) => (prevActive - 1 + count) % count);
  };

  const goToNext = () => {
    setActive((prevActive) => (prevActive + 1) % count);
  };

  const cardStyle = (i: number) => {
    const translateX = (i - active) * 700;
    const translateY = active === i ? 1 : 150;
    const scale = active === i ? 1 : 0.6;
    const filter = active === i ? "none" : "grayscale(100%)";
    const opacity = active === i ? 1 : 0.3;

    return {
      transform: `translateX(${translateX}px) scale(${scale}) translateY(${translateY}px)`,
      filter: filter,
      opacity: opacity,
    };
  };

  return (
    mounted && (
      <div className="carousel" {...handlers}>
        {mediaQuery === "desktop" && (
          <button className="nav left" onClick={goToPrevious}>
            {active > 0 && <LeftEnableIcon />}
          </button>
        )}

        {React.Children.map(children, (child, i) => (
          <div className="card-container" style={cardStyle(i)} key={i}>
            {child}
          </div>
        ))}
        {mediaQuery === "desktop" && (
          <button className="nav right" onClick={goToNext}>
            {active < count - 1 && <RightEnableIcon />}
          </button>
        )}
      </div>
    )
  );
}
