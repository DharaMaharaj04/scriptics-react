import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class AwsControlTower extends Component {
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
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
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
                <section className="srv-img" style={{background:`url(/assets/img/cloud_service-1.jpg) no-repeat center`}}>
                </section>
                <section className="srv-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <div className="srv-info">
                                    <p>AWS Control Tower set up new multi-account AWS environments and govern at scale. With AWS Control Tower, cloud administrators have peace of mind knowing their organization’s accounts are compliant with established policies while builders quickly provision new AWS accounts.</p>
                                    <p>Receive the benefits of rapidly deploying containerized applications with AWS, a modern deployment pipeline with Scriptics.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <img className="srv-con-img" src="/assets/img/network-cloud.jpg" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capability cloud_pro1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-1g-12">
                                <h3 className='text-center'>Benefits</h3>
                            </div>    
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Configure a new AWS Environment setup easily</h3>
                                    <p>Configure AWS security and management services to govern your environment with the best practices.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Service Control Policies</h3>
                                    </div>
                                    <p>Enforce your policies using service control policies (SCPs) and detect policy violations using AWS Config rules with Control Tower</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">View Top-Level AWS Environment Policies</h3>
                                    </div>
                                    <p>Control Tower provides you with an integrated dashboard. View a top-level summary of policies applied to your AWS environments with Control Tower’s integrated dashboard.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section className="faq">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingTop:50,paddingBottom:20}}>
                                <h2>How It Works</h2>
                            </div>
                        </div>
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Get your Edge with Scriptics
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                    Scriptics has the #1 Internal AWS Partner Score in the US Scriptics with Amazon Web Services to deliver the best-in-class services to your company in any phase of your cloud adaptation journey.<br />
                                    <br />Ensure AWS best practices with the Management & Governance Lens.<br/>
                                    Set up and easily govern a secure, multi-account AWS  environment, called a landing-zone, with AWS Control Tower. For more information on the BoCT program, read more here.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        AWS Built on Control Tower
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                    The Management and Governance Lens (M&G Lens) provides perspective guidance on how to manage your AWS workload environments to be migration-ready, scalable, and cost-efficient. Read more about the AWS Management & Governance Lens program here:<br />
                                    <br /><a href="https://docs.aws.amazon.com/wellarchitected/latest/management-and-governance-lens/management-and-governance-lens.html?did=wp_card&amp;trk=wp_card" ><span style={{color:'green',textDecoration:'underline'}}>AWS Management &amp; Governance Lens</span></a>
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
