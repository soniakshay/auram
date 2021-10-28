import React, {useState, useEffect, useRef, useCallback} from 'react';
import './communities.css'
import {Col, Container, Row} from "react-bootstrap";
import image1 from '../../assets/images/ghansoli/ghansoli-grid1.jpg';
import { useHistory } from "react-router-dom";

function Communities(props) {
    const history = useHistory();
    const {communitiesData, title, background, fluid = false} = props;
    const {heading,list} = communitiesData;
    const colSize = Math.floor(12 / list.length);


    return (
        <div className='CommunitiesMain'>
            <Container fluid={fluid}>
                <Row>


                    <Col lg={12} xs={12} sm={12} className={background ? 'imageDivWithBg' : 'imageDiv'}>
                        {title && (
                            <Row>
                                <Col lg={12} xs={12} sm={12}>
                                    <h1>{heading}</h1>
                                </Col>
                            </Row>

                        )}
                        <Row className={'imageContainer'}>
                            {
                                list.map(({style,data}) => {
                                    return (<>
                                            <Col lg={colSize} xs={12} sm={12} md={colSize}>
                                                <div className={'imageHover'} style={{height: style.height}}>
                                                    <img src={style.backgroundImage}/>
                                                    <div className='imageOverlay' style={{height:style.height}}>
                                                        <h4><a href='javascript:void(0)' onClick={()=> history.push(data.redirectLink) }>{data.title}</a></h4>
                                                    </div>
                                                </div>

                                            </Col>

                                        </>
                                    )
                                })
                            }


                        </Row>
                    </Col>


                </Row>


            </Container>
        </div>
    )
}

export default Communities;

