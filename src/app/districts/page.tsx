import { Grid } from '@mui/material'
import React from 'react'
import Sidebar from '../ClientComponents/Sidebar/Sidebar'
import RightPart from '../right-part/page'
import './districts.scss'
import Image from 'next/image'
import { ad_img, all_news, arrow_circle_right, arrow_right_top, ballari, beedar, more_news, scrollbtn, slicker_circle, stat_2 } from '../../../public/assets/images'
import Link from 'next/link'

const page = () => {
    return (
        <Grid container spacing={2} sx={{ margin: '10px' }}>
            <Grid size={{ sm: 2.5, md: 2.5 }} sx={{ height: '80%' }} >
                <Sidebar />
            </Grid>
            <Grid container size={{ sm: 6.5, md: 6.5 }} sx={{ height: '100%' }} className='dist_container'>
                <div className="navigations">
                <Link href='/'>
                    <div className="left">
                        {/* <div className="arraow_img"> */}
                        <Image src={scrollbtn} alt='left side arrow' />
                       
                        {/* </div> */}
                        <p className='simple_heading'>ನಿಮ್ಮ ಜಿಲ್ಲೆ ಹುಡುಕಿ</p>
                    </div>
                    </Link>
                    <div className="right">
                        <p>ಎಲ್ಲಾ ಜಿಲ್ಲೆ ನ್ಯೂಸ್</p>
                        <Image src={arrow_circle_right} alt='right side arrow' />
                    </div>
                </div>
                <div className="all_dist">
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='bagalakote' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={beedar} alt='bengaluru' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ನಗರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='beedar' />
                        </div>
                        <p>ಬೀದರ್</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='bagalakote' />
                        </div>
                        <p>ಬಾಗಲಕೋಟೆ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={beedar} alt='bengaluru' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ನಗರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='beedar' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='bagalakote' />
                        </div>
                        <p>ಬಾಗಲಕೋಟೆ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={beedar} alt='bengaluru' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ನಗರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='beedar' />
                        </div>
                        <p>ಬೀದರ್</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='bagalakote' />
                        </div>
                        <p>ಬಾಗಲಕೋಟೆ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={beedar} alt='bengaluru' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ನಗರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='beedar' />
                        </div>
                        <p>ಬೀದರ್</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='bagalakote' />
                        </div>
                        <p>ಬಾಗಲಕೋಟೆ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={beedar} alt='bengaluru' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ನಗರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='beedar' />
                        </div>
                        <p>ಬೀದರ್</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='bagalakote' />
                        </div>
                        <p>ಬಾಗಲಕೋಟೆ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={beedar} alt='bengaluru' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ನಗರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='beedar' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='bagalakote' />
                        </div>
                        <p>ಬಾಗಲಕೋಟೆ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={beedar} alt='bengaluru' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ನಗರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='beedar' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='bagalakote' />
                        </div>
                        <p>ಬಾಗಲಕೋಟೆ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={beedar} alt='bengaluru' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ನಗರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='beedar' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='bagalakote' />
                        </div>
                        <p>ಬಾಗಲಕೋಟೆ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={beedar} alt='bengaluru' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ನಗರ</p>
                    </div>
                    <div className="signle_dist">
                        <div className="white_border">
                            <Image src={slicker_circle} alt='beedar' />
                        </div>
                        <p>ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ</p>
                    </div>

                </div>
                <div className="more_news">
                    <div className="heading">
                        <p className='simple_heading'>ಇನ್ನಷ್ಟು ನ್ಯೂಸ್ ಈ ವಿಭಾಗದಿಂದ</p>
                    </div>
                    <div className="news_card_container">
                        <div className="news_card">
                            <Image src={more_news} alt='more news' />
                            <div className="show_time"><p>1 min ago</p></div>
                            <div className="news_text">
                                <p className="simple_text_brown">ಬೆಂಗಳೂರು</p>
                                <p className="simple_desc">ನಗರದಲ್ಲಿ ಭಾನುವಾರ ಆಯೋಜಿಸಿದ್ದ "ಟಿ.ಸಿ.ಎಸ್ ವಿಶ್ವ 10ಕೆ ರನ್" ಓಟದಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದ ಅಥ್ಲೀಟ್ ಗಳು </p>
                            </div>
                        </div>
                        <div className="news_card">
                            <Image src={more_news} alt='more news' />
                            <div className="show_time"><p>1 min ago</p></div>
                            <div className="news_text">
                                <p className="simple_text_brown">ಬೆಂಗಳೂರು</p>
                                <p className="simple_desc">ನಗರದಲ್ಲಿ ಭಾನುವಾರ ಆಯೋಜಿಸಿದ್ದ "ಟಿ.ಸಿ.ಎಸ್ ವಿಶ್ವ 10ಕೆ ರನ್" ಓಟದಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದ ಅಥ್ಲೀಟ್ ಗಳು </p>
                            </div>
                        </div>
                        <div className="news_card">
                            <Image src={more_news} alt='more news' />
                            <div className="show_time"><p>1 min ago</p></div>
                            <div className="news_text">
                                <p className="simple_text_brown">ಬೆಂಗಳೂರು</p>
                                <p className="simple_desc">ನಗರದಲ್ಲಿ ಭಾನುವಾರ ಆಯೋಜಿಸಿದ್ದ "ಟಿ.ಸಿ.ಎಸ್ ವಿಶ್ವ 10ಕೆ ರನ್" ಓಟದಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದ ಅಥ್ಲೀಟ್ ಗಳು </p>
                            </div>
                        </div>
                        <div className="news_card">
                            <Image src={more_news} alt='more news' />
                            <div className="show_time"><p>1 min ago</p></div>
                            <div className="news_text">
                                <p className="simple_text_brown">ಬೆಂಗಳೂರು</p>
                                <p className="simple_desc">ನಗರದಲ್ಲಿ ಭಾನುವಾರ ಆಯೋಜಿಸಿದ್ದ "ಟಿ.ಸಿ.ಎಸ್ ವಿಶ್ವ 10ಕೆ ರನ್" ಓಟದಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದ ಅಥ್ಲೀಟ್ ಗಳು </p>
                            </div>
                        </div>
                        <div className="news_card">
                            <Image src={more_news} alt='more news' />
                            <div className="show_time"><p>1 min ago</p></div>
                            <div className="news_text">
                                <p className="simple_text_brown">ಬೆಂಗಳೂರು</p>
                                <p className="simple_desc">ನಗರದಲ್ಲಿ ಭಾನುವಾರ ಆಯೋಜಿಸಿದ್ದ "ಟಿ.ಸಿ.ಎಸ್ ವಿಶ್ವ 10ಕೆ ರನ್" ಓಟದಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದ ಅಥ್ಲೀಟ್ ಗಳು </p>
                            </div>
                        </div>
                        <div className="news_card">
                            <Image src={more_news} alt='more news' />
                            <div className="show_time"><p>1 min ago</p></div>
                            <div className="news_text">
                                <p className="simple_text_brown">ಬೆಂಗಳೂರು</p>
                                <p className="simple_desc">ನಗರದಲ್ಲಿ ಭಾನುವಾರ ಆಯೋಜಿಸಿದ್ದ "ಟಿ.ಸಿ.ಎಸ್ ವಿಶ್ವ 10ಕೆ ರನ್" ಓಟದಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದ ಅಥ್ಲೀಟ್ ಗಳು </p>
                            </div>
                        </div>
                        <div className="news_card">
                            <Image src={more_news} alt='more news' />
                            <div className="show_time"><p>1 min ago</p></div>
                            <div className="news_text">
                                <p className="simple_text_brown">ಬೆಂಗಳೂರು</p>
                                <p className="simple_desc">ನಗರದಲ್ಲಿ ಭಾನುವಾರ ಆಯೋಜಿಸಿದ್ದ "ಟಿ.ಸಿ.ಎಸ್ ವಿಶ್ವ 10ಕೆ ರನ್" ಓಟದಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದ ಅಥ್ಲೀಟ್ ಗಳು </p>
                            </div>
                        </div>
                        <div className="news_card">
                            <Image src={more_news} alt='more news' />
                            <div className="show_time"><p>1 min ago</p></div>
                            <div className="news_text">
                                <p className="simple_text_brown">ಬೆಂಗಳೂರು</p>
                                <p className="simple_desc">ನಗರದಲ್ಲಿ ಭಾನುವಾರ ಆಯೋಜಿಸಿದ್ದ "ಟಿ.ಸಿ.ಎಸ್ ವಿಶ್ವ 10ಕೆ ರನ್" ಓಟದಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದ ಅಥ್ಲೀಟ್ ಗಳು </p>
                            </div>
                        </div>
                        <div className="news_card">
                            <Image src={more_news} alt='more news' />
                            <div className="show_time"><p>1 min ago</p></div>
                            <div className="news_text">
                                <p className="simple_text_brown">ಬೆಂಗಳೂರು</p>
                                <p className="simple_desc">ನಗರದಲ್ಲಿ ಭಾನುವಾರ ಆಯೋಜಿಸಿದ್ದ "ಟಿ.ಸಿ.ಎಸ್ ವಿಶ್ವ 10ಕೆ ರನ್" ಓಟದಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದ ಅಥ್ಲೀಟ್ ಗಳು </p>
                            </div>
                        </div>
                    </div>
                    <div className="all_news_section">
                        <div className="all_news">
                            <p>ಎಲ್ಲಾ ನ್ಯೂಸ್</p>
                            <Image src={all_news} alt='all news' />
                        </div>
                    </div>
                </div>
                <div className="ad_section">
                    <Image src={ad_img} alt='advertisement' />
                    <p>"Advertisement Placeholder"</p>
                </div>
            </Grid>
            <Grid size={{ sm: 3, md: 3 }}>
                <RightPart />
            </Grid>

        </Grid>
    )
}

export default page