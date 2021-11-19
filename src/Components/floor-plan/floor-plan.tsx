import React, {useState, useEffect, useRef, useCallback} from 'react';
import './floor-plan.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import carpetImg from '../../assets/images/icon/pt6.png';
import balconyImg from '../../assets/images/icon/pt5.png';
import serviceImg from '../../assets/images/icon/pt7.png';
import totalAreaImg from '../../assets/images/icon/totalArea.png';

import floorplancreative from '../../assets/images/floorplancreative.jpeg'
import ContactFormDialog from "../contact-form-dialog/contact-form-dialog";

function FloorPlanSection(props) {
    const {florPlanList} = props;
    const [openDialog,setDialog]=useState(false);
    const [florPlanInfo, setFloorPlanInfo] = useState(0);
    const [regitrationFlag,setRegistrationFlag] = useState(false);
    useEffect(()=>{
            const regitrationFlag = localStorage.getItem('registration');
            if(!regitrationFlag || regitrationFlag === null ){
                setRegistrationFlag(false)
            } else {
                setRegistrationFlag(true)
            }
    },[])
    const regitration = () => {
        localStorage.setItem('registration',true);
        setRegistrationFlag(true);
        window.location.reload();
    }
    return (
        <div className='FloorPlanSectionMain'>
            {openDialog && <ContactFormDialog closeDialog={setDialog} onsubmitevent={regitration}/>}
            <Container fluid>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h1 className={'floorplaintitle'}>Floor Plan</h1>
                    </Col>

                </Row>
                <Row>

                    <Col lg={1} md={1} sm={12} xs={12}>
                    </Col>
                    {
                        florPlanList.map(({btnTitle}, index) => {
                            return (
                                <Col lg={2} md={2} sm={6} xs={6}>
                                    <div className={'btnList'}>
                                        <button onClick={() => setFloorPlanInfo(index)}
                                                className={florPlanInfo === index ? 'active' : ''}>{btnTitle}</button>
                                    </div>
                                </Col>
                            )
                        })
                    }

                    <Col lg={1} md={1} sm={12} xs={12}>
                    </Col>

                </Row>

            </Container>
            <Container fluid>
                <Row>
                    <Col lg={1} md={1} xs={12} sm={12}></Col>
                    <Col lg={6} md={6} xs={12} sm={12}>
                        <div className={'flordesc'}>
                            { florPlanList[florPlanInfo].title && <strong className={'florPlantitle'}>{florPlanList[florPlanInfo].title}</strong>}

                            {/*{ florPlanList[florPlanInfo].totalArea && <strong>Total Area: {florPlanList[florPlanInfo].totalArea}</strong> }*/}
                            <ul>
                                {
                                    florPlanList[florPlanInfo].totalArea && (
                                        <li>
                                            <div className={'listDiv'}><img src={totalAreaImg}/><strong>
                                                {florPlanList[florPlanInfo].totalArea}</strong></div>
                                        </li>

                                    )
                                }

                                {
                                    florPlanList[florPlanInfo].carpetArea && (
                                        <li>
                                            <div className={'listDiv'}><img src={carpetImg}/><strong>Carpet
                                                Area {florPlanList[florPlanInfo].carpetArea}</strong></div>
                                        </li>

                                    )
                                }
                                {
                                    florPlanList[florPlanInfo].balconyArea && (
                                        <li>
                                            <div className={'listDiv'}><img src={balconyImg}/><strong>Balcony
                                                Area {florPlanList[florPlanInfo].balconyArea}</strong></div>
                                        </li>
                                    )
                                }
                                {
                                    florPlanList[florPlanInfo].serviceArea && (

                                        <li>
                                            <div className={'listDiv'}><img src={serviceImg}/><strong>Service
                                                Area {florPlanList[florPlanInfo].serviceArea}</strong></div>
                                        </li>

                                    )
                                }
                                {
                                    florPlanList[florPlanInfo].capboardArea && (
                                        <li>
                                            <div className={'listDiv'}><img src={totalAreaImg}/><strong>
                                                Cupboard Area
                                                {florPlanList[florPlanInfo].capboardArea}</strong></div>
                                        </li>

                                    )
                                }

                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={4} xs={12} sm={12}>
                        <div className={'imageContainer'}>
                            {
                                regitrationFlag ? (
                                    <img src={florPlanList[florPlanInfo].afterRegistraionFloorPlanImage} />

                                ) : (
                                    <img src={florPlanList[florPlanInfo].image} onClick={()=> setDialog(true)}/>

                                )
                            }
                        </div>
                    </Col>
                    <Col lg={1} md={1} xs={12} sm={12}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default FloorPlanSection;

