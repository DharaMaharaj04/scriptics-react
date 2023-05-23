import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class AIAutomation extends Component {
    render() {

        const options = {
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            dots: true,
            autoplay: true,
            dots: true
        };

        return (
            <div className="service-page">
                <Helmet>
                    <body id="page-service" />
                </Helmet>
                
                <section className='srv-main'>
                    <OwlCarousel className="owl-theme" {...options} >
                        <div className='slide-1'>  
                            <div className='slide-img'>
                                <img src="/assets/img/AIandAutomation/Banner/AI-for-gaming.jpg" alt='AIforGaming' />
                                <div className='slider-overlay-amethyst'></div>
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='serv-link col-12'>
                                            <ol className=" nav-links">
			                                    <li className="dropdown relative drop-container">
                                                    <a href="#" className='serverice_menu textwh'>Service<i className="text-uppercase " aria-hidden="true"></i></a>
                                                    <div className="bg-white">
                                                        <ul className="list dropdown-content list-inline ">
                                                            <li className='ser-sub-lin'>Development & Maintenance</li>
                                                            <li className='ser-sub-lin'>Accelerate</li>
                                                            <li className='ser-sub-lin'>Insight</li>
                                                            <li className='ser-sub-lin'>Experience</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="active dropdown relative drop-container ">
                                                    <a href="#" className='serverice_menu textwh'><span >Insight</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                    <div className="bg-white ">
                                                        <ul className="list row dropdown-content">
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/ai_automation'>Ai & Automation</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/statistical_data_analysis'>Statistical Data Analytics</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/business_intelligence'>Business Intelligence</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/computer_vision'>Computer Vision</Link>
                                                                    </li>
                                                                    
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/big_data_analysis'>Big data analytics</Link>
                                                                    </li>
                                                                    
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/signal_processing'>Digital Signal Processing</Link>
                                                                    </li>
                                                                    
                                                                    
                                                                </ul>
                                                            </li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/natural_language_processing'>Natural Language processing</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/deep_learning'>Deep learning</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/scriptics_ai_gaming'>AI & Gaming</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Ai & Automation</span></li>
                                            </ol>
                                        </div>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">Leveraging Automation to Save Time, Fuel and Resources</h2>
                                            </div>
                                        </div>
                                    </div> 
                                </div>     
                            </div>      
                        </div>
                        <div className='slide-2'>
                            <div className='slide-img'>
                                <img src="/assets/img/AIandAutomation/Banner/Consultationandstrategy.jpg" alt='Consultationandstrategy' />
                                <div className='slider-overlay-amethyst'></div>
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='serv-link col-12'>
                                            <ol className=" nav-links">
                                                <li className="dropdown relative drop-container">
                                                    <a href="#" className='serverice_menu textwh'>Service<i className="text-uppercase " aria-hidden="true"></i></a>
                                                    <div className="bg-white">
                                                        <ul className="list dropdown-content list-inline ">
                                                            <li className='ser-sub-lin'>Development & Maintenance</li>
                                                            <li className='ser-sub-lin'>Accelerate</li>
                                                            <li className='ser-sub-lin'>Insight</li>
                                                            <li className='ser-sub-lin'>Experience</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="active dropdown relative drop-container ">
                                                    <a href="#" className='serverice_menu textwh'><span >Insight</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                    <div className="bg-white ">
                                                        <ul className="list row dropdown-content">
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/ai_automation'>Ai & Automation</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/statistical_data_analysis'>Statistical Data Analytics</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/business_intelligence'>Business Intelligence</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/computer_vision'>Computer Vision</Link>
                                                                    </li>
                                                                    
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/big_data_analysis'>Big data analytics</Link>
                                                                    </li>
                                                                    
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/signal_processing'>Digital Signal Processing</Link>
                                                                    </li>
                                                                    
                                                                    
                                                                </ul>
                                                            </li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/natural_language_processing'>Natural Language processing</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/deep_learning'>Deep learning</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/scriptics_ai_gaming'>AI & Gaming</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Ai & Automation</span></li>
                                            </ol>
                                        </div>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide mb-xs-10">Ai & Automation INSIGHT Tools to Ease Your Daily Life</h2>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>    
                        </div>
                        <div className='slide-3'>
                            <div className='slide-img'>
                                <img src="/assets/img/AIandAutomation/Banner/DesignInteractivetech.png" alt='DesignInteractivetech' />
                                <div className='slider-overlay-amethyst'></div>
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='serv-link col-12'>
                                            <ol className=" nav-links">
			                                    <li className="dropdown relative drop-container">
                                                    <a href="#" className='serverice_menu textwh'>Service<i className="text-uppercase " aria-hidden="true"></i></a>
                                                    <div className="bg-white">
                                                        <ul className="list dropdown-content list-inline ">
                                                            <li className='ser-sub-lin'>Development & Maintenance</li>
                                                            <li className='ser-sub-lin'>Accelerate</li>
                                                            <li className='ser-sub-lin'>Insight</li>
                                                            <li className='ser-sub-lin'>Experience</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="active dropdown relative drop-container ">
                                                    <a href="#" className='serverice_menu textwh'><span >Insight</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                    <div className="bg-white ">
                                                        <ul className="list row dropdown-content">
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/ai_automation'>Ai & Automation</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/statistical_data_analysis'>Statistical Data Analytics</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/business_intelligence'>Business Intelligence</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/computer_vision'>Computer Vision</Link>
                                                                    </li>
                                                                    
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/big_data_analysis'>Big data analytics</Link>
                                                                    </li>
                                                                    
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/signal_processing'>Digital Signal Processing</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/natural_language_processing'>Natural Language processing</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/deep_learning'>Deep learning</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/scriptics_ai_gaming'>AI & Gaming</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Ai & Automation</span></li>
                                            </ol>
                                        </div> 
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">The Power and Possibilities of AI and Automation in Today's World</h2>
                                                
                                            </div>
                                        </div>
                                    </div> 
                                </div>    
                            </div>
                        </div>
                    </OwlCarousel>
                </section>
                <section className='srv-content'>
                    <div className='container'>
                        
                        <div className='row indus-info'> 
                            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 fadeInUp animated from-left'>
                                <h3>Unleash Resilient and Intelligent Automation for Delivering Value at Scale.</h3>
                                <p>As organizations across diverse domains and industries are trying to incorporate digital transformation as part of their processes, many of them are struggling to grab their opportunities at the same pace. They commit to the idea of digital change but seldom achieve the scale, precision, acknowledgement, and response to volatile market disruptions. After all, the real-world obstacles test their resilience to the tee.</p>
                                <p>At Scriptics, we ensure that organizations are not swayed by digital disruption by empowering them with Artificial Intelligence (AI).</p>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 indus-img-col fadeInUp animated from-right'>
                                <img src="/assets/img/Inner Images/ai_automation.jpg" />
                            </div>
                        </div>    
                    </div> 
                </section>
                <section className='srv-level'>
                    <div className='container'>
                        <div className='row'>
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                                <div className="image_with_text">
                                    <img src="/assets/img/choice.svg" alt="industries level icon 1"/>
                                    <h4>Our use case discovery process ensures that the client’s business operations are aligned with prompt change management methods.</h4>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                    <h4>We develop and deliver a comprehensive automation ecosystem, pooling the best experts and resources to promote organization-wide operational excellence.</h4>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                    <h4>We conduct thorough evaluation and assess the organization on AI maturity.</h4>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                    <h4>Our robotic process automation (RPA) capabilities and chatbot development services ensure their swift and streamlined utility in ideal use cases that demand automation.</h4>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                                <div className="image_with_text">
                                    <img src="/assets/img/development.svg" alt="industries level icon 4"/>
                                    <h4>Our custom solutions enable democratization of artificial intelligence and drives hassle-free adoption across the enterprise.</h4>
                                </div>
                            </div>
                        </div>    
                    </div>
                </section>
                <section className='capability'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <h2>CAPABILITIES</h2>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/robotic.svg" alt="capabilities icon 1"/>
                                        <p>Integration of automation and analytics with organization processes with chatbots etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                        <p>Devise and apply technologies that simplify and automate routine processes that do not require manual intervention.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 3.svg" alt="capabilities icon 3"/>
                                        <p>Reinvent and redefine marketing, procurement, human resource, asset management and many more functions across the enterprise.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 4.svg" alt="capabilities icon 2"/>
                                        <p>Embed business intelligence from diverse departments including marketing, sales, advertising, supply chain, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                        <p>Generate relevant insights to drive informed decision-making with subsequent speed-to-value impact.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
