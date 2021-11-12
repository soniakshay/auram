import React, {useState, useEffect, useRef, useCallback} from 'react';
import './communities-detail.css';
import Header from "../../header/header";
import Footer from "../../footer/footer";
import CommunitiesDescription from "../../communities-description/communities-description";


function CommunitiesDetailMain(props) {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    return (
        <div className='CommunitiesDetailMain'>
            <Header/>
                <CommunitiesDescription/>

            <Footer/>
        </div>
    )
}

export default CommunitiesDetailMain;

