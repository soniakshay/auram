import React, { useState, useEffect, useRef, useCallback } from 'react';
import './video-presentation-section.css';
import {Button, Col, Container, Row} from "react-bootstrap";

function VideoPresntationSection(props) {
    const {title,subtitle,link,isVideoLink} = props.videoprasentationdata;
    return (
        <div className={'VideoPresntationSectionMain'}>
            <div className={'VideoPresntationSectionMainInner'}>
            <Row>

                <Col lg={6} md={6} xs={12} sm={12}>
                    <div className={'iframe'}>
                        {
                            isVideoLink ? (
                                <video  controls>
                                    <source src={link} type="video/mp4"/>
                                </video>
                            ) :  (

                                <iframe width="100%" height="300" src={link}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen=""></iframe>

                            )
                        }
                    </div>
                </Col>
                <Col lg={6} md={6} xs={12} sm={12}>
                    <div className={'videotitle'}>
                        <Row>
                            <Col lg={12} md={12} xs={12} sm={12}>
                                <h1 className={'yellow'}>

                                    {title}</h1>
                            </Col>
                            <Col lg={12} md={12} xs={12} sm={12}>
                                <h1 className={'white'}>
                                    {subtitle}
                                </h1>
                            </Col>
                        </Row>


                    </div>
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default VideoPresntationSection;

