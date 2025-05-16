'use client';
import Sidebar from '@/app/ClientComponents/Sidebar/Sidebar'
import { Grid } from '@mui/material'
import React, { useState } from 'react'
import RightPart from '../page'
import { advertise_holder, book_ribbon, budget, circle_news_img, downer_btn, prev_btn, stat_2, sudhi_img1, udayawanilogo_reel } from '../../../../public/assets/images'
import Image from "next/image";
import './page.scss'
import Slider from 'react-slick'
import Link from 'next/link';

const page = () => {

  const [fontSize, setFontSize] = useState(15);

  const handleSliderChange = (e: any) => {
    setFontSize(parseInt(e.target.value, 10));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For tablets and large phones
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="main_container" style={{ padding:"10px" }}>
      <Grid container spacing={2}>
        <Grid size={{ md: 2.5 }}> <Sidebar /></Grid>
        <Grid container size={{ md: 6.5 }} sx={{ height: "100%" }}>
          <div className="news_container_lists">

            <div className='advertise_container outer_container advt_cont'>
              <div className='vertical_text'>Advertise</div>
              <div className='inner_container'>
                <div className='image_container'>
                  <div className='image_inner_container'>
                    <Image src={advertise_holder} alt='advertise_holder' />
                    <div className='image_txt'>Advertisement Placeholder</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rastriya_sudhi_container outer_container">
              <div className="rastriya_sudhi_topper_txt">
                <Link href='/'>
                <Image style={{ marginRight: '10px' }} src={stat_2} alt='stat_2' /> </Link><span>ರಾಷ್ಟ್ರೀಯ ಸುದ್ದಿ</span> Apr 7, 2025, 3:51
                PM IST
              </div>
              <div className="scnd_topper_header">ಚಂದ್ರಯಾನ-3 ಯಶಸ್ಸಿನ ಬಳಿಕ ಭಾರತದಿಂದ ಮಂಗಳ ಮಿಷನ್‌ಗೆ ಹೊಸಹುಮ್ಮಸ್ಸು</div>

              <div className="rastriya_sudhi_outer_cont">
                <div className="rastriya_sudhi_img_cont">
                  <Image style={{ width: '100%' }} src={sudhi_img1} alt='sudhi_img1' />
                </div>
                <div className="img_bottom_cont">
                  <Image src={circle_news_img} alt='circle_news_img' />ಮಂಗಳ ಮಿಷನ್ ಕುರಿತ ಇಸ್ರೋ ಶಿಬಿರದ ಚಿತ್ರ
                </div>
              </div>

              <div className="rashtriya_sudhi_txt_cont">
                <div className="txt_cont_top">
                  <div className="cont_top_img cont_top_left">
                    <Image src={udayawanilogo_reel} alt='sudhi_img1' /> Team Udayavani
                  </div>
                  <div className="cont_top_img cont_top_right">
                   <div className='fonts smaller_font'>ಅ</div>
                    <input
                      type="range"
                      min="12"
                      max="36"
                      value={fontSize}
                      onChange={handleSliderChange}
                      className="slider"
                    />
                     <div className='fonts bigger_font'>ಅ</div>
                  </div>
                </div>
                <div className="pargraph_txt" style={{ fontSize: `${fontSize}px` }}>
                  ಭಾರತೀಯ ಅಂತರಿಕ್ಷ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ (ಇಸ್ರೋ) ಚಂದ್ರಯಾನ-3 ಮಿಷನ್ ಮೂಲಕ ಚಂದ್ರನ ದಕ್ಷಿಣ ಧ್ರುವದಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿ ಲ್ಯಾಂಡಿಂಗ್ ನಡೆಸಿದ
                  ಕೆಲವೇ ತಿಂಗಳುಗಳ ಬಳಿಕ, ಮಂಗಳ ಗ್ರಹದತ್ತ ಮತ್ತೊಂದು ಮಹತ್ವಾಕಾಂಕ್ಷೆಯ ಪ್ರಯಾಣಕ್ಕೆ ಸಜ್ಜಾಗುತ್ತಿದೆ. <br />
                  ಈ ಬಾರಿ ‘ಮಂಗಳಯಾನ-2’ ಎಂಬ ಹೆಸರಿನಲ್ಲಿ ಪ್ರಾರಂಭವಾಗಲಿರುವ ಮಿಷನ್‌ ಪೂರ್ವಭಾವಿಯಾಗಿ 2026 ರ ವೇಳೆಗೆ ಉಡಾವಣೆ
                  ಗುರಿಯಾಗಿಟ್ಟುಕೊಳ್ಳಲಾಗಿದೆ. ಇದರಲ್ಲಿ ಕೇವಲ ಆರ್ಬಿಟರ್ ಮಾತ್ರವಲ್ಲದೇ, ಲ್ಯಾಂಡರ್ ಹಾಗೂ ರೋವರ್ ಗಳನ್ನು ಸೇರಿಸುವ ಯತ್ನ ನಡೆಯುತ್ತಿದೆ. ಈ
                  ಮೂಲಕ ಮಂಗಳಗ್ರಹದ ಮೇಲ್ಮೈ ಸಂಶೋಧನೆಗೆ ಭಾರತ ಹೆಜ್ಜೆ ಇಡಲಿರುವುದು ಅತ್ಯಂತ ಗಮನಾರ್ಹ ಬೆಳವಣಿಗೆಯಾಗಿದೆ.
                </div>

                <div className="footer_txt">#Science #Space #ISRO #Mars Mission#Chandrayaan #Tech News #India #Scientists
                  #International News</div>
                <div className="footer_buttons">
                  <button className="prev_btn">
                    <Image src={prev_btn} alt='prev_btn' />ಹಿಂದಿನ ನ್ಯೂಸ್
                  </button>
                  <button className="nxt_btn">ಇನ್ನಷ್ಟು ಸುದ್ದಿ ಲೋಡ್ ಮಾಡಿ
                    <Image src={downer_btn} alt='downer_btn' />
                  </button>
                </div>
              </div>
            </div>

            <div className="rastriya_sudhi_outside_bdy">
              <div className="bdy_header">ಇನ್ನಷ್ಟು ನ್ಯೂಸ್ ಈ ವಿಭಾಗದಿಂದ </div>
              <div className="news_sub_container_lists">
                <Slider {...settings} className="cards_container">
                  <div className="cards_lists">
                    <div className="sub_container_cards">
                      <div className="cards_top_img">
                        <div className="image_toper_time">1 min ago</div>
                        <Image style={{ width: '100%' }} src={budget} alt='budget' />
                      </div>
                      <div className="cards_botoom_header_txt">ಬೆಂಗಳೂರು</div>
                      <div className="cards_botoom_txt">
                        ಕೇಂದ್ರ ಬಜೆಟ್ 2025 ಮಂಡನೆ: ಕೃಷಿ, ಆರೋಗ್ಯ, ಶಿಕ್ಷಣ ಕ್ಷೇತ್ರಗಳಿಗೆ ವಿಶೇಷ ಅನುದಾನ
                      </div>
                    </div>
                  </div>
                  <div className="cards_lists">
                    <div className="sub_container_cards">
                      <div className="cards_top_img">
                        <div className="image_toper_time">2 min ago</div>
                        <Image style={{ width: '100%' }} src={budget} alt='budget' />
                      </div>
                      <div className="cards_botoom_header_txt">ಬೆಂಗಳೂರು</div>
                      <div className="cards_botoom_txt">
                        ಕರ್ನಾಟಕದಲ್ಲಿ ಮಳೆಯ ಆರ್ಭಟ: ಜನಜೀವನ ಅಸ್ತವ್ಯಸ್ತ, ರೈತರ ಸಂಕಷ್ಟ ಇನ್ನೂ ಮುಂದುವರಿದು
                      </div>
                    </div>
                  </div>
                  <div className="cards_lists">
                    <div className="sub_container_cards">
                      <div className="cards_top_img">
                        <div className="image_toper_time">4 min ago</div>
                        <Image style={{ width: '100%' }} src={budget} alt='budget' />
                      </div>
                      <div className="cards_botoom_header_txt">ಬೆಂಗಳೂರು</div>
                      <div className="cards_botoom_txt">
                        ಅಮೇರಿಕದ ಅಧ್ಯಕ್ಷೀಯ ಚುನಾವಣಾ ಸಂಭ್ರಮ: ಪ್ರಮುಖ ಅಭ್ಯರ್ಥಿಗಳ ಪರಸ್ಪರ ಟಕ್ಕರ್
                      </div>
                    </div>
                  </div>
                  <div className="cards_lists">
                    <div className="sub_container_cards">
                      <div className="cards_top_img">
                        <div className="image_toper_time">4 min ago</div>
                        <Image style={{ width: '100%' }} src={budget} alt='budget' />
                      </div>
                      <div className="cards_botoom_header_txt">ಬೆಂಗಳೂರು</div>
                      <div className="cards_botoom_txt">
                        ಅಮೇರಿಕದ ಅಧ್ಯಕ್ಷೀಯ ಚುನಾವಣಾ ಸಂಭ್ರಮ: ಪ್ರಮುಖ ಅಭ್ಯರ್ಥಿಗಳ ಪರಸ್ಪರ ಟಕ್ಕರ್
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="btm_txt">ಎಲ್ಲಾ ನ್ಯೂಸ್
                <Image src={book_ribbon} alt='book_ribbon' />
              </div>
            </div>

            <div className='advertise_container outer_container advt_cont'>
              <div className='vertical_text'>Advertise</div>
              <div className='inner_container'>
                <div className='image_container'>
                  <div className='image_inner_container'>
                    <Image src={advertise_holder} alt='advertise_holder' />
                    <div className='image_txt'>Advertisement Placeholder</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </Grid>


        <Grid size={{ md: 3 }}><RightPart /></Grid>
      </Grid>


    </div>
  )
}

export default page