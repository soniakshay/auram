import React, { useState, useEffect, useRef, useCallback } from 'react';
import './contact-form-dialog.css'
import {Button, Col, Container, Row} from "react-bootstrap";


function ContactFormDialog(props) {
    const {closeDialog,onsubmitevent} = props;
    return (
        <div className='ContactFormDialog'>
            <Container>
                <Row>
                    <Col lg={3} md={0} xs={0}>

                    </Col>
                    <Col lg={6} md={12} xs={12} className={'formWrapper'} >
                        <div className={'formdiv'}>
                            <Row >
                            <Col lg={11} md={11} xs={11} sm={11}>
                                <span className={'title'}>ENTER DETAILS TO
"ACCESS" THIS "SECTION"</span>
                            </Col>
                            <Col lg={1} md={1} xs={1} sm={1}>
                                <Button className={'cancelBtn'} onClick={()=> closeDialog()}>X</Button>
                            </Col>
                        </Row>
                             <Row>
                            <Col lg={12} md={12} xs={12}>
                                <input type={'text'} className={'inputField'} placeholder={'Your Name'}/>
                                <input type={'text'} className={'inputField'} placeholder={'Your Email'}/>
                                <input type={'text'} className={'inputField'} placeholder={'Phone Number'}/>
                                <Button className={'btn'} onClick={() => {
                                    onsubmitevent();
                                    closeDialog();

                                }}>SUBMIT</Button>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col lg={3} md={0} xs={0}>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactFormDialog;

