import Image from "next/image";
import {
  android_icon,
  apps_icon,
  arrow_dropdown,
  calendar_icon,
  custom_media,
  custom_media_bar,
  home_icon,
  search_icon,
  translate_icon,
  udayavani_img,
  head1,
  head2,
  head3,
  head4,
  head5,
} from "../../../../public/assets/images";
import "./Header.scss";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="headr_main">
        <div className="main_header mobile_hide">
          <div className="left_main_header ">
            <div className="calendar_part">
              <Image src={calendar_icon} alt="Calendar" />
              <p className="updated_time_txt">
                Updated: <span className="time_txt"> 11:00 </span>AM IST
              </p>
            </div>

            <div className="line_div"></div>

            <p className="date_txt">
              Thursday, <span className="day_txt">23</span> 2025
            </p>
          </div>
          <div className="right_main_header">
            <button className="subscribe_btn">SUBSCRIBE</button>
          </div>
        </div>

        <div className="second_header">
          <div className="left_main_header">
            <div className="calendar_part">
              <Image src={udayavani_img} alt="udayawani" />
            </div>
            <Link href="/">
            <Image src={home_icon} alt="home" className="mobile_hide" />
            </Link>
            <div className="language_filter">
              <Image src={translate_icon} alt="translate" />
              <p className="uv_txt mobile_hide">
                UV <span className="kannada_txt">Kannada</span>
              </p>
              <Image src={arrow_dropdown} alt="arrow" className="mobile_hide" />
              <div className="right_main_header desktop_hide">
                <button className="subscribe_btn">SUBSCRIBE</button>
              </div>
            </div>
          </div>

          <div className="right_main_header mobile_hide">
            <div className="custom_searchdiv">
              <input
                type="text"
                placeholder="Search News"
                className="custom_search_input"
              />
              <div className="search_border">
                <Image src={search_icon} alt="" className="search_icon" />
              </div>
            </div>
            <div className="custom_media_section">
              <Image src={custom_media} alt="custom_media" />
              <Image src={custom_media_bar} alt="custom_media" />
            </div>
            <p className="get_app_txt">Get App</p>
            <div className="android_wrap">
              <Image src={android_icon} alt="android" />
              <p className="android_txt">Android</p>
            </div>
            <div className="android_wrap">
              <Image src={apps_icon} alt="apps" />
              <p className="android_txt">IOS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile_header desktop_hide">
        <div className="items">
          <Image src={head1} alt="home_btn" />
          <p>ಮುಖಪುಟ</p>
        </div>
        <div className="items">
          <Image src={head2} alt="home_btn" />
          <p>ಸುದ್ದಿ ಮೆನು</p>
        </div>
        <div className="items">
          <Image src={head3} alt="home_btn" />
          <p>ದಿನ ಭವಿಷ್ಯ</p>
        </div>
        <div className="items">
          <Image src={head4} alt="home_btn" />
          <p>ವೈವಿಧ್ಯ</p>
        </div>
        <div className="items">
          <Image src={head5} alt="home_btn" />
          <p>Search</p>
        </div>
      </div>
    </>
  );
};

export default Header;
