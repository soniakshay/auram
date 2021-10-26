import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './property-summary-info.css'
import icon1 from '../../assets/images/icon/pt1.png';
import icon2 from '../../assets/images/icon/t-6.png';
import icon3 from '../../assets/images/icon/pt3.png';
import icon4 from '../../assets/images/icon/pt4.png';

function PropertySummaryInfo(props) {
    return (
        <div className='PropertySummaryInfoMain'>
           <Container fluid>
               <Row>
                   <Col  lg={3} md={3} sm={6} xs={6}>
                    <div className='infoMan'>
                        <div className='image'>
                            <img src={icon1}/>
                        </div>
                        <div className='info'>
                            <p> <b>INR 1.10 cr</b> <br/> Starting Price</p>
                        </div>
                    </div>
                   </Col>

                   <Col  lg={3} md={3} sm={6} xs={6}>
                       <div className='infoMan'>
                           <div className='image'>
                               <img src={icon2}/>
                           </div>
                           <div className='info'>
                               <p> <b>505 sq.ft
                                   </b> <br/> Starting Area</p>
                           </div>
                       </div>
                   </Col>

                   <Col  lg={3} md={3} sm={6} xs={6}>
                       <div className='infoMan'>
                           <div className='image'>
                               <img src={icon3}/>
                           </div>
                           <div className='info'>
                               <p> <b>INR 1 Lac</b> <br/> Booking Amount</p>
                           </div>
                       </div>
                   </Col>

                   <Col  lg={3} md={3} sm={6} xs={6}>
                       <div className='infoMan'>
                           <div className='image'>
                               <img src={icon4}/>
                           </div>
                           <div className='info'>
                               <p> <b>Financed By</b> <br/> All Major Banks</p>
                           </div>
                       </div>
                   </Col>

               </Row>


           </Container>

        </div>
    )
}

export default PropertySummaryInfo;

