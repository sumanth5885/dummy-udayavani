import { Grid } from "@mui/material";
import { Metadata } from "next";
import Sidebar from "./ClientComponents/Sidebar/Sidebar";
import "./page.scss";
import {
  advertise_holder,
  aquarium,
  arrow_cirle_left,
  arrow_cirle_right,
  arrow_right,
  arrow_right_top,
  badminton,
  breaking_news_img,
  castle,
  chess,
  colgate,
  common_card_img,
  common_nws_img,
  eight_bottom_img,
  eight_top_img,
  epaper,
  ev_car,
  fb_img,
  football_img,
  handwriting,
  insta_img,
  international,
  iphone,
  iphone_img,
  ipl_final,
  kaantara_img,
  kgf,
  laptop_img,
  mi_indians,
  narendra_modi,
  next_videos,
  nigga,
  one_plus,
  rainy_season,
  reels_image,
  slicker_circle,
  slides_new,
  smart_watch,
  social_fb,
  social_insta,
  social_tw,
  social_yt,
  spiderman,
  stocks,
  tap,
  third_left_img,
  third_right_img,
  toxic_img,
  trending_card,
  twitter_img,
  udayawanilogo_reel,
  udayvani_small_logo,
  web_exclusivepagefive,
  web_exclusivepagefour,
  white_arrow_drop_down_circle_left,
  white_arrow_drop_down_circle_right,
  world_cup,
  youtube_logo,
  yt_img,
} from "../../public/assets/images";
import Image from "next/image";
import RightPart from "./right-part/page";
import ReelComponent, {
  Reel,
} from "./ClientComponents/ReelComponent/ReelComponent";
import SlickSlider from "./ClientComponents/SlickSlider/SlickSlider";
import WebStoriesSlider from "./ClientComponents/WebStoriesSlider/WebStoriesSlider";
import AdComponent from "./ClientComponents/AdComponent/AdComponent";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated Home Page",
};

