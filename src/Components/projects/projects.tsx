import React, { useState, useEffect, useRef, useCallback } from 'react';
import './projects.css'
import {Button, Col, Container, Row} from "react-bootstrap";
import image1 from '../../assets/images/f1.jpeg'
import image2 from '../../assets/images/f2.jpeg';
import image3 from '../../assets/images/f3.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

function Projects() {

    const [sections,setSections] = useState([
        {
            image: image1,
            title:'Explore Our Interactive Map',
            desc:'A smart, interactive homes across India.',
            btnText: 'Try Now',
            isNewTab: true,
            link:'https://www.google.com/maps/place/Aurum+Q+Residences/@19.1204901,73.0068706,17z/data=!4m12!1m6!3m5!1s0x3be7c0c429a42e41:0x50f21f0b45c5e285!2sAurum+PropTech!8m2!3d19.1204007!4d73.0090994!3m4!1s0x3be7c0c75c8d87ed:0x226a7433aef7f55f!8m2!3d19.1200955!4d73.0097618'
        },
        {
            image: image2,
            title:'Try Our Virtual Tours',
            desc:'Tour our homes with our interactive 3D walk-throughs.',
            btnText: 'Try Now',
            isNewTab: false,
            link:'https://www.google.com/maps/place/Aurum+Q+Residences/@19.1204901,73.0068706,17z/data=!4m12!1m6!3m5!1s0x3be7c0c429a42e41:0x50f21f0b45c5e285!2sAurum+PropTech!8m2!3d19.1204007!4d73.0090994!3m4!1s0x3be7c0c75c8d87ed:0x226a7433aef7f55f!8m2!3d19.1200955!4d73.0097618'
        },
        {
            image: image3,
            title: 'Discover Our Blogs',
            desc:'Share your thoughts on Real Estate.',
            btnText: 'COMING SOON ',
            isNewTab: false,
            link:'https://www.google.com/maps/place/Aurum+Q+Residences/@19.1204901,73.0068706,17z/data=!4m12!1m6!3m5!1s0x3be7c0c429a42e41:0x50f21f0b45c5e285!2sAurum+PropTech!8m2!3d19.1204007!4d73.0090994!3m4!1s0x3be7c0c75c8d87ed:0x226a7433aef7f55f!8m2!3d19.1200955!4d73.0097618'
        }

    ])

    const redirect = (data) => {
        const {isNewTab,link} = data;
        if(isNewTab) {
            window.open(link)
        }
    }
    return (
        <div className='ProjectsMain'>
            <Container>

                <Row>
                    {/*<Col lg={1} xs={0} sm={0}>*/}
                    {/*</Col>*/}

                    <Col lg={12} xs={12} sm={2}>
                        <Row>
                            {
                                sections.map((section)=>{
                                    return (
                                        <>
                                            <Col lg={4} md={12} xs={12}>
                                                <ScrollAnimation animateIn="fadeInUp">
                                                <div className={'section'}>
                                                    <img src={section.image} onClick={()=>{ redirect(section)}}/>
                                                    <div className={'descDiv'}>
                                                         <h2>{section.title}</h2>
                                                        <span>{section.desc}</span>
                                                    </div>
                                                    <Button className={'btn'} onClick={()=>{ redirect(section)}}>{section.btnText}</Button>
                                                </div>
                                                </ScrollAnimation>

                                            </Col>
                                        </>
                                    )
                                })
                            }



                        </Row>
                    </Col>

                    {/*<Col lg={1} xs={0} sm={0}>*/}
                    {/*</Col>*/}

                </Row>
            </Container>
        </div>
    )
}

export default Projects;

