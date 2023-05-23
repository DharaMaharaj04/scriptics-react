import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class SaleforceBusinessIntelligence extends Component {
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
      <div>
        <div className="service-page">
        <Helmet>
            <body id="page-service" />
        </Helmet>
        <section className='srv-main'>
            <OwlCarousel className="owl-theme" {...options} >
                <div className='clo-ser'>  
                    <div className='slide-img'>
                        <img src='/assets/img/Sales force/salesforce-business.jpg' alt='salesforce-business.jpg' />   
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
                                        <li className="active dropdown relative drop-container">
                                            <a href="#" className='serverice_menu textwh'><span >Accelerate</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                            <div className="bg-white">
                                                <ul className="list dropdown-content list-inline">
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/sales_force'>Sales Force</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/cloud_digital_transfomation'>Cloud Digital Transfomation</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="dropdown relative drop-container desktop-menu">
                                                <a href="/sales_force" className='serverice_menu textwh'><span >Salesforce</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                <div className="bg-white">
                                                    <ul className="list row dropdown-content">
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce_salecloud'>Salesforce Sales Cloud</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce_cpq'>Salseforce CPQ</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce_industry'>Salesforce Industry</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce_marketing'>Salesforce Marketing</Link>
                                                            </li>
                                                            
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce_studio'>Salesforce Studio</Link>
                                                            </li>
                                                            
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce_service'>Salesforce Service</Link>
                                                            </li>
                                                            
                                                            
                                                        </ul>
                                                    </li>
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce-bussinte'>Salesforce Bussiness Intelligence</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to=''></Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to=''></Link>
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
                                                        <Link  target="_blank" to='/salesforce_salecloud'>Salesforce Sales Cloud</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/salesforce_cpq'>Salseforce CPQ</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/salesforce_industry'>Salesforce Industry</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/cloud_digital_transfomation'>Cloud Digital Transfomation</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/salesforce_salecloud'>Salesforce Sales Cloud</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/salesforce_cpq'>Salseforce CPQ</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/salesforce_industry'>Salesforce Industry</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/salesforce_marketing'>Salesforce Marketing</Link>
                                                    </li>
                                                    
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/salesforce_studio'>Salesforce Studio</Link>
                                                    </li>
                                                    
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/salesforce_service'>Salesforce Service</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/salesforce-bussinte'>Salesforce Bussiness Intelligence</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>    
                                    </ol>
                                </div>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className='slide_content'>
                                        <span className='sale-title white-color'>Business Intelligence</span>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>  
                
            </OwlCarousel>
        </section>
        <section className='blue-dark sale-buss'>
            <div className='container'>
                <div className='row '>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <h2>Our Process</h2>
                    </div>    
                    <div className='col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12' >
                        <img src='/assets/img/BI-step1.png' alt='BI-step1' />
                        <h4 className='text-center'>Collect, Clean, Centralize</h4>
                        <p className='text-center'>We collect, clean, and pipe your data into a centralized place like Salesforce, Bigquery, or CRM Analytics to create a single source of truth.</p>
                    </div>
                    <div className='col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12' >
                        <img src='/assets/img/BI-step2.png' alt='BI-step2' />
                        <h4 className='text-center'>Structure and Analyze</h4>
                        <p className='text-center'>Once centralized, data is structured and transformed which enables analysts to provide quicker, more accurate solutions and empower the business user and Executive team to self-serve.</p>
                    </div>
                    <div className='col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12' >
                        <img src='/assets/img/BI-step3.png' alt='BI-step3' />
                        <h4 className='text-center'>Insights and Automation</h4>
                        <p className='text-center'>Automated, reliable reporting means business analysts can spend time mining for insights and finding transformational business opportunities.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="sale-info">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                            <div className="sale-info-cont">
                                <h4 className="indus-title_1">We help organizations turn data into insights  </h4>
                                <p>Businesses today have access to more data than ever before They collect information about their customers, products, and even competitors However, despite this unprecedented reach, businesses still face the challenge of finding meaningful and actionable insights.</p>
                                <p>At Scriptics, we believe that data collection is just the first step For data to be useful, it must have context And from context and experience to actionable insights and deeper questions.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                        <div className="sale-info-img">
                            <img src='/assets/img/saleforce-business-intelligence.png' alt='saleforce-business-intelligence' />
                        </div>
                    </div>
                    </div>    
                </div>
            </section>
        </div>
      </div>
    )
  }
}
