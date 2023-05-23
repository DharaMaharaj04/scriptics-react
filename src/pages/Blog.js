import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Blog() {
    return (
        <div>
            <Helmet>
                <body id="page-case-studies" />
            </Helmet>
            <div className="spacer"></div>
            <section className="case-desktop">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6 case-cnt cs-left"> 
                            <div className="case-inner">
                                <p className="case-cat">Case Studies - AI & Automation</p>
                                <h2 className="title-txt">Creating new benchmark for Digital dentistry with Ai World’s first end to end solution</h2> 
                                <div className="case-txt">
                                    <p>Scriptics, one of the best AI gaming developing companies, focuses on providing the best gameplay experience to all the gamers in the world. With the help of AI-enabled enterprise platforms, we make targeted development.</p>
                                </div>
                                <div className="inner-btn">
                                <Link className="btn text-uppercase career_btn" to='/case_study_automation'>Explore more<i><img className= "i-img" src="/assets/img/Icon.svg" alt="arrow-icon"/></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 px-0 case-img">
                            <img src="/assets/img/cs-ai-automation.png" alt="cs"/>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 px-0 case-img ">
                            <img src="/assets/img/cs-BPO.png" alt="cs" />
                        </div>   
                        <div className="col-12 col-lg-6 case-cnt cs-right"> 
                           <div className="case-inner">
                                <p className="case-cat">Case Studies - BPO</p>
                                <h2 className="title-txt">What is so good about Customer Service: Sales force</h2> 
                                <div className="case-txt">
                                    <p>Scriptics, one of the best AI gaming developing companies, focuses on providing the best gameplay experience to all the gamers in the world. With the help of AI-enabled enterprise platforms, we make targeted development.</p>
                                </div>
                                <div className="inner-btn">
                                <Link className="btn text-uppercase career_btn" to='/case_study_bpo'>Explore more<i><img className= "i-img" src="/assets/img/Icon.svg" alt="arrow-icon"/></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
            <section className="case-mobile">
                <div className="container">
                    <div className="row">
                        <div className="cs-box">
                            <div className="col-12 col-sm-12 fadeInUp  Wow from-right"> 
                                <div className="case-inner">
                                    <p className="case-cat">Case Studies - AI & Automation
                                        <span className="cs-link"><Link to='/case_study_automation'><img src="/assets/img/Group 34.svg" alt="arrow-icon"/></Link></span>
                                    </p>
                                    <h2 className="title-txt">Creating new benchmark for Digital dentistry with Ai World’s first end to end solution</h2> 
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 px-0 case-img fadeInUp  Wow from-left">
                                <img src="/assets/img/cs-ai-automation.png" alt="cs"/>
                            </div> 
                        </div>  
                        <div className="cs-box">
                            <div className="col-12 col-sm-12 fadeInUp  Wow from-right"> 
                                <div className="case-inner">
                                    <p className="case-cat">Case Studies - BPO
                                        <span className="cs-link"><Link to='/case_study_bpo'><img src="/assets/img/Group 34.svg" alt="arrow-icon"/></Link></span>
                                    </p>
                                    <h2 className="title-txt">What is so good about Customer Service: Sales force</h2> 
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 px-0 case-img fadeInUp  Wow from-left">
                                <img src="/assets/img/cs-BPO.png" alt="cs"/>
                            </div> 
                        </div>  
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
