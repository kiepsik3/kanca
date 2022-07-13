import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import ContentPage from '../../templates/ContentPage';
import './services.less';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBTypography, MDBView, MDBMask } from 'mdbreact';
import Header from '../../components/Header/Header';
import { Headline2 } from '../../typography/Headlines/Headlines';
import cn from 'classnames';
import serv from '../../data/data.json';

export default function Services(props) {
    const { id, id2 } = useParams();
    // const { data: services, isPending, error } = useFetch("http://localhost:8000/services/")

    const services = serv.services;

    if (!services) return null

    const isService = services.filter(s => s.type === "service").find(s => s.id === id)
    const isServiceBox = services.filter(s => s.type === "service-box").find(s => s.id === id)
    const isSubService = isServiceBox?.childs.find(sb => sb.id === id2)

    return (
        <div className={cn(!isSubService ? "services" : "content-page")}>
            {/* {!isSubService && <Headline2 center>Zakres usług</Headline2>} */}

            {/* {!isSubService ?
                <>
                    <Headline2 center>Zakres usług</Headline2>
                    <MDBContainer>
                        <MDBRow>
                            {(!isService && !isServiceBox) ?
                                <>
                                    {services?.map(s =>
                                        <MDBCol size="4" className="service-item-box">
                                            <ServiceItem {...s} isHomePage={props.isHomePage} />
                                        </MDBCol>
                                    )}
                                </>
                                :
                                <>
                                    {isServiceBox?.childs.map(sb =>
                                        <MDBCol size="4" className="service-item-box">
                                            <ServiceItem {...sb} />
                                        </MDBCol>
                                    )}
                                </>
                            }
                        </MDBRow>
                    </MDBContainer>
                </> :
                isService ? <ContentPage content={isService?.content} title={isService?.title} /> : < ContentPage content={isSubService?.content} title={isSubService?.title} />} */}

            {(!isService && !isServiceBox && !isSubService) ?
                (<MDBContainer>
                    <Headline2 center>Zakres usług</Headline2>
                    <MDBRow>
                        {services?.map(s => (
                            <MDBCol size="4" className="service-item-box">
                                <ServiceItem {...s} isHomePage={props.isHomePage} />
                            </MDBCol>
                        ))}
                    </MDBRow>
                </MDBContainer>) :
                (isServiceBox && !isSubService) ?
                    <MDBContainer>
                        <Headline2 center>Zakres usług</Headline2>
                        <MDBRow>
                            {(isServiceBox.childs.map(sb =>
                                <MDBCol size="4" className="service-item-box">
                                    <ServiceItem {...sb} />
                                </MDBCol>
                            ))}
                        </MDBRow>
                    </MDBContainer> :
                    isService ? <ContentPage content={isService?.content} title={isService?.title} /> : < ContentPage content={isSubService?.content} title={isSubService?.title} />}
        </div>
    )
}

function ServiceItem(props) {
    const location = useLocation()
    const { id, title, icon, isHomePage } = props;
    return (
        <Link to={isHomePage ? `/zakres-uslug/${id}` : `${location.pathname}/${id}`} className="service-item">
            <MDBIcon icon={icon} size="2x" />
            <span>{title}</span>
        </Link>

    )
}