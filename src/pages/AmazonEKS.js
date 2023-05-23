import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class AmazonEKS extends Component {
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
                <section className="srv-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <div className="srv-info">
                                    <h3>The most trusted way to start, run, and scale Kubernetes</h3>
                                    <p>Amazon EKS leads the industry as a fully managed service for Kubernetes on AWS. However, as enterprises leverage the capabilities of Amazon EKS for mission-critical environments, the number of Kubernetes clusters and applications in use can grow quickly. Even for customers using fully managed services like Amazon EKS, the expansion of clusters can quickly produce operational challenges that introduce hurdles to productivity, stall innovation, and compromise security.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6">
                                <img className="srv-con-img" src="/assets/img/network-cloud.jpg" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="faq">
                    <div className="container">
                    <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-center" style={{paddingTop:90,paddingBottom:20}}>
                                <h2>Amazon EKS:</h2>
                            </div>
                        </div>
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                         Runs and Scales
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                    Runs and scales the Kubernetes control plane across multiple AWS Availability Zones to ensure high availability.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Automatically scales control plane
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                    Automatically scales control plane instances based on load, detects and replaces unhealthy control plane instances, and it provides automated version updates and patching for them.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        AWS Services
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                    Is integrated with many AWS services to provide scalability and security for your applications, including the following capabilities:
                                    <li>Amazon ECR for container images</li>
                                    <li>Elastic Load Balancing for load distribution</li>
                                    <li>IAM for authentication</li>
                                    <li>Amazon VPC for isolation</li>
                                    </div>
                                </div>    
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading4">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        Open-source Kubernetes software
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                    <div className="panel-body">
                                    Runs up-to-date versions of the open-source Kubernetes software, so you can use all of the existing plugins and tooling from the Kubernetes community. Applications that are running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, no matter whether they’re running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification.
                                    </div>
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
                                    <h3 className='text-center'>How Does It Works</h3>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-1g-12">
                                <img className="srv-con-img" src="/assets/img/EKS-icons.png" alt="AI & Automation icon"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="srv-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-1g-12">
                                <div className="srv-info">
                                    <h3>Benefits of EKS:</h3>
                                    <p>While users can leverage AWS EC2 instances to carry workloads, this method could become overwhelmingly burdensome if the workload requires extreme scaling & variation in workload. With Kubernetes, users can control the pods and nodes carrying workloads easily, and securely scale by orders of magnitude in just seconds. Also due to Kubernetes’ orchestrative nature, users can containerize their workloads at scale, enabling them to efficiently meet the technological requirements of a given application.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capability">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-1g-12 fadeInUp  Wow from-bottom">
                                <h2 className='text-center'>Getting started with Amazon EKS is easy:</h2>
                            </div>    
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                <h2 className="text-center cloud_text_head_step">1<br/>Step</h2>
                                    <p>Using either the AWS Management Console, AWS CLI, or an AWS SDK, you can create an Amazon EKS cluster.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                    <h2 className="text-center cloud_text_head_step">2<br/>Step</h2>
                                    </div>
                                    <p>Then according to the use case, users can launch managed or self-managed nodes. These nodes can be either serverless with AWS Fargate or they can be servers in the form of EC2 instances</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h2 className="text-center cloud_text_head_step">3<br/>Step</h2>
                                    </div>
                                    <p>When the cluster is launched, you can fine-tune your environments with Lens, kubectl, and other tools which offer the user the ability to interact and configure the environment.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h2 className="text-center cloud_text_head_step">4<br/>Step</h2>
                                    </div>
                                    <p>Deploy and manage workloads on your Amazon EKS cluster the same way that you would with any other Kubernetes environment. You can also view information about your workloads using the AWS Management Console.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text cloud_head_with_text">
                                    <div className="capa_img">
                                        <h2 className="text-center cloud_text_head_step">5<br/>Step</h2>
                                    </div>
                                    <p>Lastly, in order to maintain great telemetry for your cluster, users can leverage Container Insights & CloudWatch, Prometheus & Graphana, and more. This gives a feedback loop so that users can better understand and in turn configure their clusters.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>         
            </div>                
        )
    }
}
