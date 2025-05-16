import React from 'react'
import './Footer.scss'
import { android_logo, apple_logo, bell, book, facebook, instagram, koo, logo, mobile_app, roopathara, telegram, tharanga, thunthuru, thushara, whatsapp, youtube } from '../../../../public/assets/images'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_top">
        <div className="left">
          <Image src={logo} alt="Udayavani Logo" />
        </div>
        <div className="right">
          <div className="imges_div">
            <Image src={tharanga} alt="Tharanga Magazine" />
            <Image src={roopathara} alt="Roopathara Magazine" />
            <Image src={thushara} alt="Thushara Magazine" />
            <Image src={thunthuru} alt="Thunthuru Magazine" />
          </div>
          <button className="common_btn subscribe_btn">SUBSCRIBE</button>
        </div>
      </div>
      <div className="mobile_magazine">
          <div className="magzine_wraper">
            <Image src={tharanga} alt="Tharanga Magazine" />
          </div>
          <div className="magzine_wraper">
            <Image src={roopathara} alt="Roopathara Magazine" />
          </div>
          <div className="magzine_wraper">
            <Image src={thushara} alt="Thushara Magazine" />
          </div>
          <div className="magzine_wraper">
            <Image src={thunthuru} alt="Thunthuru Magazine" />
          </div>
      </div>

      <div className="footer_middle">
        <div className="link_section">
          <ul>
            <li>ಸುದ್ದಿಗಳು</li>
            <li>ಮಹಾಕುಂಭ ಮೇಳ</li>
            <li>ಬಿಗ್‌ ಬಾಸ್‌ 2024</li>
            <li>ನಿಮ್ಮ ಜಿಲ್ಲೆ</li>
            <li>ಕ್ರೀಡೆ</li>
            <li>ಸಿನೆಮಾ</li>
            <li>ವೀಡಿಯೊ</li>
          </ul>
          <ul>
            <li>ಗ್ಯಾಜೆಟ್/ಟೆಕ್</li>
            <li>ವೈವಿಧ್ಯ</li>
            <li>ವೆಬ್ ಎಕ್ಸ್‌ಕ್ಲೂಸಿವ್</li>
            <li>ಜ್ಯೋತಿಷ್ಯ</li>
            <li>ಗ್ಯಾಲರಿ</li>
            <li>ಸಂಧ್ಯಾವಾಣಿ</li>
          </ul>
          <ul>
            <li>E-PAPER</li>
            <li>UV PODCAST</li>
            <li>ENTERTAINMENT</li>
            <li>JOBS / EDUCATION</li>
            <li>UV SAMSKRUTI</li>
            <li>CONTACT US</li>
          </ul>
          <ul>
            <li>SUBSCRIBE</li>
            <li>ABOUT UDAYAVANI</li>
            <li>ABOUT MMNL</li>
            <li>PRIVACY POLICY</li>
            <li>TERMS OF USE</li>
          </ul>
        </div>
        <div className="app_section">
          <div className="triangle_decorator"></div>
          <div className="img_dotted_background">
            <div className="img_container">
              <Image src={mobile_app} alt="Download Mobile App" />
              <Image className='book_img' src={book} alt="Download Mobile App" />
              <Image className='bell_img' src={bell} alt="Download Mobile App" />
            </div>
            <div className="desc">
              <p>Get the Udayavani App</p>
              <p>Now On</p>
            </div>
          </div>
          <div className="download_app_section">
            <button><Image src={apple_logo} alt='apple app store' /></button>
            <button><Image src={android_logo} alt='android play store' /></button>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="left">
          <Image src={whatsapp} alt='whatsapp icon' />
          <Image src={facebook} alt='facebook icon' />
          <Image src={youtube} alt='youtube icon' />
          <Image src={telegram} alt='telegram icon' />
          <Image src={instagram} alt='instagram icon' />
          {/* <Image src={twitter} alt='twitter icon' /> */}
          <Image src={koo} alt='koo icon' />
        </div>
        <div className="right">
          <p>Copyright © 2025 Udayavani. All Rights Reserved.</p>
          <p>Designed & Developed by Manipal Technologies Limited</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
