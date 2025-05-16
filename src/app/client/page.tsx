'use client';

import { useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

declare global {
  interface Window {
    FB: any;
    instgrm: any;
    twttr: any;
  }
}

const ClientPage = () => {
  useEffect(() => {
    const authToken = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='))
      ?.split('=')[1] || '';

    console.log(authToken, 'authToken');

    axios.post(
      'http://localhost:3000/api/dummy-post',
      {},
      {
        headers: {
          Cookie: `authToken=${authToken}`,
        },
      }
    ).then(res => {
      console.log("POST Success:", res.data);
    }).catch(err => {
      console.error("POST Error:", err);
    });

    // Load Facebook SDK
    if (!window.FB) {
      const fbScript = document.createElement("script");
      fbScript.async = true;
      fbScript.defer = true;
      fbScript.crossOrigin = "anonymous";
      fbScript.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
      document.body.appendChild(fbScript);
    } else {
      window.FB.XFBML.parse();
    }

    // Load Instagram SDK
    const igScript = document.createElement("script");
    igScript.src = "https://www.instagram.com/embed.js";
    igScript.async = true;
    igScript.onload = () => {
      if (window.instgrm) window.instgrm.Embeds.process();
    };
    document.body.appendChild(igScript);

    // Load Twitter SDK
    const twScript = document.createElement("script");
    twScript.src = "https://platform.twitter.com/widgets.js";
    twScript.async = true;
    twScript.onload = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    };
    document.body.appendChild(twScript);
  }, []);

  return (
    <>
      <h1>Client Page</h1>

      <Grid container spacing={2} sx={{ justifyContent: 'center', marginTop: 4 }}>
        {/* Custom Twitter Card */}
        <Grid size={{md:3}} sx={{ width: 250, height: 350, padding: 2, boxShadow: 2, borderRadius: 2 }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              overflow: 'auto',  // Allow scrolling if the content is too large
              padding: '10px',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
              objectFit: 'cover', 
            }}
          >
            <blockquote
              className="twitter-tweet"
              data-theme="light"
              style={{
                width: '100%',
                transform: 'scale(0.7)',  // Scale down content to fit within card
                transformOrigin: 'top',
                objectFit: 'cover', 
              }}
            >
              <a href="https://twitter.com/PTI_News/status/1765587846994235418">Loading tweet...</a>
            </blockquote>
          </div>
        </Grid>

        {/* Custom YouTube Card */}
        <Grid size={{md:3}} sx={{ width: 250, height: 350, padding: 2, boxShadow: 2, borderRadius: 2 }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              overflow: 'auto',  // Allow scrolling if the content is too large
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/SXGPaZvznWM?autoplay=1&origin=http://localhost"
              title="YouTube Shorts video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>

        {/* Custom Instagram Card */}
        <Grid size={{md:3}} sx={{ width: 250, height: 350, padding: 2, boxShadow: 2, borderRadius: 2 }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              overflow: 'auto',  // Allow scrolling if the content is too large
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
            }}
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DIxuDn8huxa/"
              data-instgrm-version="14"
              style={{ width: '100%', maxWidth: '250px', margin: '0 auto' }}
            ></blockquote>
          </div>
        </Grid>

        {/* Custom Facebook Card */}
        <Grid size={{md:3}} sx={{ width: 250, height: 350, padding: 2, boxShadow: 2, borderRadius: 2 }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              overflow: 'auto',  // Allow scrolling if the content is too large
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
            }}
          >
            <div
              className="fb-video"
              data-href="https://www.facebook.com/watch/?v=1921856991684261"
              data-width="250"
              data-show-text="false"
              style={{ margin: '2rem auto' }}
            ></div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ClientPage;
