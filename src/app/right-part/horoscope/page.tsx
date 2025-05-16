'use client'
import Sidebar from '@/app/ClientComponents/Sidebar/Sidebar'
import { Grid } from '@mui/material';
import React, { useRef, useState } from 'react'
import RightPart from '../page';
import Image from "next/image";
import './page.scss'
import { flwrbtmleftimg, flwrbtmrightimg, flwrtopleftimg, flwrtoprightimg, heroscope1, heroscope2, heroscope3, heroscope4, heroscope5, heroscope6, heroscope7, heroscope8, heroscope9, personalizedimg, scrollbtn } from '../../../../public/assets/images';

const page = () => {
  const [activeTab, setActiveTab] = useState('ದಿನ ಭವಿಷ್ಯ')
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabs = ['ದಿನ ಭವಿಷ್ಯ', 'ವರ್ಷ ಭವಿಷ್ಯ', 'ವಾರ ಭವಿಷ್ಯ', 'ಇಂದಿನ ಪಂಚಾಂಗ']
  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer && scrollContainer.firstChild) {
      const tabWidth = (scrollContainer.firstChild as HTMLElement).clientWidth;
      scrollContainer.scrollBy({ left: tabWidth * 2, behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="main_container" style={{ padding: '10px' }}>
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


              {/* Render horoscope content only for "ದಿನ ಭವಿಷ್ಯ" */}
              {activeTab === 'ದಿನ ಭವಿಷ್ಯ' && (
                <div className='heroscope_container'>
                  <div className='heroscope_container_lists'>
                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope1} alt='heroscope1' /></div>
                        <div className='heroscope_txt'>ಮೇಷ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಇಂದು ನಿಮ್ಮ ಆತ್ಮವಿಶ್ವಾಸ ಹೆಚ್ಚಾಗಿರುತ್ತದೆ. ನಿಮಗೆ ಚಿರಪರಿಚಿತವಲ್ಲದ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿಯೂ ನೀವು ಸುಧಾರಿತ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ ಶಕ್ತಿ ಹೊಂದಿರುತ್ತೀರಿ. ಸಹೋದ್ಯೋಗಿಗಳಿಂದ ಸಹಕಾರ ಸಿಗಬಹುದು. ಸಂವಹನದಲ್ಲಿ ನಿಖರತೆ ಇರಲಿ.</div>
                    </div>
                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope2} alt='heroscope2' /></div>
                        <div className='heroscope_txt'>ವೃಷಭ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>
                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope3} alt='heroscope3' /></div>
                        <div className='heroscope_txt'>ಮಿಥುನ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>
                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope4} alt='heroscope4' /></div>
                        <div className='heroscope_txt'>ತುಲಾ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>


                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope5} alt='heroscope5' /></div>
                        <div className='heroscope_txt'>ವೃಶ್ಚಿಕ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>

                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope6} alt='heroscope6' /></div>
                        <div className='heroscope_txt'>ಧನು</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>

                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope7} alt='heroscope7' /></div>
                        <div className='heroscope_txt'>ಮಕರ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>

                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope8} alt='heroscope8' /></div>
                        <div className='heroscope_txt'>ಕುಂಭ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>

                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope9} alt='heroscope9' /></div>
                        <div className='heroscope_txt'>ಮೀನ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>

                  </div>

                </div>
              )}

              {/* Render horoscope content only for "ವರ್ಷ ಭವಿಷ್ಯ" */}
              {activeTab === 'ವರ್ಷ ಭವಿಷ್ಯ' && (
                <div className='heroscope_container'>
                  <div className='heroscope_container_lists'>
                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope1} alt='heroscope1' /></div>
                        <div className='heroscope_txt'>ಮೇಷ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಇಂದು ನಿಮ್ಮ ಆತ್ಮವಿಶ್ವಾಸ ಹೆಚ್ಚಾಗಿರುತ್ತದೆ. ನಿಮಗೆ ಚಿರಪರಿಚಿತವಲ್ಲದ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿಯೂ ನೀವು ಸುಧಾರಿತ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ ಶಕ್ತಿ ಹೊಂದಿರುತ್ತೀರಿ. ಸಹೋದ್ಯೋಗಿಗಳಿಂದ ಸಹಕಾರ ಸಿಗಬಹುದು. ಸಂವಹನದಲ್ಲಿ ನಿಖರತೆ ಇರಲಿ.</div>
                    </div>
                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope2} alt='heroscope2' /></div>
                        <div className='heroscope_txt'>ವೃಷಭ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>
                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope3} alt='heroscope3' /></div>
                        <div className='heroscope_txt'>ಮಿಥುನ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>
                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope4} alt='heroscope4' /></div>
                        <div className='heroscope_txt'>ತುಲಾ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>


                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope5} alt='heroscope5' /></div>
                        <div className='heroscope_txt'>ವೃಶ್ಚಿಕ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>
                  </div>

                </div>
              )}


              {/* Render horoscope content only for "ವಾರ ಭವಿಷ್ಯ" */}
              {activeTab === 'ವಾರ ಭವಿಷ್ಯ' && (
                <div className='heroscope_container'>
                  <div className='heroscope_container_lists'>
                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope1} alt='heroscope1' /></div>
                        <div className='heroscope_txt'>ಮೇಷ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಇಂದು ನಿಮ್ಮ ಆತ್ಮವಿಶ್ವಾಸ ಹೆಚ್ಚಾಗಿರುತ್ತದೆ. ನಿಮಗೆ ಚಿರಪರಿಚಿತವಲ್ಲದ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿಯೂ ನೀವು ಸುಧಾರಿತ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ ಶಕ್ತಿ ಹೊಂದಿರುತ್ತೀರಿ. ಸಹೋದ್ಯೋಗಿಗಳಿಂದ ಸಹಕಾರ ಸಿಗಬಹುದು. ಸಂವಹನದಲ್ಲಿ ನಿಖರತೆ ಇರಲಿ.</div>
                    </div>
                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope2} alt='heroscope2' /></div>
                        <div className='heroscope_txt'>ವೃಷಭ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>
                    <div className='heroscope_cards'>
                      <div className='heroscope_lists_cards'>
                        <div className='heroscope_img'> <Image src={heroscope3} alt='heroscope3' /></div>
                        <div className='heroscope_txt'>ಮಿಥುನ</div>
                      </div>
                      <div className='heroscope_bdy_txt'>ಸಂದರ್ಭಕ್ಕೆ ಸರಿಯಾಗಿ ಸ್ಪಂದಿಸುವುದನ್ನು ಕಲಿಯಿರಿ. ಉದ್ಯೋಗದಲ್ಲಿ ಜವಾಬ್ದಾರಿಗಳ ಬದಲಾವಣೆ. ಸರಕಾರಿ ಉದ್ಯೋಗಸ್ಥರಿಗೆ ಒಂದು ಬಗೆಯ ಕಳವಳ. ಸಣ್ಣ ಉದ್ಯಮಿಗಳ ಸಮಸ್ಯೆಗಳು ಪರಿಹಾರ. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗೆ ಯಶಸ್ಸು,</div>
                    </div>

                  </div>

                </div>
              )}

              {/* Render horoscope content only for "ಇಂದಿನ ಪಂಚಾಂಗ" */}
              {activeTab === 'ಇಂದಿನ ಪಂಚಾಂಗ' && (
                <div className='heroscope_container'>
                  <div className='panchanga_container outer_container'>
                    <div className='panchanga_main_outer'>

                      <div className='flwr_topper_imgs'>
                        <div className='flwr_top_left'><Image src={flwrtopleftimg} alt='flwrtopleftimg' /></div>
                        <div className='flwr_top_right'><Image src={flwrtoprightimg} alt='flwrtoprightimg' /></div>
                      </div>
                      <div className='panchanga_outer_body'>
                        <div className='panchanga_bdy_header'>ದಿನಾಂಕ :  Saturday, 25 Jan 2025 IST</div>
                        <div className='panchanga_bday_txts'>25-1-2025 ಶನಿವಾರ ಕ್ರೋಧಿ ಸಂ|ರದ ಮಕರ ಮಾಸ ದಿನ 11 ಸಲುವ ಪುಷ್ಯ ಬಹುಳ ಏಕಾದಶಿ 34 ಗಳಿಗೆ</div>

                        <div className='panchanga_bdy_inner_lists'>
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
                      <div className='flwr_bottom_imgs'>
                        <div className='flwr_bottom_left'><Image src={flwrbtmleftimg} alt='flwrtopleftimg' /></div>
                        <div className='flwr_bottom_right'><Image src={flwrbtmrightimg} alt='flwrtopleftimg' /></div>
                      </div>

                    </div>
                  </div>


                  <div className='personalized_report_container'>
                    <div className='personalized_header'>   Personalized Reports</div>
                    <div className='personalized_bdy_container'>
                      <Grid container spacing={1}>
                        <Grid size={{ md: 4 }}>
                          <div className="sub_container_cards">
                            <div className="cards_top_img">
                              <Image src={personalizedimg} alt='personalizedimg' />
                            </div>
                            <div className='cards_bdy_outer_txt'>
                              <div className="cards_botoom_txt">Career & Business Horoscope Report@ Rs.2499/-  </div>
                              <div className="cards_footer_txt">BUY</div>
                            </div>
                          </div>
                        </Grid>
                        <Grid size={{ md: 4 }}>
                          <div className="sub_container_cards">
                            <div className="cards_top_img">
                              <Image src={personalizedimg} alt='personalizedimg' />
                            </div>
                            <div className='cards_bdy_outer_txt'>
                              <div className="cards_botoom_txt">Career & Business Horoscope Report@ Rs.2499/-  </div>
                              <div className="cards_footer_txt">BUY</div>
                            </div>

                          </div>
                        </Grid>
                        <Grid size={{ md: 4 }}>
                          <div className="sub_container_cards">
                            <div className="cards_top_img">
                              <Image src={personalizedimg} alt='personalizedimg' />
                            </div>
                            <div className='cards_bdy_outer_txt'>
                              <div className="cards_botoom_txt">Career & Business Horoscope Report@ Rs.2499/-  </div>
                              <div className="cards_footer_txt">BUY</div>
                            </div>

                          </div>
                        </Grid>
                        <Grid size={{ md: 4 }}>
                          <div className="sub_container_cards">
                            <div className="cards_top_img">
                              <Image src={personalizedimg} alt='personalizedimg' />
                            </div>
                            <div className='cards_bdy_outer_txt'>
                              <div className="cards_botoom_txt">Career & Business Horoscope Report@ Rs.2499/-  </div>
                              <div className="cards_footer_txt">BUY</div>
                            </div>
                          </div>
                        </Grid>
                        <Grid size={{ md: 4 }}>
                          <div className="sub_container_cards">
                            <div className="cards_top_img">
                              <Image src={personalizedimg} alt='personalizedimg' />
                            </div>
                            <div className='cards_bdy_outer_txt'>
                              <div className="cards_botoom_txt">Career & Business Horoscope Report@ Rs.2499/-  </div>
                              <div className="cards_footer_txt">BUY</div>
                            </div>
                          </div>
                        </Grid>
                        <Grid size={{ md: 4 }}>
                          <div className="sub_container_cards">
                            <div className="cards_top_img">
                              <Image src={personalizedimg} alt='personalizedimg' />
                            </div>
                            <div className='cards_bdy_outer_txt'>
                              <div className="cards_botoom_txt">Career & Business Horoscope Report@ Rs.2499/-  </div>
                              <div className="cards_footer_txt">BUY</div>
                            </div>

                          </div>
                        </Grid>

                      </Grid>

                    </div>
                  </div>
                </div>

              )}


            </div>
          </Grid>
          <Grid size={{ md: 3 }}><RightPart /></Grid>
        </Grid>
      </div>


    </>
  )
}

export default page