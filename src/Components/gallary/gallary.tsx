import React, { useState, useEffect, useRef, useCallback } from 'react';
import './gallary.css';

import {Col, Container, Row} from "react-bootstrap";

function Gallary(props: any) {
    const { imagelist ,title } = props;
    return (
        <div className='GallaryMain'>
           <Container fluid>
               {title  &&

               <Row>
                   <Col lg={12} xs={12} sm={12} md={12}>
                       <h1 className={'title'}>Gallary</h1>
                   </Col>
               </Row>

               }

            <Row>
               {
                   imagelist.map((data)=>(
                    <>
                        <Col lg={data.col} md={data.col} sm={data.responsiveCol} xs={data.responsiveCol} className={'imageContain'}>
                            <img src={data.image}/>
                        </Col>
                    </>

                ))
               }

           </Row>
           </Container>
        </div>
    )
}

export default Gallary;

