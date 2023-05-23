import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class ApplicationModernization extends Component {
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
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-left">
                                <div className="srv-info">
                                    <h3>Instant Long-Term Benefits from the Cloud</h3>
                                    <p>Future-proof your business with Containers and Serverless cloud-native technology. Enhance scalability, reliability, and cost-efficiency while adding new capabilities to your mission-critical software. Why Containers on AWS?</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
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
                                    <h3 className="text-center cloud_text_head">Start DevOps on Day One</h3>
                                    <p className="text-center">Ensure consistent and auditable environments with a CI/CD pipeline using a single truth source for deployment and operations.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Your Business, Your Security</h3>
                                    </div>
                                    <p className="text-center">AWS offers 210 services and key features for security, compliance, and governance. These offerings are nearly 40 more in number than the competition. Protect your containers with AWS security isolation. Run the latest security updates and set granular access permissions for every container.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Work From Anywhere</h3>
                                    </div>
                                    <p className="text-center">Run AWS container services on the best global infrastructure with 69 Availability Zones (AZ) across 22 Regions.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Save With Efficiency</h3>
                                    </div>
                                    <p className="text-center">Gain significant savings since Serverless and Containers use the hardware efficiently.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="srv-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-1g-12 fadeInUp  Wow from-right">
                                <div className="srv-info">
                                    <h3 className='text-center'>Containers</h3>
                                    <p>With your choice of tools and APIs, run your containers on AWS with a wide selection of container orchestrators.</p>
                                    <p>Maintain your mission-critical services with containers, AWS constructs and APIs through Elastic Container Service (ECS). Tested extensively for security, reliability, and availability, ECS is deeply integrated with AWS services through Identity and Access Management (IAM), Amazon Virtual Private Cloud (VPC), and Amazon Route 53.</p>
                                    <p>Harness the same high performance capabilities that powers Amazon SageMaker, AWS Batch, Amazon Lex, Amazon.com’s search engine, Expedia, Mobileye, Cook Pad, and Hudl with ECS. Every hour, ECS launches five times the number of tasks than the number of instances launched by EC2.</p>
                                    <p>Speed through your workloads with containers by meeting our Container Experts!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capability cloud_pro1">
                    <div className="container">
                        <div className="row" style={{paddingBottom:80}}>
                            <div className="col-12 col-sm-12 col-md-12 col-1g-12">
                                <h3 className='text-center'>Use Cases</h3>
                            </div>    
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Microservices</h3>
                                    <p className="text-center">Arrange and run applications with process isolation as microservices for your needs.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Application Migration to The Cloud</h3>
                                    </div>
                                    <p className="text-center">Create portable applications with Containers in the cloud. By packaging up the code, your application can be deployed anywhere the docker runs.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h3 className="text-center cloud_text_head">Batch Processing</h3>
                                    </div>
                                    <p className="text-center">Start jobs rapidly and scale them dynamically in containers with package batch processing and ETL jobs</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-3 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <h3 className="text-center cloud_text_head">Platform as a Service</h3>
                                    <p className="text-center">Relieve developers from managing infrastructure with containers. Build platforms that standardize your applications’ deployment and management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
                <section className="faq">
                    <div className="container">
                        <div className='row'>
                            <div className='col-12 col-sm-12 col-md-12 col-1g-12 fadeInUp  Wow from-right'>
                                <h3 className='text-center'>Accelerate Your Workloads Rapidly</h3>
                            </div>
                        </div>
                        <div className="panel-group" id="accordion" role="tablist" >
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Cloud Native Replatforming
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                    Gain the advantage over your competitors with the full power of cloud native services as drop-in replacements for data, streaming, API management, logging, monitoring, and alerting
                                    <li>Without refactoring or rewriting applications, take advantage of the cloud’s competitive costs, flexible scalability, and sustained reliability.</li>
                                    <li>Workloads will have more elasticity and responsiveness.</li>
                                    <li>Employ continuous build & delivery pipelines and infrastructure automations in the cloud for mid-lifecycle applications.</li>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Conatainer Adoption
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                    As an alternative to Serverless, Containers are the preference for deploying complex distributed new applications. With only minimal changes to applications, Containers are the most useful when an application doesn’t require major refactoring.
                                    <li>Solve management and infrastructure concerns by packaging code and dependencies in a unified format.</li>
                                    <li>Reduce complexity and scale effortlessly with the container ecosystem and orchestration frameworks such as Kubernetes.</li> 
                                    <li>Increased portability of applications and improved developer workflows by creating isolated sandboxes for each component, where applications run decoupled from the underlying infrastructure.</li>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading3">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                        Serverless Refactoring
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                    <div className="panel-body">
                                    Build self-healing, auto-scaling, serverless applications on your terms, free from server limitations.<br />
                                    <br />Reduce costs and optimize time and resources into developing great products.<br />
                                    <li>EKS</li>
                                    <li>Fargate</li>
                                    <li>ECS</li>
                                    <li>Codepipeline</li>
                                    <li>Lambda</li>
                                    <li>Codebuild</li>
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
