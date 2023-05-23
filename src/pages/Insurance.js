import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Insurance extends Component {
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
            <div className="industries-page">
                <Helmet>
                    <body id="page-industry" className="industry-health"/>
                </Helmet>
                <section className='srv-main'>
                        <OwlCarousel className="owl-theme" {...options} >
                            <div className='slide-1'>  
                                <div className='slide-img'>
                                    <img src="/assets/img/Insurance/AI.jpg" />
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
                                    <img src="/assets/img/Insurance/Initial Design.jpg" />
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
                                    <img src="/assets/img/Insurance/Strategy and consulting.jpg" />
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
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12' style={{padding:0}}>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                                    <div className="indus-info">
                                        <h2 className="indus-title_1">SCRIPTICS TRADEMARKED AI DRIVEN HEALTH CONSULTING</h2>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="srv-info">
                                <p>The Internet of Things (IoT) has changed the way industries function. In the insurance industry, non-traditional players now have access to large volumes of customer data and are able to provide holistic pre-purchase and purchase information, albeit in an unstructured form.</p>
                                <p>This is a huge advantage for customers in the pre-purchase stage, and this new empowerment has made them more demanding, aware, and considered of their insurance requirements.</p>
                            </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-left">
                                <img className="srv-con-img" src="/assets/img/Inner Images/insurance.jpg"/>
                            </div>
                            <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                                <div className="srv-info">
                                    <h4 className="indus-info">With industry-relevant expertise and a historical track record, our solutions enable insurers to:</h4>
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
                                    <img src="/assets/img/choice.svg" alt="industries level icon 1"/>
                                    <p>Adopt digital tools for a clearer understanding of customer specific requirements</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                    <p>Help enhance processes within the industry</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                    <p>Provide seamless customer experiences</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                    <p>Create tailored products to suit their needs</p>
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
                                    <div className="capa_img">
                                        <img src="/assets/img/robotic.svg" alt="capabilities icon 1"/>
                                        <p>Automation of processes to make them more efficient by creating more straight-through processing (STP)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                        <p>Creation of customer self-service systems to reduce the burden on back-office operations.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                    <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                        <p>Our insurance offerings help insurers rethink their strategies to cater to these new discerning customers by renewing their analytics infrastructure</p>
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
