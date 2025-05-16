"use client";
import { useEffect } from 'react';
declare global {
    interface Window {
        adsbygoogle: any[];
    }
}


const AdComponent = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error', e);
        }
    }, []);

    return (
        <>


            <ins className="adsbygoogle"
                style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    backgroundColor:'#f0f2f5',
                  
                    borderRadius: '10px',
                    textAlign: 'center',
                    padding: '2rem 0', 
                   
                    fontSize: '14px',
                }}
                data-ad-client="ca-pub-XXXXXXXXXXXX"
                data-ad-slot="1234567890"
                data-ad-format="auto"
                data-full-width-responsive="true"
            >
                Dummy Ad Placeholder
            </ins>



        </>
    );

};

export default AdComponent;
