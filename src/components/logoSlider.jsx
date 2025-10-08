import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ResizePlugin from "./ResizePlugin";
import MutationPlugin from "./mutationPlugin";

const LogoSlider = ({ direction, thumbnails }) => {
  const [details, setDetails] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const animation = { duration: 50000, easing: (t) => t };

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,

      detailsChanged(s) {
        setDetails(s.track.details);
      },
      created(s) {
        // Small delay to ensure track.details exists
        setTimeout(() => {
          if (s.track?.details) s.moveToIdx(5, true, animation);
        }, 100);
      },
      updated(s) {
        if (!s.track?.details) return; // ✅ prevent null access
        s.moveToIdx(
          direction === "left"
            ? s.track.details.abs - 5
            : s.track.details.abs + 5,
          true,
          animation
        );
      },
      animationEnded(s) {
        if (!s.track?.details) return; // ✅ prevent null access
        s.moveToIdx(
          direction === "left"
            ? s.track.details.abs - 5
            : s.track.details.abs + 5,
          true,
          animation
        );
      },
      initial: 0,
      slides: {
        origin: "center",
        perView: window.innerWidth < 750 ? 3 : 12,
        spacing: 10,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [ResizePlugin, MutationPlugin]
  );

  const [containerHeight, setContainerHeight] = useState(null);

  return (
    <div id="portfolio" className="mb-5">
      <div style={{ zIndex: 20 }} ref={sliderRef} className="keen-slider">
        {thumbnails?.map((src, idx) => (
          <div
            key={idx}
            style={{ height: containerHeight ? containerHeight : "auto" }}
            className="keen-slider__slide zoom-out__slide"
          >
            <img
              className="card-img-top rounded-4 bg-white p-2"
              style={{ objectFit: "contain", height: "100%" }}
              alt="Portfolio preview"
              src={src}
              onLoad={(e) => setContainerHeight(e.target.clientHeight)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
