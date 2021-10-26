import React, {useEffect, useState} from 'react';
import './point-of-intrest.css'
import {Col, Container, Row} from "react-bootstrap";
import image1 from '../../assets/images/ghansoli/gsc2.jpg';
import image2 from "../../assets/images/chembur-grid-2.jpg";

export default function PointOfIntrestSection(props) {

    const {pointOfIntrest , detail , link } = props.pointOfIntrestData;

    return (

        <div  className={'pointIntrestMain'}>
           <Container>
               <Row>
               <Col lg={6} md={6} xs={12} sm={12}>
                    <div className={'pointIntrestList'}>
                        <Row>
                            <Col lg={12} md={12} xs={12} sm={12}>
                                <span className={'pointInfoTitle'}>
                                  Points of interest
                                </span>
                            </Col>
                        </Row>
                        {
                            pointOfIntrest.map(({title,desc},index)=>{
                                return (
                                    <Row className={'pointIntrestListInfo'}>
                                        <Col lg={2} md={2} xs={4} sm={4}>
                                            <div className={'index'}>
                                                <span> {index + 1}</span>
                                            </div>
                                        </Col>
                                        <Col lg={10} md={10} xs={8} sm={8}>
                                            <span className={'desctitle'}>
                                                {title}
                                            </span>
                                            <span className={'desc'}>{desc}</span>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                    </div>
               </Col>
               <Col lg={6} md={6} xs={12} sm={12}>
                    <Row>
                            <Col lg={12} md={12} xs={12} sm={12}>
                                <span className={'pointInfoTitle'}>
                                    {detail.title}
                                </span>
                            </Col>
                        <Col lg={12} md={12} xs={12} sm={12}>
                                <span className={'pointInfoDesc'}>
                                    {detail.desc}
                                </span>
                        </Col>
                        <Col lg={12} md={12} xs={12} sm={12}>
                            <div className={'pointInfoImage'}>
                               <img src={detail.image}/>
                            </div>
                        </Col>

                    </Row>
               </Col>
               </Row>
           </Container>
        </div>
    )
}
