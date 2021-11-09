import React, {useState, useEffect, useRef, useCallback} from 'react';
import './buy-sell-property-section.css'
import {Col, Container, Row} from "react-bootstrap";
import icon1 from '../../assets/images/icon/ic1.jpg';
import icon2 from '../../assets/images/icon/ic2.jpg';
import icon3 from '../../assets/images/icon/ic3.jpg';

function BuySellProductSection() {

    return (
        <div className='BuySellProductMain'>

            <Container>
                <Row>


                    <Col lg={12} xs={12} sm={12} md={12}>
                        <Row>
                            <Col lg={3} xs={12} sm={12}>
                                <div className={'buysellDesc'}>
                                    <Row>
                                        <Col lg={12} md={12} xs={12}><h1>Buy and Sell Your
                                            Property With Us</h1></Col>
                                        <Col lg={12} md={12} xs={12}> <span className={'desctitle'}>Three reasons why we are the best
partner for you.</span></Col>
                                    </Row>
                                </div>

                            </Col>
                            <Col lg={3} xs={12} sm={12}>
                                <div className={'box'}>
                                    <img src={icon1}/>
                                    <h4 className={'boxTitle'}>Our Network </h4>
                                    <span className={'desc'}>
                                        Aurum PropTech has a unique network of Grade-A properties across all communities. These handpicked residential and commercial properties have the best specifications among their peers.
                                    </span>
                                </div>
                            </Col>
                            <Col lg={3} xs={12} sm={12}>
                                <div className={'box'}>
                                    <img src={icon2}/>
                                    <h4 className={'boxTitle'}>Our Network </h4>
                                    <span className={'desc'}>
                                        Aurum PropTech has a unique network of Grade-A properties across all communities. These handpicked residential and commercial properties have the best specifications among their peers.
                                    </span>
                                </div>
                            </Col>
                            <Col lg={3} xs={12} sm={12}>
                                <div className={'box'}>
                                    <img src={icon3}/>
                                    <h4 className={'boxTitle'}>Our Network </h4>
                                    <span className={'desc'}>
                                        Aurum PropTech has a unique network of Grade-A properties across all communities. These handpicked residential and commercial properties have the best specifications among their peers.
                                    </span>
                                </div>
                            </Col>

                        </Row>


                    </Col>


                </Row>


            </Container>
        </div>
    )
}

export default BuySellProductSection;

