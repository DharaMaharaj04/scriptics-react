import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class mobileDevelopment extends Component {
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
                                <img src='/assets/img/Cloud Service/mobile development.jpg' alt='mobile development' />   
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
                                                    <a href="#" className='serverice_menu textwh'><span >Development & Maintenance</span><i className="text-uppercase" aria-hidden="true"></i></a>
                                                    <div className="bg-white">
                                                        <ul className="list row dropdown-content list-inline">
                                                            <li className='col-lg-5 col-md-4 col-sm-12 col-xs-12 align-list ser-sub-lin'>
                                                                <Link to='/development-maintance'>Web app development & maintenance</Link>
                                                                </li>
                                                            <li className='col-lg-5 col-md-4 col-sm-12 col-xs-12 align-list ser-sub-lin'>
                                                                <Link to='/mobile_development'>Mobile app development & maintenance</Link>
                                                            </li>
                                                            <li className='col-lg-2 col-md-4 col-sm-12 col-xs-12 align-list ser-sub-lin'>
                                                                <Link to='/ui-ux'>UI/UX Design</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Mobile app development & maintenance</span></li>
                                                
                                            </ol>
                                            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                                <div className='slide_content'>
                                                    <p class="white-color about-para">App-tivating Innovation: Crafting Unique Mobile Experiences</p>
                                                    <h2 className='white-color'>Mobile Apps</h2>
                                                </div>
                                            </div> 
                                        </div>
                                           
                                    </div> 
                                </div>     
                            </div>      
                        </div>
                    </OwlCarousel>
                </section>
                <section className='ser'>
                        <div className='container'>
                            <div className='row'>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/ios-apps.jpg' alt="ios-app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>IOS App</h3>
                                            <p>Scriptics Technologies keeps things straightforward; prior to designing an iOS application, we carefully comprehend the client's requirements.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/android-app.png' alt="android-app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Android app</h3>
                                            <p>We can deliver top-notch mobile apps that are tailored to the needs of the customers thanks to our knowledge in Android development.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/restaurant.jpg' alt="restaurant-app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Restaurant app</h3>
                                            <p>scriptics specializes in the complete creation of custom portable appointments and agrees that a dedicated versatile dining program serves as a sophisticated extension of your dining experience.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/augment.png' alt="augment-app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Augmented app</h3>
                                            <p>We help startups and enterprises create compelling AR experiences to entertain, engage, and grow their user base. </p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/health-app.png' alt="HealthCare app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>HealthCare app </h3>
                                            <p>Enabling people to provide better, on-demand access to health care and real-time health care is not just for the general public, but also for striving to provide better alternatives to the traditional health care model.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/e-commerce-app.png' alt="e-commerce-app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>e-commerce app</h3>
                                            <p>Grow your ecommerce business by removing the spider web and moving your business to the web. We have automated transaction and now have peace of mind in our inventory management system.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/payment.jpg' alt="payment app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Payment app</h3>
                                            <p>We design from the ground up a bespoke mobile payment solution that best fits your business needs: Convenience, Enhance Security, Increase Productivity, Boost Sales</p>
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
