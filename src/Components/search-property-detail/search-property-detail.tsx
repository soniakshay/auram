import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Accordion, Button, Col, Container, Row} from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import './search-property-detail.css'
import Header from "../header/header";
import Form from "react-bootstrap/Form";
import PropertyInfo from "../property-info/propert-info";
import image1 from '../../assets/images/swiss-grid.jpg'
import image2 from '../../assets/images/paramount-grid.jpg';
import image3 from '../../assets/images/q-island-list.jpg';
import image4 from '../../assets/images/majesco-search.jpg';
import image5 from '../../assets/images/qparc-search.jpg';
import image6 from '../../assets/images/inner-grid-q6.jpg';
import Video1 from '../../assets/video/Aurum-Qisland.mp4';
import PosterImage from '../../assets/video/vidothumb-qisland.jpg'
import Footer from "../footer/footer";

function SearchPropertyDetail(props) {
    const {commercialPropertyList} = props;
    const [commercialPropertLists, setPcommercialPropertLists] = useState([
        {
            titleDesc: ' Shaping the Future of Real Estate',
            title: 'Aurum Q5',
            SeeMoreLink: '/detail/q2',
            Seating:'300 each floor',
            Floor:'7 Floors',
            OverallArea:'1,16,000 sq ft',
            ImageLink: image4,
            ContactNo: '+917829955550',
            Email: 'CX.TL@qparc.co.in',
            isViewMoreHide: true,
        },
        {
            titleDesc: 'Designed for Future Growth',
            title: 'Aurum Q Parć Q2',
            SeeMoreLink: '/detail/q2',
            Seating:'As per NBFC Norms',
            Floor:'22 Floors',
            OverallArea:'8,50,000 sq ft',
            ImageLink: image5,
            ContactNo: '+917829955550',
            Email: 'CX.TL@qparc.co.in',
            isViewMoreHide: true
        },
        {
            titleDesc: 'COMING SOON',
            title: 'Aurum Q6',
            SeeMoreLink: '/detail/q6',
            Floor:'7 Floors',
            OverallArea:'35,000 sq ft',
            ImageLink: image6,
            ContactNo: '+917829955550',
            Email: 'CX.TL@qparc.co.in',
            isViewMoreHide: true
        }
    ])
    const [propertList, setPropertyList] = useState([
        {

            titleDesc: ' Give Your Heart Some Peace of Mind',
            title: 'Swiss Boulevard',
            Beds: '3',
            Tower: '13 Floor',
            Area: 'Starting From 868 sq.ft',
            Price: 'Starting From INR 2.20 CR',
            PossessionDate: '30 March 2022',
            SeeMoreLink: '/detail/swiss-boulevard-postal-colony',
            ViewMoreLink: '',
            ImageLink: image1,
            ContactNo: '+917829955550',
            Email: 'CX.TL@qparc.co.in'
        },
        {

            titleDesc: ' Give Your Heart Some Peace of Mind',
            title: 'Paramount',
            Beds: '3',
            Tower: '13 Floor',
            Area: 'Starting From 868 sq.ft',
            Price: 'Starting From INR 2.20 CR',
            PossessionDate: '30 March 2022',
            SeeMoreLink: '/detail/paramount',
            ViewMoreLink: '',
            ImageLink: image2,
            ContactNo: '+917829955550',
            Email: 'CX.TL@qparc.co.in'
        },
        {

            titleDesc: 'Live the Quintessential Life',
            title: 'Q Islands | Maldives',
            Beds: '1, 2, 3.5 & 4.5',
            Tower: '37 Floor',
            Area: 'Starting From 505 sq.ft',
            Price: 'Starting From INR 1.10 CR',
            PossessionDate: '30 December 2024',
            SeeMoreLink: '/detail/qisland',
            ViewMoreLink: '',
            ImageLink: image3,
            ContactNo: '+917829955550',
            Email: 'CX.TL@qparc.co.in'
        },

        {

            titleDesc: 'Live the Quintessential Life',
            title: 'Q Islands | Santorini',
            Beds: '1, 2, 3.5 & 4.5',
            Tower: '37 Floor',
            Area: 'Starting From 505 sq.ft',
            Price: 'Starting From INR 1.10 CR',
            PossessionDate: '30 December 2024',
            SeeMoreLink: '/detail/qisland',
            ViewMoreLink: '',
            isVideoLink: true,
            VideoLink: Video1,
            posterImage: PosterImage,
            ContactNo: '+917829955550',
            Email: 'CX.TL@qparc.co.in'
        }
    ])

    return (
        <div className='PropertDetailMain'>
            <Header/>
            <div className={'PropertDetailMainInner'}>
                <Container fluid>
                    <Row>
                        <Col lg={3} md={12} sm={12} className={'removeSpaces'}>
                            <input type='text' className='inputField' placeholder={'Search Properties By Name'}/>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <span className={'title'}>Property Name</span>
                                        <span className={'desc'}>Any</span>


                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Form.Check type="checkbox" label=" AURUM Q ISLANDS"/>
                                            <Form.Check type="checkbox" label="AURUM Q PARĆ Q6"/>
                                            <Form.Check type="checkbox" label="AURUM MILLENNIUM PARK Q2"/>
                                            <Form.Check type="checkbox" label="AURUM MILLENNIUM PARK Q6"/>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <span className={'title'}>BEDROOMS</span>
                                        <span className={'desc'}>Any</span>


                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Form.Check type="checkbox" label="1 BEDROOM"/>
                                            <Form.Check type="checkbox" label="2 BEDROOM"/>
                                            <Form.Check type="checkbox" label="3 BEDROOM"/>
                                            <Form.Check type="checkbox" label="4 BEDROOM"/>
                                            <Form.Check type="checkbox" label="5 BEDROOM"/>
                                            <Form.Check type="checkbox" label="6 BEDROOM"/>

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <span className={'title'}>Property Name</span>
                                        <span className={'desc'}>Any</span>


                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div id={'Community'}>
                                            <Form.Check type="checkbox" label="GHANSOLI SPORT CITY"/>
                                            <Form.Check type="checkbox" label="CHEMBUR CITY CENTRE"/>
                                            <Form.Check type="checkbox" label=" SHILPHATA CITY JUNCTION"/>
                                            <span><i className={'fa fa-bullhorn  fa-20x'}/> <span
                                                className={'darktext'}>VASHI UP TOWN</span>  <span
                                                className={'lightext'}> (Coming Soon)</span></span>
                                            <span><i className={'fa fa-bullhorn  fa-20x'}/> <span
                                                className={'darktext'}>BELAPUR BUSINESS BAY</span>  <span
                                                className={'lightext'}> (Coming Soon)</span></span>
                                            <span><i className={'fa fa-bullhorn  fa-20x'}/> <span
                                                className={'darktext'}> KHARGHAR ROLLING GREENS</span>  <span
                                                className={'lightext'}> (Coming Soon)</span></span>
                                            <span><i className={'fa fa-bullhorn  fa-20x'}/><span className={'darktext'}>PALM BEACH FLAMINGO HAVEN</span>  <span
                                                className={'lightext'}> (Coming Soon)</span></span>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <div className={'btns'}>
                                <Button className={'btn'}> SEARCH PROPERTIES</Button>
                            </div>
                            <div className={'clearAllBtn'}>
                                <a href='#'>CLEAR ALL</a>
                            </div>

                        </Col>
                        <Col lg={9} md={12} sm={12}>
                            {
                                commercialPropertyList ? (
                                    <>
                                        {commercialPropertLists.map((property) => {
                                            return (<PropertyInfo propertInfo={property}/>)
                                        })}


                                    </>

                                ): (
                                    <>
                                        {propertList.map((property) => {
                                            return (<PropertyInfo propertInfo={property}/>)
                                        })}


                                    </>
                                )
                            }


                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default SearchPropertyDetail;

