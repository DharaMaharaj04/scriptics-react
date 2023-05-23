import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class SalesforceMarketingCloud extends Component {
  render() {

    const options = {
        loop: false,
        margin: 0,
        items: 1,
        autoplay: false,
        dots: false,
        autoplay: false,
        dots: false
    }; 

    return (
      <div>
        <div className="service-page">
            <Helmet>
                <body id="page-service" />
            </Helmet>
        <section className='srv-main'>
            <OwlCarousel className="owl-theme" {...options} >
                <div className='clo-ser'>  
                    <div className='slide-img'>
                        <img src='/assets/img/Sales force/salesforce marketing.jpg' alt='salesforce marketing.jpg' />   
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
                                        <li className="dropdown relative drop-container desktop-menu">
                                                <a href="/sales_force" className='serverice_menu textwh'><span >Salesforce</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                <div className="bg-white">
                                                    <ul className="list row dropdown-content">
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce_salecloud'>Salesforce Sales Cloud</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce_cpq'>Salseforce CPQ</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce_industry'>Salesforce Industry</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce_marketing'>Salesforce Marketing</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce_studio'>Salesforce Studio</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce_service'>Salesforce Service</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                        <ul className='list-inline px-0'>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to='/salesforce-bussinte'>Salesforce Bussiness Intelligence</Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to=''></Link>
                                                            </li>
                                                            <li className='ser-sub-lin'>
                                                                <Link  target="_blank" to=''></Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    </ul>
                                                </div>
                                            </li>    
                                            <li className="dropdown relative drop-container mobile-menu">
                                            <a href="#" className='serverice_menu textwh'><span >Salesforce</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                            <div className="bg-white">
                                                <ul className="list dropdown-content list-inline">
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/salesforce_salecloud' target="_blank">Salesforce Sales Cloud</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/salesforce_cpq' target="_blank">Salseforce CPQ</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/salesforce_industry' target="_blank">Salesforce Industry</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/cloud_digital_transfomation' target="_blank">Cloud Digital Transfomation</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/salesforce_salecloud' target="_blank">Salesforce Sales Cloud</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/salesforce_cpq' target="_blank">Salseforce CPQ</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/salesforce_industry' target="_blank">Salesforce Industry</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/salesforce_marketing' target="_blank">Salesforce Marketing</Link>
                                                    </li>
                                                    
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/salesforce_studio' target="_blank">Salesforce Studio</Link>
                                                    </li>
                                                    
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/salesforce_service' target="_blank">Salesforce Service</Link>
                                                    </li>
                                                    <li className='ser-sub-lin'>
                                                        <Link to='/salesforce-bussinte' target="_blank">Salesforce Bussiness Intelligence</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                    <div className='slide_content'>
                                        <span className='sale-title white-color'>Salesforce Marketing Cloud</span>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>  
                
            </OwlCarousel>
        </section>
        <section className='blue-dark sale-info'>
            <div className='container'>
                <div className='row cfcr'>
                    <div className='col-12 col-lg-7 col-md-7 col-sm-12 col-xs-12' >
                        <p>Implementing and optimizing Salesforce Marketing Cloud (SFMC) can be a difficult and time-consuming process for internal marketing teams Scriptics team of experienced experts will help you get the most out of your Marketing Cloud instance by leveraging your customer data to deliver a tailored, personalized customer experience.</p>
                        <p>Our goal is to partner with companies looking to transform Salesforce Marketing Cloud We start every customer engagement with an audit The outcome of the audit is a report describing our findings, including an executive summary, with recommendations and priorities for what to do. Following the SFMC audit, we work with our customers to extend the value they get from SFMC and leverage the platform to create Attention, Interest, Desire, and Action (AIDA).</p>
                    </div>
                    <div className='col-12 col-lg-5 col-md-5 col-sm-12 col-xs-12' >
                        <img src='/assets/img/banner-saleforce-marketing.png' alt='banner-saleforce-marketing' />
                    </div>
                </div>
            </div>
        </section>
        <section className="sale-marketing">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                            <div className="sale-market-cont">
                                <h4 className="indus-title_1">Seven ways we lend expertise for existing clients </h4>
                                <img src='/assets/img/Salesforce_Gold_Consulting_Partner_badge-1.png' alt='Salesforce_Gold_Consulting_Partner_badge-1' />
                            </div>
                        </div>        
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="sale-market-img">
                                <img src='/assets/img/MarketingCloud-Consolidate.png' alt='MarketingCloud-Consolidate' />
                                <h5>Consolidate Your Customer Data in Marketing Cloud:</h5>
                                <p>Make sure your Salesforce Marketing Cloud instance stays in sync with your customer base to engage customers with relevant, personalized content at every stage of the customer journey We help our customers synchronize the Marketing Cloud, Service Cloud, and Sales Cloud. Whichever tool you use, we'll help you get a 360-degree view of your customers in the Marketing Cloud to optimize the customer journey from conversions to ads.</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </section>
            <section className='sale-market'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                            <div className="sale-market-img">
                                <img src='/assets/img/MarketingCloud-Campaign.png' alt='MarketingCloud-Campaign' />
                                <h5>Data-driven 1-1 <br />data generation Marketing campaign:</h5>
                                <p>Today's consumers expect highly personalized and relevant communications from the brands they interact with Scriptics can help you send the right message to the right person at the right time with intelligent data segmentation based on customer interactions beyond email. </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="">
                                <div className="sale-market-img">
                                    <img src='/assets/img/MarketingCloud-Health.png' alt='MarketingCloud-Health' />
                                    <h5>Marketing cloud version <br />Improved health:</h5>
                                    <p>Maintain the health of your Marketing Cloud instance by keeping it record-free, well-maintained and organized, and tested for possible improvements. Take advantage of our FREE Health Checkup resource for Salesforce Marketing Cloud.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </section>
            <section className='sale-market'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                            <div className="sale-market-img">
                                <img src='/assets/img/MarketingCloud-analytics.png' alt='MarketingCloud-analytics' />
                                <h5>Campaign analysis and reporting:</h5>
                                <p>Discover the real impact of your marketing by creating reports and dashboards that let you understand your data and iterate campaigns in real time to maximize the impact of your next automation programs town.</p>
                                <p>We'll deliver the relevant, accurate, real-time reports your sales and marketing teams need to make key decisions that drive real results Managed Activity.</p>
                                <p>Build and maintain your marketing activities using our best practices. Scale your expansion team as your business needs change. With our retained services, hire an expert who understands your unique Marketing Cloud system, saving you valuable time and keeping your marketing engine running.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="">
                                <div className="sale-market-img">
                                    <img src='/assets/img/MarketingCloud-managed.png' alt='MarketingCloud-managed' />
                                    <h5>Sales and Marketing Affiliate:</h5>
                                    <p>Enhance your sales and marketing efforts with: scoring, lead lifecycle modeling, automated message flows, and in-depth analytics to help you measure success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </section>
            <section className='sale-market'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                            <div className="sale-market-img">
                                <img src='/assets/img/MarketingCloud-alignment.png' alt='MarketingCloud-alignment' />
                                <h5>Integrated design:</h5>
                                <p>Integrating your marketing and sales efforts is no small feat With guidance from an experienced partner, you can ensure long-term success and a strategic vision that guides you on the path to peak performance.</p>
                                <p>Our certified marketing cloud consultants and solutions consultants will work side by side with your team to explain available options, integrate your system, and help you define configuration optimized to achieve your goals.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                            <div className="sale-market-img">
                                <div className="sale-market-img">
                                    <img src='/assets/img/MarketingCloud-integration.png' alt='MarketingCloud-integration' />
                                    <h5>Managed Activity:</h5>
                                    <p>Build and maintain your marketing activities using our best practices. Scale your expansion team as your business needs changes.</p>
                                    <p>With our retained services, hire an expert who understands your unique Marketing Cloud system, saving you valuable time and keeping your marketing engine running.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </section>
        </div>

      </div>
    )
  }
}
