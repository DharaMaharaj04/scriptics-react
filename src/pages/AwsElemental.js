import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class AwsElemental extends Component {
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
                <section className="srv-img" style={{background:`url(/assets/img/cloud_service-1.jpg) no-repeat center`}}>
                </section>
                <section className="srv-content">
                    <div className="container">
                        <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="srv-info">
                                    <h3 className="srv-info">Bring Your Creation to Life. Optimize Your Production. Implement Everywhere.</h3>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <div className="srv-info">
                                    <p> Scriptics combines the vast capabilities of the Amazon Web Services cloud with cutting-edge video expertise to enable a platform for media innovation and deliver your valuable content to life.</p>
                                    <p>Scriptics has the #1 Internal AWS Partner Score in the US. Scriptics partnered with Amazon Web Services to deliver best-in-class services to your company in any phase of your cloud adaptation journey. We are among the select AWS Elemental partners. We have AWS media experts who provide professional services to our customers.</p>
                                    <p>“We Keep our Heads in the Cloud So You Don’t Have To.”</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <img className="srv-con-img" src="/assets/img/network-cloud.jpg" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capability cloud_pro1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <h3 className="text-center cloud_title">Products</h3>
                                <p className="text-center white-color">Scriptics provides the latest solutions for the following AWS media services:</p>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Media Connect</h3>
                                    <p>AWS Elemental MediaConnect is a high-quality transport service for live video between broadcasters and content owners using the cloud and fiber-connections.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Mediaconvert</h3>
                                    </div>
                                    <p>Easily create video on-demand (VOD) content for broadcast and multiscreen delivery at scale with AWS Elemental MediaConvert, a file-based video transcoding service with broadcast-grade features.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Medialive</h3>
                                    </div>
                                    <p>Create high-quality video streams for delivery to broadcast televisions and internet-connected multiscreen devices with AWS Elemental MediaLive is a broadcast-grade live video processing service.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">AWS Elemental Mediapackage</h3>
                                    </div>
                                    <p>Prepare and protect your video for delivery over the internet from a single video input. AWS Elemental MediaPackage creates video streams formatted to play across a wide range of devices.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Mediastore</h3>
                                    </div>
                                    <p>Deliver live streaming video content with AWS Elemental MediaStore, an AWS storage service optimized for media that gives you performance, consistency, and low latency.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Mediatailor</h3>
                                    </div>
                                    <p>A channel assembly and personalized service to create linear OTT channels using existing video content and monetize those channels, live-streams, and VOD content with personalized advertising.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="srv-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-1g-12">
                                <div className="text-center">
                                    <h3>Enter the Future of Media & Entertainment with Scriptics.</h3>
                                    <p>Transform content production, media supply chain broadcasts, direct-to-consumer & streaming analytics with the most purpose-built capabilities of any cloud.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>            
                <section className="faq">
                    <div className="container">
                    <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingTop:50,paddingBottom:20}}>
                                <h2>On-Premises</h2>
                            </div>
                        </div>
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Live
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                    Encode live video on-premises for events and 24/7 streams with AWS Elemental Live. Convert inputs into live outputs for broadcast and multiscreen video delivery.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Server
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                    Prepare file-based video on-premises for on-demand distribution with AWS Elemental Server.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Conductor
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                    Simplify management for on-premise video encoding and manage video networks for live and on-demand content with AWS Elemental Conductor.
                                    </div>
                                </div>    
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading4">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        Link
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                    <div className="panel-body">
                                    Link HD for 1080p HD video and UHD for 4K HDR video with AWS Elemental Link Device Family.
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
