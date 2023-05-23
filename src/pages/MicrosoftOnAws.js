import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class MicrosoftOnAws extends Component {
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
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 fadeInUp  Wow from-bottom'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">SCRIPTICS, AI FOR GAMING EXPERIENCE</h2>
                                                
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
                            <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-right">
                                    <div className="indus-info">
                                        <h2 className="indus-title_1">Run .NET and Microsoft Workloads on AWS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="srv-info">
                                    <p>Move Windows Technology stacks and applications “as is” in the cloud while leveraging AWS Elastic Compute Cloud’s (EC2) scalability. Running Amazon EC2 instances for Windows workloads offers powered consistency.</p>
                                    <p>Acquire business agility, high performance, and lower costs with the wide variety of born-in-the-cloud AWS services inside EC2’s highly secure cloud environment.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-left">
                                <img className="srv-con-img" src="/assets/img/network-cloud.jpg" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capability cloud_pro">
                    <div className="container">
                        <div className="row">    
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Comprehensive Security</h3>
                                    <p>AWS provides 210 key features and security, compliance, and governance services – nearly 40 more resources than the competition</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Lower Costs</h3>
                                    </div>
                                    <p>Receive major savings through hardware efficiency with Serverless and containers.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-3">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Reliability Everywhere You Are</h3>
                                    </div>
                                    <p>AWS provides the best global infrastructure with 69 Availability Zones (AZ) across 22 Regions.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Deep AWS Integration</h3>
                                    </div>
                                    <p>Integrate your Windows Server environment with AWS Managed Microsoft Active Directory (AD).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="srv-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-1g-12">
                                <div className="srv-info">
                                    <h3 className='text-center'>Get Instant Benefits from the Cloud</h3>
                                    <p className='text-center'>EC2 for Windows offers greater reliability and faster performance.Profit from efficient AWS Services for Windows workloads.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capability cloud_pro1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-1g-12">
                                <h3 className='text-center'>Scriptics Advantages</h3>
                            </div>    
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">AWS Centered</h3>
                                    <p>Company began in Cloud Services and earned accreditations across different AWS services with over eight years of experience.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Proven Accelerator</h3>
                                    </div>
                                    <p>Remove risk and accelerate the migration of your Windows workload to the AWS Cloud with 20+ PB Assessment & Migration Toolkits.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Database Migration Experience</h3>
                                    </div>
                                    <p>Receive expertise that includes 15+ PB data migrated and managed to AWS to date through successful Big Data Analytics Projects.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Certified Talent</h3>
                                    <p>Partnering with Scriptics includes our ever-growing knowledge from over 100 AWS Certifications.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">AWS Competencies</h3>
                                    </div>
                                    <p>AWS DevOps Competency.<br/>
                                    Cloudformation Service Delivery.<br />
                                    Service delivery partner for Amazon EC2 for Windows Server.<br />
                                    Advanced Tier Amazon Partner Network consulting partner.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Individualized Service</h3>
                                    </div>
                                    <p>We work closely with you for your success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
                <section className="faq">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingTop:50,paddingBottom:20}}>
                                <h2>Our Superpower</h2>
                            </div>
                        </div>
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Adopt
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                    – Discovery & Assessment<br />
                                    – Migration Readiness Assessment<br />
                                    – Gap Analysis<br/>
                                    – Future State Architecture
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Tranform
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                        – Greenfield Deployment <br />
                                        – Migrating .NET applications to AWS<br />
                                        – SQL Server Databases to AWS<br />
                                        – Migrating SharePoint, Skype, Exchange on AWS
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading3">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                        Optimize
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                    <div className="panel-body">
                                        – Cost Optimization Strategies<br />
                                        – Performance Optimization<br />
                                        – Post Migration Optimization
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading4">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        Tranform
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                    <div className="panel-body">
                                    – 24/7 Support & Incident Remediation<br />
                                    – Guidance on upgrading to a new release<br />
                                    – Fully Managed Infrastructure<br />
                                    – Periodic Security & Compliance Audits<br />
                                    – Monitoring & Reporting
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
