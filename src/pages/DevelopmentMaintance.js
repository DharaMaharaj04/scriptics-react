import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class DevelopmentMaintance extends Component {
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
                        <div className='slide-1'>  
                            <div className='slide-img'>
                                <img src='/assets/img/Cloud Service/Development maintanance.jpg' alt='development' />   
                                <div className='slider-overlay-amethyst'></div>  
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='serv-link col-12'>
                                            <ol className=" nav-links">
                                                <li className="active dropdown relative  drop-container">
                                                    <a href="#" className='serverice_menu textwh'>Service<i className="" aria-hidden="true"></i></a>
                                                    <div className="bg-white">
                                                        <ul className="list pl0 dropdown-content list-inline">
                                                            <li className=''>Development & Maintenance</li>
                                                            <li className=''>Accelerate</li>
                                                            <li className=''>Insight</li>
                                                            <li className=''>Experience</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="dropdown relative drop-container">
                                                    <a href="#" className='serverice_menu textwh'><span >Development & Maintenance</span><i className="" aria-hidden="true"></i></a>
                                                    <div className="bg-white">
                                                        <ul className="list dropdown-content list-inline">
                                                            <li className='col-lg-5 col-md-5 col-sm-12 col-xs-12 ser-sub-lin'>
                                                                <Link to='/development-maintance'>Web app development & maintenance</Link>
                                                            </li>
                                                            <li className='col-lg-5 col-md-5 col-sm-12 col-xs-12 ser-sub-lin'>
                                                                <Link to='/mobile_development'>Mobile app development & maintenance</Link>
                                                            </li>
                                                            <li className='col-lg-5 col-md-5 col-sm-12 col-xs-12 ser-sub-lin'>
                                                                <Link to='/ui-ux'>UI/UX Design</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Web app development & maintenance</span></li>
                                            </ol>
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <p class="white-color about-para">WebWorks: Crafting Dynamic Digital Experiences</p>
                                                <h2 className='white-color'> Web Apps</h2>
                                            </div>
                                        </div>
                                    </div> 
                                </div>     
                            </div>      
                        </div>
                    </OwlCarousel>
                </section>
                <section className='devmain'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='devemain-cont'>
                                    
                                    <h3>Web app development & maintenance</h3>
                                    <p>We build applications that work for your business and your users. Whether it's complex enterprise platforms and data storage, responsive web applications, or marketing sites, our web solutions work seamlessly, providing users with a consistent experience across all platforms</p>
                                    <p>For a successful web development strategy, consider not only what your company's technology footprint looks like now, but what it should look like in the future. Our solution architect and his web development team work with you early in your Scriptics engagement to define exactly how your business will evolve. Next, strategically establish a roadmap and determine the role technology will play in achieving your business goals.</p>
                                    <ol>
                                        <li>E- commerce web </li>
                                        Ecommerce website design and development services help create ecommerce solutions that are uniquely tailored to your business in terms of visual design, functionality, and customer experience secrets. At ScienceSoft, e-commerce developers create custom storefronts, build scalable microservices architectures, and digitize back-office e-commerce operations.
                                        <li>Dynamic web </li>
                                        As technology, trends and customer preferences change, it is important for website owners to keep their websites up to date. All of this is easily achieved with a dynamic website. Scriptics lets you choose from hundreds of templates for the website that's right for your business.<br/><br/>Having a dynamic website means you have the freedom to change it as needed. Unlike static websites, each page displays different content. This way, visitors never get bored because they are always busy.
                                        <li>Enterprise web</li>
                                        Enterprise web development is an essential tool for businesses of all sizes because it allows you to create custom web applications and software that meet your unique needs. Whether you need a custom business portal or e-commerce platform, our team has the experience and expertise to deliver results. Additionally, we work tirelessly to ensure that our website is functional, intuitive and user-friendly so that you can connect with your customers and achieve your goals.
                                        <li>Responsive web</li>
                                        Want Your Mobile Visitors to Convert Effectively? <br/><br/>Scriptics delivers responsive websites and web portals with self-explanatory navigation, mobile-specific interactive elements, and smooth performance on any network, ensuring high mobile conversion rates.
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }
}
