import React, {useState, useEffect, useRef, useCallback} from 'react';
import './full-page-gallary.css';
import Header from "../../header/header";
import Footer from "../../footer/footer";
import {Button, Col, Container, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import image1 from "../../../assets/images/qpark/qp11.jpg";
import image2 from "../../../assets/images/qpark/qp12.jpg";
import image4 from "../../../assets/images/qpark/qp4.jpg";
import image5 from "../../../assets/images/qpark/qp5.jpg";
import image6 from "../../../assets/images/qpark/qp6.jpg";
import image7 from "../../../assets/images/qpark/qp7.jpg";
import image8 from "../../../assets/images/qpark/qp8.jpg";
import image9 from "../../../assets/images/qpark/qp9.jpg";
import image10 from "../../../assets/images/qpark/qp10.jpg";


import image11 from '../../../assets/images/majesco/majesco8.jpg';
import image12 from '../../../assets/images/majesco/majesco9.jpg';
import image13 from '../../../assets/images/majesco/Majesco4.jpg';
import image14 from '../../../assets/images/majesco/Majesc5.jpg';
import image15 from '../../../assets/images/majesco/Majesco6.jpg';
import image16 from '../../../assets/images/majesco/Majesco3.jpg';
import image17 from '../../../assets/images/majesco/Majesco2.jpg';
import image18 from '../../../assets/images/majesco/Majesco7.jpg';
import image19 from '../../../assets/images/majesco/Majesco.jpg';
import Gallary from "../../gallary/gallary";
import {useLocation} from "react-router-dom";

function FullPageGallary(props) {
    const search = useLocation().search;
    const page = new URLSearchParams(search).get('page');
    const [q2GallaryDetail,setq2GallaryDetail] = useState({
        title:'Aurum Q Parć Q2',
        images: [
            {
                image:image1,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image2,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image4,
                col:12,
                responsiveCol: 12
            } ,
            {
                image:image5,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image6,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image7,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image8,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image9,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image10,
                col:6,
                responsiveCol: 12
            }
        ]
    })
    const [q5GallaryDetail,setq5GallaryDetail] = useState({
        title:'Aurum MBP Q5',
        images: [
            {
                image:image11,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image12,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image13,
                col:12,
                responsiveCol: 12
            } ,
            {
                image:image14,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image15,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image16,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image17,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image18,
                col:6,
                responsiveCol: 12
            } ,
            {
                image:image19,
                col:6,
                responsiveCol: 12
            }
        ]
    })
    const [gallaryDetail,setGallaryDetail] = useState(page === 'q2' ? q2GallaryDetail : q5GallaryDetail);
    return (
        <>
        <div className='fullPageGallayMain'>
            <Header/>
            <div className='Q5MainInner'>
                <Container fluid>
                    <Row>
                        <Col lg={12} xs={12} md={12} sm={12}>
                            <p className={'blink'}>
                                <a href={'#'}>Home</a>
                                /
                                <a href={'#'}>Commercial</a>
                                /
                                <a href={'#'}>{gallaryDetail.title}</a>
                            </p>
                        </Col>

                    </Row>
                    <Row>
                        <Col lg={12} xs={12} md={12} sm={12}>
                            <h1 className={'title1'}>{gallaryDetail.title}</h1>
                        </Col>
                    </Row>
                    <Row className={'fullPageGallayList'}>
                        <Col lg={12} xs={12} md={12} sm={12}>
                            <Gallary imagelist={gallaryDetail.images} title />
                        </Col>

                    </Row>
                </Container>

            </div>
            <Footer/>
        </div>
        </>
    )
}

export default FullPageGallary;

