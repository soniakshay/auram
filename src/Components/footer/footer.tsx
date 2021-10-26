import React, { useState, useEffect, useRef, useCallback } from 'react';
import './footer.css'
import {Col, Container, Row} from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import facebookIcon from '../../assets/images/facebook-icon.png';
import instaIcon from '../../assets/images/instagram-icon.png';
import linkedinIcon from '../../assets/images/linkedin-icon.png';
function Footer() {

    const redirectLink = (link) => {
        window.open(link);
    }

    return (
        <div className='FooterMain'>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <h2> It's Time to Discover</h2>
                    </Col>
                </Row>
                <Row >
                    <div className={'menuItems'}>
                    <Col lg={3} md={12} sm={12} className={'menuItem'}>
                    <ScrollAnimation animateIn="fadeInUp">
                      <h4>About Us</h4>
                        <ul>
                            <li><a href="#"> - Aurum PropTech</a></li>
                            <li><a href="#"> - Aurum PropTech</a></li>
                        </ul>
                    </ScrollAnimation>
                    </Col>
                    <Col lg={3} md={12} sm={12} className={'menuItem'}>
                        <ScrollAnimation animateIn="fadeInUp">

                        <h4>Latest Launch</h4>
                        <ul>
                            <li><a href="#"> - Aurum Qisland</a></li>
                            <li><a href="#"> - Swiss Boulevard   </a></li>
                            <li><a href="#"> - Paramount</a></li>
                        </ul>
                        </ScrollAnimation>
                    </Col>
                    <Col lg={3} md={12} sm={12} className={'menuItem'}>
                        <ScrollAnimation animateIn="fadeInUp">

                        <h4>Our Solutions</h4>
                        <ul>
                            <li><a href="#"> - Sell.do</a></li>
                            <li><a href="#"> - Kylas </a></li>
                            <li><a href="#"> - CREX </a></li>
                        </ul>
                        </ScrollAnimation>
                    </Col>
                    <Col lg={3} md={12} sm={12} className={'menuItem'}>
                        <ScrollAnimation animateIn="fadeInUp">

                        <h4>Contact Us</h4>
                        <span className={'addre'}>
                            Aurum Q Parć , Thane Belapur Road,
Ghansoli, Navi Mumbai, 400710
                        </span>
                        </ScrollAnimation>
                    </Col>
                    </div>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <span className={'copyrighttSpanMain'}>
                              <span className={'yellow'}>Copyright © 2021 Aurum Proptech</span>
                             <span> | All Rights Reserved | </span>
                             <a href={'/privacy-policy'}  className={'yellow'}>Privacy Ploicy</a>
                               <span> | </span>
                             <a href={'/terms-of-use'}  className={'yellow'}>Terms Of Use</a>
                        </span>
                        <span className={'mediaIcon'}>
                            <ul>
                                <li> <button onClick={() => redirectLink('https://www.facebook.com/AurumPropTech/')} ><img src={facebookIcon} /></button></li>
                                <li> <button  onClick={() => redirectLink('https://www.linkedin.com/company/71413509/admin/')}><img src={linkedinIcon} /></button></li>
                                <li> <button  onClick={() => redirectLink(' https://www.instagram.com/aurumproptech/')}><img src={instaIcon} /></button></li>

                            </ul>
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;

