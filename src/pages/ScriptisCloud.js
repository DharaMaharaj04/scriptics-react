import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class ScriptisCloud extends Component {
  render() {

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
        <section className='srv-main'>
            <OwlCarousel className="owl-theme" {...options} >
                <div className='clo-ser'>  
                    <div className='slide-img'>
                        <img src='/assets/img/Cloud Service/Cloud digital transformation.jpg' alt='Cloud digital transformation.jpg' />   
                        <div className='slider-overlay-amethyst'></div>  
                    </div>
                    <div className='caption'>
                        <div className='container'>
                            <div className='row'>
                                <div className='salesforce-nav serv-link col-12'>
                                    <ol className="nav-links">
                                        <li className="dropdown relative drop-container">
                                            <a href="#" className='serverice_menu textwh'>Service<i className="text-uppercase" aria-hidden="true"></i></a>
                                            <div className="bg-white">
                                                <ul className="list dropdown-content list-inline">
                                                    <li className='ser-sub-lin'>Development & Maintenance</li>
                                                    <li className=''>Accelerate</li>
                                                    <li className=''>Insight</li>
                                                    <li className=''>Experience</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="active dropdown relative drop-container">
                                            <a href="#" className='serverice_menu textwh'><span >Accelerate</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                            <div className="bg-white">
                                                <ul className="list dropdown-content list-inline">
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/sales_force'>Sales Force</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link  target="_blank" to='/cloud_digital_transfomation'>Cloud Digital Transfomation</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="dropdown relative drop-container">
                                                <a href="/sales_force" className='serverice_menu textwh'><span >Cloud Digital Transfomation</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                <div className="bg-white">
                                                    <ul className="list row dropdown-content">
                                                        <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                            <ul className='list-inline px-0 cloud-ui'>
                                                                <li className='ser-sub-lin'>
                                                                    <Link  target="_blank" to='/development-maintance'>Development Maintance</Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link  target="_blank" to='/ui_ux'>UI_UX</Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link  target="_blank" to='/devsecops'>DevSecops</Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link  target="_blank" to='/automation_reporting'>Cloud Governance Reporting</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                            <ul className='list-inline px-0 cloud-ui'>
                                                                <li className='ser-sub-lin'>
                                                                    <Link  target="_blank" to='/mobile_development'>Mobile Development</Link>
                                                                </li>
                                                                
                                                                <li className='ser-sub-lin'>
                                                                    <Link  target="_blank" to='/cloud-sec-eng'>Cloud Security Engineering</Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link  target="_blank" to='/application-asses'>Application Assessment</Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link  target="_blank" to='/advanced_analy'>Advanced Analytics</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                            <ul className='list-inline px-0 cloud-ui'>
                                                                <li className='ser-sub-lin'>
                                                                    <Link  target="_blank" to='/cloud_naive_app'>Cloud Naive App</Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link  target="_blank" to='/saas_product'>Saas Product</Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link  target="_blank" to='/data_strategy'>Data Strategy</Link>
                                                                </li>
                                                                <li className='ser-sub-lin'>
                                                                    <Link  target="_blank" to='/data_govern_eng'>Data Governance Engineering</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                        </li>
                                    </ol>
                                </div>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className='slide_content'>
                                        <h2 className='white-color'>Cloud Consulting, Strategy and Migration</h2>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>  
            </OwlCarousel>
        </section> 
        <section className='Scr-cld-nav'>
            <div className=''>
                <nav>
                    <li className='active'><a href="#1">Methodology</a></li>
                    <li><a href="#2">Industries</a></li>
                </nav>
          
                <div className="scrolling-box">
                    <section id="1" className='clo-meth'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h2 className='text-center'>Our Methodology</h2>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/Cloud-Consulting0A.svg' alt="Cloud-Consulting" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Cloud Consulting</h3>
                                            <p>Establish a roadmap and clear, concise approach for cloud migration. To comprehend the current infrastructure and applications, use renowned scanning techniques and carry out stakeholder interviews. Based on these, develop a customized migration strategy and group the applications into rehost, re-platform, re-architect, and rework categories.</p>   
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/Cloud-Strategy.svg' alt="Cloud-Strategy" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Cloud Strategy</h3>
                                            <p>The cloud consultants and architects at Scriptics are familiar with corporate goals, the status quo, the IT environment, and total IT spending. After the workshop with CXOs, obtain a cloud roadmap, which is frequently accompanied by a cloud center of excellence team and serves as a roadmap for the full transformation process.</p>    
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/Cloud-Migration-Deployment.svg' alt="Cloud-Migration-Deployment" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Cloud Migration & Deployment</h3>
                                            <p>Using the knowledge gained during the consulting process, either move or redeploy the applications. Creating a safe cloud landing zone should come first, then migration and deployment. Use the proprietary Scriptics frameworks, which have strong automation features, to implement an agile migration with the help of technical artifacts that have already been specified.</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    
                    </section>
                    <section id="2" className='clo-indus'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h2 className='text-center'>Industries</h2>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <img src='/assets/img/financial-services.jpg'  alt='financial-services' />
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <div className='clo-indu'>
                                        <h3>Financial Industries</h3>
                                        <p>48 prestigious financial services companies have put their trust in Scriptics to manage a cloud-led, agile-first digital transformation. Utilizing strategic roadmaps for infrastructure modernization and security, they have reduced overall expenditures by 50% while achieving over 60% better time-to-delivery.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row cfcr'>
                            
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <div className='clo-indu'>
                                        <h3>Banking & Insurance </h3>
                                        <p>In order to close their data centers ahead of schedule, Scriptics has
                                        provided native cloud solutions and cloud migration services to 28 international banks
                                        and insurance companies. Scriptics's advanced analytics models, SecOps, cloud banking
                                        solutions, and modernization plans enable them to save 70% of their time while saving
                                        60% of their money.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <img src='/assets/img/banking-insurance.jpg'  alt='banking-insurance' />
                                </div>
                            </div>
                            <div className='row'>    
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <img src='/assets/img/media-entertainment.jpg'  alt='media-entertainment' />
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <div className='clo-indu'>
                                        <h3>Media & Entertainment</h3>
                                        <p>22 M&E firms around the world have delegated Scriptics to
                                        modernize and scale out their media platforms so that millions of consumers can access
                                        them easily. They've secured their applications with agility and deployed them on the
                                        public cloud to meet regulatory obligations while saving money.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row cfcr'>    
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <div className='clo-indu'>
                                        <h3>Telecom</h3>
                                        <p>The analytics, modernisation, and ML/AI solutions provided by Scriptics have
                                        simplified the digitization and modernization projects of ten telecom players. It has
                                        enabled them to establish fully automated workflows, increase user involvement by more
                                        than 50%, and speed insights delivery while maintaining 99% process correctness.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <img src='/assets/img/Telecommunication-1.jpg'  alt='Telecommunication' />
                                </div>
                            </div>
                            <div className='row'>    
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <img src='/assets/img/technology.jpg'  alt='technology' />
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                    <div className='clo-indu'>
                                        <h3>Technology</h3>
                                        <p>Scriptics has vast experience providing cloud migration, managed services,
                                        advanced analytics, and business insight to 75 technology firms. This not only increased
                                        their business performance by more than 60% on average, but also enabled on-demand
                                        scalability with over 30% cost savings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>                     
      </div>
    )
  }
}
