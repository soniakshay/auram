import React, {useState, useEffect, useRef, useCallback} from 'react';
import './walkthrough-section.css'
import {Button, Col, Container, Row} from "react-bootstrap";

function WalkThroughSection(props: any) {
    const {desc, images,videoWalkhthrough,iframeLinks} = props.walkthroughInfo;
    console.log(iframeLinks);
    const [active,setActive] =  useState(0);
    const [regitrationFlag,setRegistrationFlag] = useState(false);
    useEffect(()=>{
        const regitrationFlag = localStorage.getItem('registration');
        if(!regitrationFlag || regitrationFlag === null ){
            setRegistrationFlag(false)

        } else {
            setRegistrationFlag(true);
        }
    },[]);

    const renderIframe = () => {
        return (
            <>
            {
                regitrationFlag ? (

                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className='WalkThroughSectiondesc'>
                                <h1>Walkthrough</h1>
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className='WalkThroughSectionimage'>
                                <Row>
                                    <>
                                        {
                                            iframeLinks.map(({btnText},index) => {
                                                return (<Col lg={2} md={2} sm={6} xs={6}>
                                                    <Button onClick={()=> setActive(index)} className={active === index ?  'active' : 'butn'}>
                                                        {btnText}
                                                    </Button>
                                                </Col>)
                                            })
                                        }
                                    </>


                                </Row>

                                <Row>
                                    <Col  lg={12} md={12} sm={12} xs={12}>
                                        <div className='imagesection'>
                                            <iframe width="100%" height="500"
                                                    src={iframeLinks[active].iframeLink}
                                                    title="YouTube video player" frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen=""></iframe>
                                        </div>
                                    </Col>

                                </Row>

                            </div>
                        </Col>
                    </Row>


                ) : (
                    <Row>
                        <Col lg={5} md={5} sm={12} xs={12}>
                            <div className='WalkThroughSectiondesc'>
                                <h1>Walkthrough</h1>
                                <p>{desc}</p>
                            </div>
                        </Col>
                        <Col lg={7} md={7} sm={12} xs={12}>
                            <div className='WalkThroughSectionimage'>
                                <Row>
                                    <>
                                        {
                                            images.map(({btnText},index) => {
                                                return (<Col lg={2} md={2} sm={6} xs={6}>
                                                    <Button onClick={()=> setActive(index)} className={active === index ?  'active' : 'butn'}>
                                                        {btnText}
                                                    </Button>
                                                </Col>)
                                            })
                                        }
                                    </>


                                </Row>

                                <Row>
                                    <Col  lg={12} md={12} sm={12} xs={12}>
                                        <div className='imagesection'>
                                            <img src={images[active].imageLink}/>
                                        </div>
                                    </Col>

                                </Row>

                            </div>
                        </Col>
                    </Row>
                )
            }

            </>
        )
    }

    return (
        <div className='WalkThroughSectionMain'>
            <Container fluid>

                {
                    videoWalkhthrough ? (
                        <Row>
                            <Col lg={5} md={5} sm={12} xs={12}>
                                <div className='WalkThroughSectiondesc'>
                                    <h1>Walkthrough</h1>
                                    <p>
                                        {desc}
                                    </p>
                                </div>
                            </Col>
                            <Col lg={7} md={7} sm={12} xs={12}>
                                <div className='WalkThroughSectionimage'>
                                    <Row>
                                        {
                                            images.map(({btnText},index) => {
                                                return (<Col lg={2} md={2} sm={6} xs={6}>
                                                    <Button onClick={()=> setActive(index)} className={active === index ?  'active' : 'butn'}>
                                                        {btnText}
                                                    </Button>
                                                </Col>)
                                            })
                                        }

                                    </Row>
                                    <Row>
                                        <Col  lg={12} md={12} sm={12} xs={12}>
                                            <div className='imagesection'>
                                                {
                                                    regitrationFlag ?

                                                        (
                                                            <iframe width="100%" height="450"
                                                                    src={images[active].videoLink}
                                                                    title="YouTube video player" frameBorder="0"
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                    allowFullScreen=""></iframe>



                                                        )

                                                        :

                                                        (
                                                            <img src={images[active].imageLink}/>
                                                        )
                                                }

                                            </div>
                                        </Col>

                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    ) : (
                        <>
                            {renderIframe()}
                        </>
                    )
                }

            </Container>
        </div>
    )
}

export default WalkThroughSection;

