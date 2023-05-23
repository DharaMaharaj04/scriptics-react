import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import emailjs from 'emailjs-com';


export default class CyberSecurity extends Component {
  render() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_6vbelus', 'template_a5pjohh', e.target, 'I2gXrmkHRH1ZvdDVt')
          .then((result) => {
              console.log(result.text + 'mail send');
              alert("Your email has been sent");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    const cyber_pdfs = {
        loop: true,
        margin: 0,
        items: 4,
        autoplay: false,
        nav: true,
        navText:["<img src='/assets/img/arrow-left.png'>","<img src='/assets/img/arrow-right.png'>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    };

    const options = {
        loop: false,
        margin: 0,
        items: 1,
        autoplay: true,
        dots: false,
        autoplay: false,
        dots: false
    };


    return (
        <div>
            <Helmet>
                <body id="page-service" />
            </Helmet>
            <div className='cysec-overlay'>
                <section className='srv-main'>
                        <OwlCarousel className="owl-theme" {...options} >
                            <div className='slide-1'>  
                                <div className='slide-img'>
                                    <img src='/assets/img/blackberry-lock.png' alt='blackberry_cyber_security' />   
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
                                                            <ul className="list dropdown-content list-inline">
                                                                <li className=''>Development & Maintenance</li>
                                                                <li className=''>Accelerate</li>
                                                                <li className=''>Insight</li>
                                                                <li className=''>Experience</li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="active dropdown relative drop-container">
                                                        <a href="#" className='serverice_menu textwh'><span >Experience</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                        <div className="bg-white">
                                                            <ul className="list dropdown-content list-inline">
                                                                <li className='ser-sub-lin'>
                                                                    <Link to='/blackberry_cybersecurity'>BlackBerry Cyber Security</Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link to='/soc'>SOC</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className='serverice_menu_last dropdown relative drop-container textwh'><span>BlackBerry Cyber Security</span></li>
                                                </ol>
                                            </div>  
                                            <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                                <div className='slide_content'>
                                                    <img src='/assets/img/Cybersecurity logo_white.png' alt='scriptics_blackberry' className='video_logo' />
                                                </div>
                                            </div>
                                        </div> 
                                    </div>     
                                </div>      
                            </div>
                        </OwlCarousel>
                    </section>
                    <section className='cyber_head'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 fadeInUp animated from-left'>
                                    <h3>Cyber Security</h3>                    
                                </div>
                                <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'></div>
                            </div>
                            <div className='row indus-info-cy'> 
                                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 fadeInUp animated from-left'>
                                <h4>We’ve never been more connected.<br/> Or more vulnerable.</h4>
                                <p>Cybersecurity has failed to keep up, because it fails to look ahead. Our intelligent security pairs artificial intelligence with machine learning to proactively protect your system from cyberthreats. It’s time to protect, prevent and respond.</p>
                                <img src='/assets/img/Scriptics blackberry logo - CYbe.png' /> 
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 indus-img-col fadeInUp animated from-right'>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4NtSuKkIzYc?start=15" title="YouTube video player" ></iframe>
                                </div>
                            </div>    
                        </div> 
                    </section>
                    <section className='cyber'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-12'>
                                    <OwlCarousel className="owl-theme" {...cyber_pdfs} >
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Solution</p>
                                                <p className="slider-title">SB-CylanceAVERT</p>
                                                <a className="slider-btn popup-button" href="/assets/docs/sb-cylance-avert.pdf" target="_blank">Download pdf</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Brochure</p>
                                                <p className="slider-title">BLACKBERRY ATHOC</p>
                                                <a className="slider-btn popup-button" href="/assets/docs/Brochure - AtHoc Suite - April 2022.pdf" target="_blank">Download pdf</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Brochure</p>
                                                <p className="slider-title">BlackBerry Desktop Quick Start Guide</p>
                                                <a className="slider-btn popup-button" href="/assests/docs/br-desktop-VDI.pdf" target="_blank">Download pdf</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Datasheet</p>
                                                <p className="slider-title">Secure Instant Messagingand Conferencing Platform for your Enterprise</p>
                                                <a className="slider-btn popup-button" href="BBM Enterprise - Data Sheet.pdf" target="_blank" >Download pdf</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Datasheet</p>
                                                <p className="slider-title">Secure Enterprise File Sync, Sharing and Content Collaboration</p>
                                                <a className="slider-btn popup-button" href="/assets/docs/BlackBerry_Workspaces_datasheet (1).pdf" target="_blank" >Download pdf</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Solution</p>
                                                <p className="slider-title">BlackBerry Spark Suite</p>
                                                <a className="slider-btn popup-button" href="/assests/docs/Solution-Brief_BlackBerry-Spark-Suite_Final.pdf" target="_blank">Download pdf</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Datasheet</p>
                                                <p className="slider-title">BLACKBERRY GUARD</p>
                                                <a className="slider-btn popup-button" href="/assests/docs/BlackBerry-Guard-2-0-Datasheet_12-21_FINAL.pdf" target="_blank">Download pdf</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Datasheet</p>
                                                <p className="slider-title">BLACKBERRY OPTICS</p>
                                                <a className="slider-btn popup-button" href="/assests/docs/BlackBerry-Optics-DS-v3.pdf" target="_blank" >Download pdf</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Solution</p>
                                                <p className="slider-title">BlackBerry-Optics, AI-Powered Endpoint Detection and Response</p>
                                                <a className="slider-btn popup-button" href="/assests/docs/br-desktop-VDI.pdf" target="_blank">Download pdf</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Approache</p>
                                                <p className="slider-title">BlackBerry Cylance vs. Traditional Security Approaches</p>
                                                <a className="slider-btn popup-button" href="/assests/docs/br-desktop-VDI.pdf" target="_blank" >Download pdf</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Datasheet</p>
                                                <p className="slider-title">BlackBerry Protect Future-Proof Endpoint Security</p>
                                                <a className="slider-btn popup-button" href="/assests/docs/br-desktop-VDI.pdf" target="_blank" >Download pdf</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Solution</p>
                                                <p className="slider-title">Brief Replacing Legacy AV</p>
                                                <a className="slider-btn popup-button" href="/assests/docs/br-desktop-VDI.pdf" target="_blank" >Download pdf</a>
                                            </div>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='cyber_box'>
                                                <p className="title-box">Datasheet</p>
                                                <p className="slider-title">BLACKBERRY PROTECT MOBILE DEVICES</p>
                                                <a className="slider-btn popup-button" href="/assests/docs/br-desktop-VDI.pdf" target="_blank" >Download pdf</a>
                                            </div>
                                        </div> 
                                    </OwlCarousel>
                                    
                                </div>
                            </div>    
                        </div> 
                    </section>
                </div>
                <section>
                    <div className=''>
                    <div className="wrapper">
                                        <div className="popup-box">
                                            <h3>To Know more about Cyber security offerings</h3>
                                            <a className="close-button popup-close" href="#">x</a>
                                            <div className="form-group">
                                                <form method="post" onSubmit={sendEmail}>
                                                    <input type="email" name="useremail-id" required placeholder="Please Enter your email" />
                                                    <input type="tel" name="user-number" required placeholder="Please Enter your number"  pattern="[0-9]{3}[0-9]{3}[0-9]{4}" />
                                                    <button type="submit" id="subscribe">Download</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                    </div>
                </section>
        </div>
    )
  }
}
