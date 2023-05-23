import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class StatisticalDataAnalysis extends Component {
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
                <body id="page-service" />
            </Helmet>
            <section className='srv-main'>
            <OwlCarousel className="owl-theme" {...options} >
                <div className='slide-1'>  
                    <div className='slide-img'>
                        <img src="/assets/img/StatisticalDataAnalysis/Banner/AI_for_gaming.jpg" alt='AI_for_gaming' />
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
                                                <ul className="list dropdown-content list-inline ">
                                                    <li className='ser-sub-lin'>Development & Maintenance</li>
                                                    <li className='ser-sub-lin'>Accelerate</li>
                                                    <li className='ser-sub-lin'>Insight</li>
                                                    <li className='ser-sub-lin'>Experience</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="active dropdown relative drop-container ">
                                            <a href="#" className='serverice_menu textwh'><span >Insight</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                            <div className="bg-white ">
                                                <ul className="list row dropdown-content">
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/ai_automation'>Ai & Automation</Link></li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/statistical_data_analysis'>Statistical Data Analytics</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/business_intelligence'>Business Intelligence</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/computer_vision'>Computer Vision</Link>
                                                            </li>
                                                            
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/big_data_analysis'>Big data analytics</Link>
                                                            </li>
                                                            
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/signal_processing'>Digital Signal Processing</Link>
                                                            </li>
                                                            
                                                            
                                                        </ul>
                                                    </li>
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/natural_language_processing'>Natural Language processing</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/deep_learning'>Deep learning</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/scriptics_ai_gaming'>AI & Gaming</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        
                                        <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Statistical Data Analytics</span></li>
                                    </ol>
                                </div>
                                <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                    <div className='slide_content'>
                                        <h2 className="h2-slide white-color mb-xs-10">The Art of Statistical Insight Generation: Analytics for Complex Datasets</h2>
                                       
                                    </div>
                                </div>
                            </div> 
                        </div>     
                    </div>      
                </div>
                <div className='slide-2'>
                    <div className='slide-img'>
                        <img src="/assets/img/StatisticalDataAnalysis/Banner/Design and interactive.jpg" alt='Design and Interaction' />
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
                                                <ul className="list dropdown-content list-inline ">
                                                    <li className='ser-sub-lin'>Development & Maintenance</li>
                                                    <li className='ser-sub-lin'>Accelerate</li>
                                                    <li className='ser-sub-lin'>Insight</li>
                                                    <li className='ser-sub-lin'>Experience</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="active dropdown relative drop-container ">
                                            <a href="#" className='serverice_menu textwh'><span >Insight</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                            <div className="bg-white ">
                                                <ul className="list row dropdown-content">
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/ai_automation'>Ai & Automation</Link></li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/statistical_data_analysis'>Statistical Data Analytics</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/business_intelligence'>Business Intelligence</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/computer_vision'>Computer Vision</Link>
                                                            </li>
                                                            
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/big_data_analysis'>Big data analytics</Link>
                                                            </li>
                                                            
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/signal_processing'>Digital Signal Processing</Link>
                                                            </li>
                                                            
                                                            
                                                        </ul>
                                                    </li>
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/natural_language_processing'>Natural Language processing</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/deep_learning'>Deep learning</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/scriptics_ai_gaming'>AI & Gaming</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        
                                        <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Statistical Data Analytics</span></li>
                                    </ol>
                                </div>
                                <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                    <div className='slide_content'>
                                        <h2 className="h2-slide white-color mb-xs-10">Data-Driven Discoveries: The Power of Statistical Analytics</h2>
                                        
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>    
                </div>
                <div className='slide-3'>
                    <div className='slide-img'>
                        <img src="/assets/img/StatisticalDataAnalysis/Banner/Strategy and consultation.jpg"  alt='Strategy and consulting' />
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
                                                <ul className="list dropdown-content list-inline ">
                                                    <li className='ser-sub-lin'>Development & Maintenance</li>
                                                    <li className='ser-sub-lin'>Accelerate</li>
                                                    <li className='ser-sub-lin'>Insight</li>
                                                    <li className='ser-sub-lin'>Experience</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="active dropdown relative drop-container ">
                                            <a href="#" className='serverice_menu textwh'><span >Insight</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                            <div className="bg-white ">
                                                <ul className="list row dropdown-content">
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/ai_automation'>Ai & Automation</Link></li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/statistical_data_analysis'>Statistical Data Analytics</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/business_intelligence'>Business Intelligence</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/computer_vision'>Computer Vision</Link>
                                                            </li>
                                                            
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/big_data_analysis'>Big data analytics</Link>
                                                            </li>
                                                            
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/signal_processing'>Digital Signal Processing</Link>
                                                            </li>
                                                            
                                                            
                                                        </ul>
                                                    </li>
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/natural_language_processing'>Natural Language processing</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/deep_learning'>Deep learning</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link to='/scriptics_ai_gaming'>AI & Gaming</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        
                                        <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Statistical Data Analytics</span></li>
                                    </ol>
                                </div>
                                <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 fadeInUp  Wow from-bottom'>
                                    <div className='slide_content'>
                                        <h2 className="h2-slide white-color mb-xs-10">Statistical Sleuthing: Revealing Insights Hidden in Data</h2>
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
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12' style={{padding: 0}}>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                                    <div className="indus-info">
                                        <h2 className="indus-title_1">Quantifying the unquantifiable.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="srv-info">
                                    <p>We proudly live in an age called the Information age, data being of the utmost relevance. The importance of data comes to play when statistical data analysis comes into the picture.<br/><br/>Scriptics uses Statistical Data Analysis, a subset of mathematics and science wherein descriptive and qualitative data is quantified to establish trends and patterns. We enable you to understand the expectations of the consumer and we ensure that those expectations are met and exceeded in every consumer interaction.</p>
                                    <p>We, at Scriptics, use Statistical Data Analysis to manage your professional data. During the process of assimilation of data, we give special attention to be given to ensure that no mistakes are made while inputting the data. We also emphasize on the fact that if the data is not processed within the timeline, the results may no longer be useful and the whole process loses its importance.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6  fadeInUp  Wow from-left">
                                <img className="srv-con-img" src="/assets/img/Inner Images/statistical data analysis.jpg" />
                            </div>
                            <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                                <div className="srv-info">
                                    <h4 className="srv-info">Scriptics is continually working towards using Statistical Data Analysis to its maximum capability.The Statistical Data Analysis also includes services of presenting data using the following:</h4>
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
                                    <img src="/assets/img/choice.svg" alt="service level icon 1"/>
                                    <p>SPSS – Statistical Package for Social Sciences, used for the most complex forms of data and produces easy to read and understand statistical data</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="service level icon 2"/>
                                    <p>SAS – Statistical Analysis Systems, comes to play in analyzing and managing of data</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/development.svg" alt="service level icon 3"/>
                                    <p>Microsoft Excel </p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="service level icon 4"/>
                                    <p>We work on digitizing data that is collected in various formats and then is transported via an excel spreadsheet or database. </p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="service level icon 5"/>
                                    <p> Based on the need for this digitized data and the value it imparts in decision-making, the data can be segregated and coded. </p>
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
                                    <img src="/assets/img/robotic.svg" alt="capabilities"/>
                                    <p>We also use the following tests to analyze the data collected. Few of those tests are – Correlation, Regression, Chi-Square Test etc.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities"/>
                                    </div>
                                    <p>The data is usually processed and populated in the form of tables or graphs, which can then be used in presenting them on MS PowerPoint, Keynote or Impress.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 3.svg" alt="capabilities"/>
                                    </div>
                                    <p>Scriptics works on breathing life into lifeless data, by which it can not only produce correct and trustworthy results but also contribute to decision-making, from the simplest to the most complex one at hand. </p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 4.svg" alt="capabilities"/>
                                    </div>
                                    <p>We also emphasize on the fact that if the data is not processed within the timeline, the results may no longer be useful and the whole process loses its importance. </p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities"/>
                                    </div>
                                    <p>We equip you to assimilate, study and expound data, that further leads to the showcasing of quantitively interpreted data. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
