import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
export class Works extends Component {
    
    render() {
        const settings = {
            dots: true,
            infinite: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            className: "slider"
        };    
        return (
            <div>
                <div className="spacer"></div>
                <Helmet>
                </Helmet>
                <section className="page-section Knowledge" id={1}>
                    <div className="container-fuild">
                        <div className="row knowledge-div">
                            <div className="col-12 col-lg-6 work-first-img px-0">
                                    <img src="/assets/img/pexels-adrien-olichon-3137055.png" alt="knowledge banner"/>
                            </div>
                            <div className="col-12 col-xl-6 col-lg-6 col-sm-12 col-xs-12">
                                <div className="home-text" id="kl-text-work">
                                    <h2>Knowledge is of no value unless you put it into practice</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row knowledge-mobile align-items-center">    
                            <div className="col-xl-2"></div>
                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="kl-para-work">
                                    <h2>Scriptics, Machine Learning and Artificial Intelligence leverages the best tools and learnings the best tools,</h2>
                                    <p>Scriptics is one of the leading deep learning companies that focus on the development of enterprise solutions with the combination of artificial intelligence and machine learning. Our Deep Learning experts provide a comprehensive solutions.</p>
                                </div>
                                <div className="kl-para-work-1">
                                    <h2>Scriptics, Machine Learning and Artificial Intelligence leverages,</h2>
                                    <p>Scriptics is one of the leading deep learning companies that focus on the development of enterprise solutions with the combination of artificial intelligence and machine learning. Our Deep Learning experts provide solutions.</p>
                                </div>
                            </div>    
                            <div className="col-xl-2"></div>    
                        </div>
                    </div>
                </section>
                <section className="page-section work-vlaue" id={2} style={{background: "url('/assets/img/pexels-mikhail-grigorev-4482862.png') no-repeat" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"></div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" id="work-vlaue-div">
                                <div className="work-inner-div">
                                    <div className="heading">
                                        <h2>Leadership thought at scriptics Technologies,</h2>
                                    </div>
                                    <div className="para-text">
                                        <p>Scriptics is one of the leading deep learning companies that focus on the development of enterprise solutions with the combination of artificial intelligence and machine learning. Our Deep Learning experts provide a comprehensive set of solutions right from development to maintenance by employing the right set of platforms, tools, and languages. We allow our clients to uncover new processes and adapt to the trends in volatile business scenarios and demands. With our exemplary deep learning services, business capabilities.</p>
                                    </div>
                                </div>
                                <div className="work-inner-div-1">
                                    <div className="heading">
                                        <h2>How we are changing the world by our work values, showing commitment to change what matters</h2>
                                    </div>
                                    <div className="para-text">
                                        <p>At Scriptics, our real-world and advanced quality solutions will help you power your digitalization with comprehensive digital asset management. We create solutions that run on advanced algorithms  to process images and videos and return actionable insights and information.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page-section insight insigth-work" id={3}>
                    <div className="container">
                        <div className="row align-items-center" >
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className="insight-post">
                                    <h1>INSIGHTS</h1>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-2"></div>  
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="post-insight-div">
                                    <div className="work-post-slide">
                                        <Slider {...settings}>
                                            <div className="slide-1">
                                                <img src="/assets/img/strategy.png" alt="strategy featuremedia"/>
                                                <h4 className="title-work-slide">Scriptics, one of the best AI gaming developing companies,</h4>
                                                <p>Scriptics, one of the best AI gaming developing companies, focuses on providing the best gameplay experience to all the gamers in the world. With the help of AI-enabled enterprise platforms, we make targeted development and marketing decisions to develop a cutting-edge.</p>                                                                                           
                                                <div className="slider-arrow">
                                                    <a className="yellow-arrow" href="/insights" ><img className= "arr-img" src="/assets/img/yellow-arrow.png" alt="arrow-icon"/></a>    
                                                </div>
                                            </div>
                                            <div className="silde-2">
                                                <img src="/assets/img/interactive.png" alt="interactive featuremedia"/>
                                                <h4 className="title-work-silde">Application Development service</h4>
                                                <p>We offer a suite of application development services and custom solutions on various platforms which help you achieve strategic IT and business objectives. From defining your requirements, documenting specifications, developing, testing, to integrating software applications across a myriad of platforms – we cover it all.</p>
                                                <div className="slider-arrow">
                                                    <a className="yellow-arrow" href="/insights" ><img className= "arr-img" src="/assets/img/yellow-arrow.png" alt="arrow-icon"/></a>    
                                                </div>
                                            </div>  
                                            <div className="slide-3">
                                                <img src="/assets/img/amet.png" alt="amet featuremedia"/>
                                                <h4 className="title-work-slide">Product Development & Maintenance</h4>
                                                <p>As a software application development, maintenance and support expert, Scriptics provides services designed to support our clients as their business grows and changes. We provide all the expertise and innovation you need to compete in your market of choice. We enable application availability without downtime or interruption.</p>
                                                <div className="slider-arrow">
                                                    <a className="yellow-arrow" href="/insights" ><img className= "arr-img" src="/assets/img/yellow-arrow.png" alt="arrow-icon"/></a>    
                                                </div>
                                            </div>
                                        </Slider>  
                                    </div>                                       
                                </div>
                            </div>
                            <div className="col-2"></div> 
                        </div>
                    </div>    
                </section>
                <section className="work-post-section known-extra" id={4}>
                    <div className="container-fluid">
                        <div className="row align-items-center ">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 px-0">
                                <img src="/assets/img/pexels-adrien-olichon-3137055.png" alt="known mobile banner"/>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="home-text" id="kl-text">
                                    <h2>Knowledge is of no value unless you put it into practice</h2>
                                </div>
                                <div className="kl-para">
                                    <h2>Working with us, change becomes the most dynamic, powerful source of progress you have.</h2>
                                    <p>At Scriptics, our real-world and advanced quality solutions will help you power your digitalization with comprehensive digital asset management. We create solutions that run on advanced algorithms to process images and videos and return information.</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </section>        
                <section className="work-post-section work" id={5}>
                    <div className="container">
                        <div className="row align-items-center title-for">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className="work-post">
                                    <h2>Talented and dedicated team, brings you colser to the future.</h2>
                                    <p>At Scriptics, our real-world and advanced quality solutions will help you power your digitalization with comprehensive digital asset management. Our expert team of Machine Learning and Artificial Intelligence leverages the best tools and learnings to transform your customer experience into an innovative digital experience. Our team will help you capitalize the visual data and information with the help of comprehensive computer vision solutions through streamlined processes.</p>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                </section>
                <section className="page-section work" id={6}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl"></div>
                            <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-content-center">
                                <div className="work-post-home">
                                    <div className="rept-work">
                                        <img src="/assets/img/strategy.png" alt="strategy featuremedia"/>
                                        <div className="content-work-home">
                                            <h4 className="title-txt-work">Make the first move with Strategy & Consulting</h4>
                                        </div>
                                        <div className="excerpt-txt-work">    
                                            <p>At Scriptics, our real-world and advanced quality solutions will help you power your digitalization.</p>
                                        </div>
                                    </div>
                                    <div className="rept-work">
                                        <img src="/assets/img/interactive.png" alt="interactive featuremedia"/>
                                        <div className="content-work-home">
                                            <h4 className="title-txt-work">Initial Design with interactive technology</h4>
                                        </div>
                                        <div className="excerpt-txt-work">
                                            <p>Implement technologies to amplify and automate processes without any human intervention.</p>
                                        </div>
                                    </div>    
                                    <div className="rept-work">
                                        <img src="/assets/img/amet.png" alt="amet featuremedia"/>
                                        <div className="content-work-home">
                                            <h4 className="title-txt-work">Scriptics, AI for Gaming experience</h4>
                                        </div>
                                        <div className="excerpt-txt-work">    
                                            <p>Uncover the layers of entertainment with an AI-powered Gaming experience to all the gamers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl"></div>
                        </div>        
                    </div>
                </section>         
                <section className="page-section founder" id={7}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 text-center">
                                <div className="founder-sec">
                                    <h2 className="founder-head">“The secret of change is to focus all of your energy, not on fighting the old, but building on the new.”</h2>   
                                    <h2 style={{fontSize:21}}>HARSH MACWAN</h2>
                                    <p>Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
                <section className="page-section partner" id={8}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 text-center">
                                <h2 className="partner-head">OUR PARTNER ECOSYSTEM</h2>
                                <img src="/assets/img/partner.png" alt="partner icon"/>
                                <h2 className="inner-head">Our aim is to harness the potential of these platforms at the greatest speed in the market, accelerating the path to value in all directions for our clients.</h2>
                                <div className="inner-btn">
                                    <a className="btn-group" href="/">EXPLORE Our Network<i><img className= "i-img" src="/assets/img/Icon.svg" alt="arrow-icon"/></i></a>
                                </div>    
                            </div>
                        </div>
                    </div>
                </section>  
        </div>

        );
    }
}
export default Works