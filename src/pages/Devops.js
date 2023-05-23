import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Devops extends Component {
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
                <body id="page-service" />
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
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="srv-info">
                                    <p className="srv-info">DevOps combines cultural philosophies, practices, and tools that help inform an organization’s ability to deliver applications and services quickly.</p>
                                    <p> Organizations can compete more effectively in the market and customers are better served.</p>
                                    <p>Products evolve and improve faster than those of other organizations using traditional software development and infrastructure management processes.</p>
                                    <p>Leverage DevOps with one of our transformation specialists.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-left">
                                <img className="srv-con-img" src="/assets/img/network-cloud.jpg" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capability cloud_pro1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <h3 className="text-center white-color cloud_title">Accelerate your business with DevOps Transformation</h3>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Start Fast, Start First</h3>
                                    <p>CI/CD makes building and deploying of applications efficient.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Built for Scale</h3>
                                    </div>
                                    <p>Need a server instance? How about thousands of servers? The number of servers can scale up or down in minutes on demand.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Security Automation</h3>
                                    </div>
                                    <p>Encrypt data for even the most security-sensitive organizations, now effortless and affordable with AWS architecture.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Automation</h3>
                                    </div>
                                    <p>Automate infrastructure build-outs and deployments, freeing up your IT team’s resources and time.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Training and Enablement</h3>
                                    </div>
                                    <p>We train your business to ensure a successful transformation to the cloud.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Agile Deployment</h3>
                                    </div>
                                    <p>Allows for the continuous deployment of new infrastructure within minutes while speeding up time-to-market and avoiding failed deployments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="faq">
                    <div className="container">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Continuous Integration and Continuous Delivery (CI/CD)
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                    The suite of AWS Code Services (AWS CodePipeline, AWS CodeCommit, and AWS CodeDeploy) build, test, and deploy your application on both AWS and your on-premises environment. With AWS CodePipeline, you can build a CI/CD workflow that uses both AWS services and third-party development tools.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Infrastructure as Code (IaC)
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                    Provision, configure, and manage your AWS infrastructure resources. AWS CloudFormation lets you provision and update AWS resources with templates. Configuration management service AWS OpsWorks utilizes Chef Automate. With AWS Config, you can create an inventory of your AWS resources and monitor their configuration.<br />
                                    <br />Terraform: Terraform is an open-source infrastructure as code tool that provides a consistent CLI workflow to manage hundreds of cloud services. Terraform codifies cloud APIs into declarative configuration files
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Microservices
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                    Build and deploy microservices architecture with Containers or Serverless Computing. Using Amazon EC2 Container, launch a Docker platform for production environments. Service or run code without provisioning or managing servers using AWS Lambda.
                                    </div>
                                </div>    
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading4">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        Monitoring and Logging
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                    <div className="panel-body">
                                    In virtual real-time, record logs, monitor applications, and infrastructure performance with AWS CloudWatch and AWS CloudTrail. Analyze and debug distributed applications using AWS X-Ray.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading5">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                        Platform as a Service (PaaS)
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                                    <div className="panel-body">
                                    Deploy web applications without provisioning or managing both the infrastructure and application stack with AWS Elastic Beanstalk. Elastic Beanstalk deploys web apps developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker.
                                    </div>
                                </div>    
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading6">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                        Version Control
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse6" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6">
                                    <div className="panel-body">
                                    Xloudhost secure, highly scalable Git repositories with AWS CodeCommit.
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
