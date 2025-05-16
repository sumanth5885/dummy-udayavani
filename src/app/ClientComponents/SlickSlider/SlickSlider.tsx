"use client";
import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import {
  arrow_cirle_left,
  arrow_cirle_right,
  slicker_circle,
} from "../../../../public/assets/images";
import "./SlickSlider.scss";
import Slider from "react-slick";

const SlickSliderComponent = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller laptops
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For tablets and large phones
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For small phones
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <Grid size={{ md: 12 }} className="fifth_section_container">
        <div className="fifth_section_circle">
          <p>ಜಿಲ್ಲಾವಾರು ಸುದ್ದಿ</p>
          <div className="slick_arrows">
            <Image
              src={arrow_cirle_left}
              alt="arrow_left"
              onClick={handlePrev}
            />
            <Image
              src={arrow_cirle_right}
              alt="arrow_right"
              onClick={handleNext}
            />
          </div>
        </div>

        <div className="slicker_circle_wrap">
          <Slider ref={sliderRef} {...settings}>
            <div className="slicker_circle">
              <Image
                src={slicker_circle}
                alt="imglists1"
                className="slicker_img"
              />
              <p>ಬೆಂಗಳೂರು</p>
            </div>
            <div className="slicker_circle">
              <Image
                src={slicker_circle}
                alt="imglists1"
                className="slicker_img"
              />
              <p>ಬೆಂಗಳೂರು</p>
            </div>
            <div className="slicker_circle">
              <Image
                src={slicker_circle}
                alt="imglists1"
                className="slicker_img"
              />
              <p>ಬೆಂಗಳೂರು</p>
            </div>
            <div className="slicker_circle">
              <Image
                src={slicker_circle}
                alt="imglists1"
                className="slicker_img"
              />
              <p>ಬೆಂಗಳೂರು</p>
            </div>
            <div className="slicker_circle">
              <Image
                src={slicker_circle}
                alt="imglists1"
                className="slicker_img"
              />
              <p>ಬೆಂಗಳೂರು</p>
            </div>
            <div className="slicker_circle">
              <Image
                src={slicker_circle}
                alt="imglists1"
                className="slicker_img"
              />
              <p>ಬೆಂಗಳೂರು</p>
            </div>
            <div className="slicker_circle">
              <Image
                src={slicker_circle}
                alt="imglists1"
                className="slicker_img"
              />
              <p>ಬೆಂಗಳೂರು</p>
            </div>
          </Slider>
        </div>
      </Grid>
    </>
  );
};

export default SlickSliderComponent;
