import React, {Component} from 'react'
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class CapitalMarket extends Component {
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
                                <img src="/assets/img/Capital Markets/AI.jpg" />
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
                                <img src="/assets/img/Capital Markets/Initial Design.jpg" />
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
                                <img src="/assets/img/Capital Markets/Strategy and consulting.jpg" />
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
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="indus-info">
                                    <h2 className="indus-title_1">Get a major boost in front, mid and back office functions with an experienced partner</h2>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                            <div className="indus-info" style={{display:"block"}}>
                                <p>The financial services industry is witnessing a phase of rapid transformation driven by disruptive technologies such as Smart Contracts, Blockchain, Automation, and Artificial Intelligence. A number of factors including shrinking revenues, increasing costs, and capital market compliance add further to the challenges.</p>
                                <p>Today’s customers demand a rich ecosystem of value-added services and a holistic capital and asset management solutions. This requires a complete reconfiguration of core systems, enabling a competitive advantage as well as sustenance in the long run. Globally, most companies are now embracing agile and experience-centric capital market and asset management solutions.</p>
                            </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <img className="srv-con-img" src="/assets/img/Inner Images/Capital market.jpg"/>
                            </div>
                            <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                                <div className="srv-info">
                                    <h4 className="indus-info">Capital market risk management relies heavily on modern and efficient capital management software. Our services for the capital markets sector include:</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="srv-level">
                    <div className="container">
                        <div className="row">
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="image_with_text">
                                    <img src="/assets/img/choice.svg" alt="industries level icon 1"/>
                                    <p>Investment Research & Analytics Management</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                    <p>Foreign Exchange Services & Market Data Solutions</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                    <p>Retail Brokerage App Development & Testing</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                    <p>Financial Accounting & Reporting Software</p>
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
                                    <div className="capa_img">
                                        <img src="/assets/img/robotic.svg" alt="capabilities icon 1"/>
                                        <p>Scriptics's SOA-based enterprise architecture is geared to action solutions that act in conformity with MiFID II requirements. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                        <p>Scriptics's capital market solution suite serves investment banks, prime brokerages, and dealers in alignment with current market standards. </p>
                                    </div>
                                </div>
                                </div>
                                <div className="srv-capability-box col-12 col-lg-4">
                                    <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                        <p>Reporting Factory offers a solution that strengthens core capabilities, converging multiple operational lines into a unified and uber-efficient substratum.</p>
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


