import React from 'react';
import { Helmet } from 'react-helmet';
function BPO() {
    return (
        <div>
            <Helmet>
                <body id="page-case-sudy" />
            </Helmet>
            <section className="case-study-inner" style={{background:`url(/assets/img/cs-BPO.png) no-repeat`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-3 col-md-4 col-lg-4 cs-main">
                            <p className="case-cat">Case Studies - BPO</p>
                            <h2 className="title-txt cs">What is so good about Customer Service: Sales force</h2>
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
                            <p className="para-txt">Our CRM solutions are specifically customized for your organizations to keep you ahead in rapidly changing environment of business.Scriptics’ expertise in Salesforce services has allowed us to develop highly customizable applications which serve to implement end-to-end business processes. This in turn, allows the business to run more effectively.</p>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="case-study-art">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 cs-left">
                        
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 cs-right ">
                            <img src="/assets/img/consult.png" alt="case study right featuremedia"/>
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
                            <p className="para-txt">Salesforce CRM's internationalization options and ease of integration impressed the decision makers. Scriptics successfully deployed Salesforce CRM to more than 500 users worldwide withing a condensed span of 9 weeks helping the client realise RoI instantaneously. Optimized the point & click usability for sales teams for faster data entry and retrieval. Optimized Sales & Marketing processes. Reports & Dashboards serve The Client business objectives in terms of metrics & KPIs tracked at each of the hierarchical levels.</p>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="case-study">
                <div className="container">
                    <div className="row">
                       <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <hr />
                            <h2 className="title-txt cs">Technologies involved</h2>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                            <p className="para-txt">Salesforce CPQ, Apex Class, VF Page, JavaScript ,Jquery, Lightning,bootstrap CSS, Angular JS</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BPO
