import React from 'react'
import home from "../assets/images/home.jpg"
import Services from '../pages/Services/Services';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';

export default function Home() {
    return (
        <>
            <MDBView src={home}>
                <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                    <h2>This Navbar isn't fixed</h2>
                    <h5>When you scroll down it will disappear</h5>
                    <br />
                    <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
                </MDBMask>
            </MDBView>
            <Services isHomePage />
        </>
    )
}
