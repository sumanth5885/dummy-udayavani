"use client";
import React, { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import './ReelComponent.scss';

export type Reel = {
  platform: 'youtube' | 'facebook' | 'instagram' | 'twitter';
  title: string;
  embedUrl: string; // For Twitter, this should be a Tweet URL (e.g., https://twitter.com/user/status/123)
  time: string;
  icon: any;
  logo: any;
};

type ReelComponentProps = {
  hideHeader?: boolean;
  reels: Reel[];
  gridLayout?: boolean;
};

const ReelComponent: React.FC<ReelComponentProps> = ({ hideHeader = false, reels, gridLayout }) => {
  const twitterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter widgets
    const loadTwitter = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(); // reload all embeds
      } else {
        const twitterScript = document.createElement('script');
        twitterScript.src = 'https://platform.twitter.com/widgets.js';
        twitterScript.async = true;
        twitterScript.onload = () => {
          if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
          }
        };
        document.body.appendChild(twitterScript);
      }
    };
  
    // Load Instagram embeds
    const loadInstagram = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      } else {
        const igScript = document.createElement('script');
        igScript.src = 'https://www.instagram.com/embed.js';
        igScript.async = true;
        igScript.onload = () => {
          if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
          }
        };
        document.body.appendChild(igScript);
      }
    };
  
    loadTwitter();
    loadInstagram();
  }, [reels]);

  return (
    <Grid className="reels_container_wrap">
      {!hideHeader && (
        <div className="sixth_reels_section_circle">
          <p>ಸುದ್ದಿ ರೀಲ್ಸ್</p>
          <div className="slick_arrows">{/* optional arrows */}</div>
        </div>
      )}

      <div className={`reels_cards_container ${gridLayout ? 'three_column_grid' : ''}`}>
        {Array.isArray(reels) &&
          reels.map((reel, index) => (
            <div className="reel_card_with_time" key={index}>
              {/* Video Card */}
              <div className="reel_container_wrap" ref={reel.platform === 'twitter' ? twitterRef : null}>
                {reel.platform === 'twitter' ? (
                  <blockquote className="twitter-tweet" data-width="300" data-dnt="true">
                    <a href={reel.embedUrl}></a>
                  </blockquote>
                ) : (
                  <iframe
                    src={reel.embedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    scrolling="no"
                  ></iframe>
                )}
              </div>

              {/* Upload Time */}
              <div className="upload_time">
                <Image src={reel.icon} alt={`${reel.platform}_icon`} />
                <p>{reel.time}</p>
              </div>
            </div>
          ))}
      </div>
    </Grid>
  );
};

export default ReelComponent;
