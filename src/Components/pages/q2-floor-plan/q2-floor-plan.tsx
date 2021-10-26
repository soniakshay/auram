import React, {useState, useEffect, useRef, useCallback} from 'react';
import '../q5/q5.css';
import './q2-floor-plan.css';
import Header from "../../header/header";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../../footer/footer";
import FloorPlanFullSection from "../../floor-plan-full/floor-plan-full";
import image1 from '../../../assets/images/majesco/Ground-floor-Interior-Layou.jpg';
import image2 from '../../../assets/images/qpark/Q2typicalfloorplan-4-8-floo.jpg';
function Q2FloorPlan(props) {
    const [floorplaninfo,setfloorplaninfo] = useState([
        {
            btntext:'1Bhk',
            image:image1
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
                                <a href={'/detail/q2'}>Aurum Q2</a>
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

export default Q2FloorPlan;

