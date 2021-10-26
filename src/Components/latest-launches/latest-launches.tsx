import React, { useState, useEffect, useRef, useCallback } from 'react';
import './latest-launches.css'
import {Button, Col, Container, Row} from "react-bootstrap";
import swisGridImage from '../../assets/images/swiss-grid-home.png';
import paraMountGridImage from '../../assets/images/paramount-grid-home.png';
import { useHistory } from "react-router-dom";
function LatestLaunches() {
    const history = useHistory();
    const [isSticky, setIsSticky] = useState(false);
    const tableRef = useRef(null);
    return (
        <div className='latestLunchesMain'>
            <Container>
                <Row>
                    <Col lg={5} md={12} xs={12}>
                        <div className={'leftSidelastLunnch'}>
                            <Row>
                                <Col  lg={12} md={12} xs={12}> <span className={'propertyText'}>Properties</span></Col>
                                <Col  lg={12} md={12} xs={12}> <h1>Latest Launches</h1></Col>
                                <Col  lg={10} md={12} xs={12}> <span className={'desc'}>Our properties each have their own unique design aesthetic, providing an aspirational lifestyle within a thriving community.</span></Col>
                                <Col  lg={10} md={12} xs={12}><Button className={'btn'} onClick={()=> history.push('/detail') }>VIEW All PROPERTIES</Button></Col>

                            </Row>


                        </div>
                    </Col>
                    <Col lg={7} md={12} xs={12} className={'rightSidelastLunnch'}>

                        <Row>
                            <Col  lg={6} md={12} xs={12} className={'section'} >
                               <div onClick={()=> { history.push('/detail/swiss-boulevard-postal-colony')}} >
                                <img src={swisGridImage} />
                                <span>Swiss Boulevard</span>
                                <span>RERA - P51700000636</span>
                               </div>
                            </Col>
                            <Col  lg={6} md={12} xs={12} className={'section'}>
                                <div onClick={()=> { history.push('/detail/paramount')}} >
                                <img src={paraMountGridImage} />
                                <span>Paramount</span>
                                <span>RERA - P51700021343</span>
                                </div>

                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LatestLaunches;

