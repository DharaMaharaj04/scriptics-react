import React from 'react';
function Header() {
    return (
            <header id="masthead" className="site-header navbar-static-top navbar-light masthead-sticky ">
                <div className="container">
                    <nav className="navbar fixed-top navbar-expand-lg">
                        <a className="navbar-brand" href="/"><img src="/assets/img/scriptics_wht_bg.svg" alt="scriptics logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> 
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav end">   
                                <li className="nav-item drop-down">
                                    <a id="he_services" className="nav-link dropdown-toggle header-link" href="/" data-toggle="dropdown" aria-expanded="false">Services</a>
                                    <div className="dropdown-menu dp-block" aria-labelledby="navbarDropdown"> 
                                        <div className="container-fuild">
                                            <div className="row"> 
                                                <div className="submenu-portion">
                                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                                        <div className="row service-row">
                                                            <div className="col-md-3 col-sm-3 col-xs-12"> <img src="/assets/img/application.svg" alt="Development & Maintenance" className="" />
                                                                <h3 className="hear-txt-sub">Development & Maintenance</h3>
                                                            </div>
                                                            <div className="col-md-9 col-sm-9 col-xs-12">
                                                                <div className="row service-row">
                                                                    <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                        <ul className="list-inline mb-xs-0">
                                                                            <li> <a href="/mobile_development" title="Mobile app development &
                                                                            maintenance">Mobile app development & maintenance</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                        <ul className="list-inline mb-xs-0">
                                                                            <li> <a href="/development-maintance" title="Web app development &
                                                                            maintenance">Web app development & maintenance</a> </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                        <ul className="list-inline">
                                                                            <li> <a href="/ui-ux" title="UI/UX Design">UI/UX Design</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="menu-seprator"></div>
                                                    </div>
                                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                                        <div className="row service-row">
                                                            <div className="col-md-3 col-sm-3 col-xs-12"> <img src="/assets/img/accelerate.svg" alt="Accelerate" className="" />
                                                                <h3 className="hear-txt-sub">Accelerate</h3>
                                                            </div>
                                                            <div className="col-md-9 col-sm-9 col-xs-12">
                                                                <div className="row service-row">
                                                                    <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                        <ul className="list-inline mb0">
                                                                            <li> <a  href="/sales_force" title="Sales Force">Sales Force</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                        <ul className="list-inline mb0">
                                                                                    <li> <a  href="/cloud_digital_transfomation" title="Cloud Digital Transfomation">
                                                                                    Cloud Digital Transfomation  </a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-seprator"></div>
                                                            </div>
                                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                                <div className="row service-row">
                                                                    <div className="col-md-3 col-sm-3 col-xs-12"> <img src="/assets/img/insight.svg" alt="Insight" className="" />
                                                                        <h3 className="hear-txt-sub">Insight</h3>
                                                                    </div>
                                                                    <div className="col-md-9 col-sm-9 col-xs-12 align-list">
                                                                        <div className="row service-row">
                                                                            <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                                <ul className="list-inline mb-xs-0">
                                                                                    <li> <a  href="/ai_automation" title="Applied AI">Ai & Automation</a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                                <ul className="list-inline">
                                                                                    <li> <a  href="/statistical_data_analysis" title="Data Analytics">Statistical Data Analytics</a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                                <ul className="list-inline">
                                                                                    <li> <a aria-label="Go to Data Analytics Page" href="/business_intelligence" title="Data Analytics">Business Intelligence</a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="clearfix visible-sm hidden-xs"></div>
                                                                            <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                                <ul className="list-inline mb-xs-0">
                                                                                    <li> <a href="/computer_vision" title="Applied AI"> Computer vision</a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                                <ul className="list-inline">
                                                                                    <li> <a href="/big_data_analysis" title="Data Analytics">Big data analytics</a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                                <ul className="list-inline">
                                                                                    <li> <a href="/signal_processing" title="Data Analytics">Digital Signal Processing</a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="clearfix visible-sm hidden-xs"></div>
                                                                            <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                                <ul className="list-inline mb-xs-0">
                                                                                    <li> <a aria-label="Go to Applied AI Page" href="/natural_language_processing" title="Applied AI"> Natural Language processing</a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                                <ul className="list-inline">
                                                                                    <li> <a href="/deep_learning" title="Data Analytics">Deep learning</a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                                <ul className="list-inline">
                                                                                    <li> <a href="/scriptics_ai_gaming" title="Data Analytics">AI & Gaming</a> </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="menu-seprator"></div>
                                                            </div>
                                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                                <div className="row service-row">
                                                                    <div className="col-md-3 col-sm-3 col-xs-12"> <img src="/assets/img/experience.svg" alt="Experience" className="" />
                                                                        <h3 className="hear-txt-sub">Experience</h3>
                                                                    </div>
                                                                    <div className="col-md-9 col-sm-9 col-xs-12">
                                                                        <div className="row service-row">
                                                                            <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                                <ul className="list-inline mb0">
                                                                                    <li> <a href="/blackberry_cybersecurity" title="Digital Marketing">BlackBerry Cyber Security</a> </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4 col-sm-4 col-xs-12 align-list">
                                                                                <ul className="list-inline mb0">
                                                                                    <li> <a href="/soc" title="Digital Commerce">SOC</a> </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>    
                                                                    </div>
                                                                </div>
                                                                <div className="menu-seprator"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                        </div>
                                    </div>    
                                </li>
                                <li className="nav-item drop-down">
                                    <a id="he_industries" className="nav-link dropdown-toggle header-link " href="/" data-toggle="dropdown" aria-expanded="false">Industries</a>
                                    <div className="dropdown-menu dp-block" aria-labelledby="navbarDropdown"> 
                                        <div className="container">
                                            <div className="row industries_menu">
                                                <div className="col-12 col-sm-12 col-md-3">
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item"><a className="nav-link" href="/industry_health">Health</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/industry_checmical">Chemicals</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="/industry_retail">Retail</a></li>
                                                    </ul> 
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-3">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item"><a className="nav-link" href="/industry_automative">Automative</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/industry_dental">Dental</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/industry_consumer_goods">Consumer Goods</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-3">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item"><a className="nav-link" href="/industry_bfsi">BFSI</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/industry_energy">Energy</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/industry_oil_and_gas">Oil and Gas</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-3">
                                                <ul className="nav flex-column">
                                                    <li className="nav-item"><a className="nav-link" href="/industry_capital_market">Capital Markets</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/industry_insurance">Insurance</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="/industry_media_entertainment">Media and Entertainment</a></li>
                                                </ul>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                </li>
                                <li className="nav-item drop-down">
                                    <a className="nav-link dropdown-toggle header-link" href="/" data-toggle="dropdown" aria-expanded="false">About Scriptics</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <div className="container">
                                            <div className="col-md-12 col-sm-12 col-xs-6 about-us-menu">
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12 col-xs-12 abt-menu-head">
                                                        <h2 className="about-head">about scriptics</h2>
                                                    </div>
                                                    <div className="col col-md-8 col-sm-12 col-xs-12">
                                                        <div className="row abt-menu-row">
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/about-us/#know-us">Know Us</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/case-studies">Case Studies</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="clearfix visible-sm hidden-xs"></div>
                                                        </div>
                                                    </div>
                                                    <div className="menu-seprator">
                                                    </div>
                                                    <div className="col-md-12 col-sm-12 col-xs-12 abt-menu-head">                                           
                                                        <h2 className="about-head">Our structure</h2>
                                                    </div>
                                                    <div className="col col-md-8 col-sm-12 col-xs-12">
                                                        <div className="row abt-menu-row">
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/about-us/#work-stratery">Work Strategy</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/about-us/#technology-we-follow">Technologies we follow</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/contact/#industry-we-serve">Industries we serve</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="clearfix visible-sm hidden-xs"></div>
                                                        </div>
                                                    </div>
                                                    <div className="menu-seprator"></div>
                                                    <div className="col-md-12 col-sm-12 col-xs-12 abt-menu-head">
                                                        <h2 className="about-head">Discover us</h2>
                                                    </div>
                                                    <div className="col col-md-8 col-sm-12 col-xs-12">
                                                        <div className="row abt-menu-row">
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/contact">Contact Us</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/contact/#locate_us">Locate Us</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-4 col-sm-12 col-xs-12 align-list">
                                                                <ul className="list-inline mb0">
                                                                    <li><a className="nav-link" href="/contact/#subscribe-newsletter">Subscribe to newsletter</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="clearfix visible-sm hidden-xs"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item drop-down">
                                    <a className="nav-link dropdown-toggle header-link" href="/blogs">Blogs</a>
                                </li>
                                <li className=''>
                                    <div className="box ">
                                        <form name="search"><input type="text"  name="txt" className='input'/></form>
                                        <i className="fa fa-search"></i>
                                    </div>
                                </li>           
                            </ul>
                            <div className="header-social col-12 col-sm-12 col-md-6 col-lg-6 text-center">
                                <ul className="social-icon">
                                    <li className="social-twitter"><a href="https://twitter.com/scripticstech/"><i className="fa fa-twitter-square fa-2x"></i></a></li>
                                    <li className="social-facebook"><a href="https://www.facebook.com/scripticsinc"><i className="fa fa-facebook-square fa-2x"></i></a></li>
                                    <li className="social-linkedin"><a href="https://in.linkedin.com/company/scripticstechs"><i className="fa fa-linkedin-square fa-2x"></i></a></li>
                                    <li className="social-youtube"><a href="https://www.youtube.com/@scripticstechnologies6312"><i className="fa fa-youtube-square fa-2x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            
    )
}

export default Header
