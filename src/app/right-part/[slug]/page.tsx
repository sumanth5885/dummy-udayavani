'use client'
import Sidebar from "@/app/ClientComponents/Sidebar/Sidebar";
import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import RightPart from "../page";
import './page.scss'
import { advertise_holder, book_ribbon, budget, circle_news_img, downer_btn, new_inner_imgs, prev_btn, scrollbtn, stat_2, sudhi_img1, udayawanilogo_reel } from "../../../../public/assets/images";
import Image from "next/image";
import Slider from "react-slick";

export default function Page() {
  const [activeTab, setActiveTab] = useState('ಸುದ್ದಿಗಳು')
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabs = ['ಸುದ್ದಿಗಳು', 'ರಾಜ್ಯ', 'ರಾಷ್ಟ್ರೀಯ', 'ಜಗತ್ತು', 'ವೈರಲ್ ನ್ಯೂಸ್', 'ವಾಣಿಜ್ಯ', 'ಆರೋಗ್ಯ', 'ರಾಜಕೀಯ', 'ಪ್ರವಾಸೋದ್ಯಮ']
  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer && scrollContainer.firstChild) {
      const tabWidth = (scrollContainer.firstChild as HTMLElement).clientWidth;
      scrollContainer.scrollBy({ left: tabWidth * 2, behavior: 'smooth' });
    }
  };

  const newsItems = [
    {
      time: "11:00 AM IST",
      title: "ರಾಷ್ಟ್ರೀಯ",
      boldText: "ಅಯೋಧ್ಯೆಯಲ್ಲಿ ರಾಮ ಮಂದಿರ ಲೋಕಾರ್ಪಣೆ, ಲಕ್ಷಾಂತರ ಭಕ್ತರ ಉತ್ಸಾಹದ ಸಾಗರ",
      plainText: "ಲಕ್ಷಾಂತರ ಭಕ್ತರ ಸಾನ್ನಿಧ್ಯದಲ್ಲಿ ರಾಮ ಮಂದಿರ ಲೋಕಾರ್ಪಣೆ ಧಾರ್ಮಿಕತೆಯ ಉತ್ಸವ",
      img: new_inner_imgs
    },
    {
      time: "12:00 AM IST",
      title: "ರಾಷ್ಟ್ರೀಯ",
      boldText: "ಅಯೋಧ್ಯೆಯಲ್ಲಿ ರಾಮ ಮಂದಿರ ಲೋಕಾರ್ಪಣೆ, ಲಕ್ಷಾಂತರ ಭಕ್ತರ ಉತ್ಸಾಹದ ಸಾಗರ",
      plainText: "ಲಕ್ಷಾಂತರ ಭಕ್ತರ ಸಾನ್ನಿಧ್ಯದಲ್ಲಿ ರಾಮ ಮಂದಿರ ಲೋಕಾರ್ಪಣೆ ಧಾರ್ಮಿಕತೆಯ ಉತ್ಸವ",
      img: new_inner_imgs
    },
    {
      time: "01:00 AM IST",
      title: "ರಾಷ್ಟ್ರೀಯ",
      boldText: "ಅಯೋಧ್ಯೆಯಲ್ಲಿ ರಾಮ ಮಂದಿರ ಲೋಕಾರ್ಪಣೆ, ಲಕ್ಷಾಂತರ ಭಕ್ತರ ಉತ್ಸಾಹದ ಸಾಗರ",
      plainText: "ಲಕ್ಷಾಂತರ ಭಕ್ತರ ಸಾನ್ನಿಧ್ಯದಲ್ಲಿ ರಾಮ ಮಂದಿರ ಲೋಕಾರ್ಪಣೆ ಧಾರ್ಮಿಕತೆಯ ಉತ್ಸವ",
      img: new_inner_imgs
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true
        }
      }
    ]
  };



  return (
    <div className="main_container" style={{ padding: "10px" }}>
      <Grid container spacing={2}>
        <Grid size={{ md: 2.5 }}> <Sidebar /></Grid>
        <Grid container size={{ md: 6.5 }} sx={{ height: "100%" }}>
          <div className="news_container_lists">

            <div className="news_container_topper_lists">
              <button className='scroll-btn' onClick={handleScroll}> <Image src={scrollbtn} alt='scrollbtn' /></button>
              <div className="topper_lists_container" ref={scrollRef}>
                {tabs.map((tab) => (
                  <div
                    key={tab}
                    className={`topper_area ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="news_container_topper_lists">
              <div className="topper_lists_container">
                <div className="topper_area">ಸುದ್ದಿಗಳು</div>
                <div className="topper_area">ರಾಜ್ಯ</div>
                <div className="topper_area">ರಾಷ್ಟ್ರೀಯ</div>
                <div className="topper_area">ಜಗತ್ತು</div>
                <div className="topper_area">ವೈರಲ್ ನ್ಯೂಸ್</div>
                <div className="topper_area">ವಾಣಿಜ್ಯ</div>
                <div className="topper_area">ಆರೋಗ್ಯ</div>
                <div className="topper_area">ರಾಜಕೀಯ</div>
                <div className="topper_area">ಪ್ರವಾಸೋದ್ಯಮ</div>
              </div>
            </div> */}

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

            <div className="main_newa_outer_containers">
              <Slider {...settings}>
                {newsItems.map((item, index) => (
                  <div className="main_news_container" key={index}>
                    <div className="main_inner_news_containers">
                      <div className="main_news_left">
                        <Image style={{ width: '100%' }} src={item.img} alt="news_img" />
                      </div>
                      <div className="main_news_right">
                        <div className="news_top_txt">{item.time}</div>
                        <div className="news_header_txt">{item.title}</div>
                        <div className="news_bdy_txt_bold">{item.boldText}</div>
                        <div className="news_bdy_plaintxt">{item.plainText}</div>
                      </div>
                    </div>

                    {/* Custom dots inside the slide */}
                    <ul className="lines">
                      {newsItems.map((_, dotIndex) => (
                        <li key={dotIndex} className={dotIndex === currentSlide ? "active" : ""}>
                          <div className="lines-item">
                            <div className="lines-dash" />
                          </div>
                        </li>
                      ))}
                    </ul>

                  </div>
                ))}
              </Slider>
            </div>


            <div className="news_sub_container_lists">
              <Grid container spacing={1}>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">1 min ago</div>
                      <Image style={{ width: '100%' }} src={budget} alt='budget' />
                    </div>
                    <div className="cards_botoom_txt">
                      ಕೇಂದ್ರ ಬಜೆಟ್ 2025 ಮಂಡನೆ: ಕೃಷಿ, ಆರೋಗ್ಯ, ಶಿಕ್ಷಣ ಕ್ಷೇತ್ರಗಳಿಗೆ ವಿಶೇಷ ಅನುದಾನ
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">2 min ago</div>
                      <Image style={{ width: '100%' }} src={budget} alt='budget' />
                    </div>
                    <div className="cards_botoom_txt">
                      ಕರ್ನಾಟಕದಲ್ಲಿ ಮಳೆಯ ಆರ್ಭಟ: ಜನಜೀವನ ಅಸ್ತವ್ಯಸ್ತ, ರೈತರ ಸಂಕಷ್ಟ ಇನ್ನೂ ಮುಂದುವರಿದು
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">4 min ago</div>
                      <Image style={{ width: '100%' }} src={budget} alt='budget' />
                    </div>
                    <div className="cards_botoom_txt">
                      ಅಮೇರಿಕದ ಅಧ್ಯಕ್ಷೀಯ ಚುನಾವಣಾ ಸಂಭ್ರಮ: ಪ್ರಮುಖ ಅಭ್ಯರ್ಥಿಗಳ ಪರಸ್ಪರ ಟಕ್ಕರ್
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">10 min ago</div>
                      <Image style={{ width: '100%' }} src={budget} alt='budget' />
                    </div>
                    <div className="cards_botoom_txt">
                      ಸೆನ್ಸೆಕ್ಸ್ 500 ಪಾಯಿಂಟ್ ಏರಿಕೆ: ಹೂಡಿಕೆದಾರರಿಗೆ ಆಶಾದಾಯಕ ವಾತಾವರಣ
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">12 min ago</div>
                      <Image style={{ width: '100%' }} src={budget} alt='budget' />
                    </div>
                    <div className="cards_botoom_txt">
                      ಹೊಸ ವೈರಸ್ ಹರಡುವ ಭೀತಿ: ತಜ್ಞರು ಎಚ್ಚರಿಕೆ, ಆರೋಗ್ಯ ಇಲಾಖೆ ಜಾಗೃತಿಪಡಿಸಿದೆ
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">17 min ago</div>
                      <Image style={{ width: '100%' }} src={budget} alt='budget' />
                    </div>
                    <div className="cards_botoom_txt">
                      ಐಪಿಎಲ್ 2025: ಮುಂಬೈ ಇಂಡಿಯನ್ಸ್ ಭರ್ಜರಿ ಜಯ, ಪ್ಲೇಆಫ್ ಆಸೆ ಇನ್ನೂ ಜೀವಂತ
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">18 min ago</div>
                      <Image style={{ width: '100%' }} src={budget} alt='budget' />
                    </div>
                    <div className="cards_botoom_txt">
                      ನಿರೀಕ್ಷಿತ ಕನ್ನಡ ಚಿತ್ರ ಟೀಸರ್ ಬಿಡುಗಡೆ, ಅಭಿಮಾನಿಗಳಲ್ಲಿ ಹಬ್ಬದ ಸಂಭ್ರಮ
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">10 min ago</div>
                      <Image style={{ width: '100%' }} src={budget} alt='budget' />
                    </div>
                    <div className="cards_botoom_txt">ಹೃದಯದ ಆರೋಗ್ಯಕ್ಕಾಗಿ ನಿತ್ಯ ಯೋಗ ಅಭ್ಯಾಸ ಅಗತ್ಯ, ತಜ್ಞರಿಂದ ಸಲಹೆ
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">20 min ago</div>
                      <Image style={{ width: '100%' }} src={budget} alt='budget' />
                    </div>
                    <div className="cards_botoom_txt">
                      ಫಿಫಾ ವಿಶ್ವಕಪ್ 2026 ಟೂರ್ನಿಗೆ ತೀವ್ರ ಸಿದ್ಧತೆ, ಆಯೋಜಕರಿಂದ ಹೊಸ ಘೋಷಣೆ
                    </div>
                  </div>
                </Grid>
              </Grid>
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

            <div className="news_lists_footer">
              <button>ಇನ್ನಷ್ಟು ಸುದ್ದಿ ಲೋಡ್ ಮಾಡಿ  <Image src={downer_btn} alt='downer_btn' /></button>
            </div>
          </div>
        </Grid>
        <Grid size={{ md: 3 }}>
          <RightPart />
        </Grid>
      </Grid>
    </div >
  );
}