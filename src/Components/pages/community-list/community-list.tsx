import React, {useState, useEffect, useRef, useCallback} from 'react';
import './community-list.css'
import Header from "../../header/header";
import Footer from "../../footer/footer";
import {Col, Container, Row} from "react-bootstrap";
import Communities from "../../communities-section/communities";
import image1 from "../../../assets/images/ghansoli/ghansoli-grid1.jpg";
import image2 from "../../../assets/images/chembur-grid-2.jpg";
import image3 from "../../../assets/images/home-f1.jpg"
import kargarImage from "../../../assets/images/khargar-grid-2.jpg";

function CommunityList(props) {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const [sectiondata,setSectionData]= useState(
        {
            heading: 'Communities',
            list:    [
                {
                    data: {
                        title: 'Ghansoli Sport City',
                        redirectLink:'/detail/ghansoli-sports-city'
                    },
                    style:{
                        backgroundImage: image1,
                        height: '500px'

                    }


                },
                {
                    data: {
                        title: 'Chembur City Centre',
                        redirectLink:'/detail/chembur-city-centre'
                    },

                    style:{
                        backgroundImage: image2,
                        height: '500px'

                    }


                },
                {
                    data: {
                        title: 'Shilphata City Junction ',
                        redirectLink:'/detail/shilphata-city-junction'
                    },
                    style:{
                        backgroundImage: image3,
                        height: '500px'

                    }


                },

                {
                    data: {
                        title: 'Kharghar Rolling',
                        redirectLink:'/detail/kharghar-rolling-greens'
                    },
                    style: {
                        backgroundImage:kargarImage,
                        height: '500px'

                    }


                },

            ],
        }
    )

    return (
        <div className='CommunityListMain'>
            <Header/>
            <Container fluid>
               <Row>
                   <Col lg={12} md={12} sm={12} xs={12}>
                       <h1 className={'title'}>Communities</h1>
                   </Col>
               </Row>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <Communities communitiesData = {sectiondata} fluid/>
                </Col>
            </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default CommunityList;

