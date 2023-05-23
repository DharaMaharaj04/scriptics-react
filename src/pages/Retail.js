import React, {Component} from 'react';
import { Helmet } from 'react-helmet';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Retail extends Component {

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
                                    <img src="/assets/img/Retail/AI.jpg" />
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
                                    <img src="/assets/img/Retail/Initial Design.jpg" />
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
                                    <img src="/assets/img/Retail/Strategy and consulting.jpg" />
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
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12' style={{paadding:0}}>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                                    <div className="indus-info">
                                        <h2 className="indus-title_1">Purpose-Driven. Resilient. Adaptable.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="srv-info">
                                <p>The retail industry is witnessing a paradigm shift. Rapidly evolving technologies, changing customer expectations, and emerging digital firms are driving widespread disruption. Clearly, from a plethora of new products, markets, and customer segments to the burgeoning expansion of sales and marketing channels (like mobile and social commerce), retail is at a tipping point. </p>
                                <p>Customers are now demanding rich shopping experiences that are personalized, hyper-connected, and engaging. Additionally, several forces are revolutionizing the landscape: the explosion of data and connected devices, software defined infrastructure, cloud enabled as-a-service and experience, and outcome-driven digital platforms. This makes it imperative for retailers to showcase agility in tech adoption and business process optimization.</p>
                            </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6  fadeInUp  Wow from-left">
                                <img className="srv-con-img" src="/assets/img/Inner Images/retail.jpg"/>
                            </div>
                            <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                                <div className="srv-info">
                                    <h4 className="indus-info">In fact, 21 CE organizations are recognized by five key tenets: experience-centricity, outcome-based, agile and lean-focused, service-oriented, and ecosystem-driven. We provide following services:</h4>
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
                                    <p>Our Digital & Analytics services helps design and build key platform components of customers’ Digital-Technology-Footprint to power the Digital transformation journey. </p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                    <p>At IoT WoRKS we help create entirely new services that deliver measurable business outcomes. These experience will have an increasing role in differentiating enterprises </p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                    <p>Our Applications business is structured, allowing us to offer clients a full lifecycle of systems integration consulting services and a unified approach to developing the right solutions for their business needs.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                    <p>Artificial intelligence-driven automation platform. It consists of machine learning components, automation modules, orchestration components, well-proven monitoring tools, knowledge management, and a reporting layer.</p>
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
                                        <p>AI-powered data core to deliver insights: Competencies to build a digital foundation that vastly outperforms competition through game changing organizational capabilities by reimagining the core processes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                        <p>Portfolio Health  Review: We track following key matrices month over month/year over year bases for credit card product (Overall as well as DM v/s Non DM; By Card type, Month on book, By customer segment. </p>
                                    </div>
                                </div>
                                </div>
                                <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                    <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                        <p>Segmentation: We help businesses segment/group their current and/or new customer bases into specialized smaller groups that are distinct in their needs, demographics and behavior. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }     
}
