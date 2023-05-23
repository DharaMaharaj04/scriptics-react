import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



export class SignalProcessing extends Component {
    
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
                            <img src="/assets/img/DigitalSignalProcessing/gaming.jpg" />
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
                                            
                                            <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Digital Signal Processing</span></li>
                                        </ol>
                                    </div>
                                    <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                        <div className='slide_content'>
                                            <h2 className="h2-slide white-color mb-xs-10">Elevate your audio experience with cutting-edge Digital Signal Processing</h2>
                                           
                                        </div>
                                    </div>
                                </div> 
                            </div>     
                        </div>      
                    </div>
                    <div className='slide-2'>
                        <div className='slide-img'>
                            <img src="/assets/img/DigitalSignalProcessing/Design.jpg" />
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
                                            <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Digital Signal Processing</span></li>
                                        </ol>
                                    </div>
                                    <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                        <div className='slide_content'>
                                            <h2 className="h2-slide white-color mb-xs-10">Our DSP software: the future of audio processing</h2>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>    
                    </div>
                    <div className='slide-3'>
                        <div className='slide-img'>
                            <img src="/assets/img/DigitalSignalProcessing/Banner/Strategy and consultation.jpg"  alt='Strategy and consulting' />
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
                                            <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Digital Signal Processing</span></li>
                                        </ol>
                                    </div>
                                    <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 fadeInUp  Wow from-bottom'>
                                        <div className='slide_content'>
                                            <h2 className="h2-slide white-color mb-xs-10">Explore the limitless possibilities of DSP</h2>
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
                                        <h2 className="indus-title_1">Derive maximum power from data for path-breaking innovations and futuristic solutions</h2>
                                    </div>
                                </div>
                            </div>
                                <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-righ">
                                    <div className="srv-info">
                                        <p>In today’s digital era, no product is devoid of digital signal processing. Digital signal processing has become the essential element of all devices that has wireless connectivity, automatic control, measurement sensors, video, and audio.</p>
                                        <p>Scriptics has an excellent team of digital signal processing experts with in-depth DSP knowledge that can integrate complex software development experience and processors with battle-tested tools and methods for building innovative and distinguished products that meet the distinct requirements of our clients.</p>
                                        <p>Contact us to know more about our DSP capabilities and how we can help meet your requirements, today!</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-1g-6  fadeInUp  Wow from-left">
                                    <img className="srv-con-img" src="/assets/img/Inner Images/Signal processing .jpg"/>
                                </div>
                                <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                                    <div className="srv-info">
                                        <h4 className="srv-info">How do we do things differently?<br/></h4>
                                        <p>Scriptics leverages the fact that the earlier digital signal processors have been transformed in recent times into extremely complex SoC (system-on-chip) integrated circuits that feature multi-core architecture and acceleration engines to transfer processing onto highly dedicated hardware units.</p>
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
                                        <p>Complementary Firmware: Our development team wisely crafts the firmware to complement the device hardware while ensuring real-time operation and optimization of processing resources.</p>
                                    </div>
                                </div>
                                <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                    <div className="image_with_text">
                                        <img src="/assets/img/discover (1).svg" alt="service level icon 2"/>
                                        <p>Superior skills: Our superior Digital Signal Processing skills empower us to address problems that require the integration of advanced computer vision, machine learning expertise, and cutting-edge Artificial Intelligence technologies.</p>
                                    </div>
                                </div>
                                <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                    <div className="image_with_text">
                                        <img src="/assets/img/development.svg" alt="service level icon 3"/>
                                        <p>Pioneer in use of MEMS sensors: We, a company that remains at the forefront of digital signal processing technology, pioneered the use of small and low-power MEMS sensors at convenient locations for tracking applications, especially in devices for the health industry. </p>
                                    </div>
                                </div>
                                <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                    <div className="image_with_text">
                                        <img src="/assets/img/automation (1).svg" alt="service level icon 4"/>
                                        <p>Enable Adoption of Radio: Scriptics takes pride in utilizing highly integrated programmable processors that are application-specific to enable the adoption of the software-defined radio in a variety of devices such as cellular, wireless, and satellite networks. </p>
                                    </div>
                                </div>
                                <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                    <div className="image_with_text">
                                        <img src="/assets/img/innovation.svg" alt="service level icon 5"/>
                                        <p>Experienced in DSP implementations: Backed by 6 years of industry experience, Scriptics has a proven track record of being a part of numerous breakthrough projects in DSP. Our DSP profile is characterized by interesting innovations and successful DSP implementations for high-profile clients utilizing the latest DSP practices and techniques.</p>
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
                                        <p>Our expertise in Mathematics combined with an incredible algorithm design capability have enabled Scriptics to exceed our clients’ expectations in terms of power and purpose. </p>
                                    </div>
                                </div>
                                <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                    <div className="capa_image_with_text">
                                        <div className="capa_img">
                                            <img src="/assets/img/Mask Group 2.svg" alt="capabilities"/>
                                        </div>
                                        <p>We are well-equipped with the trending technologies to deal with the complex software development cycle of the DSP domain and guarantee sophisticated and seamless hardware/software integration.  </p>
                                    </div>
                                </div>
                                <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                    <div className="capa_image_with_text">
                                        <div className="capa_img">
                                            <img src="/assets/img/Mask Group 3.svg" alt="capabilities"/>
                                        </div>
                                        <p>Software test facility that is robust, secure, scalable, Sophisticated design and analysis tools</p>
                                    </div>
                                </div>
                                <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                    <div className="capa_image_with_text">
                                        <div className="capa_img">
                                            <img src="/assets/img/Mask Group 4.svg" alt="capabilities"/>
                                        </div>
                                        <p>AI research facility, Electronic manufacturing facility , Specialist software for modeling and simulation</p>
                                    </div>
                                </div>
                                <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                    <div className="capa_image_with_text">
                                        <div className="capa_img">
                                            <img src="/assets/img/Mask Group 5.svg" alt="capabilities"/>
                                        </div>
                                        <p>Our DSP architects have a clear understanding of DSP algorithms to ensure efficient implementation of such algorithms within cycle and memory constraints. Our DSP professionals can incorporate diagnostic capabilities into the code that enables extensive visualization of program execution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )
    }
}
export default SignalProcessing
