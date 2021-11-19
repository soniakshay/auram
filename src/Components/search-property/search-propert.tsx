import React, {useState, useEffect, useRef, useCallback} from 'react';
import './search-property.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import ScrollAnimation from 'react-animate-on-scroll';
import $ from "jquery";
import { useHistory } from "react-router-dom";


function SaerchPropery() {
    const history = useHistory();
    useEffect(() => {
        $("#ptype").click(() => {
            $('#ptypeList').slideToggle();
            $('#companyList').slideUp();
        });
        $("#company").click(() => {
            $('#companyList').slideToggle();
            $('#ptypeList').slideUp();
        });
    }, []);
    return (
        <div className='SearchProperyMain'>
            <Container>
                <Row>
                    <Col lg={1} md={0} xs={0}></Col>
                    <Col lg={10} md={10} sm={12} xs={12}>

                        <Row>
                            <Col lg={4} md={12} xs={12} className={'section'}>
                                <div>
                                    <div id={'ptype'} className={'ptype'}>
                                        <div className={'typeInnerDiv'}>
                                            <div>
                                             <span className={'ptypetitle'}>Property Type</span>
                                             <span className={'ptypedesc'}>Any
                                             </span>
                                            </div>
                                             <div className={'iconcontainer'}>
                                                <i className={'fa fa-angle-down'}/>
                                            </div>
                                        </div>

                                    </div>
                                    <div id={'ptypeList'}>
                                         <Form.Check type="checkbox" label="Home"/>
                                          <Form.Check type="checkbox" label="Office"/>
                                  </div>

                                </div>
                            </Col>
                            <Col lg={4} md={12} xs={12} className={'section'}>
                                <div>
                                    <div id={'company'} className={'ptype'}>


                                        <div className={'typeInnerDiv'}>
                                            <div>
                                                <span className={'ptypetitle'}>COMMUNITY</span>
                                                <span className={'ptypedesc'}>ANY COMMUNITIES</span>
                                            </div>
                                            <div className={'iconcontainer'}>
                                                <i className={'fa fa-angle-down'}/>
                                            </div>
                                        </div>

                                    </div>
                                    <div id={'companyList'}>
                                        <Form.Check type="checkbox" label="GHANSOLI SPORT CITY"/>
                                        <Form.Check type="checkbox" label="CHEMBUR CITY CENTRE"/>
                                        <Form.Check type="checkbox" label=" SHILPHATA CITY JUNCTION"/>
                                        <span><i className={'fa fa-bullhorn  fa-20x'}/> <span className={'darktext'}>VASHI UP TOWN</span>  <span className={'lightext'}> (Coming Soon)</span></span>
                                        <span><i className={'fa fa-bullhorn  fa-20x'}/><span className={'darktext'}>BELAPUR BUSINESS BAY</span>  <span className={'lightext'}> (Coming Soon)</span></span>
                                        <span><i className={'fa fa-bullhorn  fa-20x'}/><span className={'darktext'}> KHARGHAR ROLLING GREENS</span>  <span className={'lightext'}> (Coming Soon)</span></span>
                                        <span><i className={'fa fa-bullhorn  fa-20x'}/><span className={'darktext'}>PALM BEACH FLAMINGO HAVEN</span>  <span className={'lightext'}> (Coming Soon)</span></span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={12} xs={12} className={'section'}>
                                <Button className={'btn'} onClick={()=> history.push('/detail')}> SEARCH PROPERTIES </Button>
                            </Col>

                        </Row>

                    </Col>
                    <Col lg={1} md={0} xs={0}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default SaerchPropery;

