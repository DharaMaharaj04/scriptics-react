import React, { Component } from 'react';
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

Modal.setAppElement("#root");

function FullPageScroll() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        className: "slider"
    };  

    return (
        <div>
            <nav className="front_slider">
                <ul className="">
                    <li className='text-colo-dark active l first'>
                        <a href=" " className="dot" data-scroll="future_technology">
                        <span className='slider_name a'>Future<br/>Technology</span></a>
                    </li>
                    <li className="text-colo-white l">
                        <a href="#digital_dentistry" className="dot" data-scroll="digital_dentistry">
                            <span className='slider_name a'>Digital<br/>Dentistry</span>
                        </a>
                    </li>
                    <li className="text-colo-white l">
                        <a href="#actionable_insights" className="dot" data-scroll="actionable_insights">
                            <span className='slider_name a'>Actionable <br/> Insights</span>
                        </a>
                    </li>
                    <li className="text-colo-white l">
                        <a href="#customer_service" className="dot" data-scroll="customer_service">
                            <span className='slider_name a'>Customer<br/>Service</span>
                        </a>
                    </li>
                    <li className='text-colo-dark l'>
                        <a href="#the_next" className="dot" data-scroll="the_next">
                            <span className='slider_name'>Insight</span>
                        </a>
                    </li>
                    <li className='text-colo-dark l'>
                        <a href="#about_us" className="dot" data-scroll="about_us">
                            <span className='slider_name'>About us</span>
                        </a>
                    </li>
                    <li className='text-colo-dark l'>
                        <a href="#partners" className="dot" data-scroll="partners">
                            <span className='slider_name'>Partners</span>
                        </a>
                    </li>
                    <li className='text-colo-dark l'>
                        <a href="#the_careers" className="dot" data-scroll="the_careers">
                            <span className='slider_name'>Careers</span>
                        </a>
                    </li>
                    <li className="text-colo-dark l last">
                        <a href="#contact_us" className="dot" data-scroll="contact_us">
                            <span className='slider_name a'>Contact us</span>
                        </a>
                    </li>
                    
                </ul>
            </nav>
            <div className="sections">
                <section className="sec future_technology nav_name" id="future_technology">
                    <div className='over_content'>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-12 col-lg-7 col-md-8 col-sm-12 col-xs-12 home_banner fadeInUp animated from-left">
                                    <div className='head-light'>
                                        <h1 className="h2-heading blue mb-xs-10">WE BELIEVE IN A FUTURE WHERE TECHNOLOGY MAKES YOUR WORLD BETTER.</h1>
                                        <Link className="btn btn-shutter-more text-uppercase firts-banner-btn" to="/future_technology">explore</Link>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>  
                </section>
                <section className="sec digital_dentistry nav_name" id="digital_dentistry">
                    <div className='over_content'>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-12 col-lg-7 col-md-8 col-sm-12 col-xs-12 home_banner fadeInUp animated from-right">
                                    <p className="case-cat">Case Studies - AI & Automation</p>
                                    <h1 className="h2-heading white-color mb-xs-10">CREATING NEW BENCHMARK FOR DIGITAL DENTISTRY WITH AI WORLD’S FIRST END TO END SOLUTION</h1>
                                    <Link className="btn btn-shutter-more text-uppercase" to="/case_study_automation">explore</Link>   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec talent_revol nav_name" id="actionable_insights">
                    <div className="over_content">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 col-md-8 col-sm-12 col-xs-12 home_banner p0 wow fadeInUp animated from-right appear">
                                    <h1 className="h2-heading white-color mb20 mb-xs-10">Actionable Insights</h1>
                                    <p>Turn data into actionable insights.</p>
                                    <a className="btn btn-shutter-more text-uppercase" href="/actionable_insights">explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec customer_service nav_name" id="customer_service">
                    <div className='over_content'>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-md-offset-6 col-xs-12"></div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-md-offset-6 col-xs-12 home_banner wow fadeInUp animated from-left">
                                    <p className="case-cat">Case Studies - BPO</p>
                                    <h1 className="h2-heading white-color mb20 mb-xs-10">WHAT IS SO GOOD ABOUT CUSTOMER SERVICE: SALES FORCE</h1>
                                    <a className="btn btn-shutter-more text-uppercase" href="/case_study_bpo">explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec the_next nav_name" id="the_next">
                    <div className='container'>
                        <div className='row'>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 text-center over_content wow fadeInUp animated from-right">
                                <img src='/assets/img/vertical-line.png' alt='vertical-line' />
                                <h2 className="h2-heading">Insight</h2>
                            </div>
                        </div>        
                        <div className='row'>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 px-0 wow  fadeInUp animated from-left">
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                    <div className="content">
                                        <div className="content-overlay"></div>
                                        <img alt="Experience" className="content-image" src="/assets/img/best-ai1.jpg" /> 
                                        <div className="content-details fadeIn-bottom fadIn_title1">
                                            <h3 className="content-title">Next Generation AI<br /></h3>
                                            <p className="content-text">
                                                <span className="hidden-1024">While Ai - Artificial Intelligence solves many unsolved puzzles for a better world and with more advance technology solutions, we can make a difference in the world. </span> 
                                            </p>
                                        </div>       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 px-0 wow fadeInUp animated from-right">
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                    <div className="content"> 
                                        <div className="content-overlay"></div>    
                                        <img alt="Insight" className="content-image" src="/assets/img/game-dev1.jpg" /> 
                                        <div className="content-details fadeIn-bottom fadIn_title2">
                                            <h3 className="content-title">Gaming Developing<br /></h3>
                                            <p className="content-text">
                                                <span className="hidden-1024">Scriptics, one of the best AI gaming developing companies, focuses on providing the best gameplay experience to all the gamers in the world.</span> 
                                            </p>
                                        </div>       
                                    </div>    
                                </div>
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                    <div className="content">    
                                        <div className="content-overlay"></div>       
                                        <img alt="Innovate" className="content-image" src="/assets/img/product-dev1.jpg" /> 
                                        <div className="content-details fadeIn-bottom fadIn_title3">
                                             <h3 className="content-title">Application Development<br /></h3>
                                             <p className="content-text">
                                                    <span className="hidden-1024">We offer a suite of application development services and custom solutions on various platforms which help you achieve strategic IT and business objectives.</span> 
                                             </p>
                                        </div>       
                                    </div>        
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 px-0 wow fadeInUp animated from-left">
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 ctrl-width-mob"> 
                                    <div className="content">            
                                        <div className="content-overlay"></div>           
                                        <div className='insight-img'>
                                            <img alt="Accelerate" className="content-image" src="/assets/img/application.jpg" />
                                        </div> 
                                         <div className="content-details fadeIn-bottom fadIn_title4">
                                            <h3 className="content-title">Product Development</h3>
                                             <p className="content-text">
                                                <span className="hidden-1024">We provide all the expertise and innovation you need to compete in your market of choice. We enable application availability without downtime or interruption.</span> 
                                            </p>
                                        </div>           
                                    </div>         
                                </div>
                                <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 ctrl-width-mob"> 
                                    <div className="content">           
                                        <div className="content-overlay"></div>        
                                        <img  alt="Assure" className="content-image" src="/assets/img/product-main1.jpg" /> 
                                        <div className="content-details fadeIn-bottom fadIn_title5">
                                           <h3 className="content-title">Production Develpoment</h3>
                                            <p className="content-text">
                                                <span className="hidden-1024">As a software application development, maintenance and support expert, Scriptics provides services designed to support our clients as their business grows and changes.</span> 
                                            </p>
                                        </div>       
                                    </div>
                                </div>    
                            </div>
                        </div>   
                        <div className="row expand_sec">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center">
                                <h3>Services</h3>
                                <div className="doMoreExpand"><a href="#" className="" data-toggle="modal" data-target="#largeModal1"><img src="/assets/img/explore_expand.svg" width="100" height="30" /> </a></div>
                            </div> 
                        
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center">
                                <h3>Industries</h3>
                                <div className="doMoreExpand"><a href="#" className="" data-toggle="modal" data-target="#largeModal2"><img src="/assets/img/explore_expand.svg" width="100" height="30" /> </a></div>
                                
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center">
                                <h3>cloud</h3>
                                <div className="doMoreExpand"><a href="#" className="" data-toggle="modal" data-target="#largeModal3"><img src="/assets/img/explore_expand.svg" width="100" height="30" /> </a></div>
                            </div>
                            
                            <div className="modal fade" id="largeModal1" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true" style={{background: "url('/assets/img/services.png')" }}>                    
                                <div className="modal-dialog"> 
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>  
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 modal_cont'>                                
                                                <h2>Take advanteage of our cutting edge technology consulting and services.</h2>
                                                <p>We offer a suite of application development & re-engineering  services and custom solutions on various platforms which help you achieve strategic IT and business objectives. From defining your requirements, documenting specifications, developing, testing, to integrating software applications across a myriad of platforms – we cover it all.</p>
                                            </div>  
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="modal fade" id="largeModal2" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">                    
                                <div className="modal-dialog"> 
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>  
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 modal_cont'>                                    
                                                <h2>We’ve rendered our expertise to the industry verticals for over a decade. </h2>
                                                <p>Over the past 12 years that we have been serving our clients, we have to build a strong clientele across 8 countries and across 15 myriad industries verticals. We have been projecting stellar performance in delivering some of the par excellence and cutting edge digital solutions to our clients.</p>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>    
                            <div className="modal fade" id="largeModal3" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">                    
                                <div className="modal-dialog"> 
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>  
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 modal_cont'>                               
                                                <h2>SCRIPTICS, MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE LEVERAGES THE BEST TOOLS AND LEARNINGS THE BEST TOOLS,</h2>
                                                <p>Scriptics is one of the leading deep learning companies that focus on the development of enterprise solutions with the combination of artificial intelligence and machine learning. Our Deep Learning experts provide a comprehensive solutions.</p>
                                            </div>  
                                        </div>
                                    </div>
                                </div>    
                            </div>            
                        </div>
                        
                        <div className='row gx-0 g-0 no-gutters'>
                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 text-center'>
                                <div className='our-purpose'>
                                    <h2 className="title-sml mb20">Our Purpose:</h2>
                                    <p className="para-ovr pt0 fontweight600">We believe in delivering the promised of technology where it improves people's lives and creating sustainable technology solutions for a cleaner and brighter tomorrow.</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </section>
                <section className="sec about_us nav_name" id="about_us">
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
                        <div className='row'>    
                            <div className='col-12 col-lg-5 col-md-12 col-sm-12 col-xs-12 news px-0 ctrl-width-mob wow fadeInUp animated from-right'>
                                <div className='col-eq-ht bg-yellow'>
                                    <div className='new_padd'>
                                        <h2>In the news</h2>
                                        <div className='pro_news'>
                                            <h4 className='news-desc'>Gujarat Biotechnology Research Centre (GBRC) has signed MoU with Scriptics Inc.
                                                <a href='https://timesofindia.indiatimes.com/city/vadodara/gbrc-inks-pact-with-canadian-co/articleshow/94670778.cms?utm_source=whatsapp&utm_medium=social&utm_campaign=TOIArticleshowicon'><img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" /></a>
                                            </h4>
                                        </div>
                                        <div className='pro_news'>
                                            <h4 className='news-desc'>Scriptics starting with new country- "Australia"
                                                <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" />
                                            </h4>
                                        </div>
                                        <div className='pro_news'>
                                            <h4 className='news-desc'>Invest Ontario and Toronto Business Development Centre supports to Scriptics for future development.
                                                <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" />
                                            </h4>
                                        </div>
                                        <div className='pro_news'>
                                            <h4 className='news-desc'>Scriptics will be attending at Collision Conf in Toronto 2022.
                                                <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg"/>
                                            </h4>
                                        </div>
                                        <div className='pro_news'>
                                            <h4 className='news-desc'>Scriptics, #ICYMI unlocking global market opportunities for startups with T-Hub.
                                                <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" />
                                            </h4>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 col-sm-12 px-0 wow fadeInUp animated from-right">
                                <div className='row col-eq-ht no-gutters'>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                        <div className="new_in"> 
                                            <img alt="Insight" className="content-image" src="/assets/img/strategy.png" /> 
                                            <div className="content-details fadeIn-bottom">
                                                <h3 className="content-title">STRATEGY<br /></h3>
                                            </div>      
                                        </div>
                                    </div>        
                                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                        <div className="new_in">    
                                            <img alt="Innovate" className="content-image" src="/assets/img/technology.png" /> 
                                            <div className="content-details fadeIn-bottom">
                                                <h3 className="content-title">TECHNOLOGY<br/></h3>    
                                            </div>       
                                        </div>        
                                    </div>
                            
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                        <div className="new_in">            
                                            <img alt="Accelerate" className="content-image" src="/assets/img/ai-game.png" /> 
                                            <div className="content-details fadeIn-bottom">
                                                <h3 className="content-title">AI FOR GAMING</h3>    
                                            </div>           
                                        </div>           
                                    </div>
                                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 ctrl-width-mob"> 
                                        <div className="new_in">           
                                            <img  alt="Assure" className="content-image" src="/assets/img/consult.png" /> 
                                            <div className="content-details fadeIn-bottom">
                                                <h3 className="content-title"> CONSULTING<br /></h3>    
                                            </div>       
                                        </div>
                                    </div>    
                                </div>    
                            </div>
                        </div>
                    </div> 
                </section>
                <section className='sec partners nav_name' id="partners">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
                                <img src='/assets/img/vertical-line.png' alt='vertical-line' />
                                <h2 className="h2-heading">Partners</h2>
                                <h2 className="partner-head">OUR PARTNER ECOSYSTEM</h2>
                                <h4 className="inner-head">Our aim is to harness the potential of these platforms at the greatest speed in the market, accelerating the path to value in all directions for our clients.</h4>
                                <img src="/assets/img/partner.png" alt="partner icon" className='eco-partner-img'/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec the_careers nav_name" id="the_careers">
                    <div className='container'>
                        <div className='row'>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 text-center over_content wow fadeInUp animated from-left">
                                <img src='/assets/img/vertical-line.png' alt='vertical-line' />
                                <h2 className="h2-heading">careers</h2>
                                <p className="col-lg-12 col-md-12 col-md-offset-2 col-sm-12 col-xs-12 para-txt light-gray text-center">We have over a decade of experience in the creative industry, producing exciting experiences for brands that are as smart, as they are effective.</p>
                            </div>
                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center wow fadeInUp animated from-right'>
                                <div className='career_opt'>
                                    <img src='/assets/img/disrupting-core-platform-economy.png'/>
                                </div>
                            </div>
                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center wow fadeInUp animated from-right'>    
                                <h4 className='careere_tlt'>Find Career opportunities </h4>
                                <a className="btn text-uppercase career_btn" href="/contact/#contact-us">Explore Careers</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec contact_us nav_name" id="contact_us">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-sm-12 contact_back col-xs-12'>
                                <div className='row'>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 mb-sm-40">
                                        <div className='border'>
                                            <div className='col-lg-12 col-md-12 col-sm-12 px-0 col-xs-12 border-rgt border-rgt-xs border-btm p0'>
                                                <div className='expan_contact'>
                                                    <a className='cntry-nme' href='/contact/#locate_us'>North America</a>
                                                </div>    
                                            </div>
                                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0  border-btm p0'>
                                                <div className='expan_contact border_asia'>
                                                    <a className='cntry-nme' href='/contact/#locate_us'>Asia Pacific</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-sm-40 px-0">
                                        <div className='border'>
                                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0 border-rgt border-rgt-xs border-btm p0'>
                                                <div className='expan_contact'>
                                                    <a className='cntry-nme' href='/contact/#locate_us'>Middle East and Africa</a>
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  border-rgt border-rgt-xs border-btm p0'>
                                                <div className='expan_contact'>
                                                    <a className='cntry-nme' href='/contact/locate_us'>Australia</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg col-md'></div>
                            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 text-center over_content">
                                <h2 className='cnt_us_txt white-color mb30'>STAY IN WITH OUR NEWSLETTER</h2>
                                <a className="btn  text-uppercase career_btn" href="/contact/#subscribe-newsletter">Contact Us</a>
                            </div>
                        </div>    
                    </div>
                </section>
            </div>            
        </div>
    )

}

export default FullPageScroll