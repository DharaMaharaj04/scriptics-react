import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class WearableComputing extends Component {
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
            <div className="spacer"></div>
            <section className='srv-main'>
            <OwlCarousel className="owl-theme" {...options} >
                <div className='slide-1'>  
                    <div className='slide-img'>
                        <img src="/assets/img/employee-experience-lead.png" />
                        <div className='slider-overlay-amethyst'></div>
                    </div>
                    <div className='caption'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                    <div className='slide_content'>
                                        <h2 className="h2-slide white-color mb-xs-10">MAKE THE FIRST MOVE WITH STRATEGY & CONSULTING</h2>
                                       
                                    </div>
                                </div>
                            </div> 
                        </div>     
                    </div>      
                </div>
                <div className='slide-2'>
                    <div className='slide-img'>
                        <img src="/assets/img/cloud-data-cultivates-cs-lead.png" />
                        <div className='slider-overlay-amethyst'></div>
                    </div>
                    <div className='caption'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                    <div className='slide_content'>
                                        <h2 className="h2-slide white-color mb-xs-10">INITIAL DESIGN WITH INTERACTIVE TECHNOLOGY</h2>
                                        
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>    
                </div>
                <div className='slide-3'>
                    <div className='slide-img'>
                        <img src="/assets/img/enterprise-agility-lead-mob.jpg" />
                        <div className='slider-overlay-amethyst'></div>
                    </div>
                    <div className='caption'>
                        <div className='container'>
                            <div className='row'> 
                                <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 fadeInUp  Wow from-bottom'>
                                    <div className='slide_content'>
                                        <h2 className="h2-slide white-color mb-xs-10">SCRIPTICS, AI FOR GAMING EXPERIENCE</h2>
                                        
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
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                                    <div className="indus-info">
                                        <h2 className="indus-title_1">New horizons with our advanced wearable computing solutions</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="srv-info">
                                    <p className="srv-info">The tech industry has been seeing a huge demand for wearable devices since its infancy after the evolution of smartphones. Like any booming market, the future is bright with the consumers demanding smartwatches, wristbands, pebble glasses, and so on. Today, smartphone users want everything on the tap of their smaller screens and on the go. Scriptics unveils the future of wearable computing development with its team of adroit developers working on building solutions to integrate it with top-notch platforms.</p>
                                    <p>The main motive behind developing and integrating wearable computing devices with smartphones and platform-specific apps is to devise new interfaces. We primarily focus on three factors while serving wearable computing services to our clients from various industrial sources<br/><br/>
                                    <ul>
                                        <li>Amplifying computational power</li>
                                        <li>Providing personalized experience</li>
                                        <li>Minimizing complexity</li>
                                    </ul>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6  fadeInUp  Wow from-left">
                                <img className="srv-con-img" src="/assets/img/ai_ (1).png" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                            </div>
                            <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                                <div className="srv-info">
                                    <h4 className="srv-info">Scriptics provides comprehensive wearable computing app development services to deliver cohesive solutions: </h4>
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
                                    <p>Store and process user data with a dynamic dashboard to online cloud-based secured data: AWS, Google Cloud, Microsoft Azure.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="service level icon 2"/>
                                    <p>Reliable backend with integrated APIs for tracking and measuring user data. </p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/development.svg" alt="service level icon 3"/>
                                    <p>Web and app dashboard development with responsive designs.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="service level icon 4"/>
                                    <p>Mobile app to sync data from custom device via secured connectivity protocols and APIs.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="service level icon 5"/>
                                    <p>Visionary dashboard for analytics and insights into data, reporting, and sync to the cloud.</p>
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
                                    <p>Our proficient team of iOS developers have experience working on complex iWatch app projects that involve configurations with enhanced security and better user experience. </p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities"/>
                                    </div>
                                    <p>Android, the largest powerhouse of wearables, has an enormous user base. With that, our team promises exceptional quality designs and built wearables for the latest versions of android wears with comprehensive integration with smartphones and other gadgets.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 3.svg" alt="capabilities"/>
                                    </div>
                                    <p>Empower glasses with smart features to promote your business to the masses with our ever-so-personalized and stunning Google glass applications.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 4.svg" alt="capabilities"/>
                                    </div>
                                    <p>We process the smooth transition of users from smartphones to wristwear, glasses, hearables, and other devices. </p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities"/>
                                    </div>
                                    <p>Our end-to-end approach of wearable computing app development targets all platforms and devices with robust backend infrastructure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
