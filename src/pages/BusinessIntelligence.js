import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class BusinessIntelligence extends Component {
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
                                <img src="/assets/img/BusinessIntelligence/Banner/AI for Gaming.jpg" alt='AI for Gaming' />
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
                                                
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Business Intelligence</span></li>
                                            </ol>    
                                        </div>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">Smart Strategies for Success: Leveraging Business Intelligence</h2>
                                               
                                            </div>
                                        </div>
                                    </div> 
                                </div>     
                            </div>      
                        </div>
                        <div className='slide-2'>
                            <div className='slide-img'>
                                <img src="/assets/img/BusinessIntelligence/Banner/Design and Interaction.jpg" alt='Design and Interaction' />
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
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Business Intelligence</span></li>
                                            </ol>    
                                        </div>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">Mastering Metrics: Driving Business Success with Data Analytics</h2>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>    
                        </div>
                        <div className='slide-3'>
                            <div className='slide-img'>
                                <img src="/assets/img/BusinessIntelligence/Banner/Strategy and consulting.jpg"  alt='Strategy and consulting'/>
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
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Business Intelligence</span></li>
                                            </ol>    
                                        </div> 
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color  mb-xs-10">Visionary Analytics: Seeing Beyond the Data</h2>
                                                
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
                                <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                    <h3>Prompt Decision-Making with Insights from Business Intelligence Solutions.</h3>
                                    
                                </div>
                            </div> 
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp animated from-right">
                                <div className="srv-info">
                                    <p>We, at Scriptics, reveal to you the complete essence of the data. We enable you to improve your processes, decisions and be better than the rest by using Business Intelligence. We help you understand and better the activities data mining, process analysis, descriptive analysis and performance benchmarking, which play a huge role in putting Business Intelligence to work. We convert data into perspectives that become an essential aid to your decision-making. We aim to empower you with information required to make data-based decisions.</p>
                                    <p>In the fast-paced world of competitive business, Business Intelligence give us competitive edge, an advantage over the rest. Data no longer remains just information occupying Terabytes of space, it is interpreted, converted, analyzed, sifted through, channelized to make you and your organization the best in the market.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp animated from-left">
                                <img className="srv-con-img" src="/assets/img/Inner Images/Business intelligence.jpg" />
                            </div>
                            <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                                <div className="srv-info">
                                    <h4 className="srv-info">We, using business intelligence empower you not only to make decisions for existing situations but also predict trends, forecasts etc. Through Business Intelligence, we at Scriptics, provide the following services –</h4>
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
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 fadeInUp  Wow from-right">
                                <h2>CAPABILITIES</h2>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
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
                                    <p>All organizations, irrespective of size can avail the benefits of Big Data Analysis through us. </p>
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
                                    <p>We ensure to help you maneuver the quality, quantity, and complexity of data through Big Data Analysis.</p>
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
