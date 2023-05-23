import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class BigDataAnalysis extends Component {
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
                                <img src="/assets/img/BigDataAnalytics/Banner/AIforGaming.jpg"  alt='AIforGaming' />
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
                                                                        <Link to='/ai_automation'>Ai & Automation</Link></li>
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
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Big Data Analysis</span></li>
                                            </ol>
                                        </div>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">Sense-Making in the Big Data Universe: Insights for a Better Tomorrow</h2>
                                            </div>
                                        </div>
                                    </div> 
                                </div>     
                            </div>      
                        </div>
                        <div className='slide-2'>
                            <div className='slide-img'>
                                <img src="/assets/img/BigDataAnalytics/Banner/Designandinteration.jpg" alt='Designandinteration' />
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
                                                                        <Link to='/ai_automation'>Ai & Automation</Link></li>
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
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Big Data Analysis</span></li>
                                            </ol>
                                        </div>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">Smart Data, Smarter Decisions: Harnessing the Power of Analytics for Strategic Insights</h2>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>    
                        </div>
                        <div className='slide-3'>
                            <div className='slide-img'>
                                <img src="/assets/img/BigDataAnalytics/Banner/Strategyandconsultation.jpg" alt='Strategyandconsultation' />
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
                                                                        <Link to='/ai_automation'>Ai & Automation</Link></li>
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
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Big Data Analysis</span></li>
                                            </ol>
                                        </div>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">Transform Your Data into Actionable Insights with Advanced Analytics Tools</h2>
                                            </div>
                                        </div>
                                    </div> 
                                </div>    
                            </div>
                        </div>
                    </OwlCarousel>
                </section>
                <section className="srv-content">
                    <div className="container">
                        <div className="row">  
                            <div className='col-12 col-sm-12 col-md-12 col-lg-12' style={{padding: 0}}>
                                <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                    <h3>Secure a competitive edge with our expertise in understanding and interpreting data.</h3>
                                </div>
                            </div>    
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="srv-info">
                                    <p>We, at Scriptics, help organizations to look at data from a different point of view, giving it perspective and purpose. We help you to understand the underlying, the things that often, do not come into sight immediately or are often neglected. Data is usually collected and stored in many forms – sizes, sources, processes may differ, We, through Big Data Analysis enable you to streamline and make sense of the vast amount of data that is in continuous inflow.</p>
                                    <p className="srv-info">Scriptics and its usage of Big Data Analysis help in enhanced decision making – both in speed and in quality. We enable the use of ultra-modern techniques of processing and interpreting data that aids in gaining the competitive advantage of knowing your market in a way like no other. Not only is it good for the business from the profits point of view, but also improves customer interactions and customer satisfaction.<br/>Some of the benefits offered by Scriptics through the mastery of Big Data Analysis include the following:</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-left">
                                <img className="srv-con-img" src="/assets/img/Inner Images/big data analysis.jpg" />
                            </div>
                            <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                                <div className="srv-info">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="srv-level">
                    <div className="container">
                        <div className="row">
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/choice.svg" alt="service level icon 1"/>
                                    <p>Optimum utilization of resources, including monetary resources</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="service level icon 2"/>
                                    <p>Fresh insight into new product development</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/development.svg" alt="service level icon 3"/>
                                    <p>Reduction in time taken to strategize and plan</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="service level icon 4"/>
                                    <p>Better understanding of customer preferences and the local environment</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="service level icon 5"/>
                                    <p>Increased efficiency in processes and in decision making</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capability">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <h2>CAPABILITIES</h2>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text">
                                    <img src="/assets/img/robotic.svg" alt="capabilities"/>
                                    <p>We cater to almost all streams of operations including retail, governance, healthcare, education, logistics etc.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities"/>
                                    </div>
                                    <p>All organizations, irrespective of size can avail the benefits of Big Data Analysis through us.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 3.svg" alt="capabilities"/>
                                    </div>
                                    <p>We aim at continuing to revolutionize the way organizations work and work towards adding edge to your operations.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 4.svg" alt="capabilities"/>
                                    </div>
                                    <p>We ensure to help you maneuver the quality, quantity, and complexity of data through Big Data Analysis. </p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities"/>
                                    </div>
                                    <p>Market Knowledge, Improve strategy and pricing, Innovation, Control and monitor online presence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
