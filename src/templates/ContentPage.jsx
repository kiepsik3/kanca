import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBTypography, MDBView, MDBMask } from 'mdbreact';
import VisualHeader from '../components/VisualHeader/VisualHeader'

export default function ContentPage(props) {
    return (
        <>
            <VisualHeader title={props.title} />
            <MDBContainer>
                {props.content?.map(c => (
                    <>
                        <span>{c.text}</span>
                        <img src={c.src} />
                    </>
                ))}
                dasdas
            </MDBContainer>


        </>
    )
}
