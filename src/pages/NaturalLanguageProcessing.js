import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class NaturalLanguageProcessing extends Component {
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
                <section className='ser-link'>
                    <div className="">
	                    <div className="container">
		                    
	                    </div>
                    </div>
                </section>
                <section className='srv-main'>
                    <OwlCarousel className="owl-theme" {...options} >
                        <div className='slide-1'>  
                            <div className='slide-img'>
                                <img src="/assets/img/NaturalLanguageProcessing/Banner/AI for gmaing.jpg" alt='AI for Gaming' />
                                <div className='slider-overlay-amethyst'></div>
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='serv-link col-12'>
                                            <ol className=" nav-links">
                                                <li className="dropdown relative drop-container">
                                                    <a href="#" className='serverice_menu textwh'>Service<i className="text-uppercase " aria-hidden="true"></i></a>
                                                    <div className="bg-white">
                                                        <ul className="list dropdown-content list-inline ">
                                                            <li className='ser-sub-lin'>Development & Maintenance</li>
                                                            <li className='ser-sub-lin'>Accelerate</li>
                                                            <li className='ser-sub-lin'>Insight</li>
                                                            <li className='ser-sub-lin'>Experience</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="active dropdown relative drop-container ">
                                                    <a href="#" className='serverice_menu textwh'><span >Insight</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                    <div className="bg-white ">
                                                        <ul className="list row dropdown-content">
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/ai_automation'>Ai & Automation</Link></li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/statistical_data_analysis'>Statistical Data Analytics</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/business_intelligence'>Business Intelligence</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/computer_vision'>Computer Vision</Link>
                                                                    </li>
                                                                    
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/big_data_analysis'>Big data analytics</Link>
                                                                    </li>
                                                                    
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/signal_processing'>Digital Signal Processing</Link>
                                                                    </li>
                                                                    
                                                                    
                                                                </ul>
                                                            </li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/natural_language_processing'>Natural Language processing</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/deep_learning'>Deep learning</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/scriptics_ai_gaming'>AI & Gaming</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Natural Language processing</span></li>
                                            </ol>
                                        </div>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">Natural Language Wizard: Smart Communication Solutions</h2>
                                            </div>
                                        </div>
                                    </div> 
                                </div>     
                            </div>      
                        </div>
                        <div className='slide-2'>
                            <div className='slide-img'>
                                <img src="/assets/img/NaturalLanguageProcessing/Banner/Design and interactive.jpg" alt='Design and Interaction' />
                                <div className='slider-overlay-amethyst'></div>
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='serv-link col-12'>
                                            <ol className=" nav-links">
                                                <li className="dropdown relative drop-container">
                                                    <a href="#" className='serverice_menu textwh'>Service<i className="text-uppercase " aria-hidden="true"></i></a>
                                                    <div className="bg-white">
                                                        <ul className="list dropdown-content list-inline ">
                                                            <li className='ser-sub-lin'>Development & Maintenance</li>
                                                            <li className='ser-sub-lin'>Accelerate</li>
                                                            <li className='ser-sub-lin'>Insight</li>
                                                            <li className='ser-sub-lin'>Experience</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="active dropdown relative drop-container ">
                                                    <a href="#" className='serverice_menu textwh'><span >Insight</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                    <div className="bg-white ">
                                                        <ul className="list row dropdown-content">
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/ai_automation'>Ai & Automation</Link></li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/statistical_data_analysis'>Statistical Data Analytics</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/business_intelligence'>Business Intelligence</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/computer_vision'>Computer Vision</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/big_data_analysis'>Big data analytics</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/signal_processing'>Digital Signal Processing</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/natural_language_processing'>Natural Language processing</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/deep_learning'>Deep learning</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/scriptics_ai_gaming'>AI & Gaming</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Natural Language processing</span></li>
                                            </ol>
                                        </div>
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide white-color mb-xs-10">SmartScript: The Ultimate Language Tool</h2>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>    
                        </div>
                        <div className='slide-3'>
                            <div className='slide-img'>
                                <img src="/assets/img/NaturalLanguageProcessing/Banner/Strategy and consulting.jpg"  alt='Strategy and consulting' />
                                <div className='slider-overlay-amethyst'></div>
                            </div>
                            <div className='caption'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='serv-link col-12'>
                                            <ol className=" nav-links">
                                                <li className="dropdown relative drop-container">
                                                    <a href="#" className='serverice_menu textwh'>Service<i className="text-uppercase " aria-hidden="true"></i></a>
                                                    <div className="bg-white">
                                                        <ul className="list dropdown-content list-inline ">
                                                            <li className='ser-sub-lin'>Development & Maintenance</li>
                                                            <li className='ser-sub-lin'>Accelerate</li>
                                                            <li className='ser-sub-lin'>Insight</li>
                                                            <li className='ser-sub-lin'>Experience</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="active dropdown relative drop-container ">
                                                    <a href="#" className='serverice_menu textwh'><span >Insight</span><i className="text-uppercase " aria-hidden="true"></i></a>
                                                    <div className="bg-white ">
                                                        <ul className="list row dropdown-content">
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/ai_automation'>Ai & Automation</Link></li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/statistical_data_analysis'>Statistical Data Analytics</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/business_intelligence'>Business Intelligence</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/computer_vision'>Computer Vision</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/big_data_analysis'>Big data analytics</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/signal_processing'>Digital Signal Processing</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='col-lg-4 col-md-4 col-sm-12 col-xs-12 align-list'>
                                                                <ul className='list-inline px-0'>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/natural_language_processing'>Natural Language processing</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/deep_learning'>Deep learning</Link>
                                                                    </li>
                                                                    <li className='ser-sub-lin'>
                                                                        <Link to='/scriptics_ai_gaming'>AI & Gaming</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                
                                                <li className='serverice_menu_last dropdown relative drop-container textwh'><span>Natural Language processing</span></li>
                                            </ol>
                                        </div> 
                                        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                            <div className='slide_content'>
                                                <h2 className="h2-slide mb-xs-10">SCRIPTICS, AI FOR GAMING EXPERIENCELanguage Alchemy: Transforming Words into Actionable Intelligence</h2>
                                                
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
                                        <h2 className="indus-title_1">Futuristic NLP Solutions for Next-gen Interaction, Communication, and Experience</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-right">
                                <div className="srv-info">
                                    <p className="srv-info">Natural Language Processing (NLP) is an AI (Artificial Intelligence) enabled software solution that empowers apps and devices to understand spoken words and answer them just like humans. We, at Scriptics, present you with state-of-art AI-driven NLP capability for your apps and products to make them listen and respond to human speech at an incredibility realistic level. Our advanced NLP services have resulted in revolutionary progress for our clients in interpreting human speech and extending the communication process beyond spoken words.</p>
                                    <p>Scriptics are specialists in integrating artificial intelligence and machine learning with linguistics nuances to offer you sophisticated NLP services for customer interaction. Our talented team of NLP experts helps empower your apps, bots, and IoT devices with sophisticated NLP capabilities for better human interaction and customer communication.</p>
                                    <p>Contact us to know more about our natural language processing capabilities and how we can assist you further!</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-1g-6 fadeInUp  Wow from-left">
                                <img className="srv-con-img" src="/assets/img/ai_ (1).png" alt="AI & Automation icon" style={{height:300,width:'100%'}}/>
                            </div>
                            <div className="srv-con col-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:50}}>
                                <div className="srv-info">
                                    <h4 className="srv-info"> The following are few of the services offered – </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="srv-level">
                    <div className="container">
                        <div className="row">
                            <div className="srv-box col-12 col-sm-12 col-md-6 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/choice.svg" alt="service level icon 1"/>
                                    <p>Sentiment Analysis: Our NLP models deploy an opinion mining technique to gauge customer needs and act proactively to build high-performance marketing campaigns, generate quality leads, exceed customer expectations, form effective business strategies, and drive business growth thereby.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/discover (1).svg" alt="service level icon 2"/>
                                    <p>Entity Extraction: We help businesses to automate text analysis to extract relevant content from huge unstructured organizational data. Scriptics, with entity extraction, assist you to personalize search algorithms and cost-effectively improve customer support.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/development.svg" alt="service level icon 3"/>
                                    <p>Intent Classification: Scriptics help you analyze your customer conversations effectively to understand their intent and objectives. Our NLP expertise helps you deploy competent chatbots and such high-end human-machine interaction systems enabling business process automation covering data processing and analytics.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/automation (1).svg" alt="service level icon 4"/>
                                    <p>Text Classification: Scriptics helps their clients to structure and segregate critical business data with automated text categorization for better searchability. This helps you leverage real-time insights to derive maximum value from available information quickly with incredible cost savings.</p>
                                </div>
                            </div>
                            <div className="srv-box col-12 col-sm-12 col-md-12 col-lg-6 fadeInUp  Wow from-bottom">
                                <div className="image_with_text">
                                    <img src="/assets/img/innovation.svg" alt="service level icon 5"/>
                                    <p>Scriptics offers a comprehensive NLP service that empowers businesses to deliver next-gen human-machine interactivity to their customers enriching engagement and experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capability">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <h2>CAPABILITIES</h2>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <img src="/assets/img/robotic.svg" alt="capabilities"/>
                                    <p>Text pre-processing: Data is collected from multiple sources. Damaged and incomplete data are eliminated. The relevant text is normalized and prepared for further analysis.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg- fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 2.svg" alt="capabilities"/>
                                    </div>
                                    <p>Text parsing: Data gets structured and organized. A deep and focussed exploratory analysis is conducted with smaller data sets. A format is established for information presentation.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 3.svg" alt="capabilities"/>
                                    </div>
                                    <p>Text representation: Datasets are categorized. Semantic, syntactic, and pragmatic analysis are carried out. Visualization techniques are used for better data representation and to draw useful insights.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 4.svg" alt="capabilities"/>
                                    </div>
                                    <p>Modeling: ANN (Artificial Neural Networks) is modeled and trained for automatic learning. Text mining facilitates targeted information retrieval.</p>
                                </div>
                            </div>
                            <div className="srv-capability-box col-12 col-lg-4 fadeInUp  Wow from-bottom">
                                <div className="capa_image_with_text">
                                    <div className="capa_img">
                                        <img src="/assets/img/Mask Group 5.svg" alt="capabilities"/>
                                    </div>
                                    <p>Evaluation and Deployment: The NLP model is tested for performance. Metrics are evaluated and corrective measures are taken if required. The final NLP model is deployed in the execution environment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
