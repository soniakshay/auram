import React, {useState, useEffect, useRef, useCallback} from 'react';
import './property-contact-section.css';
import {Button, Col, Container, Row} from "react-bootstrap";


function PropertyContactSection(props) {

    return (
        <div className='PropertyContactSectionMain'>
            <Row>
                <Col lg={3} md={3} xs={12} sm={12}>

                </Col>
                <Col lg={3} md={3} xs={12} sm={12}>
                    <div className={'formsection'}>
                        <form>
                           <span>
                               Our Expert Will Help You Buy The Best Apartment
                           </span>
                            <input type={'text'} className={'inputfield'} placeholder={'Your name *'}/>
                            <input type={'text'} className={'inputfield'} placeholder={'Your e-mail *'}/>
                            <input type={'text'} className={'inputfield'} placeholder={'Phone number *'}/>
                            <Button clasName={'btn'}>Submit</Button>
                        </form>
                    </div>
                </Col>
                <Col lg={6} md={6} xs={12} sm={12}>
                    <div className={'contactInfo'}>
                        <Row>
                            <Col lg={12} md={12} xs={12} sm={12}>
                        <span className={'title'}>
                            Schedule a Visit
                        </span>
                            </Col>

                            <Col lg={12} md={12} xs={12} sm={12}>
                        <span className={'subtitle'}>
                            Connect with CREX team
                        </span>
                            </Col>
                            <Col lg={12} md={12} xs={12} sm={12}>
                                <div className={'contactInfoDesc'}>
                                        <a href="#">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>+91 7829955550</span>
                                        </a>
                                </div>

                            </Col>
                            <Col lg={12} md={12} xs={12} sm={12}>
                                <div className={'contactInfoDesc'}>
                                    <a href="#">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span> CX.TL@qparc.co.in</span>
                                    </a>
                                </div>

                            </Col>
                        </Row>


                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default PropertyContactSection;

