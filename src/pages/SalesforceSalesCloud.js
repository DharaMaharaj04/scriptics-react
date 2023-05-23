import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class SalesforceSalesCloud extends Component {
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
                            <img src='/assets/img/Sales force/sale-cloud.jpg' alt='sale-cloud.jpg' />   
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
                                            <span className='sale-title white-color'>SalesforceSalesCloud</span>
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
                                <h4 className="indus-title_1">Advisory and consulting services:</h4>
                                <p>Our talented team has been using Salesforce for over a decade and includes several ex-Salesforce employees.</p>
                                <p>We start every contact with the client with an audit The output of the audit is a report of our findings, including a management summary with recommendations and prioritization of what needs to be done After the audit, we work with clients on a bespoke basis to implement the audit report's action items.</p>
                                <p>Our goal is to partner with companies looking to transform their Salesforce ecosystem After completing a Salesforce audit, we work with customers to increase the value they get from Salesforce Sales Cloud by helping them in one or more of the following five ways.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="sale-info-img per100">
                                <img src='/assets/img/Banking-saleforce-21.png' alt='Banking-saleforce'  style={{width:'auto', height:350}} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className='sale-info sale-info-2'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                            <div className="sale-info-cont">
                                <h4>Salesforce Architecture and Development:</h4>
                                <p>Our team of experts designed Salesforce to reflect best practices in your industry and business While the work we do for each client is different, here are some examples:</p>
                                <ul>
                                    <li>Develop and implement data retention and retention policies to manage Salesforce usage and performance</li>
                                    <li>Evaluate existing Salesforce customizations for long-term cost of ownership and make suggestions for improvement</li>
                                    <li>Test and replace legacy features and support process based on our testing results and conversations with end users</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="sale-info-img">
                                <img src='/assets/img/sales-cloud-architecture.png' alt='sales-cloud-architecture' />
                            </div>
                        </div>
                    </div>
                </div>        
            </section>
            <section className='blue-light'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <h3>Integrations and Mergers</h3>
                        </div>
                        <div className='col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12' >
                            <h6>Integration</h6>
                            <p>Our team of Salesforce veterans will help you maximize your return on investment in Salesforce by integrating it with other tools like Google Analytics, LeanData, Pardot, Marketing Cloud, and Eloqua Our team provides strategic monitoring for powerful integration projects, such as: </p>
                            <ul>
                                <li>Implement Salesforce's Google Analytics 360 Integration</li>
                                <li>Leverage Salesfore Einstein Insights in Google BigQuery</li>
                                <li>Implement Marketing Cloud and Google Analytics 360 integration</li>
                                <li>Connect your marketing automation solution with Salesforce</li>
                            </ul>
                        </div>
                        <div className='col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12' >
                            <h6>Merger</h6>
                            <p>Merging multiple Salesforce instances is complex and can take time. We have the experience to make the integration process seamless for your team and help clients practice on: </p>
                            <ul>
                                <li>What data and processes should be merged</li>
                                <li>How to follow Salesforce security best practices (how to use roles, records, record types, etc to ensure data is visible only to those who need it)</li>
                                <li>How multiple organizations or departments can still use individual sales processes and custom fields</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sale-info">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                            <div className="sale-info-cont">
                                <h4 className="indus-title_1">Decision Analysis and Einstein </h4>
                                <p>Businesses today have more data than ever before They collect data about products, customers, competitors, etc. However, many of these data-rich companies crave meaningful insights.</p>
                                <p>We help organizations transform data into information.</p>
                                <p>Scriptics Business Intelligence team works with key enterprise stakeholders to help them with everything from basic performance reporting to predictive and/or advanced modelling Click HERE(It will be business intelligence link) to learn more about our Business Intelligence services.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="sale-info-img">
                                <img src='/assets/img/sales-cloud-einstein.png' alt='sales-cloud-einstein' />
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
                                <h4>Salesforce security</h4>
                                <p>With Salesforce being the central information hub for many companies, it's no surprise that organizations are focusing on the security of their instance of Salesforce. The good news is that Salesforce is an extremely secure platform</p>
                                <p>However, all organizations still need to take basic steps to mitigate external threats and breaches caused by employee error or malicious intent We help organizations customize Salesforce and design processes that keep data security and compliance best practices in mind</p>
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
            <section className="sale-info">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                            <div className="sale-info-cont">
                                <h4 className="indus-title_1">Managed Services</h4>
                                <p>For a flat fee our team of Salesforce certified professionals will fully manage the customization and ongoing optimization of Salesforce Sales Cloud for your organization. We also act as an organization’s Salesforce Administrator to help maintain and monitor your Salesforce instance.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="sale-info-img">
                                <img src='/assets/img/sales-cloud-services.png' alt='sales-cloud-services' />
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
                                <h4>Salesforce monitoring</h4>
                                <p>Our SaaS monitoring tool includes 24/7 proactive monitoring of your Salesforce instance, along with all other built-in tools (e.g. marketing automation platform, Google Analytics, etc) to identify potential security risks, limit daily API calls, prepare for product releases, and recommend improvements based on industry best practices To learn more about our monitoring services.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="sale-info-img">
                                <img src='/assets/img/sales-cloud-monitoring.png' alt='sales-cloud-monitoring' />
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
