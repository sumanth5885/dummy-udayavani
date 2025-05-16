import React from 'react';
import ReelComponent, { Reel } from '../ClientComponents/ReelComponent/ReelComponent';
import { yt_img, fb_img, insta_img, udayawanilogo_reel, twitter_img } from '../../../public/assets/images';
import { Grid } from '@mui/material';
import Sidebar from '../ClientComponents/Sidebar/Sidebar';
import RightPart from '../right-part/page';



const reels: Reel[] = [
    {
        platform: 'youtube',
        title: 'ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ',
        embedUrl: ' https://www.youtube.com/embed/jmy8lSJ3Ka8',
        time: '11:00 AM IST',
        icon: yt_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'facebook',
        title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
        embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&width=180&height=340',
        time: '12:30 PM IST', // Add this required property
        icon: fb_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'instagram',
        title: 'ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ',
       embedUrl: 'https://www.instagram.com/p/DJWcnDEvVzD/embed',
        time: '2:00 PM IST',
        icon: insta_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'youtube',
        title: 'ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ',
        embedUrl: 'https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1',
        time: '11:00 AM IST',
        icon: yt_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'facebook',
        title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
        embedUrl:
            'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&autoplay=1',
        time: '12:30 PM IST',
        icon: fb_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'instagram',
        title: 'ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ',
        embedUrl: 'https://www.instagram.com/p/POST_ID/embed',
        time: '2:00 PM IST',
        icon: insta_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'youtube',
        title: 'ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ',
        embedUrl: 'https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1',
        time: '11:00 AM IST',
        icon: yt_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'facebook',
        title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
        embedUrl:
            'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&autoplay=1',
        time: '12:30 PM IST',
        icon: fb_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'instagram',
        title: 'ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ',
        embedUrl: 'https://www.instagram.com/p/POST_ID/embed',
        time: '2:00 PM IST',
        icon: insta_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'youtube',
        title: 'ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ',
        embedUrl: 'https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1',
        time: '11:00 AM IST',
        icon: yt_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'facebook',
        title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
        embedUrl:
            'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&autoplay=1',
        time: '12:30 PM IST',
        icon: fb_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'instagram',
        title: 'ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ',
        embedUrl: 'https://www.instagram.com/p/POST_ID/embed',
        time: '2:00 PM IST',
        icon: insta_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'youtube',
        title: 'ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ',
        embedUrl: 'https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1',
        time: '11:00 AM IST',
        icon: yt_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'facebook',
        title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
        embedUrl:
            'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&autoplay=1',
        time: '12:30 PM IST',
        icon: fb_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'instagram',
        title: 'ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ',
        embedUrl: 'https://www.instagram.com/p/POST_ID/embed',
        time: '2:00 PM IST',
        icon: insta_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'youtube',
        title: 'ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ',
        embedUrl: 'https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1',
        time: '11:00 AM IST',
        icon: yt_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'facebook',
        title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
        embedUrl:
            'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&autoplay=1',
        time: '12:30 PM IST',
        icon: fb_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'instagram',
        title: 'ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ',
        embedUrl: 'https://www.instagram.com/p/POST_ID/embed',
        time: '2:00 PM IST',
        icon: insta_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'youtube',
        title: 'ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ',
        embedUrl: 'https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1',
        time: '11:00 AM IST',
        icon: yt_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'facebook',
        title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
        embedUrl:
            'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&autoplay=1',
        time: '12:30 PM IST',
        icon: fb_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'instagram',
        title: 'ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ',
        embedUrl: 'https://www.instagram.com/p/POST_ID/embed',
        time: '2:00 PM IST',
        icon: insta_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'youtube',
        title: 'ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ',
        embedUrl: 'https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1',
        time: '11:00 AM IST',
        icon: yt_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'facebook',
        title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
        embedUrl:
            'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&autoplay=1',
        time: '12:30 PM IST',
        icon: fb_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'instagram',
        title: 'ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ',
        embedUrl: 'https://www.instagram.com/p/POST_ID/embed',
        time: '2:00 PM IST',
        icon: insta_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'youtube',
        title: 'ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ',
        embedUrl: 'https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1',
        time: '11:00 AM IST',
        icon: yt_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'facebook',
        title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
        embedUrl:
            'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&autoplay=1',
        time: '12:30 PM IST',
        icon: fb_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'instagram',
        title: 'ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ',
        embedUrl: 'https://www.instagram.com/p/POST_ID/embed',
        time: '2:00 PM IST',
        icon: insta_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'youtube',
        title: 'ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ',
        embedUrl: 'https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1',
        time: '11:00 AM IST',
        icon: yt_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'twitter',
        title: 'ರಾಜಕೀಯದಲ್ಲಿನ ಹೊಸ ಘೋಷಣೆ',
        embedUrl: 'https://twitter.com/leonlibertari0/status/1919242926606926189',
        time: '3:45 PM IST',
        icon: twitter_img,
        logo: udayawanilogo_reel,
      },
      
    {
        platform: 'facebook',
        title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
        embedUrl:
            'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&autoplay=1',
        time: '12:30 PM IST',
        icon: fb_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'instagram',
        title: 'ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ',
        embedUrl: 'https://www.instagram.com/p/POST_ID/embed',
        time: '2:00 PM IST',
        icon: insta_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'youtube',
        title: 'ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ',
        embedUrl: 'https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1',
        time: '11:00 AM IST',
        icon: yt_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'facebook',
        title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
        embedUrl:
            'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&autoplay=1',
        time: '12:30 PM IST',
        icon: fb_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'instagram',
        title: 'ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ',
        embedUrl: 'https://www.instagram.com/p/POST_ID/embed',
        time: '2:00 PM IST',
        icon: insta_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'youtube',
        title: 'ಬಾಲಕನ ತಕ್ಷಣದ ಪ್ರಭಾವಿ ಪ್ರತಿಕ್ರಿಯೆ – ಜನ ಮೆಚ್ಚುಗೆ',
        embedUrl: 'https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1',
        time: '11:00 AM IST',
        icon: yt_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'facebook',
        title: 'ಮಹಿಳೆಯ ಧೈರ್ಯದ ವಿಡಿಯೋ ವೈರಲ್',
        embedUrl:
            'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=1921856991684261&show_text=false&autoplay=1',
        time: '12:30 PM IST',
        icon: fb_img,
        logo: udayawanilogo_reel,
    },
    {
        platform: 'instagram',
        title: 'ಶಿಕ್ಷಕರ ಅಭಿನಂದನಾ ಕ್ಷಣ',
        embedUrl: 'https://www.instagram.com/p/POST_ID/embed',
        time: '2:00 PM IST',
        icon: insta_img,
        logo: udayawanilogo_reel,
    },

];

const Page = () => {
    return (
        <>
            <Grid container spacing={2} sx={{ margin: '10px' }}>
                <Grid size={{ md: 2.5 }} >
                    <Sidebar />
                </Grid>
                <Grid container size={{ md: 6.5 }} sx={{ height: "100%" }}>
                    <ReelComponent gridLayout={true} reels={reels} />
                </Grid>
                <Grid size={{ md: 3 }}>
                    <RightPart />
                </Grid>
            </Grid>
        </>
    );
};

export default Page;
