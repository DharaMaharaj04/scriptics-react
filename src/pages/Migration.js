import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Migration extends Component {
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
                <body id="page-cloud" />
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
                <section className="capability cloud_pro1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <h3 className="text-center cloud_title">Say goodbye to server maintenance! Migrate your business to the cloud</h3>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Fast, Flexible, And Less Overhead</h3>
                                    </div>
                                    <p>Cloud-enabled businesses run programs more efficiently at lower costs with maximum scalable flexibility.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Upskill Your Team With Cloud Expertise</h3>
                                    </div>
                                    <p>Your team will gain new skills and resources through Cloud Deployment with training, tools, and security. Our Solutions Architects will be at your service to help your business reach its goals!</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Ensure Best Practices With AWS Cloud Migration</h3>
                                    </div>
                                    <p>Maintain best practices for Migration while driving organizational change, establishing foundational readiness, and adopting an AWS iterative approach to migration execution.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Beyond Left and Shift</h3>
                                    <p>Achieve your goals by embracing cloud-native thinking.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Competitive Edge With The Cloud</h3>
                                    </div>
                                    <p>Unlike wasteful results from your average lift-and-shift migrations, we move your workloads quickly, efficiently, and affordably with our innovative platform and pipeline-driven approach.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
