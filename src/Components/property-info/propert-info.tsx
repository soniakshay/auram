import React, { useState, useEffect, useRef, useCallback } from 'react';
import './property-info.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import ContactFormDialog from "../contact-form-dialog/contact-form-dialog";
import { useHistory } from "react-router-dom";

function PropertyInfo(props) {
    const history = useHistory();
    const  [open,setOpen] = useState(false);
    const {

        titleDesc,
        title,
        Beds,
        Tower,
        Area,
        Price,
        PossessionDate,
        SeeMoreLink,
        ViewMoreLink,
        ImageLink,
        isVideoLink,
        VideoLink,
        posterImage,
        ContactNo,
        Email,
        Seating,
        Floor,
        OverallArea,
        isViewMoreHide,
        ViewReraLink
    } = props.propertInfo;
    const closeDialog = () => {
        setOpen(false);
    }
    const redirectDetail = (link) => {
        history.push(link);
    }
    const redirectViewRera = (link) => {
        window.open(link);
    }
    const redirectToCall = (contactNo) => {
        window.location.href = "tel:" + contactNo;
    }
    const redirectToEmail = (email) => {
        window.location.href = "mailto:" + email;
    }
    return (
        <div className='PropertInfo'>
            {open &&    <ContactFormDialog closeDialog={()=> closeDialog()}/> }


                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <Row>
                            <Col lg={6} md={6} sm={12} xs={12} className={'left'}>
                                {/**/}
                                {isVideoLink ? (
                                    <video  controls poster={posterImage}>
                                        <source src={VideoLink} type="video/mp4"/>
                                    </video>
                                ): (<img src={ImageLink} onClick={() => redirectDetail(SeeMoreLink)}/>)}
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <Row>
                                    <Col lg={12} md={12} sm={12}>
                                        <h4 className={'titledesc'}><i className="fa fa-map-marker"></i>{titleDesc}</h4>
                                        <h1 className={'title'}><a href='javascript:void(0)' onClick={()=>{redirectDetail(SeeMoreLink)}}>{title}</a></h1>

                                    </Col>

                                </Row>


                                {Beds &&

                                <Row>
                                    <Col  lg={5} md={5}  sm={6} xs={6}  className={'latterSpace'}>
                                        <i className="fa fa-bed "></i> Beds
                                    </Col>
                                    <Col  lg={7} md={7}  sm={6} xs={6}>
                                        {Beds}
                                    </Col>
                                </Row>
                                }

                                {
                                    Tower &&
                                    <Row>
                                        <Col lg={5} md={5}  sm={6} xs={6}  className={'latterSpace'}>
                                            <i className="fa fa-home"></i> Tower
                                        </Col>
                                        <Col lg={7} md={7}  sm={6} xs={6} className={'latterSpace'}>
                                            {Tower}
                                        </Col>
                                    </Row>
                                }

                                {
                                    Area &&
                                    <Row>
                                        <Col lg={5} md={5}  sm={6} xs={6}  className={'latterSpace'}>
                                            <i className="fa fa-area-chart"></i>  Area
                                        </Col>
                                        <Col lg={7} md={7}  sm={6} xs={6} className={'latterSpace'}>
                                            {Area}
                                        </Col>
                                    </Row>
                                }
                                {
                                    Price &&
                                    <Row>
                                        <Col lg={5} md={5}  sm={6} xs={6} className={'latterSpace'}>
                                            <i className="fa fa-money"></i> Price
                                        </Col>
                                        <Col lg={7} md={7}  sm={6} xs={6} className={'latterSpace'}>
                                            {Price}
                                        </Col>
                                    </Row>
                                }
                                {
                                    Seating &&
                                    <Row>
                                        <Col lg={5} md={5}  sm={6} xs={6} className={'latterSpace'}>
                                            <i className="fa fa-bed"></i> Seatings
                                        </Col>
                                        <Col lg={7} md={7}  sm={6} xs={6} className={'latterSpace'}>
                                            {Seating}
                                        </Col>
                                    </Row>
                                }
                                {
                                    Floor &&
                                    <Row>
                                        <Col lg={5} md={5}  sm={6} xs={6} className={'latterSpace'}>
                                            <i className="fa fa-home"></i> Floor
                                        </Col>
                                        <Col  lg={7} md={7}  sm={6} xs={6} className={'latterSpace'}>
                                            {Floor}
                                        </Col>
                                    </Row>
                                }

                                {
                                    OverallArea &&
                                    <Row>
                                        <Col lg={5} md={5}  sm={6} xs={6} className={'latterSpace'}>
                                            <i className="fa fa-area-chart"></i> Overall Area
                                        </Col>
                                        <Col  lg={7} md={7}  sm={6} xs={6} className={'latterSpace'}>
                                            {OverallArea}
                                        </Col>
                                    </Row>
                                }




                                <Row>
                                    <Col lg={5} md={5}  sm={6} xs={6}>
                                        <i className="fa fa-building"></i> Floor Plan
                                    </Col>
                                    <Col  lg={7} md={7}  sm={6} xs={6}>
                                        <strong onClick={()=>{setOpen(true)}}>View</strong>
                                    </Col>
                                </Row>
                                {
                                    PossessionDate &&
                                    <Row>
                                        <Col lg={5} md={5}  sm={6} xs={6} className={'latterSpace'}>
                                            <i className="fa fa-calendar"></i>  Possession Date
                                        </Col>
                                        <Col lg={7} md={7}  sm={6} xs={6} className={'latterSpace'}>
                                            {PossessionDate}
                                        </Col>
                                    </Row>
                                }

                                <Row className={'buttonList'}>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Button onClick={() => redirectDetail(SeeMoreLink)} className={'btn'}>See More</Button>
                                        {!isViewMoreHide && <Button className={'btn marginLeft'} onClick={()=>{redirectViewRera(ViewReraLink)}}>View Rera</Button>}
                                        <Button className={'btn marginLeft'} onClick={()=>{redirectToCall(ContactNo)}}><i className="fa fa-phone fa-20x"></i></Button>
                                        <Button className={'btn marginLeft'}  onClick={()=>{redirectToEmail(Email)}}><i className="fa fa-envelope fa-20x"></i></Button>
                                        <Button className={'btn marginLeft'} onClick={()=> setOpen(true)}><i className="fa fa-comments-o fa-20x"></i></Button>

                                    </Col>

                                </Row>


                            </Col>
                        </Row>
                    </Col>
                </Row>
        </div>
    )
}

export default PropertyInfo;

