import React, { Component } from 'react'

export class FutureTechnology extends Component {
  render() {
    return (
      <div>
      <section className="future-tech">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-3 col-md-4 col-lg-4 cs-main">
                        <h4 className="title-txt cs">The future of technology</h4>
                    </div>
                </div>
            </div>
        </section>
        <section className="actionable">
            <div className=''>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-md-offset-6 col-xs-12 ">
                            <p>Artificial intelligence, or AI, and machine learning refer to the ability of machines to learn and act intelligently, meaning they can make decisions, carry out tasks, and even predict future outcomes based on what they learn from data.</p>
                            <p>AI and machine learning already play a bigger role in everyday life than you might imagine. Alexa, Siri, Amazon's product recommendations, Netflix’s and Spotify’s personalized recommendations, every Google search you make, security checks for fraudulent credit card purchases, dating apps, fitness trackers... All are driven by AI.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='srv-content'>
            <div className='container'>
                <div className='row action-info'> 
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 fadeInUp animated from-left'>
                        <p>AI is going to revolutionize almost every facet of modern life. Stephen Hawking said, “Success in creating AI would be the biggest event in human history.” And Hawking immediately followed that up with, “Unfortunately, it might also be the last, unless we learn how to avoid the risks."</p>
                        <p>There are potentially huge risks for society and human life as we know it, particularly when you consider some countries are racing to develop AI-enabled autonomous weapons. AI and machine learning are the foundation on which many other technologies are built. For instance, without AI, we wouldn't have achieved the amazing advances in the Internet of Things, virtual reality, chatbots, facial recognition, robotics, automation, or self-driving cars, just to name a few.</p>
                        <p>But, most importantly how we can change people’s lives we are putting our heavy investment towards life science and improving the next generation of drug discovery technology. AMR(Anti-Microbial Resistance) is a big problem as most of the vaccines and treatments are resistant to the microbes, our recent collaboration with GBRC(Gujarat Biotechnology Research Centre) will open new doors for AMR research our core focus will be identifying responsible genes for AMR and possible treatment of it.</p>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 img-bottom fadeInUp animated from-right'>
                        <img src="/assets/img/biot.png" alt='future of technology' className='future-of-technology' />
                    </div>
                </div>    
            </div> 
        </section>
      </div>
    )
  }
}
export default FutureTechnology