import React  , { useState } from 'react';
import './search-section.css'
import logo from '../../assets/images/04-home-rev-img-4.png'
import {Col, Container, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";
function SearchSection() {
    const history = useHistory();
    const [link,setLink] = useState('BuyHome');
    const [inputPlaceHolder,setPlaceHolder] =  useState('Search Properties to Buy')
    const changeLink = (value) => {
        setLink(value)
        switch (value) {
            case 'BuyHome': {
                setPlaceHolder('Search Properties to Buy')
                break
            }
            case 'RentHome': {
                setPlaceHolder('Search Properties to Rent')
                break
            }
            case 'BuyOffices': {
                setPlaceHolder('Search Properties to Buy')
                break
            }
            case 'LeaseOffices': {
                setPlaceHolder('Search Commercial Office')
                break
            }

        }
    }
    const onsubmit = () => {
            if(link === 'BuyOffices'){
                history.push('/commercial-property-list')
            }
    }
    return (

        <div className='main' id='searchsectiondiv'>
            <Container fluid>
                <Row className='mainPageContaner'>
                <Col lg={2} md={0} xs={0}>

                </Col>
                <Col lg={8} md={12} xs={12} className='divContainer'>
                    <Col lg={12} md={12} xs={12} className='logoimage'>
                        <img src={logo}/>
                    </Col>
                    <Col lg={12} md={12} xs={12} className='tagline'>
                       <span>Beautiful Spaces In The Best Places</span>
                    </Col>
                    <Col lg={12} md={12} xs={12} className='tagline'>
                     <Row>
                        <Col lg={3} md={6} xs={6} className='removeSpace'>
                             <button onClick={()=> changeLink('BuyHome')} className={`${link === 'BuyHome' ? 'tabLinkActive' : '' }  tabLink`}>Buy Homes</button>
                        </Col>
                        <Col lg={3} md={6} xs={6} className='removeSpace'>
                            <button onClick={ ()=> changeLink('RentHome')}  className={`${link === 'RentHome' ? 'tabLinkActive' : '' } tabLink`} >Rent Homes</button>
                        </Col>
                        <Col lg={3} md={6} xs={6}className='removeSpace'>
                            <button onClick={ ()=> changeLink('BuyOffices')}  className={`${link === 'BuyOffices' ? 'tabLinkActive' : '' } tabLink`}>Buy Offices</button>
                        </Col>
                        <Col lg={3} md={6} xs={6} className='removeSpace'>
                            <button onClick={ ()=> changeLink('LeaseOffices')}   className={`${link === 'LeaseOffices' ? 'tabLinkActive' : '' } tabLink`}>Lease Offices</button>
                        </Col>
                     </Row>
                        <Row>
                            <Col lg={1} md={0} xs={0}></Col>
                            <Col lg={10} md={12} xs={12}>
                                <form onSubmit={onsubmit}>
                                  <input type='text' placeholder={inputPlaceHolder} className='inputField' />
                                </form>
                            </Col>
                            <Col lg={1} md={0} xs={0}></Col>

                        </Row>
                    </Col>
                </Col>
                <Col lg={2} md={0} xs={0}>

                </Col>
                </Row>
            </Container>
        </div>
        // <div className='main'>
        //     <div className='innerSection'>
        //            <Container>
        //                <Row>
        //                    <Col lg={3} md={3} sm={6}>
        //                        Hello
        //                    </Col>
        //                    <Col lg={3} md={3} sm={6}>
        //                        Hello
        //                    </Col>
        //                    <Col lg={3} md={3} sm={6}>
        //                        Hello
        //                    </Col>
        //                    <Col lg={3} md={3} sm={12}>
        //                        Hello
        //                    </Col>
        //                </Row>
        //            </Container>
        //     </div>
        // </div>
    )
}
export default SearchSection;
