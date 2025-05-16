"use client";
import React from "react";
import "./Sidebar.scss";
import Image from "next/image";
import {
  ad_img,
  arrow_white,
  bigboss,
  cinema,
  entertainment,
  film_reel,
  gadgets,
  jille,
  jobs,
  jothishya,
  kumbamela,
  menu_dropdown,
  menu_dropdown_hide,
  menu_title,
  news_logo,
  news_paper,
  photo_gallery,
  podcast,
  sports,
  vaividya,
  video_gallery,
  web,
} from "../../../../public/assets/images";
import Link from "next/link";
import { usePathname } from "next/navigation";

// works in client components



const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar mobile_hide">
      <ul className="menu">
        <ul className="menu-item">
          <div className="menu-title">
            <p className="left">
              <Image src={menu_title} alt="menu-icon" />
              <span className="menu_heading">NEWS MENU</span>
            </p>
            <Image src={menu_dropdown} alt="menu-dropdown" />
          </div>
          <li className={`submenu ${pathname === "/right-part/new-page" ? "active" : ""}`}>
            <Link href="/right-part/new-page">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={news_logo} alt="menu-icon" />
                </div>
                ಸುದ್ದಿಗಳು
              </div>
              <Image
                src={pathname === "/right-part/new-page" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />

            </Link>
          </li>
          <li className={`submenu ${pathname === "/right-part/mahakumbhamela" ? "active" : ""}`}>
            <Link href="/right-part/mahakumbhamela">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={kumbamela} alt="menu-icon" />
                </div>
                ಮಹಾಕುಂಭ ಮೇಳ
              </div>
              <Image
                src={pathname === "/right-part/mahakumbhamela" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/right-part/bigboss" ? "active" : ""}`}>
            <Link href="/right-part/bigboss">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={bigboss} alt="menu-icon" />
                </div>
                ಬಿಗ್‌ ಬಾಸ್‌ 2024
              </div>
              <Image
                src={pathname === "/right-part/bigboss" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/districts" ? "active" : ""}`}>
            <Link href="/districts">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={jille} alt="menu-icon" />
                </div>
                ನಿಮ್ಮ ಜಿಲ್ಲೆ
              </div>
              <Image
                src={pathname === "/districts" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/cricket" ? "active" : ""}`}>
            <Link href="/cricket">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={sports} alt="menu-icon" />
                </div>
                ಕ್ರೀಡೆ
              </div>
              <Image
                src={pathname === "/cricket" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/cinema" ? "active" : ""}`}>
            <Link href="/cinema">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={cinema} alt="menu-icon" />
                </div>
                ಸಿನೆಮಾ
              </div>
              <Image
                src={pathname === "/cinema" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/gadjets" ? "active" : ""}`}>
            <Link href="/gadjets">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={gadgets} alt="menu-icon" />
                </div>
                ಗ್ಯಾಜೆಟ್/ಟೆಕ್
              </div>
              <Image
                src={pathname === "/gadjets" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/vaividhya" ? "active" : ""}`}>
            <Link href="/vaividhya">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={vaividya} alt="menu-icon" />
                </div>
                ವೈವಿಧ್ಯ
              </div>
              <Image
                src={pathname === "/vaividhya" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />
            </Link>
          </li>

          <li className={`submenu ${pathname === "/web-exclusive" ? "active" : ""}`}>
            <Link href="/web-exclusive">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={web} alt="menu-icon" />
                </div>
                ವೆಬ್ ಎಕ್ಸ್‌ಕ್ಲೂಸಿವ್
              </div>
              <Image
                src={pathname === "/web-exclusive" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />
            </Link>
          </li>

          <li className={`submenu ${pathname === "/right-part/horoscope" ? "active" : ""}`}>
            <Link href="/right-part/horoscope">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={jothishya} alt="menu-icon" />
                </div>
                ಜ್ಯೋತಿಷ್ಯ
              </div>
              <Image
                src={pathname === "/right-part/horoscope" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/videogallery" ? "active" : ""}`}>
            <Link href="/videogallery">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={video_gallery} alt="menu-icon" />
                </div>
                ವೀಡಿಯೊ ಗ್ಯಾಲರಿ
              </div>
              <Image
                src={pathname === "/videogallery" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/photogallery" ? "active" : ""}`}>
            <Link href="/photogallery">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={photo_gallery} alt="menu-icon" />
                </div>
                ಫೋಟೋ ಗ್ಯಾಲರಿ
              </div>
              <Image
                src={pathname === "/photogallery" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />
            </Link>
          </li>

          <li className={`submenu ${pathname === "/ReelsPage" ? "active" : ""}`}>
            <Link href="/ReelsPage">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={film_reel} alt="menu-icon" />
                </div>
                ಸುದ್ದಿ ರೀಲ್ಸ್
              </div>
              <Image
                src={pathname === "/ReelsPage" ? arrow_white : menu_dropdown_hide}
                alt="menu-dropdown"
              />
            </Link>
          </li>

        </ul>

        <ul className="menu-item">
          <div className="menu-title">
            <p className="left">
              <Image src={menu_title} alt="menu-icon" />
              <span className="menu_heading">UV OTHER LINKS</span>
            </p>
            <Image src={menu_dropdown} alt="menu-dropdown" />
          </div>
          <li className={`submenu ${pathname === "/right-part/e-paper" ? "active" : ""}`}>
            <Link href="/right-part/e-paper">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={news_paper} alt="menu-icon" />
                </div>
                E-PAPER
              </div>
              <Image src={menu_dropdown_hide} alt="menu-dropdown" />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/right-part/uvpodcast" ? "active" : ""}`}>
            <Link href="/right-part/uvpodcast">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={podcast} alt="menu-icon" />
                </div>
                UV PODCAST
              </div>
              <Image src={menu_dropdown_hide} alt="menu-dropdown" />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/right-part/entertainment" ? "active" : ""}`}>
            <Link href="/right-part/entertainment">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={entertainment} alt="menu-icon" />
                </div>
                ENTERTAINMENT
              </div>
              <Image src={menu_dropdown_hide} alt="menu-dropdown" />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/right-part/education" ? "active" : ""}`}>
            <Link href="/right-part/education">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={jobs} alt="menu-icon" />
                </div>
                JOBS / EDUCATION
              </div>
              <Image src={menu_dropdown_hide} alt="menu-dropdown" />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/right-part/samskruti" ? "active" : ""}`}>
            <Link href="/right-part/samskruti">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={news_logo} alt="menu-icon" />
                </div>
                UV SAMSKRUTI
              </div>
              <Image src={menu_dropdown_hide} alt="menu-dropdown" />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/right-part/horoscope" ? "active" : ""}`}>
            <Link href="/right-part/horoscope">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={news_logo} alt="menu-icon" />
                </div>
                UV SAMSKRUTI
              </div>
              <Image src={menu_dropdown_hide} alt="menu-dropdown" />
            </Link>
          </li>
          <li className={`submenu ${pathname === "/right-part/contact" ? "active" : ""}`}>
            <Link href="/right-part/contact">
              <div className="left">
                <div className="icon_wrapper">
                  <Image src={news_logo} alt="menu-icon" />
                </div>
                CONTACT US
              </div>
              <Image src={menu_dropdown_hide} alt="menu-dropdown" />
            </Link>
          </li>



        </ul>
      </ul>

      <div className="ad_container">
        <div className="sidebar_ads">
          <Image src={ad_img} alt="ad" />
          <p className="ad_text">ADVERTISEMENT</p>
        </div>
        <div className="sidebar_ads">
          <Image src={ad_img} alt="ad" />
          <p className="ad_text">ADVERTISEMENT</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
