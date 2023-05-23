import React from 'react';
import emailjs from 'emailjs-com';
function Footer() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_3cgd93a', 'template_dapptnn', e.target, 'user_85McB6BS84C9WdDmfL0pV')
          .then((result) => {
              console.log(result.text + 'mail send');
              alert("Your subscription has been sent");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    return (
        <div id="footer">
            <footer>
                <article className="ftr-1">
                    <div className="container pt50 pb50">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-4 col-12 col-xs-12">
                                <h3 className="ftr-head mt-xs-20">Company</h3>
                                <ul className="list-unstyled footer-txt">
                                    <li><a aria-label="Go to Navigate your next Page" href="/about-us/#work-stratery" title="Future Technology">Future Technology</a></li>
                                    <li><a aria-label="Go to About Scriptics Page" href="/about-us" title="About Scriptics">AboutUs</a></li>
                                    <li><a aria-label="Go to Careers Page" href="/contact/#contact-us" title="Careers">Careers</a></li>
                                    <li><a aria-label="Go to ESG Page" href="/about-us/#technology-we-follow" title="CustomerService">CustomerService</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-12 col-xs-12">
                                <h3 className="ftr-head mt-xs-20">Discover</h3>
                                <ul className="list-unstyled footer-txt">
                                    <li><a aria-label="Go to Navigate your next Page" href="/#he_service" title="Service">Services</a></li>
                                    <li><a aria-label="Go to ESG Page" href="/#he_industries" title="Industries">Industries</a></li>
                                    <li><a aria-label="Go to Investors Page" href="/#he_cloud" title="Cloud services">Cloud services</a></li>
                                </ul>
                            </div>
                            <div className="clearfix visible-sm"></div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-xs-12">
                                <h3 className="ftr-head mt-sm-20">Connect with us</h3>
                                <ul className="list-inline footer-txt">
                                    <li className="list-inline-item">
                                        <a aria-label="Follow us on Twitter" title="Follow us on Twitter" target="_blank" href="https://twitter.com/scripticstech" rel="noopener noreferrer">
                                            <img src="/assets/img/twitter.svg" width="20" height="20" alt="Twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a aria-label="Follow us on Facebook" title="Follow us on Facebook" target="_blank" href="https://www.facebook.com/scripticsinc/" rel="noopener noreferrer"> 
                                            <img src="/assets/img/facebook.svg" width="20" height="20" alt="Facebook" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a aria-label="Follow us on LinkedIn" title="Follow us on LinkedIn" target="_blank" href="https://www.linkedin.com/company/scripticstechs/" rel="noopener noreferrer"> 
                                            <img src="/assets/img/linkedin.svg" width="20" height="20" alt="LinkedIn" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a aria-label="Follow us on YouTube" title="Follow us on YouTube" target="_blank" href="https://www.youtube.com/@scripticstechnologies6312/" rel="noopener noreferrer">
                                            <img src="/assets/img/youtube.svg" width="20" height="20" alt="Youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-xs-12">
                                <div className="footet-heading">
                                    <h4>Stay in the know with our newsletter</h4>
                                    <div className='ftr-1-email'>
                                        <form id="footer-form" onSubmit={sendEmail}>
                                            <input type="text" className="footer-email" placeholder="Your Email here" name="email" required/><span className="email-tip"></span>
                                            <button className="footer-btn">Subscribe Now <i className="fa fa-arrow-right"></i></button>
                                        </form>
                                    </div>    
                                </div>
                                <div className="footet-heading">
                                   
                                </div>
                            </div>
                    
                        </div>
                    </div>        
                </article>
            </footer>
            <div id="scrollToTop">
                <img src="/assets/img/arrow_up.png" href="#" id="scroll" />
            </div>
        </div>
    )            
}

export default Footer