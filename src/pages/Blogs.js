import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Data } from './Data';

export default class SalesForce extends Component {
    constructor(props) {
        super(props);
        this.state = {
          itemList: [],
          itemsToShowList: [],
          hideLoadMore: false,
          showResetButton: false
        };
      }
    
      componentDidMount() {
        this.getInitialItemList();
      }
    
      getInitialItemList = () => {
        this.setState({
          itemList: Data,
          itemsToShowList: Data.slice(0, 6)
        });
      };
    
      loadMore = () => {
        const visibleItemsCount = this.state.itemsToShowList.length;
        const totalItems = Data.length;
    
        const datatoLoad = [
          ...this.state.itemsToShowList,
          ...Data.slice(visibleItemsCount, visibleItemsCount + 6)
        ];
    
        const isAllItemsLoaded = datatoLoad.length === totalItems;
    
        this.setState({
          itemsToShowList: datatoLoad,
          hideLoadMore: isAllItemsLoaded,
          showResetButton: isAllItemsLoaded
        });
      };
    
      resetList = () => {
        this.getInitialItemList();
        this.setState({
          hideLoadMore: false,
          showResetButton: false
        });
      };
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
    return(
        <div className='blog-page'>
            <Helmet>
                <body id="page-blogs" />
            </Helmet>
            <section className='srv-main'>
                <OwlCarousel className="owl-theme" {...options}>
                    <div className='slide-1'>
                        <div className='slide-img'>
                            <img src="/assets/img/BigDataAnalytics/Banner/AIforGaming.jpg" />
                        </div>
                        <div className='caption'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                        <div className='slide_content'>
                                            <p className="blogIndicator">Press Release</p>
                                            <h2 className="h2-slide white-color mb-xs-10">Scriptics to Acquire Digital Experience and Marketing Agency, oddity</h2>
                                            <Link className="btn btn-shutter-more text-uppercase" to="/">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='slide-2'>
                        <div className='slide-img'>
                            <img src="/assets/img/AIandGaming/scriptics-tech.jpg" />
                        </div>
                        <div className='caption'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                        <div className='slide_content'>
                                            <p className="blogIndicator">Press Release</p>
                                            <h2 className="h2-slide white-color mb-xs-10">Scriptics Recognized as one of the 2022 World’s Most Ethical Companies for the Second Consecutive Year by Ethisphere</h2>
                                            <Link className="btn btn-shutter-more text-uppercase" to="/">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='slide-2'>
                        <div className='slide-img'>
                            <img src="/assets/img/DeepLearning/Banner/AI for gmaing.jpg" />
                        </div>
                        <div className='caption'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                        <div className='slide_content'>
                                            <p className="blogIndicator">Press Release</p>
                                            <h2 className="h2-slide white-color mb-xs-10">Scriptics to Acquire Digital Experience and Marketing Agency, oddity</h2>
                                            <Link className="btn btn-shutter-more text-uppercase" to="/">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section>
            <section className='overview'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <h2 className='h2-heading'>Overview</h2>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <p className='overview-para'>Scriptics is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation.</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className="bg-vcard">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <img src="/assets/img/investor-contacts.png" className="center-block" alt="contact" /> 
                                    </div>
                                    <div className="col-md-8 col-sm-8 col-xs-12">
                                        <p className="name-text">Media Contact</p>
                                        <p className="designation-text">Please drop a mail<span className="block inline-xs"> to the Global PR Team for your queries.</span></p>
                                        <Link className="btn career_btn text-uppercase" to="/contact">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec about_us nav_name" id="about_us">
                <div className='container'>
                        <div className='row'>    
                            <div className='col-12 col-lg-5 col-md-12 col-sm-12 col-xs-12 news px-0 ctrl-width-mob wow fadeInUp animated from-right'>
                                <div className='col-eq-ht bg-yellow'>
                                    <div className='new_padd'>
                                        <h2>In the news</h2>
                                        <div className='pro_news'>
                                            <h4 className='news-desc'>Gujarat Biotechnology Research Centre (GBRC) has signed MoU with Scriptics Inc.
                                                <a href='https://timesofindia.indiatimes.com/city/vadodara/gbrc-inks-pact-with-canadian-co/articleshow/94670778.cms?utm_source=whatsapp&utm_medium=social&utm_campaign=TOIArticleshowicon'><img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" /></a>
                                            </h4>
                                        </div>
                                        <div className='pro_news'>
                                            <h4 className='news-desc'>Scriptics starting with new country- "Australia"
                                                <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" />
                                            </h4>
                                        </div>
                                        <div className='pro_news'>
                                            <h4 className='news-desc'>Invest Ontario and Toronto Business Development Centre supports to Scriptics for future development.
                                                <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" />
                                            </h4>
                                        </div>
                                        <div className='pro_news'>
                                            <h4 className='news-desc'>Scriptics will be attending at Collision Conf in Toronto 2022.
                                                <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg"/>
                                            </h4>
                                        </div>
                                        <div className='pro_news'>
                                            <h4 className='news-desc'>Scriptics, #ICYMI unlocking global market opportunities for startups with T-Hub.
                                                <img className="img-right-arrow" alt="arrow" src="/assets/img/right-arrow.svg" />
                                            </h4>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 col-sm-12 px-0 wow fadeInUp animated from-right">
                                <div className='row col-eq-ht no-gutters'>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                        <div className="new_in"> 
                                            <a href="/" title="Insight">  
                                                <img alt="Insight" className="content-image" src="/assets/img/strategy.png" /> 
                                                <div className="content-details fadeIn-bottom">
                                                    <h3 className="content-title">STRATEGY<br /></h3>
                                                </div>      
                                            </a>   
                                        </div>
                                    </div>        
                                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                        <div className="new_in">    
                                            <a href="/" title="Innovate">        
                                                <img alt="Innovate" className="content-image" src="/assets/img/technology.png" /> 
                                                <div className="content-details fadeIn-bottom">
                                                    <h3 className="content-title">TECHNOLOGY<br/></h3>    
                                                </div>       
                                            </a> 
                                        </div>        
                                    </div>
                            
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 ctrl-width-mob">
                                        <div className="new_in">            
                                            <a href="/" title="Accelerate">           
                                                <img alt="Accelerate" className="content-image" src="/assets/img/ai-game.png" /> 
                                                <div className="content-details fadeIn-bottom">
                                                    <h3 className="content-title">AI FOR GAMING</h3>    
                                                </div>           
                                            </a>
                                        </div>           
                                    </div>
                                    <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-0 ctrl-width-mob"> 
                                        <div className="new_in">           
                                            <a href="/" title="Assure">       
                                                <img  alt="Assure" className="content-image" src="/assets/img/consult.png" /> 
                                                <div className="content-details fadeIn-bottom">
                                                    <h3 className="content-title"> CONSULTING<br /></h3>    
                                                </div>       
                                            </a> 
                                        </div>
                                    </div>    
                                </div>    
                            </div>
                        </div>
                </div> 
            </section>
            <section className='blog-card'>
                <div className='container'>
                    <div className='row'>
                        {this.state.itemsToShowList.map(city => (
                            <div className="col-12 col-md-4 col-sm-12 col-xs-12 card-deck ext-center wow fadeInUp animated from-right appear">
                                <div className="card career_opt">
                                    <img className="card-img-top" src={city.img}/>
                                    <div className="card-body">
                                        <a href={city.link} className="card-title">{city.title}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                        {!this.state.hideLoadMore && (
                            <button className='btn career_btn text-uppercase' onClick={this.loadMore}>Load More</button>
                        )}
                        {this.state.showResetButton && (
                            <div>
                            <button className='btn career_btn text-uppercase' onClick={this.resetList}>Reset</button>
                            </div>
                        )}
                </div>
            </section>
        </div>
    )
 }
}
