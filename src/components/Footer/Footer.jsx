import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import GoogleMapReact from 'google-map-react';
import './footer.less';

export default function Footer() {
    return (
        <>
            <div style={{ height: '500px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBCI566PILUycZvQF6yAdjBAi4R8c0sG94" }}
                    defaultCenter={{ lat: 51.107883, lng: 17.038538 }}
                    defaultZoom={16}
                    yesIWantToUseGoogleMapApiInternals
                    options={{ styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }] }}

                >

                </GoogleMapReact>
            </div>

            <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
                <MDBContainer className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">Footer Content</h5>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content.
                            </p>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li >
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol md="3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li >
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </>
    );
}