"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import {
  slides_new,
  webstoryno,
  webstorynotwo,
  webstorythree,
} from "../../../../public/assets/images";
import "./WebStoriesSlider.scss";

// Each card gets its own set of 6 slides
const webStoriesSets = [
  [
    { image: slides_new, text: "Card 1 - Slide 1" },
    { image: webstoryno, text: "Card 1 - Slide 2" },
    { image: webstorynotwo, text: "Card 1 - Slide 3" },
    { image: webstorythree, text: "Card 1 - Slide 4" },
    { image: slides_new, text: "Card 1 - Slide 5" },
    { image: webstoryno, text: "Card 1 - Slide 6" },
  ],
  [
    { image: webstorythree, text: "Card 2 - Slide 1" },
    { image: slides_new, text: "Card 2 - Slide 2" },
    { image: webstorynotwo, text: "Card 2 - Slide 3" },
    { image: webstoryno, text: "Card 2 - Slide 4" },
    { image: slides_new, text: "Card 2 - Slide 5" },
    { image: webstorythree, text: "Card 2 - Slide 6" },
  ],
  [
    { image: webstorynotwo, text: "Card 3 - Slide 1" },
    { image: webstorythree, text: "Card 3 - Slide 2" },
    { image: slides_new, text: "Card 3 - Slide 3" },
    { image: webstoryno, text: "Card 3 - Slide 4" },
    { image: webstorynotwo, text: "Card 3 - Slide 5" },
    { image: webstorythree, text: "Card 3 - Slide 6" },
  ],
  [
    { image: webstoryno, text: "Card 4 - Slide 1" },
    { image: webstorynotwo, text: "Card 4 - Slide 2" },
    { image: webstorythree, text: "Card 4 - Slide 3" },
    { image: slides_new, text: "Card 4 - Slide 4" },
    { image: webstoryno, text: "Card 4 - Slide 5" },
    { image: webstorythree, text: "Card 4 - Slide 6" },
  ],
  [
    { image: slides_new, text: "Card 5 - Slide 1" },
    { image: webstoryno, text: "Card 5 - Slide 2" },
    { image: webstorynotwo, text: "Card 5 - Slide 3" },
    { image: webstorythree, text: "Card 5 - Slide 4" },
    { image: webstorynotwo, text: "Card 5 - Slide 5" },
    { image: webstoryno, text: "Card 5 - Slide 6" },
  ],
  [
    { image: webstorythree, text: "Card 6 - Slide 1" },
    { image: slides_new, text: "Card 6 - Slide 2" },
    { image: webstorynotwo, text: "Card 6 - Slide 3" },
    { image: webstoryno, text: "Card 6 - Slide 4" },
    { image: slides_new, text: "Card 6 - Slide 5" },
    { image: webstorynotwo, text: "Card 6 - Slide 6" },
  ],
];

interface WebStoriesCardProps {
  slides: { image: any; text: string }[];
}

const WebStoriesCard: React.FC<WebStoriesCardProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="top_trending_card">
      <div className="trending_card_image">
        <Image
          src={slides[activeIndex].image}
          alt="trending_img"
          className="trending_card_img"
        />
        <div className="six_dots_slider">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${idx === activeIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
      <p className="trending_card_para">{slides[activeIndex].text}</p>
    </div>
  );
};

const WebStoriesSlider: React.FC = () => {
  return (
    <Grid className="slides_card_container">
      <p className="trending_heading">ವೆಬ್ ಸ್ಟೋರೀಸ್</p>
      <div className="top_sliding_wrap">
        {webStoriesSets.map((slides, index) => (
          <WebStoriesCard key={index} slides={slides} />
        ))}
      </div>
    </Grid>
  );
};

export default WebStoriesSlider;
