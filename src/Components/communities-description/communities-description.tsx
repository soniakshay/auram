import React, {useState, useEffect, useRef, useCallback} from 'react';
import './communities-description.css'
import {Col, Container, Row} from "react-bootstrap";
import image1 from '../../assets/images/ghansoli/gsc1.jpg';
import banner from '../../assets/images/chembur/c5.jpg';

function CommunitiesDescription(props) {

    const {type, title, imageLink, desc} = props.communitiesDescriptionData;

    return (
        <div className='CommunitiesDescriptionMain'>
            <Container>
                {
                    type === 'left' && (
                        <div className={'left'}>
                            <Row>
                                <Col lg={7} md={7} xs={12} sm={12}>
                                    <div className={"imageBlock"}>
                                        <img src={imageLink}/>
                                    </div>
                                </Col>
                                <Col lg={5} md={5} xs={12} sm={12}>
                                    <div className={"descriptionBlock"}>
                                        <div className={'descriptionblockinner'}>
                                            <h1 className={'title'}>{title}</h1>
                                            {
                                                desc.map((text) => {
                                                    return (<p>{text}</p>);
                                                })
                                            }
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )
                }
                {
                    type === 'right' && (
                        <div className={'right'}>
                            <Row>

                                <Col lg={5} md={5} xs={12} sm={12}>
                                    <div className={"descriptionBlock"}>
                                        <div className={'descriptionblockinner'}>
                                            <h1 className={'title'}>{title}</h1>
                                            {
                                                desc.map((text) => {
                                                    return (<p>{text}</p>);
                                                })
                                            }

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={7} md={7} xs={12} sm={12}>
                                    <div className={"imageBlock"}>
                                        <img src={imageLink}/>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    )
                }
                {
                    type === 'full' && (
                        <div className={'full'}>
                            <Container>
                                <Col lg={12} sm={12} md={12} xs={12}>
                                    <div className={'imageBlock'}>
                                        <img src={imageLink}/>
                                    </div>
                                </Col>
                                <Col lg={12} sm={12} md={12} xs={12}>
                                    <div className={'descriptionBlock'}>
                                        <h1 className={'title'}>
                                            {title}
                                        </h1>
                                        {
                                            desc.map((text) => {
                                                return (<p>{text}</p>);
                                            })
                                        }
                                    </div>
                                </Col>
                            </Container>

                        </div>

                    )
                }


            </Container>
        </div>
    )
}

export default CommunitiesDescription;

