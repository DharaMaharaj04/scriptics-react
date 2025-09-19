import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class AboutUs extends Component {
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
                    <body id="page-case-studies" />
                </Helmet> 
                <section className="sec about_page">
                    <div className='over_content'>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className='head-light'>
                                        <h2 className="h2-heading white-color mb-xs-10">About Scriptics</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </section>
                <section className='esg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 text-center'>
                                <img src='/assets/img/vertical-line.png' alt='vertical-line' />
                                <h2 className='text-center'>Our ESG Priorities</h2>
                                <div className='col-12 col-lg-4 col-md-12 col-sm-12 fadeInUp  Wow from-bottom'>
                                    <div className="ripple_hover shadow-box1 zoom_wrap1 bg-jade-light">
                                        <div className="above_div">
                                            <div className="zoom_text"> 
                                                <div className="img_wrap">
                                                    <img src="/assets/img/env.png" alt="Environmental" className="img-responsive" />
                                                </div>
                                                <p><strong className="block mb20 fz-30">Environmental <br/></strong>Serve the preservation of our planet by shaping and sharing technology solutions </p>
                                            </div>
                                        </div>
                                        <span className="ripple_effect"></span>
                                    </div>
                                </div>    
                                <div className='col-12 col-lg-4 col-md-12 col-sm-12 fadeInUp  Wow from-bottom'>
                                    <div className="ripple_hover shadow-box1 zoom_wrap1 bg-sapphire-light">
                                        <div className="above_div">
                                            <div className="zoom_text"> 
                                            <div className="img_wrap"><img src="/assets/img/social.png" alt="Social" className="img-responsive" /></div>
                                            <p><strong className="block mb20 fz-30">Social<br/></strong>Serve the development of people by shaping a future with meaningful opportunities for all </p>
                                        </div>
                                    </div>
                                    <span className="ripple_effect"></span></div>
                                </div>
                                <div className='col-12 col-lg-4 col-md-12 col-sm-12 fadeInUp  Wow from-bottom'>
                                    <div className="ripple_hover shadow-box1 zoom_wrap1 bg-amethyst-light">
                                        <div className="above_div">
                                            <div className="zoom_text">
                                                <div className="img_wrap"><img src="/assets/img/governace.png" alt="Governance" className="img-responsive" /></div>
                                                <p><strong className="block mb20 fz-30">Governance</strong>Serve the interests of all our stakeholders by leading through our core values </p>
                                             </div>
                                        </div>
                                        <span className="ripple_effect"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" about_us" id="about_us">
                    <div className='container'>
                        <div className='row'>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 text-center over_content wow fadeInUp animated from-right">
                                <img src='/assets/img/vertical-line.png' alt='vertical-line' />
                                <h2 className="h2-heading">About Us</h2>
                                <p className="col-lg-12 col-md-12 col-md-offset-2 col-sm-12 col-xs-12 para-txt light-gray text-center">WE’RE DEVELOPERS, DESIGNERS, DIRECTORS, STRATEGISTS. WE ARE ONE GLOBAL TEAM</p>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb50 wow fadeInUp animated from-left">
                                <div className="aboutus-grid text-center">
                                    <p className="aboutus-grid-title"> <span>200</span></p>
                                    <p className="aboutus-grid-desc">Scriptics employees Worldwide</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb50 wow fadeInUp animated from-right">
                                <div className="aboutus-grid text-center">
                                    <p className="aboutus-grid-title"><span>7</span></p>
                                    <p className="aboutus-grid-desc">Cities with Scriptics locations and operations</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb50 wow fadeInUp animated from-left">
                                <div className="aboutus-grid text-center">
                                    <p className="aboutus-grid-title"> <span>15</span>+</p>
                                    <p className="aboutus-grid-desc">Partners in our ecosystem</p>
                                </div>
                            </div>    
                        </div>
                    </div> 
                </section>
                <section id="know-us" className="know-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-sm-12 text-center">
                                <h2 className="know-us-head">WE’RE DEVELOPERS, DESIGNERS, DIRECTORS, STRATEGISTS. WE ARE ONE GLOBAL TEAM</h2>
                                <p className="know-us-para">We have over a decade of experience in the creative industry, producing exciting experiences for brands that are as smart, as they are effective.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="team" className="team fadeInUp  Wow from-right">
                    <div className="container">   
                        <div className='row'>
                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 fadeInUp '>
                                <div id="tabs" className='tabs team_pro'>
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item"><a className="nav-link active" data-index="0" data-toggle="tab" href="#tab-0" role="tab">Founder</a></li>
                                        <li className="nav-item"><a className="nav-link white-color" data-index="1" data-toggle="tab" href="#tab-1" role="tab">Board of Directors</a></li>
                                        <li className="nav-item"><a className="nav-link white-color" data-index="2" data-toggle="tab" href="#tab-2" role="tab">Executive Officers</a></li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade tab-style  active show" id="tab-0" role="tabpanel">
                                        <div className='loc_tab founder'>
                                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                                <h2 className=''>Founder</h2>
                                            </div>
                                            <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                                                <div className='eqh-box'>
                                                    <div className='team-desc text-center'>
                                                        <h4>Harsh Macwan</h4>
                                                        <p className="title">CEO</p>
                                                        <div className='linked'>
                                                            <a href="https://www.linkedin.com/in/harshmacwan"><i className="fa fa-linkedin"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade tab-style" id="tab-1" role="tabpanel">
                                        <div className='loc_tab bood row'>
                                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                                <h2>Board of Directors</h2>
                                            </div>
                                            <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                                                <div className='eqh-box'>
                                                    <div className='team-desc text-center'>
                                                        <h4>Nirav Patel</h4>
                                                        <p className="title">CTO</p>
                                                        <div className='linked'>
                                                            <a href="https://www.linkedin.com/in/nirav-patel-18288823a"><i className="fa fa-linkedin"></i></a>
                                                        </div>
                                                    </div>
                                                </div>    
                                            </div>
    
                                            <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                                                <div className='eqh-box'>
                                                    <div className='team-desc text-center'>
                                                        <h4>Abhilasha Malhotra, MBA</h4>
                                                        <p className="title">CPO</p>
                                                        <div className='linked'>
                                                            <a href="https://www.linkedin.com/in/abhilasha-malhotra-806a28205"><i className="fa fa-linkedin"></i></a>
                                                        </div>
                                                    </div>
                                                </div>    
                                            </div>
                                            
                                            <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>           
                                                <div className='eqh-box'>
                                                    <div className='team-desc text-center'>
                                                        <h4>Bhargav Bhatt</h4>
                                                        <p className="title">Director</p>
                                                        <div className='linked'>
                                                            <a href="https://www.linkedin.com/in/bbhatt99/"><i className="fa fa-linkedin"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade tab-style" id="tab-2" role="tabpanel">
                                        <div className='loc_tab row exo'>
                                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                                <h2>Executive Officers</h2>
                                            </div>
                                            <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                                                <div className='eqh-box'>
                                                    <div className='team-desc text-center'>
                                                        <h4>S. Taposh, PMP</h4>
                                                        <p className="title">VP – Global business</p>
                                                        <div className='linked'>
                                                            <a href="https://www.linkedin.com/in/shahrear-taposh-a3113021"><i className="fa fa-linkedin"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                                                <div className='eqh-box'>
                                                    <div className='team-desc text-center'>
                                                        <h4>VIRAL BHALIA</h4>
                                                        <p className="title">VP - Engineering</p>
                                                        <div className='linked'>
                                                            <a href="https://www.linkedin.com/in/viral-bhalia"><i className="fa fa-linkedin"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                                                <div className='eqh-box'>
                                                    <div className='team-desc text-center'>
                                                        <h4>Darpan Patel, M.tech</h4>
                                                        <p className="title">VP - Software</p>
                                                        <div className='linked'>
                                                            <a href="https://www.linkedin.com/in/darpan-korat-74a78393"><i className="fa fa-linkedin"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                                                <div className='eqh-box'>
                                                    <div className='team-desc text-center'>
                                                        <h4>Pravesh Macwan, CPA</h4>
                                                        <p className="title">VP - Finance</p>
                                                        <div className='linked'>
                                                            <a href="https://www.linkedin.com/in/pravesh-victor-macwan-04928146"><i className="fa fa-linkedin"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>   
                                            <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                                                <div className='eqh-box'>
                                                    <div className='team-desc text-center'>
                                                        <h4>Chakradhar</h4>
                                                        <p className="title">VP - Product & Partnerships</p>
                                                        <div className='linked'>
                                                            <a href="http://linkedin.com/in/chakradhar-tarivitla-cspo%C2%AE-63055720"><i className="fa fa-linkedin"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>   
                                        </div>      
                                    </div>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </section>
                <section id="work-stratery" className="work-stratery fadeInUp">
                    <div className="col-12 col-lg-12 col-sm-12 text-center">
                        <img src='/assets/img/vertical-line.png' alt='vertical-line' />
                        <h2 className='h2-heading'>WORK STRATEGY</h2>
                    </div>
                </section>
                <section className="work-caro work work-des" id={5}>
                    <div className="container-fuild">
                        <div className="row align-items-center">
                            <OwlCarousel className="owl-theme" {...options} >
                                <div className='slide-1'>  
                                    <div className='slide-img'>
                                        <img src="/assets/img/Inner Images/ESG_Slider_Strategy and Consuting.jpg" />
                                        <div className='slider-overlay-amethyst'></div>
                                    </div>
                                    <div className='caption'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                                                    <div className='slide_content'>
                                                        <h2 className="h2-slide white-color mb-xs-10">MAKE THE FIRST MOVE WITH STRATEGY & CONSULTING</h2>
                                                        <p className="white-color about-para">At Scriptics, our real-world and advanced quality solutions will help you power your digitalization.</p>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>     
                                    </div>      
                                </div>
                                <div className='slide-2'>  
                                    <div className='slide-img'>
                                        <img src="/assets/img/Inner Images/ESG_Slider_Design and Interactive.jpg" />
                                        <div className='slider-overlay-amethyst'></div>
                                    </div>
                                    <div className='caption'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                                                    <div className='slide_content'>
                                                        <h2 className="h2-slide white-color mb-xs-10">INITIAL DESIGN WITH INTERACTIVE TECHNOLOGY</h2>
                                                        <p className="white-color about-para">Implement technologies to amplify and automate processes without any human intervention.</p>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>     
                                    </div>      
                                </div>
                                <div className='slide-3'>  
                                    <div className='slide-img'>
                                        <img src="/assets/img/Inner Images/ESG_Slider_AI and Automation.jpg" />
                                        <div className='slider-overlay-amethyst'></div>
                                    </div>
                                    <div className='caption'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                                                    <div className='slide_content'>
                                                        <h2 className="h2-slide white-color mb-xs-10">SCRIPTICS, AI FOR GAMING EXPERIENCE</h2>
                                                        <p className="white-color about-para">Uncover the layers of entertainment with an AI-powered Gaming experience to all the gamers.</p>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>     
                                    </div>      
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section>        
                <section className="work-caro work work-mob" id={5}>
                    <div className="container">
                        <div className="row align-items-center">
                            <OwlCarousel className="owl-theme" {...options} >
                                <div className='slide-1'>  
                                    <div className='slide-img'>
                                        <img src="/assets/img/factory-boosts-growth-lead.png" />
                                        <div className='slider-overlay-amethyst'></div>
                                    </div>
                                    <div className='caption'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                                                    <div className='slide_content'>
                                                        <h2 className="h2-slide white-color mb-xs-10">MAKE THE FIRST MOVE WITH STRATEGY & CONSULTING</h2>
                                                        <p className="white-color ">At Scriptics, our real-world and advanced quality solutions will help you power your digitalization.</p>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>     
                                    </div>      
                                </div>
                                <div className='slide-2'>  
                                    <div className='slide-img'>
                                        <img src="/assets/img/interactive.jpeg" />
                                        <div className='slider-overlay-amethyst'></div>
                                    </div>
                                    <div className='caption'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                                                    <div className='slide_content'>
                                                        <h2 className="h2-slide white-color mb-xs-10">INITIAL DESIGN WITH INTERACTIVE TECHNOLOGY</h2>
                                                        <p className="white-color ">Implement technologies to amplify and automate processes without any human intervention.</p>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>     
                                    </div>      
                                </div>
                                <div className='slide-3'>  
                                    <div className='slide-img'>
                                        <img src="/assets/img/emerging-digital-engagement-lead-mob.png" />
                                        <div className='slider-overlay-amethyst'></div>
                                    </div>
                                    <div className='caption'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                                                    <div className='slide_content'>
                                                        <h2 className="h2-slide white-color mb-xs-10">SCRIPTICS, AI FOR GAMING EXPERIENCE</h2>
                                                        <p className="white-color ">Uncover the layers of entertainment with an AI-powered Gaming experience to all the gamers.</p>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>     
                                    </div>      
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section>        
                <section className='aim'>
                    <div className='container'>
                        <div className='row gx-0 g-0 no-gutters'>
                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 text-center fadeInUp  Wow from-right'>
                                <div className='our-purpose hrsh-aim'>
                                    <h2 className="title-sml mb20">“THE SECRET OF CHANGE IS TO FOCUS ALL OF YOUR ENERGY, NOT ON FIGHTING THE OLD, BUT BUILDING ON THE NEW.”</h2>
                                    <p className="para-ovr">HARSH MACWAN</p>
                                    <p>President</p>
                                </div>    
                            </div>
                        </div>
                    </div>
                </section>  
                <section id="technology-we-follow" className="technology-follow">
                </section>   
                <section id="industry-we-serve" className="indtry-serve">
                    <div className="col-12 col-lg-12 col-sm-12 text-center">
                        <h2>INDUSTRIES WE SERVE</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="circle-grid">
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20 fadeInUp  Wow from-bottom"> 
                                    <a href="/industry_health">
                                        <div className="bg-queries pdg-queries">
                                            <h4>Health</h4>
                                            <span className="head-abtus-bdr"></span>
                                            <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20 fadeInUp  Wow from-bottom"> 
                                    <a href="/industry_checmical">
                                        <div className="bg-queries pdg-queries">
                                            <h4>Chemicals</h4>
                                            <span className="head-abtus-bdr"></span>
                                            <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20 fadeInUp  Wow from-bottom"> 
                                    <a href="/industry_retail">
                                        <div className="bg-queries pdg-queries">
                                            <h4>Retail</h4>
                                            <span className="head-abtus-bdr"></span>
                                            <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20 fadeInUp  Wow from-bottom"> 
                                    <a href="/industry_automative">
                                        <div className="bg-queries pdg-queries">
                                            <h4>Automative</h4>
                                            <span className="head-abtus-bdr"></span>
                                            <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20 fadeInUp  Wow from-bottom"> 
                                    <a href="/industry_dental">
                                        <div className="bg-queries pdg-queries">
                                            <h4>Dental</h4>
                                            <span className="head-abtus-bdr"></span>
                                            <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20 fadeInUp  Wow from-bottom"> 
                                    <a href="/industry_consumer_goods">
                                        <div className="bg-queries pdg-queries">
                                            <h4>Consumer Goods</h4>
                                            <span className="head-abtus-bdr"></span>
                                            <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                        </div>
                                    </a>
                                </div>
                        
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20 fadeInUp  Wow from-bottom"> 
                                    <a href="/industry_bfsi">
                                        <div className="bg-queries pdg-queries">
                                            <h4>BSFI</h4>
                                            <span className="head-abtus-bdr"></span>
                                            <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20 fadeInUp  Wow from-bottom"> 
                                    <a href="/industry_energy">
                                        <div className="bg-queries pdg-queries">
                                            <h4>Energy</h4>
                                            <span className="head-abtus-bdr"></span>
                                            <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20 fadeInUp  Wow from-bottom"> 
                                    <a href="/industry_oil_and_gas">
                                        <div className="bg-queries pdg-queries">
                                            <h4>Oil and Gas</h4>
                                            <span className="head-abtus-bdr"></span>
                                            <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20 fadeInUp  Wow from-bottom"> 
                                    <a href="/industry_capital_market">
                                        <div className="bg-queries pdg-queries">
                                            <h4>Capital Markets</h4>
                                            <span className="head-abtus-bdr"></span>
                                            <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20 fadeInUp  Wow from-bottom"> 
                                    <a href="/industry_insurance">
                                        <div className="bg-queries pdg-queries">
                                            <h4>Insurance</h4>
                                            <span className="head-abtus-bdr"></span>
                                            <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20 fadeInUp  Wow from-bottom"> 
                                    <a href="/industry_media_entertainment">
                                        <div className="bg-queries pdg-queries">
                                            <h4>Media and Entertainment</h4>
                                            <span className="head-abtus-bdr"></span>
                                            <div className="yellow-dots-left-sml"> <span></span> <span></span> <span></span> </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
            </div>
        )
    }
}
export default AboutUs
