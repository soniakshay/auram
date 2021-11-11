import React, { useState, useEffect, useRef, useCallback } from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import './more-amenities-and-features.css';



function MoreAmenitiesAndFeatures() {
    const  [list,setlist] = useState([
        [

            'Box Cricket',
            'Rectangular Lawn Tennis Court',
            'Rectangular Fenced Basketball Court',
            'Double Height Squash Court',
            'Jacuzzi',
            'Poolside Deck',

        ],
        [
            'Barbeque Lawn near poolside',
            'Co-working Spaces',
            'Creche',
            'Dance & Music Room',
            'Library',
            'Indoor Games Room'
        ],
        [

            'Guest Rooms',
            'Garden with Butterfly Species',
            'Open air outdoor gym',
            'Acupressure Paved Pathway',
            '"The Infinite" (Prayer Hall)',
            'Sit-out Space for Senior Citizens'
        ],
        [


            'Yoga and Meditation Zone',
            'Pet Garden',
            'Lawn Area for Festival Celebratio',
            'Bubble fountains on floor',
            'Play Area for toddlers',
            'Skating Rink'
        ]
    ])

    return (
        <div className='MoreAmenitiesAndFeaturesMain'>
            <Container >
                    <Row>
                        {
                            list.map((innerList)=>{
                                return (
                                    <>
                                        <Col lg={3} md={3} xs={12} sm={12}>
                                            <ul>
                                                {
                                                    innerList.map((value)=>{
                                                        return (<li>
                                                            <i className="fas fa-angle-right"></i>
                                                            {value}</li>)
                                                    })

                                                }
                                            </ul>
                                        </Col>

                                    </>
                                )
                            })
                        }

                    </Row>
            </Container>
        </div>
    )
}

export default MoreAmenitiesAndFeatures;

