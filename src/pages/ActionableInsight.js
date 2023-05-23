import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
export  class ActionableInsight extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <body id="page-actioninsinght" />
        </Helmet>
        <section className="case-study-inner actionable_sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-3 col-md-4 col-lg-4 cs-main">
                        <h2 className="title-txt cs">Actionable Insights</h2>
                        <p className="case-cat"> Turn data into actionable insights.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="actionable">
            <div className=''>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-md-offset-6 col-xs-12 ">
                            <p>We always ensure the continued success of our clients and employees by placing problem solving ahead of anything else and walking the extra mile when needed. This means that we value our engagements with our employees as well as clients and base our consultations on client’s specific goals which empower them to meet their business objectives.<br/>Although we work with technology, our primary focus is maintaining a rock solid and secure relationship with each of our clients. Our clients can rely on every professional of our company to deliver exemplary service and become our loyal and valued technology partner.</p>
                            <p>We helped a 100+ yr old, publicly listed large personal loan lender launch sub-prime credit card and provided support in building response models. Initial model was built on off-us data using Experian Sandbox and later it was refined by combining the on-us campaign performance data and the Experian Sandbox (off-us) data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='srv-content'>
            <div className='container'>
                <div className='row action-info'> 
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 fadeInUp animated from-left'>
                        <p>Analyzed the on-us performance (activation rate, revolve rate, utilization rate, balance, delinquency, late fee, on-time payments) of each segment (based on product and customer type) in early MOB. Analyzed the performance (early MOB DQ and Year-2 loss rates) of look-alike population on Sandbox. Plugged the results in NPV model and created Gen2 credit risk policy.</p>
                        <p>Created portfolio health monitoring dashboards for executives. Designed marketing campaign calendar and strategies for each campaign – CLI (Credit Limit Increase), BT (Balance Transfer), Spend (Back to School, Buy Local). Created decision trees and marginal loss calculations to identify the right segments for the offers.</p>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 fadeInUp animated from-right'>
                        <img src="/assets/img/action.png" />
                        </div>
                    </div>    
                </div> 
            </section>
      </div>
    )
  }
}

export default ActionableInsight
