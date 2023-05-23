import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class ApplicationAssessment extends Component {
  render() {

    const options = {
        loop: false,
        margin: 0,
        items: 1,
        autoplay: true,
        dots: false,
        autoplay: false,
        dots: false
    }; 

    return (
      <div>
      <Helmet>
      </Helmet>
        <section className='srv-main'>
            <OwlCarousel className="owl-theme" {...options} >
                <div className='clo-ser'>  
                    <div className='slide-img'>
                        <img src='/assets/img/Cloud Service/app assess.jpg' alt='Application' />   
                        <div className='slider-overlay-amethyst'></div>  
                    </div>
                    <div className='caption'>
                        <div className='container'>
                            <div className='row'>
                                <div className='serv-link col-12'>
                                    <ol className=" nav-links">
                                        <li className="dropdown relative drop-container">
                                            <a href="#" className='serverice_menu'>Service<i className="text-uppercase" aria-hidden="true"></i></a>
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
                                            <a href="#" className='serverice_menu'><span >Accelerate</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                            <div className="bg-white">
                                                <ul className="list dropdown-content list-inline">
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/sales_force'>Sales Force</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/cloud_digital_transfomation'>Cloud Digital Transfomation</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                            
                                        <li className='serverice_menu_last dropdown relative drop-container'><span>Cloud Digital Transfomation</span></li>
                                    </ol>
                                </div>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className='slide_content'>
                                        <h2 className='white-color'>Application Assessment</h2>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>  
            </OwlCarousel>
        </section> 
        <section className='Scr-cld-nav'>
            <div className=''>
                <nav>
                    <li className='active'><a href="#1">Methodology</a></li>
                    <li><a href='#2'>Our Offering</a></li>
                    <li><a href="#3">Industries</a></li>
                </nav>
          
                <div className="scrolling-box">
                    <section id="1" className='clo-meth'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h2 className='text-center'>Our Methodology</h2>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/Cloud-Consulting0A.svg' alt="Cloud-Consulting" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Design</h3>
                                            <p>Stakeholder meetings are the starting point for Scriptics' standardized
                                            application assessment approach. Key needs such as future roadmap and scalability, as
                                            well as technological stack, source code, and application-level dependencies, are
                                            documented.
                                            </p>   
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/Cloud-Strategy.svg' alt="Cloud-Strategy" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Define</h3>
                                            <p>Review the information acquired during the discovery phase and identify
                                            conclusions from the sessions held using a tool-based assessment technique. To decide on
                                            next steps, choose either automated or human assessment for the existing application
                                            suite.
                                            </p>    
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/Cloud-Migration-Deployment.svg' alt="Cloud-Migration-Deployment" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Deliver</h3>
                                            <p>Receive application evaluation reports based on the 6 Pillars of the AWS
                                            Well-Architected Framework and witness high-level code reviews. Utilize tool-based
                                            assessment outputs to obtain detailed results and recommendations for improvement.
                                            </p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    
                    </section>
                    <section id='2' className='our-off clo-framework'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <img src='/assets/img/Accelerate-Application-Assessment-DS-1.jpg' alt='Accelerate-Application-Assessment-DS' />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="3" className='clo-indus'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h2 className='text-center'>Industries</h2>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <img src='/assets/img/financial-services.jpg'  alt='financial-services' />
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <div className='clo-indu'>
                                        <h3>Financial Industries</h3>
                                        <p>48 prestigious financial services companies have put their trust in Scriptics to manage a cloud-led, agile-first digital transformation. Utilizing strategic roadmaps for infrastructure modernization and security, they have reduced overall expenditures by 50% while achieving over 60% better time-to-delivery.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row cfcr'>
                            
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <div className='clo-indu'>
                                        <h3>Banking & Insurance </h3>
                                        <p>In order to close their data centers ahead of schedule, Scriptics has
                                        provided native cloud solutions and cloud migration services to 28 international banks
                                        and insurance companies. Scriptics's advanced analytics models, SecOps, cloud banking
                                        solutions, and modernization plans enable them to save 70% of their time while saving
                                        60% of their money.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <img src='/assets/img/banking-insurance.jpg'  alt='banking-insurance' />
                                </div>
                            </div>
                            <div className='row'>    
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <img src='/assets/img/media-entertainment.jpg'  alt='media-entertainment' />
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <div className='clo-indu'>
                                        <h3>Media & Entertainment</h3>
                                        <p>22 M&E firms around the world have delegated Scriptics to
                                        modernize and scale out their media platforms so that millions of consumers can access
                                        them easily. They've secured their applications with agility and deployed them on the
                                        public cloud to meet regulatory obligations while saving money.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row cfcr'>    
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <div className='clo-indu'>
                                        <h3>Telecom</h3>
                                        <p>The analytics, modernisation, and ML/AI solutions provided by Scriptics have
                                        simplified the digitization and modernization projects of ten telecom players. It has
                                        enabled them to establish fully automated workflows, increase user involvement by more
                                        than 50%, and speed insights delivery while maintaining 99% process correctness.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <img src='/assets/img/Telecommunication-1.jpg'  alt='Telecommunication' />
                                </div>
                            </div>
                            <div className='row'>    
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <img src='/assets/img/technology.jpg'  alt='technology' />
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <div className='clo-indu'>
                                        <h3>Technology</h3>
                                        <p>Scriptics has vast experience providing cloud migration, managed services,
                                        advanced analytics, and business insight to 75 technology firms. This not only increased
                                        their business performance by more than 60% on average, but also enabled on-demand
                                        scalability with over 30% cost savings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>    
      </div>
    )
  }
}
