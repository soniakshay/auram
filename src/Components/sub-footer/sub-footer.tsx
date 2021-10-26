import React, { useState, useEffect, useRef, useCallback } from 'react';
import './sub-footer.css'
import {Col, Container, Row} from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

function SubFooter() {
    return (
        <div className='subFooterMain'>
            <Container fluid>
                <Row>
                    <Col lg={12} md={12} sm={12} className={'title'}>
                        <ScrollAnimation animateIn="fadeInUp">
                            <h2>To Buy and Sell Properties</h2>
                        </ScrollAnimation>

                    </Col>
                    <Col lg={12} md={12} sm={12} className={'title'}>
                        <ScrollAnimation animateIn="fadeInUp">
                        <span>Please Connect to Our CREX Team</span>
                            <a href={'tel:+917829955550'}><i className={'fa fa-phone fa-2x bannericon'}/></a>
                            <a href={'mailto:communities@aurumproptech.com'}><i className={'fa fa-envelope fa-2x bannericon'}/></a>
                        </ScrollAnimation>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default SubFooter;

