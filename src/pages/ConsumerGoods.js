import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';  

export default class ConsumerGoods extends Component {
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
                                <img src="/assets/img/Consumer goods/AI.jpg" />
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
                                <img src="/assets/img/Consumer goods/Initial Design.jpg" />
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
                                <img src="/assets/img/Consumer goods/Strategy and consulting.jpg" />
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
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12" style={{padding:0}}>
                                <div className='col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right'>
                                    <div className="indus-info">
                                        <h2 className="indus-title_1">Connecting brands with consumers</h2>
                                    </div>
                                </div>    
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="srv-info">
                                <p>As Consumer Goods organizations transition to a 21st Century Enterprise model, several key challenges have emerged. These include increasing consumer diversity, tightening regulations, and rapidly expanding distribution systems. The Consumer Goods industry must also undergo a comprehensive systems overhaul in order to deliver personalized, locale-specific products.</p>
                                <p>Digitalization must be implemented as the foundation for operational transformation, allowing firms to embrace business flexibility, utilize a global workforce, and ensure interactive experiences. A connected IoT network is key to gathering customer data, for aligning products to diverse customer needs. Automation can not only optimize existing manufacturer-wholesale-retail cycles, but also unfold new modes of distribution via omnichannel pipelines.</p>
                            </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-left">
                                <img className="srv-con-img" src="/assets/img/Inner Images/Consumer goods.jpg"/>
                            </div>
                            <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                                <div className="srv-info">
                                    <h4 className="indus-info">A cognitive supply chain aligns demand with supply, streamlines warehousing, and optimizes logistics. We provide following services:</h4>
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
                                    <p>Sustainable Solutions powering Fast-Fashion Brands to deliver unparalleled value across complete Fiber-to-Fashion Lifecycle</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                    <p>Smart Technology Solutions driving Zero-Wastewhilst enabling seamless farm–to-fork lifecycle and convenience for shoppers</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                    <p>Digital Solutions that help the high street Retailers to drive hyper Personalization strategies</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                    <p>Bringing Value to Life through solutions that are sustainable, inclusive and innovative</p>
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
                                        <p>Integrated Retail Planning framework helps align your supply chain and merchandize plan with long term business strategies </p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                        <p>Enhance the quality of communication, the speed of collaboration and employee engagement</p>
                                    </div>
                                </div>
                                </div>
                                <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                    <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                        <p>Mobility solutions that incorporate latest technological trends such as NFC, coupons/payment, geo-fencing alerts, etc</p>
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


