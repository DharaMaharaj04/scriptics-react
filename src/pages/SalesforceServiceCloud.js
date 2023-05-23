import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class SalesforceServiceCloud extends Component {
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
                      <img src='/assets/img/Cloud Service/salesforce.jpg' style={{objectFit:'fill'}} />   
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
                                      <span className='sale-title white-color'>Salesforce Service Cloud</span>
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
                      <p>Organizations need to be able to optimize their customer support experience while managing budget constraints By connecting customers, workforce, and products on a single platform, Service Cloud gives you a holistic view of your service organization. Scriptics team of experts have years of experience and are ready to work with you to help you get the most out of Service Cloud, reduce costs, improve productivity, and improve customer satisfaction.</p>
                  </div>
                  <div className='col-12 col-lg-5 col-md-5 col-sm-12 col-xs-12' >
                     <img src='/assets/img/ServiceCloud_blue-section.svg' alt='ServiceCloud_blue-section' />
                  </div>
              </div>
          </div>
      </section>
      <section className="sale-info">
              <div className="container">
                  <div className="row">
                     
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                          <div className="sale-info-cont">
                              <h4 className="indus-title_1">Improve your contact centers</h4>
                              <p>At Scriptics, we help customers implement Salesforce Service Cloud and improve key contact center metrics such as first call resolution, employee retention, average response time, CSAT, drop rate, agency time, and average response speed.</p>
                              <p className='salefor-serclo'><strong>Customer service and case management</strong><br/></p>
                              <p>Improve first call resolution by routing cases to the right people. Service Cloud's omnichannel routing can route requests from any channel the customer may request for support Improve employee satisfaction and reduce average processing time by automating redundant processes.  </p>
                          </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                      <div className="sale-info-img">
                          <img src='/assets/img/ServiceCloud_CustomerService.svg' alt='ServiceCloud_CustomerService' />
                      </div>
                  </div>
                  </div>    
              </div>
          </section>
          <section className='sale-info'>
              <div className='container'>
                  <div className='row'>
                  <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                          <div className="sale-info-img">
                              <img src='/assets/img/ServiceCloud_Warranty.svg' alt='ServiceCloud_Warranty' />
                          </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                          <div className="sale-info-cont">
                              <p className='salefor-serclo'><strong>Rights and warranty management</strong><br/></p>
                              <p>Entitlement helps an organization track the level of service a customer is “entitled” to receive Improve agency utilization by giving agents immediate access to the type of support they can provide customers.</p>
                              <p className='salefor-serclo'><strong>Boost Service Cloud with Experience Cloud (formerly Community)</strong><br/></p>
                              <p>Enhance case navigation by implementing a customer-facing community or self-service knowledge center. Customers can help themselves by accessing the knowledge base stored in Salesforce.</p>
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
                              <p className='salefor-serclo'><strong>Maximize your return on investment</strong><br/></p>
                              <p>For any organization that sends team members to the field, implementing and optimizing Salesforce Field Service can deliver significant value Empower your employees to deliver connected service in the field Increase productivity, assign tasks with smart scheduling, increase first-time remediation rates, and make smarter decisions so you can continue to provide customers with personalized support.</p>
                          </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                          <div className="sale-info-img">
                              <img src='/assets/img/ServiceCloud_Onsite.svg' alt='ServiceCloud_Onsite' />
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
