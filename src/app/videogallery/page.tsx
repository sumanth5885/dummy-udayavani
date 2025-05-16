'use client'
import React, { useRef, useState } from 'react'
import { advertise_holder, downer_btn, photo_library, photogalimg, photomainimg, scrollbtn } from '../../../public/assets/images';
import { Grid } from '@mui/material';
import Sidebar from '../ClientComponents/Sidebar/Sidebar';
import RightPart from '../right-part/page';
import './page.scss'
import Image from "next/image";
import Slider from "react-slick"

const page = () => {
  const [activeTab, setActiveTab] = useState(' ವೀಡಿಯೊ ಗ್ಯಾಲರಿ')
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabs = [' ವೀಡಿಯೊ ಗ್ಯಾಲರಿ', 'ಲೋಕಲ್ ವಿಡಿಯೋ', 'ನಿಮಗಿದು ಗೊತ್ತೇ?', 'ಸಿನಿಮಾ ಸಮಾಚಾರ', 'ಖಾದ್ಯ ಖಜಾನೆ', 'ಅಬ್ಬಬ್ಬಾ! ಇದು ಕರುನಾಡ ವೈಭವ']
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
      boldText: "ಮುಂಗಾರು ಮಳೆ ಹೊಳೆ – ಮಲೆನಾಡು ಹೊಳೆಯುತ್ತಿರುವ ದೃಶ್ಯಗಳು",
      img: photomainimg,
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
            <div className="main_newa_outer_containers">
              {newsItems.map((item, index) => (
                <div className="main_news_container" key={index}>
                  <div className="main_inner_news_containers">
                    <div className="main_news_left">
                      <iframe
                        style={{ width: '100%', height: 'auto' }}
                        src={`https://www.youtube.com/embed/f66yw31SELo?rel=0`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="main_news_right">
                      <div className="news_top_txt">{item.time}</div>
                      <div className="news_header_txt">{item.title}</div>
                      <div className="news_bdy_txt_bold">{item.boldText}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="news_sub_container_lists">
              <Grid container spacing={1}>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">1 min ago</div>
                      <iframe
                        style={{ width: '100%', height: 'auto' }}
                        src={`https://www.youtube.com/embed/4nm5M8YTos0?rel=0`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="cards_botoom_txt">
                      ರಥಬೀದಿ ಉತ್ಸವ – ಉಡುಪಿಯಲ್ಲಿ ಭಕ್ತರ ನುಡಿನಮನದ ಕ್ಷಣಗಳು
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">1 min ago</div>
                      <iframe
                        style={{ width: '100%', height: 'auto' }}
                        src={`https://www.youtube.com/embed/zDcPN8FI2MY?rel=0`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="cards_botoom_txt">
                      ಬೆಂಗಳೂರಿನ ಟ್ರಾಫಿಕ್‌ ಜಾಮ್ – ಸುರಿಯುತ್ತಿರhhುವ ಮಳೆಗಾಲದ ಸವಾಲು
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">1 min ago</div>
                      <iframe
                        style={{ width: '100%', height: 'auto' }}
                        src={`https://www.youtube.com/embed/wnjMAejnLQY?rel=0`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="cards_botoom_txt">
                      ಕೃಷಿ ಮೇಳದ ಆಕರ್ಷಣೆ – ಹೊಸ ತಂತ್ರಜ್ಞಾನಗಳ ಪ್ರದರ್ಶನ
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">1 min ago</div>
                      <iframe
                        style={{ width: '100%', height: 'auto' }}
                        src={`https://www.youtube.com/embed/4nm5M8YTos0?rel=0`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="cards_botoom_txt">
                      ರಾಜಕೀಯ ರಂಗುಗಳು – ವಿಧಾನಸಭಾ ಚುನಾವಣಾ ರಣತಂತ್ರ
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">1 min ago</div>
                      <iframe
                        style={{ width: '100%', height: 'auto' }}
                        src={`https://www.youtube.com/embed/4nm5M8YTos0?rel=0`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="cards_botoom_txt">
                      ಬೀದಿಬದಿಯ ಕಥೆಗಳು – ಹುಬ್ಬಳ್ಳಿಯ ಹೊಂಚು ಹೊತ್ತ ಕಲೆಗಾರರು
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <div className="cards_top_img">
                      <div className="image_toper_time">1 min ago</div>
                      <iframe
                        style={{ width: '100%', height: 'auto' }}
                        src={`https://www.youtube.com/embed/4nm5M8YTos0?rel=0`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="cards_botoom_txt">
                      ಮಕ್ಕಳ ವೇಷಧಾರಣಾ ಸ್ಪರ್ಧೆ – ಪುಟಾಣಿ ಕಲಾವಿದರ ಬಣ್ಣದ ಹಬ್ಬ
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
  )
}

export default page