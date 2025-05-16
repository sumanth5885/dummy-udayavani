import { Grid } from "@mui/material";
import "./page.scss";
import {
  advertise_fb,
  advertise_holder,
  arrow_drop_black_down_circle,
  arrow_left_circle,
  arrow_right_circle,
  cartoon,
  english_news1,
  english_news2,
  english_news3,
  english_news4,
  fb_logo,
  heroscope1,
  heroscope2,
  heroscope3,
  heroscope4,
  heroscope5,
  heroscope6,
  heroscope7,
  heroscope8,
  heroscope9,
  imglists1,
  imglists2,
  imglists3,
  imglists4,
  news_report,
  panchanaga_landing,
  subhashitha_img,
  tune,
  udayavani_english_logo,
  white_arrow_drop_down_circle_left,
  white_arrow_drop_down_circle_right,
} from "../../../public/assets/images";
import Image from "next/image";

const RightPart = () => {
  return (
    <Grid size={{ md: 12 }} >
      <div className="right_container mobile_hide">
        <div className="advertise_container outer_container">
          <div className="vertical_text">Advertise</div>
          <div className="inner_container">
            <div className="image_container">
              <div className="image_inner_container">
                <Image src={advertise_holder} alt="advertise_holder" />
                <div className="image_txt">Advertisement Placeholder</div>
              </div>
            </div>
          </div>
        </div>

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
            Mangaluru: ಕೋಟೆಕಾರು ದರೋಡೆ ಪ್ರಕರಣ… ಆರೋಪಿಗಳನ್ನು ನ್ಯಾಯಾಲಯಕ್ಕೆ ಕರೆತಂದ
            ಪೊಲೀಸರು{" "}
          </div>
        </div>

        <div className="advertise_list_container outer_container">
          <div className="advertise_list_header">
            <button>#TRENDING</button>
            <button>ಹೊಸ ಸೆರ್ಪಡೆ</button>
          </div>
          <div className="lists_inner_container">
            <div className="inner_container_cards">
              <div className="inner_cards_header">
                <div className="cards_header_right">ಕ್ರಿಕೆಟ್</div>
                <div className="cards_header_left">11:00 AM IST</div>
              </div>
              <div className="cards_bdy_container">
                <div className="bdy_cont_img">
                  {" "}
                  <Image src={imglists1} alt="imglists1" />
                </div>
                <div className="bdy_cont_txt">
                  ಭಾರತದ ವಿರುದ್ಧ ಆಸ್ಟ್ರೇಲಿಯಾ ಭರ್ಜರಿ ಗೆಲುವು: ಕೊನೆ ಓವರ್‌ನಲ್ಲಿ
                  ತಿರುವು
                </div>
              </div>
            </div>
            <div className="inner_container_cards">
              <div className="inner_cards_header">
                <div className="cards_header_right">ಟೆಕ್</div>
                <div className="cards_header_left">11:00 AM IST</div>
              </div>
              <div className="cards_bdy_container">
                <div className="bdy_cont_img">
                  {" "}
                  <Image src={imglists2} alt="imglists1" />
                </div>
                <div className="bdy_cont_txt">
                  ಆಪಲ್ ಹೊಸ ಐಫೋನ್ 15 ಬಿಡುಗಡೆ: ಕ್ಯಾಮೆರಾ ಮತ್ತು ಬ್ಯಾಟರಿ ವಿಶಿಷ್ಟತೆಗಳು
                </div>
              </div>
            </div>
            <div className="inner_container_cards">
              <div className="inner_cards_header">
                <div className="cards_header_right">ರಾಷ್ಟ್ರೀಯ</div>
                <div className="cards_header_left">11:00 AM IST</div>
              </div>
              <div className="cards_bdy_container">
                <div className="bdy_cont_img">
                  {" "}
                  <Image src={imglists3} alt="imglists1" />
                </div>
                <div className="bdy_cont_txt">
                  ಚಂದ್ರಯಾನ-3 ಯಶಸ್ಸಿನ ಬಳಿಕ ಭಾರತದಿಂದ ಮಂಗಳ ಮಿಷನ್‌ಗೆ ಹೊಸ ಹುಮ್ಮಸ್ಸು
                </div>
              </div>
            </div>
            <div className="inner_container_cards">
              <div className="inner_cards_header">
                <div className="cards_header_right">ಅಂತಾರಾಷ್ಟ್ರೀಯ</div>
                <div className="cards_header_left">11:00 AM IST</div>
              </div>
              <div className="cards_bdy_container">
                <div className="bdy_cont_img">
                  {" "}
                  <Image src={imglists4} alt="imglists1" />
                </div>
                <div className="bdy_cont_txt">
                  Mangaluru: ಕೋಟೆಕಾರು ದರೋಡೆ ಪ್ರಕರಣ… ಆರೋಪಿಗಳನ್ನು ನ್ಯಾಯಾಲಯಕ್ಕೆ
                  ಕರೆತಂದ ಪೊಲೀಸರು
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="advertise_container outer_container">
          <div className="vertical_text">Advertise</div>
          <div className="inner_container">
            <div className="image_container">
              <div className="image_inner_container">
                <Image src={advertise_holder} alt="advertise_holder" />
                <div className="image_txt">Advertisement Placeholder</div>
              </div>
            </div>
          </div>
        </div>

        <div className="heroscope_container outer_container">
          <div className="heroscope_header">ದಿನ ಭವಿಷ್ಯ</div>
          <div className="heroscopr_lists_container">
            <div className="lists_innner_container">
              <div className="heroscope_lists_cards">
                <div className="heroscope_img">
                  {" "}
                  <Image src={heroscope1} alt="heroscope1" />
                </div>
                <div className="heroscope_txt">ಮೇಷ</div>
              </div>
              <div className="heroscope_lists_cards">
                <div className="heroscope_img">
                  {" "}
                  <Image src={heroscope2} alt="heroscope2" />
                </div>
                <div className="heroscope_txt">ವೃಷಭ</div>
              </div>
              <div className="heroscope_lists_cards">
                <div className="heroscope_img">
                  {" "}
                  <Image src={heroscope3} alt="heroscope3" />
                </div>
                <div className="heroscope_txt">ಮಿಥುನ</div>
              </div>
            </div>
            <div className="lists_innner_container">
              <div className="heroscope_lists_cards">
                <div className="heroscope_img">
                  {" "}
                  <Image src={heroscope4} alt="heroscope4" />
                </div>
                <div className="heroscope_txt">ತುಲಾ</div>
              </div>
              <div className="heroscope_lists_cards">
                <div className="heroscope_img">
                  {" "}
                  <Image src={heroscope5} alt="heroscope5" />
                </div>
                <div className="heroscope_txt">ವೃಶ್ಚಿಕ</div>
              </div>
              <div className="heroscope_lists_cards">
                <div className="heroscope_img">
                  {" "}
                  <Image src={heroscope6} alt="heroscope6" />
                </div>
                <div className="heroscope_txt">ಧನು</div>
              </div>
            </div>
            <div className="lists_innner_container">
              <div className="heroscope_lists_cards">
                <div className="heroscope_img">
                  {" "}
                  <Image src={heroscope7} alt="heroscope7" />
                </div>
                <div className="heroscope_txt">ಮಕರ</div>
              </div>
              <div className="heroscope_lists_cards">
                <div className="heroscope_img">
                  {" "}
                  <Image src={heroscope8} alt="heroscope8" />
                </div>
                <div className="heroscope_txt">ಕುಂಭ</div>
              </div>
              <div className="heroscope_lists_cards">
                <div className="heroscope_img">
                  {" "}
                  <Image src={heroscope9} alt="heroscope9" />
                </div>
                <div className="heroscope_txt">ಮೀನ</div>
              </div>
            </div>
          </div>
        </div>

        <div className="advertise_container outer_container">
          <div className="vertical_text">Advertise</div>
          <div className="inner_container">
            <div className="image_container">
              <div className="image_inner_container">
                <Image src={advertise_holder} alt="advertise_holder" />
                <div className="image_txt">Advertisement Placeholder</div>
              </div>
            </div>
          </div>
        </div>

        <div className="panchanga_container outer_container">
          <div className="panchanga_header_container">ಇಂದಿನ ಪಂಚಾಂಗ</div>
          <div className="panchanga_main_outer">
            <div className="panchanga_outer_body">
              <div className="panchanga_bdy_header">
                ದಿನಾಂಕ : Saturday, 25 Jan 2025 IST
              </div>
              <div className="panchanga_bday_txts">
                25-1-2025 ಶನಿವಾರ ಕ್ರೋಧಿ ಸಂ|ರದ ಮಕರ ಮಾಸ ದಿನ 11 ಸಲುವ ಪುಷ್ಯ ಬಹುಳ
                ಏಕಾದಶಿ 34 ಗಳಿಗೆ
              </div>

              <div className="panchanga_bdy_inner_lists">
                <div>ದಿನ ವಿಶೇಷ : ಸರ್ವೈಕಾದಶಿ</div>
                <div>ನಿತ್ಯ ನಕ್ಷತ್ರ : ಅನುರಾಧಾ || ಗಳಿಗೆ</div>
                <div>ಮಹಾ ನಕ್ಷತ್ರ : ಶ್ರವಣ</div>
                <div>ಋತು : ಹೇಮಂತ</div>
                <div>ರಾಹುಕಾಲ : 9.00-10.30 ಗಂಟೆ</div>
                <div>ಗುಳಿಕ ಕಾಲ : 6.00-7.30 ಗಂಟೆ</div>
                <div>ಸೂರ್ಯಾಸ್ತ : 6.27 ಗಂಟೆ</div>
                <div>ಸೂರ್ಯೋದಯ : 7.00 ಗಂಟೆ</div>
              </div>
            </div>
          </div>
        </div>

        <div className="advertise_container outer_container">
          <div className="vertical_text">Advertise</div>
          <div className="inner_container">
            <div className="image_container">
              <div className="image_inner_container">
                <Image src={advertise_holder} alt="advertise_holder" />
                <div className="image_txt">Advertisement Placeholder</div>
              </div>
            </div>
          </div>
        </div>

        <div className="subhashitha_container outer_container">
          <div className="subhashitha_header_container">ಸುಭಾಷಿತ</div>
          <div className="subhashitha_bdy_container">
            <Image
              style={{ width: "100%" }}
              src={subhashitha_img}
              alt="subhashitha_img"
            />
          </div>
        </div>

        <div className="subhashitha_container outer_container">
          <div className="subhashitha_header_container">ಕಾರ್ಟೂನ್</div>
          <div className="subhashitha_bdy_container">
            <Image style={{ width: "100%" }} src={cartoon} alt="cartoon" />
          </div>
        </div>

        <div className="advertise_container outer_container">
          <div className="vertical_text">Advertise</div>
          <div className="inner_container">
            <div className="image_container">
              <div className="image_inner_container">
                <Image src={advertise_holder} alt="advertise_holder" />
                <div className="image_txt">Advertisement Placeholder</div>
              </div>
            </div>
          </div>
        </div>

        <div className="udayavani_advertise outer_container">
          <div className="udayavani_header_cont">
            <Image src={udayavani_english_logo} alt="udayavani_english_logo" />
            <Image src={fb_logo} alt="fb_logo" />
          </div>
          <div className="udayavani_adver_bdy">
            <Image
              style={{ width: "100%" }}
              src={advertise_fb}
              alt="advertise_fb"
            />
          </div>
        </div>

        <div className="advertise_container outer_container long_advertise">
          <div className="inner_container">
            <div className="image_container">
              <div className="image_inner_container">
                <Image src={advertise_holder} alt="advertise_holder" />
                <div className="image_txt">Advertisement Placeholder</div>
              </div>
            </div>
          </div>
        </div>

        <div className="advertise_page_container outer_container">
          <div className="page_header_container">
            <span>ಇಂದಿನ ಮುಖಪುಟಗಳು</span>
            <div className="page_header_btn">
              <button>
                <Image src={arrow_left_circle} alt="arrow_left_circle" />
              </button>
              <button>
                <Image src={arrow_right_circle} alt="arrow_right_circle" />
              </button>
            </div>
          </div>
          <div className="page_scnd_header">
            <div className="page_scnd_left_header">
              <div className="tune_img">
                {" "}
                <Image src={tune} alt="tune" />
              </div>
              <div className="scnd_left_txt">Vijayanagar</div>
            </div>
            <div className="page_scnd_right_header">
              <Image
                src={arrow_drop_black_down_circle}
                alt="arrow_drop_black_down_circle"
              />
            </div>
          </div>
          <div className="page_bdy_container">
            <Image
              style={{ width: "100%" }}
              src={news_report}
              alt="news_report"
            />
          </div>
        </div>

        <div className="advertise_container outer_container">
          <div className="vertical_text">Advertise</div>
          <div className="inner_container">
            <div className="image_container">
              <div className="image_inner_container">
                <Image src={advertise_holder} alt="advertise_holder" />
                <div className="image_txt">Advertisement Placeholder</div>
              </div>
            </div>
          </div>
        </div>

        <div className="advertise_list_container outer_container english_advt_lists">
          <div className="advertise_list_header">UDAYAVANI ENGLISH</div>
          <div className="lists_inner_container">
            <div className="inner_container_cards">
              <div className="inner_cards_header">
                <div className="cards_header_right">INTERNATIONAL</div>
                <div className="cards_header_left">05:15 AM IST</div>
              </div>
              <div className="cards_bdy_container">
                "
                <div className="bdy_cont_img">
                  {" "}
                  <Image src={english_news1} alt="english_news1" />
                </div>
                <div className="bdy_cont_txt">
                  Paris Hilton Holds Court As The Queen Of Coachella, Heres All
                  You Need To Know
                </div>
              </div>
            </div>
            <div className="inner_container_cards">
              <div className="inner_cards_header">
                <div className="cards_header_right">TOURISM</div>
                <div className="cards_header_left">06:38 AM IST</div>
              </div>
              <div className="cards_bdy_container">
                <div className="bdy_cont_img">
                  {" "}
                  <Image src={english_news2} alt="english_news2" />
                </div>
                <div className="bdy_cont_txt">
                  Where To Stay In Himachal Pradesh? Top 10 Luxury Hotels And
                  Resorts
                </div>
              </div>
            </div>
            <div className="inner_container_cards">
              <div className="inner_cards_header">
                <div className="cards_header_right">POLITICS</div>
                <div className="cards_header_left">07:49 AM IST</div>
              </div>
              <div className="cards_bdy_container">
                <div className="bdy_cont_img">
                  {" "}
                  <Image src={english_news3} alt="english_news3" />
                </div>
                <div className="bdy_cont_txt">
                  What JD Vance And Usha Vance Wore On Their India Visit: A
                  Fashion Roundup
                </div>
              </div>
            </div>
            <div className="inner_container_cards">
              <div className="inner_cards_header">
                <div className="cards_header_right">NATIONAL </div>
                <div className="cards_header_left">11:30 AM IST</div>
              </div>
              <div className="cards_bdy_container">
                <div className="bdy_cont_img">
                  {" "}
                  <Image src={english_news4} alt="english_news4" />
                </div>
                <div className="bdy_cont_txt">
                  Father-Son Duo Among 26 Killed In Pahalgam Terror Attack
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="advertise_container outer_container">
          <div className="vertical_text">Advertise</div>
          <div className="inner_container">
            <div className="image_container">
              <div className="image_inner_container">
                <Image src={advertise_holder} alt="advertise_holder" />
                <div className="image_txt">Advertisement Placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default RightPart;
