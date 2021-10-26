import React, { useState, useEffect, useRef, useCallback } from 'react';
import './detail-banner.css';



function DetailBanner(props) {
    const {banner,logo} =  props;
    return (
        <div className='bannerMain'>
            <div className='banner' style={{
                backgroundImage:`url(${banner})`
            }}>

                {logo &&<img src={logo}/>}

            </div>
        </div>
    )
}

export default DetailBanner;