const reels: Reel[] = [
  {
    platform: "youtube",
    title: "ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ",
    embedUrl: "https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1",
    time: "11:00 AM IST",
    icon: yt_img,
    logo: udayawanilogo_reel,
  },
  {
    platform: 'facebook',
    title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&width=180&height=345',
    time: '12:30 PM IST',
    icon: fb_img,
    logo: udayawanilogo_reel,
  },
  {
    platform: "instagram",
    title: "ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ",
    embedUrl: "https://www.instagram.com/p/POST_ID/embed",
    time: "2:00 PM IST",
    icon: insta_img,
    logo: udayawanilogo_reel,
  },
  {
    platform: "twitter",
    title: "ರಾಜಕೀಯದಲ್ಲಿನ ಹೊಸ ಘೋಷಣೆ",
    embedUrl:
      "https://twitframe.com/show?url=https://twitter.com/Twitter/status/1741234567890123456",
    time: "3:45 PM IST",
    icon: twitter_img,
    logo: udayawanilogo_reel,
  },
];
const page = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ margin: "10px" }}
      className="home_main_comtainer"
    >
      <Grid size={{ md: 2.5 }}>
        <Sidebar />
      </Grid>
      <Grid container size={{ md: 6.5 }} sx={{ height: "100%" }}>
        <Grid size={{ md: 12 }} className="advertisement_placeholder">
          <div className="advertise_container outer_container">
            <div className="inner_container">
              <div className="image_container">
                <div className="image_inner_container">
                  <Image src={advertise_holder} alt="advertise_holder" />
                  <div className="image_txt">"Advertisement Placeholder"</div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid size={{ md: 12 }} sx={{width: '100%'}}>
          <div className="breaking_imgs_containers">
            <Image
              src={breaking_news_img}
              alt="breaking_img"
              className="breaking_img"
            />
            <div className="breaking_imgs_btm_cont">
              <div className="breaking_imgs_inner_cont">
                <div className="top_txt">BIG BREAKING NEWS</div>
                <div className="bold_txt">
                  ತಾಂತ್ರಿಕ ದೋಷದಿಂದ ಎರ್ ಇಂಡಿಯಾ ವಿಮಾನ ತುರ್ತು ಲ್ಯಾಂಡ್, ಪ್ರಯಾಣಿಕರು
                  ಸುರಕ್ಷಿತ
                </div>
                <div className="plain_txt">
                  ಪ್ರಮುಖ ಕಾಯ್ದೆಗಳ ಕುರಿತಂತೆ ರಾಜಕೀಯ ಪಕ್ಷಗಳು ಒಂದೇ ನಿಲುವು ತಾಳಿದ
                  ಇತಿಹಾಸದ ಕ್ಷಣ.{" "}
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid size={{ md: 12 }} sx={{width: '100%'}}>
          <div className="breaking_news">
            <div className="breaking_news_topper">
              <div className="breaking_news_topper_left">Breaking News </div>
              <div className="breaking_news_topper_right">
                <button>
                  <Image
                    src={white_arrow_drop_down_circle_left}
                    alt="white_arrow_drop_down_circle_left"
                  />
                </button>
                <button>
                  <Image
                    src={white_arrow_drop_down_circle_right}
                    alt="white_arrow_drop_down_circle_right"
                  />
                </button>
              </div>
            </div>
            <div className="breaking_news_bdy">
            <span>Mangaluru</span>: ಕೋಟೆಕಾರು ದರೋಡೆ ಪ್ರಕರಣ… ಆರೋಪಿಗಳನ್ನು ನ್ಯಾಯಾಲಯಕ್ಕೆ ಕರೆತಂದ
              ಪೊಲೀಸರು{" "}
            </div>
          </div>
        </Grid>
        <p className="top_trading_header_txt">
          🔥 <span>TOP TRENDING</span>
        </p>
        <Grid size={{ md: 12 }} className="top_trending_card_container">
          <div className="top_trending_card">
            <div className="trending_card_wrap">
              <div className="trending_card_image">
                <Image
                  src={trending_card}
                  alt="trending_img"
                  className="trending_card_img"
                />
              </div>
              <p className="trending_card_title"> 🔥 TOP TRENDING</p>
            </div>

            <p className="trending_card_para">
              ದಕ್ಷಿಣ ಚಿತ್ರರಂಗದ ಸೂಪರ್ ಸ್ಟಾರ್ <br />
              ಹೊಸ ಸಿನಿಮಾ ಘೋಷಣೆ
            </p>
          </div>
          <div className="top_trending_card">
            <div className="trending_card_wrap">
              <div className="trending_card_image">
                <Image
                  src={world_cup}
                  alt="trending_img"
                  className="trending_card_img"
                />
              </div>
              <p className="trending_card_title"> 🔥 TOP TRENDING</p>
            </div>

            <p className="trending_card_para">
              ದಕ್ಷಿಣ ಚಿತ್ರರಂಗದ ಸೂಪರ್ ಸ್ಟಾರ್ <br />
              ಹೊಸ ಸಿನಿಮಾ ಘೋಷಣೆ
            </p>
          </div>
          <div className="top_trending_card">
            <div className="trending_card_wrap">
              <div className="trending_card_image">
                <Image
                  src={handwriting}
                  alt="trending_img"
                  className="trending_card_img"
                />
              </div>
              <p className="trending_card_title"> 🔥 TOP TRENDING</p>
            </div>

            <p className="trending_card_para">
              ದಕ್ಷಿಣ ಚಿತ್ರರಂಗದ ಸೂಪರ್ ಸ್ಟಾರ್ <br />
              ಹೊಸ ಸಿನಿಮಾ ಘೋಷಣೆ
            </p>
          </div>
          <div className="top_trending_card">
            <div className="trending_card_wrap">
              <div className="trending_card_image">
                <Image
                  src={trending_card}
                  alt="trending_img"
                  className="trending_card_img"
                />
              </div>
              <p className="trending_card_title"> 🔥 TOP TRENDING</p>
            </div>

            <p className="trending_card_para">
              ದಕ್ಷಿಣ ಚಿತ್ರರಂಗದ ಸೂಪರ್ ಸ್ಟಾರ್ <br />
              ಹೊಸ ಸಿನಿಮಾ ಘೋಷಣೆ
            </p>
          </div>
          <div className="top_trending_card">
            <div className="trending_card_wrap">
              <div className="trending_card_image">
                <Image
                  src={trending_card}
                  alt="trending_img"
                  className="trending_card_img"
                />
              </div>
              <p className="trending_card_title"> 🔥 TOP TRENDING</p>
            </div>

            <p className="trending_card_para">
              ದಕ್ಷಿಣ ಚಿತ್ರರಂಗದ ಸೂಪರ್ ಸ್ಟಾರ್ <br />
              ಹೊಸ ಸಿನಿಮಾ ಘೋಷಣೆ
            </p>
          </div>
        </Grid>

        <Grid className="common_news_first_section">
          <Image
            src={common_nws_img}
            alt="common_nws_img"
            className="common_nws_img"
          />
          <div className="common_para_section">
            <p className="common_nws_title">#ಸಿನೆಮಾ</p>
            <p className="common_nws_para">
              ಮರಾಠ ರಾಣಿಯಾಗಿ ರಶ್ಮಿಕಾ; ಚಾವಾ ಚಿತ್ರದ ಫ‌ಸ್ಟ್‌ಲುಕ್‌ ರಿಲೀಸ್‌
            </p>
            <p className="common_nws_body">
              ‘ಪುಷ್ಪ 2’ ಚಿತ್ರದ ನಂತರ ರಶ್ಮಿಕಾ ಮಂದಣ್ಣ ಅವರ ಕ್ರೇಜ್‌ ಮತ್ತಷ್ಟು
              ಹೆಚ್ಚಾಗಿದೆ.....
            </p>
          </div>
        </Grid>
        <Grid size={{ md: 12 }} className="advertisement_placeholder">
          <div className="advertise_container outer_container">
            <div className="inner_container">
              <div className="image_container">
                <div className="image_inner_container">
                  <Image src={advertise_holder} alt="advertise_holder" />
                  <div className="image_txt">"Advertisement Placeholder"</div>
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid size={{ md: 12 }} className="common_news_second_cards_section">
          <div className="common_news_card">
            <div className="common_card_img">
              <div className="time_card">
                <p className="card_time">1 min ago</p>
              </div>
              <Image
                src={common_card_img}
                alt="common_card_img"
                className="common_card_img"
              />
            </div>
            <div className="common_card_body">
              <p className="card_title">ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್</p>
              <p className="card_body_para">
              ಭಾರತದ ವಿರುದ್ಧ ಆಸ್ಟ್ರೇಲಿಯಾ ಭರ್ಜರಿ ಗೆಲುವು: ಕೊನೆ ಓವರ್‌ನಲ್ಲಿ <br />ತಿರುವು
              </p>
            </div>
          </div>

          <div className="common_news_card">
            <div className="common_card_img">
              <div className="time_card">
                <p className="card_time">1 min ago</p>
              </div>
              <Image
                src={international}
                alt="common_card_img"
                className="common_card_img"
              />
            </div>
            <div className="common_card_body">
              <p className="card_title">ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್</p>
              <p className="card_body_para">
              ಜರ್ಮನಿಯಲ್ಲಿ ಜಿ20 ಶೃಂಗಸಭೆ <br />ಆರಂಭ: ವಿಶ್ವ ನಾಯಕರು <br /> ಸಮಾವೇಶವಾದರು
              </p>
            </div>
          </div>

          <div className="common_news_card">
            <div className="common_card_img">
              <div className="time_card">
                <p className="card_time">1 min ago</p>
              </div>
              <Image
                src={iphone}
                alt="common_card_img"
                className="common_card_img"
              />
            </div>
            <div className="common_card_body">
              <p className="card_title">ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್</p>
              <p className="card_body_para">
              ಚಳಿಗಾಲದಲ್ಲಿ ಜ್ವರ ಹೆಚ್ಚಳ: ಆರೋಗ್ಯ <br />ಇಲಾಖೆ ತುರ್ತು ಕ್ರಮ ಕೈಗೊಂಡಿದೆ
              </p>
            </div>
          </div>
          <div className="common_news_card">
            <div className="common_card_img">
              <div className="time_card">
                <p className="card_time">1 min ago</p>
              </div>
              <Image
                src={kgf}
                alt="common_card_img"
                className="common_card_img"
              />
            </div>
            <div className="common_card_body">
              <p className="card_title">ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್</p>
              <p className="card_body_para">
                NBA ಫೈನಲ್: ಲೇಕರ್ಸ್ ಗೆಲುವು <br />
                ಅತ್ಯುತ್ತಮ ಪ್ರದರ್ಶನ
              </p>
            </div>
          </div>
          <div className="common_news_card">
            <div className="common_card_img">
              <div className="time_card">
                <p className="card_time">1 min ago</p>
              </div>
              <Image
                src={nigga}
                alt="common_card_img"
                className="common_card_img"
              />
            </div>
            <div className="common_card_body">
              <p className="card_title">ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್</p>
              <p className="card_body_para">
                NBA ಫೈನಲ್: ಲೇಕರ್ಸ್ ಗೆಲುವು <br />
                ಅತ್ಯುತ್ತಮ ಪ್ರದರ್ಶನ
              </p>
            </div>
          </div>

          <div className="common_news_card">
            <div className="common_card_img">
              <div className="time_card">
                <p className="card_time">1 min ago</p>
              </div>
              <Image
                src={stocks}
                alt="common_card_img"
                className="common_card_img"
              />
            </div>
            <div className="common_card_body">
              <p className="card_title">ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್</p>
              <p className="card_body_para">
                NBA ಫೈನಲ್: ಲೇಕರ್ಸ್ ಗೆಲುವು <br />
                ಅತ್ಯುತ್ತಮ ಪ್ರದರ್ಶನ
              </p>
            </div>
          </div>
          <div className="common_news_card">
            <div className="common_card_img">
              <div className="time_card">
                <p className="card_time">1 min ago</p>
              </div>
              <Image
                src={colgate}
                alt="common_card_img"
                className="common_card_img"
              />
            </div>
            <div className="common_card_body">
              <p className="card_title">ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್</p>
              <p className="card_body_para">
                NBA ಫೈನಲ್: ಲೇಕರ್ಸ್ ಗೆಲುವು <br />
                ಅತ್ಯುತ್ತಮ ಪ್ರದರ್ಶನ
              </p>
            </div>
          </div>
          <div className="common_news_card">
            <div className="common_card_img">
              <div className="time_card">
                <p className="card_time">1 min ago</p>
              </div>
              <Image
                src={chess}
                alt="common_card_img"
                className="common_card_img"
              />
            </div>
            <div className="common_card_body">
              <p className="card_title">ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್</p>
              <p className="card_body_para">
                NBA ಫೈನಲ್: ಲೇಕರ್ಸ್ ಗೆಲುವು <br />
                ಅತ್ಯುತ್ತಮ ಪ್ರದರ್ಶನ
              </p>
            </div>
          </div>
          <div className="common_news_card">
            <div className="common_card_img">
              <div className="time_card">
                <p className="card_time">1 min ago</p>
              </div>
              <Image
                src={tap}
                alt="common_card_img"
                className="common_card_img"
              />
            </div>
            <div className="common_card_body">
              <p className="card_title">ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್</p>
              <p className="card_body_para">
                NBA ಫೈನಲ್: ಲೇಕರ್ಸ್ ಗೆಲುವು <br />
                ಅತ್ಯುತ್ತಮ ಪ್ರದರ್ಶನ
              </p>
            </div>
          </div>
          <div className="common_news_card">
            <div className="common_card_img">
              <div className="time_card">
                <p className="card_time">1 min ago</p>
              </div>
              <Image
                src={ev_car}
                alt="common_card_img"
                className="common_card_img"
              />
            </div>
            <div className="common_card_body">
              <p className="card_title">ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್</p>
              <p className="card_body_para">
                NBA ಫೈನಲ್: ಲೇಕರ್ಸ್ ಗೆಲುವು <br />
                ಅತ್ಯುತ್ತಮ ಪ್ರದರ್ಶನ
              </p>
            </div>
          </div>
          <div className="common_news_card">
            <div className="common_card_img">
              <div className="time_card">
                <p className="card_time">1 min ago</p>
              </div>
              <Image
                src={castle}
                alt="common_card_img"
                className="common_card_img"
              />
            </div>
            <div className="common_card_body">
              <p className="card_title">ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್</p>
              <p className="card_body_para">
                NBA ಫೈನಲ್: ಲೇಕರ್ಸ್ ಗೆಲುವು <br />
                ಅತ್ಯುತ್ತಮ ಪ್ರದರ್ಶನ
              </p>
            </div>
          </div>
          <div className="common_news_card">
            <div className="common_card_img">
              <div className="time_card">
                <p className="card_time">1 min ago</p>
              </div>
              <Image
                src={common_card_img}
                alt="common_card_img"
                className="common_card_img"
              />
            </div>
            <div className="common_card_body">
              <p className="card_title">ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್</p>
              <p className="card_body_para">
                NBA ಫೈನಲ್: ಲೇಕರ್ಸ್ ಗೆಲುವು <br />
                ಅತ್ಯುತ್ತಮ ಪ್ರದರ್ಶನ
              </p>
            </div>
          </div>
        </Grid>
        <Grid size={{ md: 12 }} className="advertisement_placeholder">
          <div className="advertise_container outer_container">
            <div className="inner_container">
              <div className="image_container">
                <div className="image_inner_container">
                  <Image src={advertise_holder} alt="advertise_holder" />
                  <div className="image_txt">"Advertisement Placeholder"</div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid size={{ md: 12 }} className="common_news_third_section">
          <div className="third_header_wrap">
            <div className="third_logo_wrap">
              <Image src={youtube_logo} alt="youtube_logo" />
              <Image src={udayvani_small_logo} alt="udayawanui_logo" />
            </div>
            <p>ವಿಡಿಯೋಗಳು</p>
          </div>
          <div className="common_third_section_body">
            <div className="common_third_left_content">
              <Image
                src={third_left_img}
                alt="third_left_img"
                className="third_left_img"
              />
              <p>
                ಕೇರಳ : ಭಗವಾನ್ ಶ್ರೀ ನಿತ್ಯಾನಂದಸ್ವಾಮಿ ಪವಾಡ <br /> ಎಂಥದ್ದು ನೋಡಿ !
              </p>
            </div>
            <div className="common_third_right_content">
              <div className="common_third_right_container">
                <Image src={third_right_img} alt="third_right_img" />
                <p>
                  ಮೈಸೂರು : ದೇವಸ್ಥಾನದ ಉತ್ಸವದಲ್ಲಿ <br />
                  ಭಕ್ತರ ಸಂಭ್ರಮದ ಕ್ಷಣಗಳು
                </p>
              </div>
              <div className="common_third_right_container">
                <Image src={web_exclusivepagefour} alt="third_right_img" />
                <p>
                  ಮೈಸೂರು : ದೇವಸ್ಥಾನದ ಉತ್ಸವದಲ್ಲಿ <br />
                  ಭಕ್ತರ ಸಂಭ್ರಮದ ಕ್ಷಣಗಳು
                </p>
              </div>
              <div className="common_third_right_container">
                <Image src={web_exclusivepagefive} alt="third_right_img" />
                <p>
                  ಮೈಸೂರು : ದೇವಸ್ಥಾನದ ಉತ್ಸವದಲ್ಲಿ <br />
                  ಭಕ್ತರ ಸಂಭ್ರಮದ ಕ್ಷಣಗಳು
                </p>
              </div>
              <div className="videos_nex_btn">
                <p className="next_videos_txt">ಇನ್ನಷ್ಟು ವಿಡಿಯೋಗಳು</p>
                <Image src={next_videos} alt="next_videos" />
              </div>
            </div>
          </div>
        </Grid>
        {/* <Grid size={{ md: 12 }} className="advertisement_placeholder">
          <div className="advertise_container outer_container">
            <div className="inner_container">
              <div className="image_container">
                <div className="image_inner_container">
                  <Image src={advertise_holder} alt="advertise_holder" />
                  <div className="image_txt">"Advertisement Placeholder"</div>
                </div>
              </div>
            </div>
          </div>
        </Grid> */}
        <Grid size={{ md: 12 }} className="fourth_section_main_container">
          <div className="fourth_section_cards_container">
            <div className="fourth_section_card">
              <div className="fourth_left_container">
                <Image src={epaper} alt="epaper" />
                <p>UV</p>
              </div>
              <div className="fourth_right_container">
                <Image src={arrow_right} alt="arrow_right" />
              </div>
            </div>
            <p className="fourth_section_btm_txt">E-PAPER</p>
          </div>

          <div className="fourth_section_cards_container">
            <div className="fourth_section_card">
              <div className="fourth_left_container">
                <Image src={epaper} alt="epaper" />
                <p>UV</p>
              </div>
              <div className="fourth_right_container">
                <Image src={arrow_right} alt="arrow_right" />
              </div>
            </div>
            <p className="fourth_section_btm_txt">E-PAPER</p>
          </div>
          <div className="fourth_section_cards_container">
            <div className="fourth_section_card">
              <div className="fourth_left_container">
                <Image src={epaper} alt="epaper" />
                <p>UV</p>
              </div>
              <div className="fourth_right_container">
                <Image src={arrow_right} alt="arrow_right" />
              </div>
            </div>
            <p className="fourth_section_btm_txt">E-PAPER</p>
          </div>
          <div className="fourth_section_cards_container">
            <div className="fourth_section_card">
              <div className="fourth_left_container">
                <Image src={epaper} alt="epaper" />
                <p>UV</p>
              </div>
              <div className="fourth_right_container">
                <Image src={arrow_right} alt="arrow_right" />
              </div>
            </div>
            <p className="fourth_section_btm_txt">E-PAPER</p>
          </div>
          <div className="fourth_section_cards_container">
            <div className="fourth_section_card">
              <div className="fourth_left_container">
                <Image src={epaper} alt="epaper" />
                <p>UV</p>
              </div>
              <div className="fourth_right_container">
                <Image src={arrow_right} alt="arrow_right" />
              </div>
            </div>
            <p className="fourth_section_btm_txt">E-PAPER</p>
          </div>
          <div className="fourth_section_cards_container">
            <div className="fourth_section_card">
              <div className="fourth_left_container">
                <Image src={epaper} alt="epaper" />
                <p>UV</p>
              </div>
              <div className="fourth_right_container">
                <Image src={arrow_right} alt="arrow_right" />
              </div>
            </div>
            <p className="fourth_section_btm_txt">E-PAPER</p>
          </div>
          <div className="fourth_section_cards_container">
            <div className="fourth_section_card">
              <div className="fourth_left_container">
                <Image src={epaper} alt="epaper" />
                <p>UV</p>
              </div>
              <div className="fourth_right_container">
                <Image src={arrow_right} alt="arrow_right" />
              </div>
            </div>
            <p className="fourth_section_btm_txt">E-PAPER</p>
          </div>
          <div className="fourth_section_cards_container">
            <div className="fourth_section_card">
              <div className="fourth_left_container">
                <Image src={epaper} alt="epaper" />
                <p>UV</p>
              </div>
              <div className="fourth_right_container">
                <Image src={arrow_right} alt="arrow_right" />
              </div>
            </div>
            <p className="fourth_section_btm_txt">E-PAPER</p>
          </div>
          <div className="fourth_section_cards_container">
            <div className="fourth_section_card">
              <div className="fourth_left_container">
                <Image src={epaper} alt="epaper" />
                <p>UV</p>
              </div>
              <div className="fourth_right_container">
                <Image src={arrow_right} alt="arrow_right" />
              </div>
            </div>
            <p className="fourth_section_btm_txt">E-PAPER</p>
          </div>
        </Grid>
        <SlickSlider />

        <ReelComponent reels={reels} />

        <Grid size={{ md: 12 }} className="eight_container_wrap">
          <p className="header_txt">ವೆಬ್ ಎಕ್ಸ್‌ಕ್ಲೂಸಿವ</p>
          <div className="eight_container_top">
            <Image src={eight_top_img} alt="" />
            <div className="eight_container_text">
              <p className="eight_container_time"> 11:00 AM IST</p>
              <p className="eight_documentry_txt">ವೆಬ್ ಡಾಕ್ಯುಮೆಂಟರಿ</p>
              <p className="eight_container_para">ಮಳೆಗಾಲದಲ್ಲಿ ಬದುಕು ಕಟ್ಟಿಕೊಂಡ ಹಳ್ಳಿಯ <br />ಕಥೆ</p>
              <p className="eight_container_body">
                ಜೀವನದ ನಿಖರ ಚಿತ್ರಣವನ್ನು ತೋರಿಸುವ ಹಳ್ಳಿಯ ಸಾಥಿ ಹೋರಾಟದ <br /> ಡಾಕ್ಯುಮೆಂಟರಿ.
              </p>
            </div>
          </div>
          <div className="eight_container_bottom">
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={narendra_modi}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
              
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={rainy_season}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
                
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
          </div>
          <div className="eight_container_footer">
            <div className="eight_left_dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="eight_next_arrow">
              <p>ಇನ್ನಷ್ಟು ಸುದ್ದಿಗೆ</p>
              <Image src={arrow_right_top} alt="arrow_right_top" />
            </div>
          </div>
        </Grid>

        <Grid size={{ md: 12 }} className="advertisement_placeholder">
          <div className="advertise_container outer_container">
            <div className="inner_container">
              <div className="image_container">
                <div className="image_inner_container">
                  <Image src={advertise_holder} alt="advertise_holder" />
                  <div className="image_txt">"Advertisement Placeholder"</div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <WebStoriesSlider />

        <Grid size={{ md: 12 }} className="eight_container_wrap">
          <p className="header_txt">ವೆಬ್ ಎಕ್ಸ್‌ಕ್ಲೂಸಿವ</p>
          <div className="eight_container_top">
            <Image src={mi_indians} alt="" />
            <div className="eight_container_text">
              <p className="eight_container_time"> 11:00 AM IST</p>
              <p className="eight_documentry_txt">ವೆಬ್ ಡಾಕ್ಯುಮೆಂಟರಿ</p>
              <p className="eight_container_para">ಮಳೆಗಾಲದಲ್ಲಿ ಬದುಕು ಕಟ್ಟಿಕೊಂಡ ಹಳ್ಳಿಯ <br />ಕಥೆ</p>
              <p className="eight_container_body">
                ಜೀವನದ ನಿಖರ ಚಿತ್ರಣವನ್ನು ತೋರಿಸುವ ಹಳ್ಳಿಯ ಸಾಥಿ ಹೋರಾಟದ <br /> ಡಾಕ್ಯುಮೆಂಟರಿ.
              </p>
            </div>
          </div>
          <div className="eight_container_bottom">
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={ipl_final}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={football_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
              
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={badminton}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
                
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
          </div>
          <div className="eight_container_footer">
            <div className="eight_left_dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="eight_next_arrow">
              <p>ಇನ್ನಷ್ಟು ಸುದ್ದಿಗೆ</p>
              <Image src={arrow_right_top} alt="arrow_right_top" />
            </div>
          </div>
        </Grid>
        <Grid size={{ md: 12 }} className="eight_container_wrap">
          <p className="header_txt">ವೆಬ್ ಎಕ್ಸ್‌ಕ್ಲೂಸಿವ</p>
          <div className="eight_container_top">
            <Image src={kaantara_img} alt="" />
            <div className="eight_container_text">
              <p className="eight_container_time"> 11:00 AM IST</p>
              <p className="eight_documentry_txt">ವೆಬ್ ಡಾಕ್ಯುಮೆಂಟರಿ</p>
              <p className="eight_container_para">ಮಳೆಗಾಲದಲ್ಲಿ ಬದುಕು ಕಟ್ಟಿಕೊಂಡ ಹಳ್ಳಿಯ <br />ಕಥೆ</p>
              <p className="eight_container_body">
                ಜೀವನದ ನಿಖರ ಚಿತ್ರಣವನ್ನು ತೋರಿಸುವ ಹಳ್ಳಿಯ ಸಾಥಿ ಹೋರಾಟದ <br /> ಡಾಕ್ಯುಮೆಂಟರಿ.
              </p>
            </div>
          </div>
          <div className="eight_container_bottom">
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={toxic_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={spiderman}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
              
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={aquarium}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
                
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
          </div>
          <div className="eight_container_footer">
            <div className="eight_left_dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="eight_next_arrow">
              <p>ಇನ್ನಷ್ಟು ಸುದ್ದಿಗೆ</p>
              <Image src={arrow_right_top} alt="arrow_right_top" />
            </div>
          </div>
        </Grid>
        <Grid size={{ md: 12 }} className="social_media_container">
          <p className="follow_us_text">ಫಾಲೋ ಮಾಡಿ | Follow Us</p>
          <div className="social_media_cards_container">
            <div className="social_media_card">
              <div className="social_top_wrap">
                <Image src={social_fb} alt="facebook" />
                <p>Facebook</p>
              </div>

              <p className="insta_follow">👥 850K+ Followers</p>
            </div>
            <div className="social_media_card">
              <div className="social_top_wrap">
                <Image src={social_yt} alt="youtube" />
                <p className="yutube_txt">Youtube</p>
              </div>
              <p className="insta_follow">👥 850K+ Followers</p>
            </div>
            <div className="social_media_card">
              <div className="social_top_wrap">
                <Image src={social_tw} alt="twitter" />
                <p className="twt_txt">Twitter</p>
              </div>
              <p className="insta_follow">👥 850K+ Followers</p>
            </div>
            <div className="social_media_card">
              <div className="social_top_wrap">
                <Image src={social_insta} alt="insta" />
                <p className="insta_txt">Instagram</p>
              </div>
              <p className="insta_follow">👥 850K+ Followers</p>
            </div>
          </div>
        </Grid>
         <Grid size={{ md: 12 }} className="eight_container_wrap">
          <p className="header_txt">ವೆಬ್ ಎಕ್ಸ್‌ಕ್ಲೂಸಿವ</p>
          <div className="eight_container_top">
            <Image src={laptop_img} alt="" />
            <div className="eight_container_text">
              <p className="eight_container_time"> 11:00 AM IST</p>
              <p className="eight_documentry_txt">ವೆಬ್ ಡಾಕ್ಯುಮೆಂಟರಿ</p>
              <p className="eight_container_para">ಮಳೆಗಾಲದಲ್ಲಿ ಬದುಕು ಕಟ್ಟಿಕೊಂಡ ಹಳ್ಳಿಯ <br />ಕಥೆ</p>
              <p className="eight_container_body">
                ಜೀವನದ ನಿಖರ ಚಿತ್ರಣವನ್ನು ತೋರಿಸುವ ಹಳ್ಳಿಯ ಸಾಥಿ ಹೋರಾಟದ <br /> ಡಾಕ್ಯುಮೆಂಟರಿ.
              </p>
            </div>
          </div>
          <div className="eight_container_bottom">
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={smart_watch}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={iphone_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
              
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={one_plus}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
                
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
          </div>
          <div className="eight_container_footer">
            <div className="eight_left_dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="eight_next_arrow">
              <p>ಇನ್ನಷ್ಟು ಸುದ್ದಿಗೆ</p>
              <Image src={arrow_right_top} alt="arrow_right_top" />
            </div>
          </div>
        </Grid>
        <Grid size={{ md: 12 }} className="eight_container_wrap">
          <p className="header_txt">ವೆಬ್ ಎಕ್ಸ್‌ಕ್ಲೂಸಿವ</p>
          <div className="eight_container_top">
            <Image src={eight_top_img} alt="" />
            <div className="eight_container_text">
              <p className="eight_container_time"> 11:00 AM IST</p>
              <p className="eight_documentry_txt">ವೆಬ್ ಡಾಕ್ಯುಮೆಂಟರಿ</p>
              <p className="eight_container_para">ಮಳೆಗಾಲದಲ್ಲಿ ಬದುಕು ಕಟ್ಟಿಕೊಂಡ ಹಳ್ಳಿಯ <br />ಕಥೆ</p>
              <p className="eight_container_body">
                ಜೀವನದ ನಿಖರ ಚಿತ್ರಣವನ್ನು ತೋರಿಸುವ ಹಳ್ಳಿಯ ಸಾಥಿ ಹೋರಾಟದ <br /> ಡಾಕ್ಯುಮೆಂಟರಿ.
              </p>
            </div>
          </div>
          <div className="eight_container_bottom">
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
              
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
                
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
          </div>
          <div className="eight_container_footer">
            <div className="eight_left_dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="eight_next_arrow">
              <p>ಇನ್ನಷ್ಟು ಸುದ್ದಿಗೆ</p>
              <Image src={arrow_right_top} alt="arrow_right_top" />
            </div>
          </div>
        </Grid>
        <Grid size={{ md: 12 }} className="eight_container_wrap">
          <p className="header_txt">ವೆಬ್ ಎಕ್ಸ್‌ಕ್ಲೂಸಿವ</p>
          <div className="eight_container_top">
            <Image src={eight_top_img} alt="" />
            <div className="eight_container_text">
              <p className="eight_container_time"> 11:00 AM IST</p>
              <p className="eight_documentry_txt">ವೆಬ್ ಡಾಕ್ಯುಮೆಂಟರಿ</p>
              <p className="eight_container_para">ಮಳೆಗಾಲದಲ್ಲಿ ಬದುಕು ಕಟ್ಟಿಕೊಂಡ ಹಳ್ಳಿಯ <br />ಕಥೆ</p>
              <p className="eight_container_body">
                ಜೀವನದ ನಿಖರ ಚಿತ್ರಣವನ್ನು ತೋರಿಸುವ ಹಳ್ಳಿಯ ಸಾಥಿ ಹೋರಾಟದ <br /> ಡಾಕ್ಯುಮೆಂಟರಿ.
              </p>
            </div>
          </div>
          <div className="eight_container_bottom">
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
              
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
                
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
          </div>
          <div className="eight_container_footer">
            <div className="eight_left_dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="eight_next_arrow">
              <p>ಇನ್ನಷ್ಟು ಸುದ್ದಿಗೆ</p>
              <Image src={arrow_right_top} alt="arrow_right_top" />
            </div>
          </div>
        </Grid>
        <Grid size={{ md: 12 }} className="eight_container_wrap">
          <p className="header_txt">ವೆಬ್ ಎಕ್ಸ್‌ಕ್ಲೂಸಿವ</p>
          <div className="eight_container_top">
            <Image src={eight_top_img} alt="" />
            <div className="eight_container_text">
              <p className="eight_container_time"> 11:00 AM IST</p>
              <p className="eight_documentry_txt">ವೆಬ್ ಡಾಕ್ಯುಮೆಂಟರಿ</p>
              <p className="eight_container_para">ಮಳೆಗಾಲದಲ್ಲಿ ಬದುಕು ಕಟ್ಟಿಕೊಂಡ ಹಳ್ಳಿಯ <br />ಕಥೆ</p>
              <p className="eight_container_body">
                ಜೀವನದ ನಿಖರ ಚಿತ್ರಣವನ್ನು ತೋರಿಸುವ ಹಳ್ಳಿಯ ಸಾಥಿ ಹೋರಾಟದ <br /> ಡಾಕ್ಯುಮೆಂಟರಿ.
              </p>
            </div>
          </div>
          <div className="eight_container_bottom">
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
              
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
               
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
            <div className="common_news_card">
              <div className="common_card_img">
                <div className="time_card">
                  <p className="card_time">1 min ago</p>
                </div>
                <Image
                  src={eight_bottom_img}
                  alt="common_card_img"
                  className="common_card_img"
                />
              </div>
              <div className="common_card_body">
                
                <p className="card_body_para">
                ಮೆಟ್ರೋದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿದ ಯುವತಿ: ಮಾನವೀಯತೆ ಮೆರೆದ ಘಟನೆಯು ವೈರಲ್
                </p>
              </div>
            </div>
          </div>
          <div className="eight_container_footer">
            <div className="eight_left_dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="eight_next_arrow">
              <p>ಇನ್ನಷ್ಟು ಸುದ್ದಿಗೆ</p>
              <Image src={arrow_right_top} alt="arrow_right_top" />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid size={{ md: 3 }}>
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default page;
