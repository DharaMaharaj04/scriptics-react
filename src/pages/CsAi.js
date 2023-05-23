import React from 'react';
import { Helmet } from 'react-helmet';
function CsAi() {
    return (
        <div>
            <Helmet>
                <body id="page-case-sudy" />
            </Helmet>
            <section className="case-study-inner" style={{background:`url(/assets/img/ai-banner.png) no-repeat`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-3 col-md-4 col-lg-4 cs-main">
                            <p className="case-cat">Case Studies - AI & Automation</p>
                            <h2 className="title-txt cs">Creating new benchmark for Digital dentistry with Ai World’s first end to end solution</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="case-study">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <hr />
                            <h2 className="title-txt cs">Overview</h2>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                            <p className="para-txt">Artificial intelligence was introduced about sixty years ago. However, AI has made remarkable progress in the last decade finding its applications in various fields including the medical and healthcare sector. Today, healthcare AI systems have evolved to such an extent, that their implications in the medical health sector are inevitable.</p>
                            <p className="para-txt">AI applications have seen significant growth in Dentistry over the past few years. Tasks like accurate dental mapping and diagnosing the condition after processing large amounts of data have been made much easier using AI. Even orthodontic treatment plans have implemented AI to automatically judge the anatomy of the patient and generate a treatment plan according. Machine Learning (ML) models have been developed to focus on the quality and accuracy of diagnosis and treatment of dental ailments. These ML models are trained with the help of huge quantities of data, labeled by senior medical professionals. As they process more and more data, the deep learning model stores any new data and classifies it under different labels, eventually increasing its accuracy in suggesting diagnosis and treatment for the patient.</p>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="case-study-art">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 cs-left">
                            <img src="/assets/img/cs-left.png" alt="case study left featuremedia"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 cs-right">
                            <img src="/assets/img/cs-right.png" alt="case study right featuremedia"/>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="case-study">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <hr />
                            <h2 className="title-txt cs">Problem & Solution</h2>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                            <p className="para-txt">With AI, dentists can get a taste of automation through machine learning (ML), deep learning (DL), and   computer vision algorithms that help identify pathologies while charting seamlessly with the clinic’s practice management system (PMS) and digitized data.</p>
                            <p className="para-txt">On all of these fronts, AI has the power to enhance how a dental clinic operates and penetrate every single step of the value chain.</p>
                            <p className="para-txt">Dentistry is a business, and the dentist’s job is to keep the customer happy and the clinic operating at maximum efficiency. It’s also to attract qualified talent, maintain a reputable standing, remain cost effective, and stay in step with technology and medical knowledge, to name a few obligations. In the midst of so much responsibility, dentists must also rely on their own abilities to minimize the capacity for human error.</p>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="case-study-art">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 cs-left">
                            <img src="/assets/img/cs-left.png" alt="case study left featuremedia"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 cs-right">
                            <img src="/assets/img/cs-right.png" alt="case study right featuremedia"/>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="case-study">
                <div className="container">
                    <div className="row">
                       <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <hr/>
                            <h2 className="title-txt cs">Technologies involved</h2>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 left">
                            <p className="para-txt">The application of AI in automated cephalometric landmark identification may lessen the burden and alleviate human errors. By gathering radiographic data automatically, it also helps reduce human tasks and the time required for both research and clinical purposes</p>
                            <p className="para-txt">Another use of AI is found in the automation of case setups for indirect bonding or production of aligners. These automated setups allow for the visualization of treatment outcomes using specific algorithms again based on supervised learning. New algorithms are being developed to identify teeth in Cone Beam CTs (CBCTs) automatically.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CsAi
