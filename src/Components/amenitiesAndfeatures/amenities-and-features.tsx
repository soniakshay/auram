import React, {useState, useEffect, useRef, useCallback} from 'react';
import './amenities-and-features.css'
import {Button, Col, Container, Row} from "react-bootstrap";



function AmenitiesAndFeaturesSection(props) {
    const {amenitiesFeatures} = props;
    const {title, amenitiesList, featuresList} = amenitiesFeatures;
    const colSize = Math.floor(12 / amenitiesList.length);
    const fcolSize = Math.floor(12 / featuresList.length);

    return (
        <div className='AmenitiesAndFeaturesSectionMain'>
            <Container fluid>
                <Row>
                    <Col lg={12} md={12} xs={12} sm={12}>
                        <h1 className={'title'}>{title}</h1>
                    </Col>
                </Row>
                <Row className={'AmenitiesMain'}>

                    {
                        amenitiesList.map(({icon, title, subtitle}) => {
                            return (
                                <Col lg={colSize} md={colSize} xs={6} sm={6}>
                                    <div className={'Amenities'}>
                                        <img src={icon}/>
                                        <span className={'title'}>{title}</span>
                                        {subtitle && <span className={'subtitle'}>{subtitle}</span>}
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>
                <Row className={'featuresListMain'}>

                    {
                        featuresList.map(({icon, title, subtitle}) => {
                            return (
                                <Col lg={fcolSize} md={fcolSize} xs={6} sm={6}>
                                    <div className={'features'}>
                                        <img src={icon}/>
                                        <h1>{title}</h1>
                                        <span>{subtitle}</span>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default AmenitiesAndFeaturesSection;

