import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class ComputerVision extends Component {
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
                                <img src="/assets/img/ComputerVision/Banner/AI-for-gaming.jpg" alt='AI-for-gaming' />
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
                                                
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Computer Vision</span></li>
                                            </ol>
                                        </div>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">Pixel Perfect: Achieving Precision with Computer Vision</h2>
                                            </div>
                                        </div>
                                    </div> 
                                </div>     
                            </div>      
                        </div>
                        <div className='slide-2'>
                            <div className='slide-img'>
                                <img src="/assets/img/ComputerVision/Banner/Design and Interaction.jpg" alt='Design and Interaction' />
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
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Computer Vision</span></li>
                                            </ol>
                                        </div>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide mb-xs-10">Seeing is Believing: The Next Frontier of Computer Vision Innovation</h2>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>    
                        </div>
                        <div className='slide-3'>
                            <div className='slide-img'>
                                <img src="/assets/img/ComputerVision/Banner/Strategy and consulation.jpg"  alt='Strategy and consulting' />
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
                                                
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Computer Vision</span></li>
                                            </ol>
                                        </div> 
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">The Digital Eye: Unraveling the Wonders of Computer Vision</h2>
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
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                                    <div className="indus-info">
                                        <h2 className="indus-title_1">Transform your vision into cutting-edge applications that gather insights.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="srv-info">
                                    <p className="srv-info">Over the past few decades, the evolution in technology has disrupted businesses in several ways. It has all been possible because of the cutting-edge technologies - Artificial learning and Machine learning. These technologies power applications to gather deep insights with every possible interaction and redefine the ecosystem with transformative solutions.</p>
                                    <p>At Scriptics, our real-world and advanced quality solutions will help you power your digitalization with comprehensive digital asset management.</p>
                                    <p>We create solutions that run on advanced algorithms to process images and videos and return actionable insights and information. Right from the identification of images based on their features, colours, objects, logos, and more to image and video analysis, our services guarantee customer satisfaction like no other. Our expert team of Machine Learning and Artificial Intelligence leverages the best tools and learnings to transform your customer experience into an innovative digital experience.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-left">
                                <img className="srv-con-img" src="/assets/img/Inner Images/Computer vision.jpg" />
                            </div>
                            <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                                <div className="srv-info">
                                    <h4 className="srv-info">Our team will help you capitalize the visual data and information with the help of comprehensive computer vision solutions through streamlined processes such as:</h4>
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
                                    <p>We conduct thorough evaluation and assess the organization on AI maturity</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="service level icon 2"/>
                                    <p>Our use case discovery process ensures that the client’s business operations are aligned with prompt change management methods.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/development.svg" alt="service level icon 3"/>
                                    <p>We develop and deliver a comprehensive automation ecosystem, pooling the best experts and resources to promote organization-wide operational excellence.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 ">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="service level icon 4"/>
                                    <p>Our robotic process automation (RPA) capabilities and chatbot development services ensure their swift and streamlined utility in ideal use cases that demand automation.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="service level icon 5"/>
                                    <p>Our custom solutions enable democratization of artificial intelligence and drives hassle-free adoption across the enterprise.</p>
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
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <img src="/assets/img/robotic.svg" alt="capabilities"/>
                                    <p>Enable enterprises to extract and obtain actionable insights from videos and images</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities"/>
                                    </div>
                                    <p>Generate actionable insights to capture the real-time image and video analytics to enable behavior detection and image tracking.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 3.svg" alt="capabilities"/>
                                    </div>
                                    <p>An amalgamation of business intelligence, artificial intelligence, and cutting-edge technologies to automate routine processes.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 4.svg" alt="capabilities"/>
                                    </div>
                                    <p>Refine the ongoing processes across the organization for better streamlined operations.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities"/>
                                    </div>
                                    <p>Streamline business processes across diverse departments including sales, department, marketing, etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
