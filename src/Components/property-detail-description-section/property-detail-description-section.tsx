import React, { useState, useEffect, useRef, useCallback } from 'react';
import './property-detail-description-section.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import logoImage from '../../assets/images/qislands/q-island-logo2.png';
import Banner from '../../assets/images/qislands/qisland-banner2.jpg';

function PropertyDetailDescriptionSection(props) {
    const {banner,logo, title,desc, buttonsList} =  props.propertyDetailDescriptionSection;
    return (
        <div className='PropertyDetailDescriptionSectionMain'>
            <div className='PropertyDetailDescriptionSectionInnerMain'>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12} >
                        <Row>
                            <div className='left'>
                                <Col lg={12} md={12} sm={12} xs={12} >
                                    <img src={logo}/>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12} >
                                    <h1>{title}</h1>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12} >
                                    <p>{desc}
                                    </p>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12} >
                                    <div className='buttonsMainDiv'>


                                                {
                                                    buttonsList.map(({btntext},index)=>{
                                                        return (
                                                            <Button className={ index === 0 ? 'active' : ''}>{btntext}</Button>
                                                        )
                                                    })

                                                }


                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} >
                        <Row>
                            <div className='right'>
                                <Col lg={12} md={12} sm={12} xs={12} >
                                    <img src={banner} onClick={()=> { props.openContacctDialog(true) }}/>
                                </Col>
                            </div>


                        </Row>
                    </Col>

                </Row>
            </div>

        </div>
    )
}

export default PropertyDetailDescriptionSection;

