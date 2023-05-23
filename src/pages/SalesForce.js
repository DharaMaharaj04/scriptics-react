import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default class SalesForce extends Component {
  render() {

    const options = {
        loop: false,
        margin: 0,
        items: 1,
        autoplay: false,
        dots: false,
        autoplay: false,
        dots: false
    }; 


    return (
        <div className="service-page">
        <Helmet>
            <body id="page-service" />
        </Helmet>
            <section className='srv-main'>
                <OwlCarousel className="owl-theme" {...options} >
                     <div className='clo-ser'>  
                        <div className='slide-img'>
                            <img src='/assets/img/Sales force/Sales_force.jpg' alt='Sales_force.jpg' />   
                            <div className='slider-overlay-amethyst'></div>  
                        </div>
                        <div className='caption'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='salesforce-nav serv-link col-12'>
                                        <ol className="nav-links">
                                            <li className="dropdown relative drop-container">
                                                <a href="#" className='serverice_menu textwh'>Service<i className="text-uppercase" aria-hidden="true"></i></a>
                                                <div className="bg-white">
                                                    <ul className="list dropdown-content list-inline">
                                                        <li className='ser-sub-lin'>Development & Maintenance</li>
                                                        <li className=''>Accelerate</li>
                                                        <li className=''>Insight</li>
                                                        <li className=''>Experience</li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="dropdown relative drop-container">
                                                <a href="#" className='serverice_menu textwh'><span >Accelerate</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                <div className="bg-white">
                                                    <ul className="list dropdown-content list-inline">
                                                        <li className='ser-sub-lin'>
                                                            <Link  target="_blank"to='/sales_force'>SalesForce</Link>
                                                        </li>
                                                        <li className='ser-sub-lin'>
                                                            <Link  target="_blank"to='/cloud_digital_transfomation'>Cloud Digital Transfomation</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="dropdown relative drop-container desktop-menu">
                                                <a href="#" className='serverice_menu textwh'><span >Salesforce</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                <div className="bg-white">
                                                    <ul className="list row dropdown-content">
                                                        <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                            <ul className='list-inline px-0'>
                                                                <li className='ser-sub-lin'> 
                                                                    <Link to='/salesforce_salecloud' target="_blank">Salesforce Sales Cloud</Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link to='/salesforce_cpq' target="_blank">Salseforce CPQ</Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link to='/salesforce_industry' target="_blank">Salesforce Industry</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                            <ul className='list-inline px-0'>
                                                                <li className='ser-sub-lin'>
                                                                    <Link to='/salesforce_marketing' target="_blank">Salesforce Marketing</Link>
                                                                </li>
                                                                
                                                                <li className='ser-sub-lin'>
                                                                    <Link to='/salesforce_studio' target="_blank">Salesforce Studio</Link>
                                                                </li>
                                                                
                                                                <li className='ser-sub-lin'>
                                                                    <Link to='/salesforce_service' target="_blank">Salesforce Service</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                            <ul className='list-inline px-0'>
                                                                <li className='ser-sub-lin'>
                                                                    <Link to='/salesforce-bussinte' target="_blank">Salesforce Bussiness Intelligence</Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link to=''></Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link to=''></Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="dropdown relative drop-container mobile-menu">
                                                <a href="#" className='serverice_menu textwh'><span >Salesforce</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                <div className="bg-white">
                                                    <ul className="list dropdown-content list-inline">
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/salesforce_salecloud' target="_blank">Salesforce Sales Cloud</Link>
                                                        </li>
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/salesforce_cpq' target="_blank">Salseforce CPQ</Link>
                                                        </li>
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/salesforce_industry' target="_blank">Salesforce Industry</Link>
                                                        </li>
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/cloud_digital_transfomation' target="_blank">Cloud Digital Transfomation</Link>
                                                        </li>
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/salesforce_salecloud' target="_blank">Salesforce Sales Cloud</Link>
                                                        </li>
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/salesforce_cpq' target="_blank">Salseforce CPQ</Link>
                                                        </li>
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/salesforce_industry' target="_blank">Salesforce Industry</Link>
                                                        </li>
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/salesforce_marketing' target="_blank">Salesforce Marketing</Link>
                                                        </li>
                                                        
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/salesforce_studio' target="_blank">Salesforce Studio</Link>
                                                        </li>
                                                        
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/salesforce_service' target="_blank">Salesforce Service</Link>
                                                        </li>
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/salesforce-bussinte' target="_blank">Salesforce Bussiness Intelligence</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                    <div className=''>
                                        
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <div className='slide_content'>
                                            <span className='sale-title white-color'>Revenue Operations & CRM Audits</span>
                                            <h2 className='white-color'>We optimize the people, processes, and technology behind sales and marketing teams.</h2>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>  
                    
                </OwlCarousel>
            </section>
            <section className="sale-info">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                            <div className="sale-info-cont">
                                <h4 className="indus-title_1">We start every client engagement with a revenue performance audit.</h4>
                                <p>The testing process took about a month, including time for key stakeholders and team members responsible for daily deliveries. The result is a final document outlining our findings, including an executive summary that provides recommendations and prioritization of what needs to be done in the short, medium and long term. based on the client's stated business goals.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp Wow from-right">
                            <div className="sale-info-img">
                                <img src='/assets/img/revenue-operations-1.png' alt='revenue-operations-1' />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className='sale-info sale-info-2'>
                <div className='container'>
                    <div className='row cfcr'>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                            <div className="sale-info-cont">
                                <p className="font-s">Following the audit, we work with the client, in accordance with the terms of reference, to implement the recommendations outlined in the final report The scope of work we support is tailored to each client</p>
                                <h6>Here are a few ways we help:</h6>
                                <ul>
                                    <li>Practical advice on processes and best practices for fast-growing businesses</li>
                                    <li>Strategy dashboards and analytics monitoring to enable on-demand customer analytics</li>
                                    <li>User-Centered SalesForce Solution in Sales, Service, and Marketing Cloud</li>
                                    <li>Powerful integration projects, such as implementing Salesforce Google Analytics 360</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp Wow from-right">
                            <div className="sale-info-img">
                                <img src='/assets/img/revenue-operations-2.png' alt='revenue-operations-1' />
                            </div>
                        </div>
                    </div>
                </div>        
            </section>
            
        </div>
    )
  }
}
