import React, {useState, useEffect, useRef, useCallback} from 'react';
import './q6.css';
import Header from "../../header/header";
import Footer from "../../footer/footer";
import {Button, Col, Container, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import videoLink from '../../../assets/video/aurumq2.mp4';
import videoPoster from '../../../assets/video/q5-flash-video.png';
import image1 from '../../../assets/images/qpark/qp1.jpg';
import image2 from '../../../assets/images/qpark/qp2.jpg';
import image3 from '../../../assets/images/qpark/qp3.jpg';
import PropertyContactSection from "../../propert-contact-section/property-contact-section";


import icon1 from '../../../assets/images/icon/restaurant.svg'
import icon2 from '../../../assets/images/icon/terrec.svg';
import icon3 from '../../../assets/images/icon/lounge.svg';
import icon4 from '../../../assets/images/icon/library.svg';
import icon5 from '../../../assets/images/icon/office.svg';
import icon6 from '../../../assets/images/icon/dg.svg';
import icon7 from '../../../assets/images/icon/fitness.svg';
import icon8 from '../../../assets/images/icon/parking.svg';
import icon9 from '../../../assets/images/icon/security.svg';
import icon10 from '../../../assets/images/icon/tv.svg';
import icon11 from '../../../assets/images/icon/coffe.svg';
import icon12 from '../../../assets/images/icon/lift.svg';
import icon13 from '../../../assets/images/icon/spa.svg'


import ficon1 from '../../../assets/images/icon/stclr1.jpg';
import ficon2 from '../../../assets/images/icon/stclr8.jpg';
import ficon3 from '../../../assets/images/icon/stclr3.jpg';
import ficon4 from '../../../assets/images/icon/stclr4.jpg';
import ficon5 from '../../../assets/images/icon/stclr7.jpg';
import ficon6 from '../../../assets/images/icon/stclr9.jpg';

import grid1image1 from '../../../assets/images/inner-grid-q2.jpg';
import grid1image2 from '../../../assets/images/inner-grid-q5.jpg';
import grid1image3 from '../../../assets/images/inner-grid-q6.jpg';
import commingSoonImage from '../../../assets/images/commingsoon-q6.jpg';

function Q6(props) {
    const history =  useHistory()
    const redirectLink = (link) => {
        history.push(link)
    }
    // const [amenitiesList,setamenitiesList]= useState([
    //     {
    //         icon:icon1,
    //         title:'Food Courts'
    //     },
    //     {
    //         icon:icon11,
    //         title:'Visitor Cafe'
    //     },
    //     {
    //         icon:icon7,
    //         title:'Fitness Studio'
    //     },
    //     {
    //         icon:icon5,
    //         title:'Executive lounge'
    //     },
    //     {
    //         icon:icon13,
    //         title:'Massage and Spa'
    //     },
    //     {
    //         icon:icon12,
    //         title:'Elevator'
    //     }
    // ])


    // const [features,featureList] = useState([
    //     {
    //         icon:ficon1,
    //         title:'5 Minutes',
    //         subtitle:'to Station'
    //     },
    //     {
    //         icon:ficon2,
    //         title:'10 Minutes',
    //         subtitle:'to Hospital'
    //     },
    //     {
    //         icon:ficon3,
    //         title:'5 Minutes',
    //         subtitle:'to Mall/Market'
    //     },
    //     {
    //         icon:ficon4,
    //         title:'40 Minutes',
    //         subtitle:'to Airport'
    //     },
    //     {
    //         icon:ficon5,
    //         title:'5 Minutes',
    //         subtitle:'to Bank/ATMs'
    //     },
    //     {
    //         icon:ficon6,
    //         title:'15 Minutes',
    //         subtitle:'to Industrial Area'
    //     },
    // ])
    return (
        <div className='Q5Main'>
            <Header/>
            <div className='Q5MainInner'>
                <Container>
                    <Row>
                        <Col lg={12} xs={12} md={12} sm={12}>
                            <p className={'blink'}>
                                <a href={'#'}>Home</a>
                                /
                                <a href={'#'}>Commercial</a>
                                /
                                <a href={'#'}>Aurum MBP Q6</a>
                            </p>
                        </Col>

                    </Row>
                    <Row>
                        <Col lg={12} xs={12} md={12} sm={12}>
                            <h1 className={'title'}>Aurum MBP Q6</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} xs={12} md={12} sm={12}>
                            <img src={commingSoonImage} className={'commingSoongImage'}/>
                        </Col>
                    </Row>
                    {/*<Row className={'videoDiv'}>*/}
                    {/*    <Col lg={12} xs={12} md={12} sm={12}>*/}
                    {/*        <video controls poster={videoPoster}>*/}
                    {/*            <source src={videoLink} type="video/mp4"/>*/}
                    {/*        </video>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row>*/}
                    {/*    <Col lg={12} xs={12} md={12} sm={12}>*/}
                    {/*        <h1 className={'title'}>About Aurum Q Parć Q2</h1>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row className={'descriptionDiv'}>*/}
                    {/*    <Col lg={12} xs={12} md={12} sm={12}>*/}

                    {/*        <p className={'desctitle'}>Address</p>*/}
                    {/*        <p>Aurum Q Parć Q2 Thane Belapur Road, Ghansoli, Navi Mumbai - 400710. Maharashtra. India.</p>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row className={'descriptionDiv'}>*/}
                    {/*    <Col lg={12} xs={12} md={12} sm={12}>*/}
                    {/*        <p className={'desctitle'}>Description</p>*/}
                    {/*        <p>Aurum Q Parć Q2, a 3 million sq ft well-planned, state-of-the-art, sustainable, functional and energy efficient IT-ITeS Special Economic Zone that has the flexibility to meet the changing needs of businesses in future. It boasts of a high quality, premium contemporary building that conveys the strength and integrity of both, the non SEZ IT spaces and our business.</p>*/}
                    {/*        <br/>*/}
                    {/*        <p>ADesigned for future growth, the non SEZ IT spaces also has options for SoftwareTechnology Park and Built to Suit Spaces. Large flexible floor plates, sustainable design and a wealth of up market amenities are only a few features that distinguish the development as Navi Mumbai's new centre for commercial growth. It provides a good ecosystem for IT-ITeS companies.</p>*/}

                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row>*/}
                    {/*    <Col lg={12} xs={12} md={12} sm={12}>*/}
                    {/*        <h1 className={'title'}>Gallary</h1>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row className={'gallary'}>*/}
                    {/*    <Col lg={8} md={8} sm={12} xs={12}>*/}
                    {/*        <img src={image1} className={'img-fluid marginTop'}/>*/}
                    {/*    </Col>*/}
                    {/*    <Col lg={4}  md={4} sm={12}  xs={12}>*/}
                    {/*        <img src={image2} className={'img-fluid bottomTopImage marginTop'}/>*/}
                    {/*        <img src={image3} className={'img-fluid bottomImage marginTop' }/>*/}


                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Container>
                {/*<Container >*/}
                {/*    <Row>*/}
                {/*        <Col lg={12} xs={12} md={12} sm={12}>*/}
                {/*            <h1 className={'title Amenitiestitle '}>Amenities & Features</h1>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*    <Row className={'AmenitiesMain'}>*/}

                {/*        {*/}
                {/*            amenitiesList.map(({icon, title}) => {*/}
                {/*                return (*/}
                {/*                    <Col lg={2} md={2} xs={6} sm={6}>*/}
                {/*                        <div className={'Amenities'}>*/}
                {/*                            <img src={icon}/>*/}
                {/*                            <span className={'Amenitiestitle'}>{title}</span>*/}
                {/*                        </div>*/}
                {/*                    </Col>*/}
                {/*                )*/}
                {/*            })*/}
                {/*        }*/}

                {/*    </Row>*/}
                {/*    <Row>*/}
                {/*        <Col lg={12} xs={12} md={12} sm={12}>*/}
                {/*            <h1 className={'title Amenitiestitle nearbytitle'}>Nearby</h1>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}

                {/*    <Row className={'featuresListMain'}>*/}

                {/*        {*/}
                {/*            features.map(({icon, title, subtitle}) => {*/}
                {/*                return (*/}
                {/*                    <Col lg={2} md={2} xs={6} sm={6}>*/}
                {/*                        <div className={'features'}>*/}
                {/*                            <img src={icon}/>*/}
                {/*                            <h1>{title}</h1>*/}
                {/*                            <span>{subtitle}</span>*/}
                {/*                        </div>*/}
                {/*                    </Col>*/}
                {/*                )*/}
                {/*            })*/}
                {/*        }*/}
                {/*    </Row>*/}
                {/*</Container>*/}
                <Container>
                    <Row>
                       <Col lg={12} md={12} sm={12} xs={12}>
                            <h1 className={'title'}>Available Space</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} xs={12} md={12} sm={12}  xs={12} className={'availableSpace'}>
                            <Row>
                                <Col lg={8}  md={8} sm={12}  xs={12}>
                                    <span className={'title1'}><strong>Typical</strong></span>
                                    <Row>
                                        <Col lg={6}  md={6} sm={12}  xs={12} >
                                            <div className={'tfloorLayoutIconManDiv'}>
                                                <img src={icon1}/>
                                                <span className={'tfloorLayouticontitle'}>Food courts</span>
                                            </div>
                                        </Col>
                                        <Col lg={6}  md={6} sm={12}  xs={12} >
                                            <div className={'tfloorLayoutIconManDiv'}>
                                                <img src={icon11}/>
                                                <span className={'tfloorLayouticontitle'}>Visitor Cafe</span>
                                            </div>
                                        </Col>
                                        <Col lg={6}  md={6} sm={12}  xs={12} >
                                            <div className={'tfloorLayoutIconManDiv'}>
                                                <img src={icon12}/>
                                                <span className={'tfloorLayouticontitle'}>Elevator</span>
                                            </div>
                                        </Col>
                                        <Col lg={6}  md={6} sm={12}  xs={12} >
                                            <div className={'tfloorLayoutIconManDiv'}>
                                                <img src={icon7}/>
                                                <span className={'tfloorLayouticontitle'}>Fitness Studio</span>

                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4}  md={4} sm={12}  xs={12}>
                                    <div className={'typicalFloorinfo'}>
                                        <ul>
                                            <li><i className={'fa fa-check-circle iconsize'}></i> 24 X 7 Reception operation hours.</li>
                                            <li><i className={'fa fa-check-circle iconsize'}></i> 24 X 7 Security Surveillance</li>
                                            <li><i className={'fa fa-check-circle iconsize'}></i> 100% DG Back up for common area & lifts</li>
                                        </ul>
                                        <Button className={'btn viewFloorPlanBtn'}  onClick={()=>{ history.push('/detail/q6-floor-plan') }}>View Floor Plan</Button>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <PropertyContactSection/>
                </Container>

                <Container>
                    <Row>
                        <Col lg={12} md={12} xs={12} sm={12}>
                            <h4>You may also like</h4>
                        </Col>

                    </Row>
                    <Row className={'otherSites'}>
                        <Col lg={4} md={4} xs={12} sm={12}>
                            <div className={'othersiteboxmain'}>
                                <div className={'othersiteboxinner'}>
                                    <img src={grid1image1} className={'img-fluid'}/>
                                    <span className={'othersiteboxinfo'}>
                                        <h4>
                                            Aurum Q Parć Q2
                                        </h4>
                                        <Button className={'btn'}  onClick={()=>{redirectLink('/detail/q2') }}>View</Button>
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} xs={12} sm={12}>
                            <div className={'othersiteboxmain'}>
                                <div className={'othersiteboxinner'}>
                                    <img src={grid1image2} className={'img-fluid'}/>
                                    <span className={'othersiteboxinfo'}>
                                        <h4>
                                            Aurum MBP Q5
                                        </h4>
                                        <Button className={'btn'}  onClick={()=>{redirectLink('/detail/q5') }}>View</Button>
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} xs={12} sm={12}>
                            <div className={'othersiteboxmain'}>
                                <div className={'othersiteboxinner'}>
                                    <img src={grid1image3} className={'img-fluid'}/>
                                    <span className={'othersiteboxinfo'}>
                                        <h4>
                                          Aurum MBP Q6
                                        </h4>
                                        <Button className={'btn'}  onClick={()=>{redirectLink('/detail/q6') }}>View</Button>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Q6;

