import React, { useState, useEffect, useRef, useCallback } from 'react';
import './header.css'
import {Button, Col, Container, Row} from "react-bootstrap";
import logo from '../../assets/images/logo22.png'
import menuIcon from '../../assets/images/icon/menu.png'
import { useHistory } from "react-router-dom";
import $ from "jquery";


function Header() {
    const history = useHistory();
    const  [open,setOpen] =  useState(false);
    const closeMenu = () => {
        setOpen(false);
    }
    const openMenu = () => {
        setOpen(true);
    }
    const redirectToCall = (contactNo) => {
        window.location.href = "tel:" + contactNo;
    }
    const redirectToEmail = (email) => {
        window.location.href = "mailto:" + email;
    }
    useEffect(()=>{
        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('.backToTopButton').fadeIn();
            } else {
                $('.backToTopButton').fadeOut();
            }
        });
        $(".backToTopButton").click(function() {
            $("html, body").animate({scrollTop: 0}, 500);
        });

    },[]);
    return (
        <div className='headerMain'>
           <Container fluid>
               <Row>
                   <Col lg={6} xs={6} sm={6}>
                        <img src={logo} onClick={() => history.push('/')} className={'headerLogo'}/>
                   </Col>

                   <Col lg={6} xs={6} sm={6} className={'leftSectionHeader menuItem'}>
                       <span>COMMUNITIES</span>
                       <span><a href={'javascript:void(0)'} onClick={()=> redirectToCall('+917829955550')}><i className={'fa fa-phone fa-20x mt-2 mr-4'}/></a></span>
                       <span><a href={'javascript:void(0)'} onClick={()=> redirectToEmail('communities@aurumproptech.com')}><i className={'fa fa-envelope mt-2 fa-20x'}/></a></span>
                   </Col>
                   <Col lg={6} xs={6} sm={6} className={'menuToggleIcon'}>
                        <img src={menuIcon} onClick={openMenu}/>
                   </Col>

               </Row>

           </Container>

            {
                open && (
                    <div className={'mobileMenu'} onClick={closeMenu}>
                        <div className={'mobileMenuInner'}>
                            <ul>
                                <li><a href='#'>COMMUNITIES</a></li>
                                <li><a href='#'>Call</a></li>
                                <li><a href='#'>Mail</a></li>
                            </ul>
                        </div>
                    </div>

                )
            }
            <Button className={'backToTopButton'}><span className={'icon fa fa-angle-up'}/></Button>
        </div>
    )
}

export default Header;

