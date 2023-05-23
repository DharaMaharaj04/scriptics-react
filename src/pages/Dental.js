import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Dental extends Component {
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
              { /* <section className="srv-level">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <h3>Dental</h3>
                                <p>Whether it’s an official tool or a Doctor’s application, we help both Doctor's and patient deliver more effective, efficient, and affordable healthcare with Scriptics trademarked AI-Driven Health consulting.</p>
                                <div id="append"><a class='main-btn' href='https://dashboard.scriptics.ai'>Doctor Login </a></div> 
                            </div>
                        </div>
                    </div>
        </section>   */}
                <section className='srv-main'>
                    <OwlCarousel className="owl-theme" {...options} >
                        <div className='slide-1'>  
                            <div className='slide-img'>
                                <img src="/assets/img/Dental/AI.jpg" />
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
                                <img src="/assets/img/Dental/Initial Design.jpg" />
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
                                <img src="/assets/img/Dental/strategy and consulting.jpg" />
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
                                    <h2 className="indus-title_1">SCRIPTICS TRADEMARKED AI DRIVEN HEALTH CONSULTING</h2>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="srv-info">
                                <p>The field of orthodontics made a quantum leap with a technique for removable clear aligners by Chishti and Wirth in 1997, and today it really is possible to straighten teeth with nearly invisible appliances. Records required to begin aligner treatment can include a case submission form, upper and lower PVS impressions & PVS bite registration or Intraoral scans, full-mouth or panoramic X-rays, and facial and intraoral photographs. Tooth movement for clear aligners is done using advanced CAD/CAM software that accept intraoral scans and / or scanned impressions. The initial stage is segmentation of teeth that separates the teeth from the gums.</p>
                                <p> Scriptics Dental has developed a proprietary algorithm that automates segmentation and reduces treatment planning turnaround time.The treatment plan is produced that includes 3D models of the patient’s present and projected dentition, and information on how many aligners will be needed, along with any attachments and IPR (interproximal reduction) recommended. Following stage is the generation of individual CAD(stl) files for clear aligner fabrication that involves a series of incrementally different aligners for top and bottom teeth. The initial pair of aligners match the patient’s current anatomy for them to get accustomed to the aligners.</p>
                            </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-left">
                                <img className="srv-con-img" src="/assets/img/Inner Images/dental.jpg" />
                            </div>
                            <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12 fadeInUp  Wow from-right" style={{paddingTop:50}}>
                                <div className="srv-info">
                                    <h4 className="indus-info">The protocols for aligner orthodontics are still being refined and clear aligners are gaining popularity in the marketplace. Patients are eager to get their aligners and want them ASAP and at the lowest price possible. Scriptics Dentals proprietary software algorithm was developed with the following:</h4>
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
                                    <p>The most user-friendly treatment planning software with built in machine learning and AI</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="industries level icon 2"/>
                                    <p>Fastest turnaround time for treatment plan generations</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="industries level icon 3"/>
                                    <p>Cheapest treatment planning software in the market</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="industries level icon 4"/>
                                    <p>Advanced CAD/CAM software that accept intraoral scans and / or scanned impressions</p>
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
                                        <p>Machine Learning / AI / Automation </p>
                                    </div>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities icon 2"/>
                                        <p>Ability for Doctors to make minor tooth adjustments</p>
                                    </div>
                                </div>
                                </div>
                                <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                    <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities icon 3"/>
                                        <p>Web Based 3D Viewer (PC & Mac compatible), Mobile Friendly, Attachments / IPR</p>
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
