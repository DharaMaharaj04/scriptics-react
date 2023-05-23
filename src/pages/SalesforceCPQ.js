import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class SalesforceCPQ extends Component {
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
                            <img src='/assets/img/Sales force/cpq.jpg' alt='cpq.jpg' />   
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
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <div className='slide_content'>
                                            <span className='sale-title white-color'>Salesforce CPQ</span>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>  
                    
                </OwlCarousel>
            </section>
            <section className='blue-dark sale-info'>
                <div className='container'>
                    <div className='row cfcr'>
                        <div className='col-12 col-lg-7 col-md-7 col-sm-12 col-xs-12' >
                            <p>Salesforce CPQ (Configure Quotes) has become a major tool for sales organizations, making it easier to create custom quotes and improving overall accuracy.</p>
                            <p>Now, your team can easily and accurately generate quotes in a way that reflects your company's desired pricing model – and isn't limited by product-only and price-book constraints. By using Salesforce CPQ, companies can make sales proposals and quotes with greater efficiency, shorten sales cycles, and improve revenue. </p>
                        </div>
                        <div className='col-12 col-lg-5 col-md-5 col-sm-12 col-xs-12' >
                           <img src='/assets/img/RevOps_top.svg' alt='RevOps_top' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="sale-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="sale-info-img">
                                    <img src='/assets/img/sales-cloud-einstein.png' alt='sales-cloud-einstein' />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                                <div className="sale-info-cont">
                                    <h4 className="indus-title_1">Salesforce CPQ benefits include:  </h4>
                                    <li>Faster quote</li>
                                    <li>Increase quote accuracy</li>
                                    <li>Simplified quotation process</li>
                                    <li>sales guide</li>
                                    <li>Product Groups</li>
                                    <li>Improved revenue forecastin</li>
                                </div>
                            </div>
                        </div>    
                    </div>
                </section>
                <section className='sale-info'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                                <div className="sale-info-cont">
                                    <h4 className="indus-title_1">Need help with CPQ?</h4>
                                    <span>We Offer</span>
                                    <p><strong>CPQ Deployment/Configuration</strong> - New to CPQ?  Scriptics team of experts can help you get started. </p>
                                    <p><strong>CPQ Consulting </strong> - Already a CPQ user and looking to improve your ROI? The Scriptics team is familiar with CPQ and is ready to give you the guidance and recommendations you need to take your CPQ usage to the next level. </p>
                                    <p><strong>Maintain CPQ</strong> - Proper and effective CPQ maintenance is key to success, especially when your pricing model adapts to the needs of your customers and competitors We provide the support your team needs and help resolve issues as they arise. </p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="sale-info-img">
                                    <img src='/assets/img/sales-cloud-security.png' alt='sales-cloud-security' />
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
