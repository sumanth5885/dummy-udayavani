'use client'
import { Grid } from '@mui/material'
import React, { useRef, useState } from 'react'
import Sidebar from '../ClientComponents/Sidebar/Sidebar'
import RightPart from '../right-part/page'
import { advertise_holder, downer_btn, img1_photo, img2_photo, img3_photo, img4_photo, img5_photo, new_inner_imgs, photo_library, photogalimg, photomainimg, scrollbtn } from '../../../public/assets/images'
import './page.scss'
import Image from "next/image";
import Slider from "react-slick";

const page = () => {
  const [activeTab, setActiveTab] = useState('ಫೋಟೋ ಗ್ಯಾಲರಿ')
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabs = ['ಫೋಟೋ ಗ್ಯಾಲರಿ', 'ರಾಷ್ಟ್ರೀಯ', 'ವೈವಿಧ್ಯ']
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
      img: photomainimg
    },
  ];

  const [currentSlide1, setCurrentSlide1] = useState(0);



  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide1(next),
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
                        <Image style={{ width: '100%' }} src={item.img} alt="news_img" />
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
                    <Slider {...settings1}>
                      <div className="slide-wrapper">
                        <div className="cards_top_img">
                          <div className="image_toper_time">1 min ago</div>
                          <Image style={{ width: '100%' }} src={photogalimg} alt='photogalimg' />
                          <div className="cards_botoom_txt">
                            ಕೇಂದ್ರ ಬಜೆಟ್ 2025 ಮಂಡನೆ: ಕೃಷಿ, ಆರೋಗ್ಯ, ಶಿಕ್ಷಣ ಕ್ಷೇತ್ರಗಳಿಗೆ ವಿಶೇಷ ಅನುದಾನ
                          </div>
                        </div>
                      </div>
                      <div className="slide-wrapper">
                        <div className="cards_top_img">
                          <div className="image_toper_time">1 min ago</div>
                          <Image style={{ width: '100%' }} src={photogalimg} alt='photogalimg' />
                          <div className="cards_botoom_txt">
                            ಕೇಂದ್ರ ಬಜೆಟ್ 2025 ಮಂಡನೆ: ಕೃಷಿ, ಆರೋಗ್ಯ, ಶಿಕ್ಷಣ ಕ್ಷೇತ್ರಗಳಿಗೆ ವಿಶೇಷ ಅನುದಾನ
                          </div>
                        </div>
                      </div>
                    </Slider>

                    <div className='cards_btm_slicker'>
                      <div className='btm_left'>
                        <Image src={photo_library} alt="photo_librarys" /> 8 Images
                      </div>
                      <div className='btm_right'>
                        {/* Custom dots inside the slide */}
                        <ul className="lines1">
                          {newsItems.map((_, dotIndex) => (
                            <li key={dotIndex} className={dotIndex === currentSlide1 ? "active" : ""}>
                              <div className="lines-item">
                                <div className="lines-dash" />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <Slider {...settings1}>
                      <div className="slide-wrapper">
                        <div className="cards_top_img">
                          <div className="image_toper_time">1 min ago</div>
                          <Image style={{ width: '100%' }} src={img1_photo} alt='img1_photo' />
                          <div className="cards_botoom_txt">
                            ಗ್ರಾಮೀಣ ಭರತದ ವಾಸ್ತುಶಿಲ್ಪ – ಆಕರ್ಷಕ ಫೋಟೋ ಗ್ಯಾಲರಿ
                          </div>
                        </div>
                      </div>
                      <div className="slide-wrapper">
                        <div className="cards_top_img">
                          <div className="image_toper_time">1 min ago</div>
                          <Image style={{ width: '100%' }} src={img1_photo} alt='img1_photo' />
                          <div className="cards_botoom_txt">
                            ಗ್ರಾಮೀಣ ಭರತದ ವಾಸ್ತುಶಿಲ್ಪ – ಆಕರ್ಷಕ ಫೋಟೋ ಗ್ಯಾಲರಿ
                          </div>
                        </div>
                      </div>
                    </Slider>

                    <div className='cards_btm_slicker'>
                      <div className='btm_left'>
                        <Image src={photo_library} alt="photo_librarys" /> 8 Images
                      </div>
                      <div className='btm_right'>
                        {/* Custom dots inside the slide */}
                        <ul className="lines1">
                          {newsItems.map((_, dotIndex) => (
                            <li key={dotIndex} className={dotIndex === currentSlide1 ? "active" : ""}>
                              <div className="lines-item">
                                <div className="lines-dash" />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <Slider {...settings1}>
                      <div className="slide-wrapper">
                        <div className="cards_top_img">
                          <div className="image_toper_time">1 min ago</div>
                          <Image style={{ width: '100%' }} src={img2_photo} alt='img2_photo' />
                          <div className="cards_botoom_txt">
                            ದಾವಣಗೆರೆ ಬೆನ್ನೆ ದೋಸೆ ಮೇಳದ ರುಚಿಕರ ಕ್ಷಣಗಳು
                          </div>
                        </div>
                      </div>
                      <div className="slide-wrapper">
                        <div className="cards_top_img">
                          <div className="image_toper_time">1 min ago</div>
                          <Image style={{ width: '100%' }} src={img2_photo} alt='img2_photo' />
                          <div className="cards_botoom_txt">
                            ದಾವಣಗೆರೆ ಬೆನ್ನೆ ದೋಸೆ ಮೇಳದ ರುಚಿಕರ ಕ್ಷಣಗಳು
                          </div>
                        </div>
                      </div>
                    </Slider>

                    <div className='cards_btm_slicker'>
                      <div className='btm_left'>
                        <Image src={photo_library} alt="photo_librarys" /> 8 Images
                      </div>
                      <div className='btm_right'>
                        {/* Custom dots inside the slide */}
                        <ul className="lines1">
                          {newsItems.map((_, dotIndex) => (
                            <li key={dotIndex} className={dotIndex === currentSlide1 ? "active" : ""}>
                              <div className="lines-item">
                                <div className="lines-dash" />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <Slider {...settings1}>
                      <div className="slide-wrapper">
                        <div className="cards_top_img">
                          <div className="image_toper_time">1 min ago</div>
                          <Image style={{ width: '100%' }} src={img3_photo} alt='img3_photo' />
                          <div className="cards_botoom_txt">
                            ಮಲೆನಾಡಿನ ಕೊಳೆಯುತನ – ಅರಣ್ಯ ಸಫಾರಿ ಫೋಟೋಸ್‌
                          </div>
                        </div>
                      </div>
                      <div className="slide-wrapper">
                        <div className="cards_top_img">
                          <div className="image_toper_time">1 min ago</div>
                          <Image style={{ width: '100%' }} src={img3_photo} alt='img3_photo' />
                          <div className="cards_botoom_txt">
                            ಮಲೆನಾಡಿನ ಕೊಳೆಯುತನ – ಅರಣ್ಯ ಸಫಾರಿ ಫೋಟೋಸ್‌
                          </div>
                        </div>
                      </div>
                    </Slider>

                    <div className='cards_btm_slicker'>
                      <div className='btm_left'>
                        <Image src={photo_library} alt="photo_librarys" /> 8 Images
                      </div>
                      <div className='btm_right'>
                        {/* Custom dots inside the slide */}
                        <ul className="lines1">
                          {newsItems.map((_, dotIndex) => (
                            <li key={dotIndex} className={dotIndex === currentSlide1 ? "active" : ""}>
                              <div className="lines-item">
                                <div className="lines-dash" />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <Slider {...settings1}>
                      <div className="slide-wrapper">
                        <div className="cards_top_img">
                          <div className="image_toper_time">1 min ago</div>
                          <Image style={{ width: '100%' }} src={img4_photo} alt='img4_photo' />
                          <div className="cards_botoom_txt">
                            ಬೆಂಗಳೂರು ಮಾದರಿ ಮನೆ ಪ್ರದರ್ಶನ – ಆಧುನಿಕ ವಿನ್ಯಾಸ ಗ್ಯಾಲರಿ
                          </div>
                        </div>
                      </div>
                      <div className="slide-wrapper">
                        <div className="cards_top_img">
                          <div className="image_toper_time">1 min ago</div>
                          <Image style={{ width: '100%' }} src={img4_photo} alt='img4_photo' />
                          <div className="cards_botoom_txt">
                            ಬೆಂಗಳೂರು ಮಾದರಿ ಮನೆ ಪ್ರದರ್ಶನ – ಆಧುನಿಕ ವಿನ್ಯಾಸ ಗ್ಯಾಲರಿ
                          </div>
                        </div>
                      </div>
                    </Slider>

                    <div className='cards_btm_slicker'>
                      <div className='btm_left'>
                        <Image src={photo_library} alt="photo_librarys" /> 8 Images
                      </div>
                      <div className='btm_right'>
                        {/* Custom dots inside the slide */}
                        <ul className="lines1">
                          {newsItems.map((_, dotIndex) => (
                            <li key={dotIndex} className={dotIndex === currentSlide1 ? "active" : ""}>
                              <div className="lines-item">
                                <div className="lines-dash" />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid size={{ md: 4 }}>
                  <div className="sub_container_cards">
                    <Slider {...settings1}>
                      <div className="slide-wrapper">
                        <div className="cards_top_img">
                          <div className="image_toper_time">1 min ago</div>
                          <Image style={{ width: '100%' }} src={img5_photo} alt='img5_photo' />
                          <div className="cards_botoom_txt">
                            ಕಾವೇರಿ ನದಿಯ ಹರಿವು – ನದಿತೀರದ ವೈಭವದ ಚಿತ್ರಗಳು
                          </div>
                        </div>
                      </div>
                      <div className="slide-wrapper">
                        <div className="cards_top_img">
                          <div className="image_toper_time">1 min ago</div>
                          <Image style={{ width: '100%' }} src={img5_photo} alt='img5_photo' />
                          <div className="cards_botoom_txt">
                            ಕಾವೇರಿ ನದಿಯ ಹರಿವು – ನದಿತೀರದ ವೈಭವದ ಚಿತ್ರಗಳು
                          </div>
                        </div>
                      </div>
                    </Slider>

                    <div className='cards_btm_slicker'>
                      <div className='btm_left'>
                        <Image src={photo_library} alt="photo_librarys" /> 8 Images
                      </div>
                      <div className='btm_right'>
                        {/* Custom dots inside the slide */}
                        <ul className="lines1">
                          {newsItems.map((_, dotIndex) => (
                            <li key={dotIndex} className={dotIndex === currentSlide1 ? "active" : ""}>
                              <div className="lines-item">
                                <div className="lines-dash" />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
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