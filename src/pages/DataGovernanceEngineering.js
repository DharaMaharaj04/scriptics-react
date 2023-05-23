import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class DataGovernanceEngineering extends Component {
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
                            <img src='/assets/img/Cloud Service/data govern.jpg' alt='data govern' />   
                            <div className='slider-overlay-amethyst'></div>  
                        </div>
                        <div className='caption'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='serv-link col-12'>
                                        <ol className=" nav-links">
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
                                                            <Link to='/sales_force'>Sales Force</Link>
                                                        </li>
                                                        <li className='ser-sub-lin'>
                                                            <Link to='/cloud_digital_transfomation'>Cloud Digital Transfomation</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                                
                                            <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Cloud Digital Transfomation</span></li>
                                        </ol>
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <div className='slide_content'>
                                            <h2 className='text-light'>Data Governance and Engineering</h2>
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
                        <li className='active'><a href="#1">Solutions</a></li>
                        <li><a href='#2'> Governance Framework</a></li>
                        <li><a href='#3'>Engineeering Framework</a></li>
                        <li><a href="#4">Industries</a></li>
                    </nav>
                
                    <div className="scrolling-box">
                        <section id="1" className='clo-meth'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <h2 className='text-center'>Our Solutions</h2>
                                    </div>
                                    <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                        <div className="card">
                                            <div className='devmain-img'>
                                                <img src='/assets/img/Data-Security.svg' alt="Data-Security" />
                                            </div>
                                            <div className='devemain-exp'>
                                                <h3>Data Security</h3>
                                                <p>Encryption, managed keys, and folder-level access control lists help to
                                                protect data in transit and at rest (ACLs). Set up access control with object-level security,
                                                multi-factor authentication, and network security. To ensure consistent compliance,
                                                implement a set of control and audit procedures. Reducing operational complexity while
                                                complying with privacy requirements
                                                </p>   
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                        <div className="card">
                                            <div className='devmain-img'>
                                                <img src='/assets/img/Data-Lineage.svg' alt="Data-Lineage" />
                                            </div>
                                            <div className='devemain-exp'>
                                                <h3>Data Lineage</h3>
                                                <p>Understand, record, and visualize data as it moves from the collection
                                                stage to the consumption stage. Determine the source of the data and visualize the
                                                source-to-end user data flow. Increase the value of data by mapping assets and their
                                                interrelationships across the data ecosystem. Manage cloud data input to make smarter
                                                judgements.                                                                                                
                                                </p>    
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                        <div className="card">
                                            <div className='devmain-img'>
                                                <img src='/assets/img/Metadata-Management.svg' alt="Metadata-Management" />
                                            </div>
                                            <div className='devemain-exp'>
                                                <h3>Metadata Management </h3>
                                                <p>Establish data lineage and align the metadata management
                                                discipline with the data map. Navigate the architectural links between items using data
                                                definitions for all entities and attributes. Create a data catalog and document all of the
                                                data rules and procedures. Streamline data consistency, gain insights faster, and save
                                                money.
                                                                                                
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'></div> 
                                    <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                        <div className="card">
                                            <div className='devmain-img'>
                                                <img src='/assets/img/Data-Governance-and-Engineering-1.svg' alt="Data-Governance-and-Engineering" />
                                            </div>
                                            <div className='devemain-exp'>
                                                <h3>Data Engineering </h3>
                                                <p>Define models, policies, regulations, and standards for the
                                                organizational data ecosystem to govern data collection, storage, integration, and
                                                consumption. Analyze data requirements for business operations that are in sync with
                                                information systems. Create data pipelines that assure complete data processing.                                                                                             
                                                </p>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'></div>
                                </div>
                            </div>
                        
                        </section>
                        <section id='2' className='clo-indus'>
                            <div className='continer'>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                        <h2 className='text-center'>Our Data Governance Framework</h2>
                                        <img src='/assets/img/Accelerate-Data-Governance-DAI.jpg' alt='Accelerate-Data-Governance-DAI' />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id='3' className='clo-indus'>
                            <div className='continer'>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                        <h2 className='text-center'>Our Data Engineeering Framework</h2>
                                        <img src='/assets/img/Accelerate-Data-Engineering-DAI-1.jpg' alt='Accelerate-Data-Engineering-DAI-1' />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="4" className='clo-indus'>
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
