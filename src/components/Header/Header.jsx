import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask, MDBIcon, MDBBox } from 'mdbreact';
import cn from "classnames";
import "./header.less";

export default function Header() {
    const [navbarToggle, setNavbarToggle] = useState()
    const location = useLocation()

    const notHomePage = location.pathname !== "/"
    return (
        <header className={cn("header", notHomePage && "black")}>
            <MDBNavbar fixed="top" dark expand="lg" color="brown darken-3" scrolling transparent>
                <MDBNavbarBrand href="/">
                    <strong>MG</strong>
                </MDBNavbarBrand>
                {<MDBNavbarToggler onClick={() => setNavbarToggle(s => !s)} />}
                <MDBCollapse isOpen={navbarToggle} navbar>
                    <MDBNavbarNav right>
                        <div className="header-appointment">
                            <div>
                                <MDBIcon far icon="clock" size="2x" />
                                <span>09:00 - 16:00</span>
                            </div>

                            <div>
                                <span>Poniedziałek, wtorek</span>
                            </div>
                        </div>

                        <div className="header-appointment">
                            <div>
                                <MDBIcon far icon="clock" size="2x" />
                                <span>19:30 - 03:30</span>
                            </div>

                            <div>
                                <span>Środa, czwartek</span>
                            </div>
                        </div>

                        <div className="header-appointment">
                            <div>
                                <MDBIcon far icon="clock" size="2x" />
                                <span>09:30 - 16:30</span>
                            </div>

                            <div>
                                <span>Środa, czwartek</span>
                            </div>
                        </div>



                        <div className="header-appointment">
                            <div>
                                <MDBIcon far icon="clock" size="2x" />
                                <span>10:00 - 17:00</span>
                            </div>

                            <div>
                                <span>Piątek</span>
                            </div>
                        </div>

                        <div className="header-appointment">
                            <div>
                                <MDBIcon fa icon="phone" size="2x" />
                                <span>772 521 636</span>
                            </div>

                            <div>
                                <span>Numer kontaktowy</span>
                            </div>
                        </div>
                    </MDBNavbarNav>

                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab icon="linkedin" size="2x" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                                <MDBIcon fab icon="facebook" size="2x" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </header>
    )
}
