import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class MachineLearning extends Component {
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
                                        <h2 className="indus-title_1">Create intelligent, actionable data with AI and Machine Learning</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="srv-info">
                                    <p>Drive Your Outcomes with AI & Machine Learning (ML).Scriptics accelerates your projects using proven cloud frameworks. Gain unparalleled intelligence from your data from our experts in data engineering to data science.</p>
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
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Quickly Adoptable AI Services</h3>
                                    <p>Easily add intelligence to your applications.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Deep Learning Frameworks</h3>
                                    </div>
                                    <p>Choice and flexibility with extensive framework support for deep learning.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Solve Unique Problems With Ml</h3>
                                    </div>
                                    <p>Solves your organization’s unique problems with Machine Learning through AWS. Benefit from Machine Learning on AWS by meeting Scriptics’s team of Machine Learning Specialists!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capability cloud_pro1">
                    <div className="container">
                        <div className="row" style={{paddingBottom:80}}>
                            <div className="col-12 col-sm-12 col-md-12 col-1g-12">
                                <h3 className='text-center'>AWS AI Services – Easily Add Intelligence to Applications</h3>
                                <p className="text-center white-color">Explore Machine Learning Services on AWS</p>
                            </div>    
                            <div className="srv-capability-box col-12 col-lg-3  fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Amazon Sagemaker Studio</h3>
                                    <p>Deploy, build, and train Machine Learning models in the first fully integrated development environment.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Amazon Sagemaker Ground Truth</h3>
                                    </div>
                                    <p>Build and manage highly accurate training datasets quickly with pre-built workflows in Amazon Sagemaker Ground Truth.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Amazon Sagemaker Autopilot</h3>
                                    </div>
                                    <p>See all parts of your Machine Learning Models in Sagemaker Autopilot.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Amazon Sagemaker Neo</h3>
                                    <p>Train and run Machine Learning Models in the cloud and at the edge with Amazon Sagemaker Neo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
                <section className="faq" style={{paddingBottom:40}}>
                    <div className="container">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Advanced Text Analytics
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                    Isolate insights and relationships in text using Machine Learning (ML) with <a href="https://aws.amazon.com/comprehend/?c=ml&sec=srv"><span style={{color:'orange'}}>Amazon Comprehend</span></a>, a Natural Language Processing (NLP) service (No ML experience required)
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Automated Code Reviews
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                     Find the most expensive lines of code and automate code reviews automatically with<a href="https://aws.amazon.com/codeguru/?c=ml&sec=srv"><span style={{color:'orange'}}>Amazon Codeguru</span></a> 
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading3">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                        Chatbots
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                    <div className="panel-body">
                                    Easily build chatbots using <a href="https://aws.amazon.com/lex/?c=ml&sec=srv"><span style={{color:'orange'}}>Amazon Lex</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading4">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        Document Analysis
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                    <div className="panel-body">
                                    Extract text from millions of documents using <a href="https://aws.amazon.com/textract/?c=ml&sec=srv"><span style={{color:'orange'}}>Amazon Textract</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading5">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                        Text to Speech
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                                    <div className="panel-body">
                                    Convert text into life-like speech using <a href="https://aws.amazon.com/polly/?c=ml&sec=srv"><span style={{color:'orange'}}>Amazon Polly</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading6">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                        Image and Video Analysis
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse6" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6">
                                    <div className="panel-body">
                                    Add Image and Video Analysis to your applications to catalogue assets, automate media workflows, and extract meaning with <a href="https://aws.amazon.com/rekognition/?c=ml&sec=srv&blog-cards.sort-by=item.additionalFields.createdDate&blog-cards.sort-order=desc"><span style={{color:'orange'}}>Amazon Rekognition</span></a>
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
