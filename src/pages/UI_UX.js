import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class UI_UX extends Component {
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
                                <img src='/assets/img/Cloud Service/UI.jpg' alt='UI' />   
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
                                                        <ul className="list pl0 dropdown-content list-inline">
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
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>UI/UX Design</span></li>
                                            </ol>
                                            
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <p class="white-color about-para">Designing Delight: Crafting Memorable Experiences with UX/UI</p>
                                                <h2 className='white-color'>UX/UI</h2>
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
                                            <img src='/assets/img/cust-exper.jpg' alt="customer experience-app" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Improve Customer Experience</h3>
                                            <p>Mobile payment apps make the entire shopping process much easier and faster.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                    <div className="card">
                                        <div className='devmain-img'>
                                            <img src='/assets/img/cash-app.png' alt="Cash-Flow Management" />
                                        </div>
                                        <div className='devemain-exp'>
                                            <h3>Better Cash-Flow Management</h3>
                                            <p>Businesses can gain higher coins glide management. Mobile charge programs simplify business enterprise accounting and decrease charges along with financial institution charges</p>
                                           
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
