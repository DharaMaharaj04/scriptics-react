import React, {Component} from 'react';
import Typed from 'react-typed';
import { Helmet } from 'react-helmet';


const textLines = ["help you?","server you?","connect?"];

export default class Chemical extends Component {
        render() {
        return (
            <div className="industries-page">
                <Helmet>
                    <body id="page-case-studies" />
                </Helmet>
                <section className="sec contact_page">
                    <div className='over_content'>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 fadeInUp  Wow from-left">
                                    <div className='head-light'>
                                        <h2 className="h2-heading white-color mb-xs-10">How can we&ensp;  
                                            <Typed
                                                strings={textLines}
                                                typeSpeed={150}
                                                backSpeed={150}
                                            loop />    
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
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
                                    <a href="/industry_chemical">
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
                                            <h4>Contact</h4>
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
                                <div className="col-md-4 col-sm-4 col-xs-12 mb-xs-20"> 
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
                <section id="subscribe-newsletter contact-us" className="contact-us">
                    <div className="container">
                        <div className="contact-info row">
                            <div className="col-12 col-lg-12 col-sm-12 text-center fadeInUp  Wow from-right" style={{paddingBottom:30}}>
                                <div>
                                    <h2>SAY HELLO</h2>
                                    <p style={{fontSize:16}}>If you have an interesting project, an RFP, or just need some help, reach out to us. We’re available. We also teach, lecture, give workshops, and love sharing our knowledge, and we’ll literally go anywhere!</p>
                                    <a className="cnt-mail" href = "mailto: hello@scriptics.ai">hello@scriptics.ai</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-loc fadeInUp  Wow from-right" id="locate_us">
                    <div className="container">
                        <h2 className='white-color'>Locations Explore our service offerings and subsidiaries in specific geography</h2>
                        <div id="tabs">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item"><a className="nav-link active" data-index="0" data-toggle="tab" href="#tab-0" role="tab">Canada</a></li>
                                <li className="nav-item"><a className="nav-link white-color" data-index="1" data-toggle="tab" href="#tab-1" role="tab">USA</a></li>
                                <li className="nav-item"><a className="nav-link white-color" data-index="2" data-toggle="tab" href="#tab-2" role="tab">London</a></li>
                                <li className="nav-item"><a className="nav-link white-color" data-index="3" data-toggle="tab" href="#tab-3" role="tab">Denmark</a></li>
                                <li className="nav-item"><a className="nav-link white-color" data-index="4" data-toggle="tab" href="#tab-4" role="tab">Singapore</a></li>
                                <li className="nav-item"><a className="nav-link white-color" data-index="5" data-toggle="tab" href="#tab-5" role="tab">Autralia</a></li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade tab-style  active show" id="tab-0" role="tabpanel">
                                <div className='loc_tab canada'>
                                    <div className='col-12 col-lg-8'>
                                        <p className='white-color'>181 Bay Street, <br/>Toronto,ON M5J 2T3 <br/> +1 877-572-7478</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade tab-style ml-3 mt-3" id="tab-1" role="tabpanel">
                                <div className='loc_tab usa'>
                                    <div className='col-12 col-lg-8'>
                                        <p className='white-color'>940 Stewart St <br/> Suite14 Morgantown,<br/> WV 26505 +1 877-572-7478</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade tab-style ml-3 mt-3" id="tab-2" role="tabpanel">
                                <div className='loc_tab london'>
                                    <div className='col-12 col-lg-8'>
                                        <p className='white-color'>108 Cheapside, London <br/> EC2V 6DN +1 877-572-7478</p>    
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade tab-style ml-3 mt-3" id="tab-3" role="tabpanel">
                                <div className='loc_tab denmark'>
                                    <div className='col-12 col-lg-8'>
                                        <p className='white-color'>Frederikssundsvej 68 E st tv <br/>2400 København NV +45 30 43 23 66</p>
                                    </div>
                                </div>
                            </div>    
                            <div className="tab-pane fade tab-style ml-3 mt-3" id="tab-4" role="tabpanel"> 
                                <div className='loc_tab singapore'>
                                    <div className='col-12 col-lg-8'>
                                        <p className='white-color'>#19-08 Prudential Tower, <br/>Singapore 049712 +1 877-572-7478</p>
                                    </div>
                                </div>
                            </div>  
                            <div className="tab-pane fade tab-style ml-3 mt-3" id="tab-5" role="tabpanel"> 
                                <div className='loc_tab autralia'>
                                    <div className='col-12 col-lg-8'>
                                        <p className='white-color'>5/140 Smith Street, <br/>Laarraeyah NT 0800</p>
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
