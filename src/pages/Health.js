import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Helmet } from 'react-helmet';
export class Health extends Component{
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
        <div>
            <Helmet>
            </Helmet>
            <section className='srv-main'>
                <OwlCarousel className="owl-theme" {...options} >
                    <div className='slide-1'>  
                        <div className='slide-img'>
                            <img src="/assets/img/Health/AI.jpg" />
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
                            <img src="/assets/img/Health/Initial Design.jpg" />
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
                            <img src="/assets/img/Health/Strategy and consulting.jpg" />
                            <div className='slider-overlay-amethyst'></div>
                        </div>
                        <div className='caption'>
                            <div className='container'>
                                <div className='row'> 
                                    <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
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
            <section className='srv-content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 col-md-12 col-sm-12 col-xs-12 fadeInUp animated from-left'>
                            <h3>SCRIPTICS TRADEMARKED AI DRIVEN HEALTH CONSULTING</h3>                    
                        </div>
                        <div className='col-12 col-lg-6 col-md-12 col-sm-12 col-xs-12'></div>
                    </div>
                    <div className='row indus-info'> 
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 fadeInUp animated from-left'>
                            <p>Exponential increase in the adoption of Digital is a huge disruptive force that is leading to consumers of tomorrow. This in turn demands healthcare organizations to gear up to manage the consumer experience effectively. Healthcare IT innovations play vital role in the digital era of the industry addressing the critical business transformation needs for adaptation and market sustenance. While increased cost of care, industry consolidation and regulatory compliance are few of the challenges faced by healthcare companies they are in parallel gearing up to leverage the Next Gen Technologies around Automation, AI, Analytics and digital experience. Organizations can thrust growth across the value chain through advanced technology supported business strategy.</p>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 indus-img-col fadeInUp animated from-right'>
                            <img src="/assets/img/animal-pharma-lead.png" />
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
                                <h4>EHR / Arra Meaningful Use Optimization Services</h4>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                            <div className="image_with_text">
                                <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                <h4>Scriptics Managed Services, Infrastructure Services</h4>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                            <div className="image_with_text">
                                <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                <h4>IT Application Development and Maintenance Services</h4>
                            </div>
                        </div>
                        <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-3 fadeInUp animated from-right ctrl-width-mob">
                            <div className="image_with_text">
                                <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                <h4>Hospital Information Systems Center of Excellence</h4>
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
                                    <p>AI-powered data core to deliver insights: Competencies to build a digital foundation that vastly outperforms competition through game changing organizational capabilities by reimagining the core processes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                    <p>Always-on learning: to drive continuous improvement by reskilling - both human and virtual workforce through transferring digital skills along with ideas from a cross-section of industries and innovation ecosystems</p>
                                </div>
                            </div>
                        </div>
                        <div className="srv-capability-box col-12 col-lg-4 fadeInUp Wow from-bottom">
                            <div className="capa_image_with_text">
                                <div className="capa_img">
                                    <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                    <p>Experience layer at scale: To create new enterprise-wide digital capability that enables unprecedented business growth which will help transform your business.</p>
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



export default Health