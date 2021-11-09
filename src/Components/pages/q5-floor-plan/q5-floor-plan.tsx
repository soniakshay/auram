import React, {useState, useEffect, useRef, useCallback} from 'react';
import '../q5/q5.css';
import './q5-floor-plan.css';
import Header from "../../header/header";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../../footer/footer";
import FloorPlanFullSection from "../../floor-plan-full/floor-plan-full";
import image1 from '../../../assets/images/majesco/Ground-floor-Interior-Layou.jpg';
import image2 from '../../../assets/images/majesco/2nd-floor-Interior-Layout-1.jpg';
import image3 from '../../../assets/images/majesco/3rd-floor-Interior-Layout-1.jpg';
import image4 from '../../../assets/images/majesco/5th-floor-Interior-Layout-1.jpg';
function Q5FloorPlan(props) {
    const [floorplaninfo,setfloorplaninfo] = useState([
        {
            btntext:' 2nd Floor Interior Layout ',
            image:image1
        },
        {
            btntext:'3rd Floor Interior Layout  ',
            image:image2
        },
        {
            btntext:'4th Floor Interior Layout',
            image:image3
        },
        {
            btntext:'5th Floor Interior Layout',
            image:image4
        }
    ])

    return (
        <div className='Q5Main'>
            <Header/>
            <div className='Q5MainInner'>
                <Container  fluid>
                    <Row>
                        <Col lg={12} xs={12} md={12} sm={12}>
                            <p className={'blink'}>
                                <a href={'#'}>Home</a>
                                /
                                <a href={'#'}>Commercial</a>
                                /
                                <a href={'/detail/q5'}>Aurum Q5</a>
                                /
                                <a href={'#'}>Floor Plan</a>
                            </p>
                        </Col>

                    </Row>
                    <Row>
                        <Col lg={12} xs={12} md={12} sm={12}  className={'floorPlanHeading'}>
                            <h1 className={'title'}>Floor Plan</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} xs={12} md={12} sm={12}  >
                            <h1 className={'title'}>Typical Floor Layout</h1>
                        </Col>
                    </Row>
                    <Row>
                        <FloorPlanFullSection florplanInfo={floorplaninfo} />
                    </Row>

                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Q5FloorPlan;

