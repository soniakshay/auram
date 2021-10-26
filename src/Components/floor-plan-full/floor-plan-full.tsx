import React, {useState, useEffect, useRef, useCallback} from 'react';
import './floor-plan-full.css';
import {Button, Col, Container, Row} from "react-bootstrap";
function FloorPlanFullSection(props) {
    const {florplanInfo}= props ;
    const [active,setActive] = useState(0);

    return (
        <div className='FloorPlanFullSectionMain'>
            <Container fluid>
                <Row>
                <>
                    {
                        florplanInfo.length > 1 && (
                            <>
                                {
                                    florplanInfo.map(({btntext},index)=>{
                                        return (
                                            <Col lg={2} md={2} sm={4} xs={4}>
                                                <Button className={'btn'} onClick={() => setActive(index)} >{btntext}</Button>
                                            </Col>

                                        )

                                    })}


                            </>
                        )
                    }
                </>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>

                        <img src={florplanInfo[active].image} className={'img-fluid'}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FloorPlanFullSection;

