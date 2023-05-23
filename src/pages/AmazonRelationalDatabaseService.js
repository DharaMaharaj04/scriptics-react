import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class AmazonRelationalDatabaseService extends Component {
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
                <body id="page-cloud" />
            </Helmet>
                <div className="spacer"></div>
                <section className='srv-main'>
                    <OwlCarousel className="owl-theme" {...options} >
                        <div className='slide-1'>  
                            <div className='slide-img'>
                                <img src="/assets/img/employee-experience-lead.png" />
                                <div className='slider-overlay-amethyst'></div>
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">MAKE THE FIRST MOVE WITH STRATEGY & CONSULTING</h2>
                                                <a className="btn btn-shutter-more text-uppercase" href="/">explore</a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>     
                            </div>      
                        </div>
                        <div className='slide-2'>
                            <div className='slide-img'>
                                <img src="/assets/img/cloud-data-cultivates-cs-lead.png" />
                                <div className='slider-overlay-amethyst'></div>
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">INITIAL DESIGN WITH INTERACTIVE TECHNOLOGY</h2>
                                                <a className="btn btn-shutter-more text-uppercase" href="/">explore</a>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>    
                        </div>
                        <div className='slide-3'>
                            <div className='slide-img'>
                                <img src="/assets/img/enterprise-agility-lead-mob.jpg" />
                                <div className='slider-overlay-amethyst'></div>
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'> 
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">SCRIPTICS, AI FOR GAMING EXPERIENCE</h2>
                                                <a className="btn btn-shutter-more text-uppercase" href="/">explore</a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>    
                            </div>
                        </div>
                    </OwlCarousel>
                </section>
                <section className="srv-img" style={{background:`url(/assets/img/cloud_service-1.jpg) no-repeat center`}}>
                </section>
                <section className="srv-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 fadeInUp animated from-right">
                                <div className="srv-info">
                                    <h3>Set up, operate, and scale a cloud-based relational database with just a few clicks.</h3>
                                    <h3>What is Amazon RDS?</h3>
                                    <p className="srv-info">Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. Automate time-consuming tasks such as hardware provisioning, database setup, patching and backups. Focus on your applications with cost savings and resizable capacity.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp animated from-right">
                                <div className="srv-info">
                                    <p>Optimized for memory, performance I/O and Amazon RDS provides you with six familiar database engines to choose from, including: Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database, SQL Server, and AWS Database Migration Service</p>
                                    <p>Take full advantage of Amazon RDS with Scriptics. Easily migrate or replicate your existing databases to Amazon RDS.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp animated from-left">
                                <img className="srv-con-img" src="/assets/img/network-cloud.jpg" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className="capability cloud_pro">
                    <div className="container">
                        <div className="row">
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Easy To Administer</h3>
                                    <p>Easily go from project to conception to deployment with Amazon RDS. No need for infrastructure provisioning or installing and maintaining database software.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Highly Scalable</h3>
                                    </div>
                                    <p>Easily scale your database’s compute and storage resources with a few mouse clicks or an API call, often with no downtime.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Available and Durable</h3>
                                    </div>
                                    <p>Amazon RDS runs on the same reliable infrastructure used by other Amazon Web Services. In addition, Amazon Aurora provides performance on par with commercial databases at 1/10th the cost.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Fast</h3>
                                    </div>
                                    <p>Amazon RDS supports the most demanding database applications. You can choose between two SSD-backed storage options: one optimized for high-performance OLTP applications, and the other for cost-effective general use. In addition, Amazon Aurora provides performance on par with commercial databases at 1/10th the cost.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Inexpensive</h3>
                                    </div>
                                    <p>Pay very low rates for only the resources you use. Benefit from both On-Demand pricing options with no up-front long-term commitments, and lower hourly rates via our Reserved Instance pricing.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Secure</h3>
                                    </div>
                                    <p>Amazon RDS makes it easy to control network access to your database. Run your database instances in Amazon Virtual Private Cloud, which enables you to isolate your database instances.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section className="srv-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="srv-info">
                                    <h3 className='text-center'>Partner with Scriptics for your Competitive Advantage.</h3>
                                    <p className="srv-info">Scriptics has the #1 AWS Partner Score in the US. Partners with Amazon Web Services deliver best-in-class services to your company in any phase of your cloud adoption journey. This further includes industry focused data application and security, as well as automatic software upgrades. It’s extremely efficient and flexible with a short implementation time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="faq">
                    <div className="container">
                    <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center fadeInUp animated from-right" style={{paddingTop:40,paddingBottom:20}}>
                                <h2>How It Works</h2>
                            </div>
                        </div>
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                         Purchasing
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                    All steps are automated from procurement to payment.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                         Material Management
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                    Manage inventory receipts, shipments, moves, and counts across your warehouses, suppliers, and customers.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Orders and Sales
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                    Create quotes, book orders, manage materials, generate invoices, and collect cash.
                                    </div>
                                </div>    
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading4">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        Project Mangement
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                    <div className="panel-body">
                                    Define, manage, track, and report on projects.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading5">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                        Time Mangement
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                                    <div className="panel-body">
                                    Record and manage employees’ and subcontractors’ time on each project, phase, and task.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading6">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                        Manufacturing
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse6" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6">
                                    <div className="panel-body">
                                    Control manufacturing with material planning, production scheduling, and shop floor execution capabilities.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading7">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                        Fixed Assets
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse7" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading7">
                                    <div className="panel-body">
                                    Track all organization assets, and group and classify fixed assets according to existing law.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading8">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                        Financial Mangement
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse8" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading8">
                                    <div className="panel-body">
                                    Automate your business solutions and manage your financial records.
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
