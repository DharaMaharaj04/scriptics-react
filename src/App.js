import Footer from './components/Footer';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import AIAutomation from './pages/AIAutomation';
import AmazonEKS from './pages/AmazonEKS';
import AmazonQuickSight from './pages/AmazonQuickSight';
import AmazonRelationalDatabaseService from './pages/AmazonRelationalDatabaseService';
import ApplicationModernization from './pages/ApplicationModernization';
import Automative from './pages/Automative';
import AwsControlTower from './pages/AwsControlTower' ;
import AwsElemental from './pages/AwsElemental';
import BFSI from './pages/BFSI';
import BigDataAnalysis from './pages/BigDataAnalysis';
import Blog from './pages/Blog';
import BPO from './pages/BPO';
import BusinessIntelligence from './pages/BusinessIntelligence';
import CapitalMarket from './pages/CapitalMarket';
import Chemical from './pages/Chemical';
import ComputerVision from './pages/ComputerVision';
import ConsumerGoods from './pages/ConsumerGoods';
import CsAi from './pages/CsAi';
import DataEngineeringAnalytics from './pages/DataEngineeringAndAnalytics';
import DeepLearning from './pages/DeepLearning';
import Dental from './pages/Dental';
import Devops from './pages/Devops';
import DistributedComputing from './pages/DistributedComputing';
import Energy from './pages/Energy';
import Health from './pages/Health';
import Home from './pages/Home';
import Insurance from './pages/Insurance';
import MachineLearning from './pages/MachineLearning';
import MathematicalModellingOptimization from './pages/MathematicalModellingOptimization';
import MediaEntertainment from './pages/MediaEntertainment';
import MicrosoftOnAws from './pages/MicrosoftOnAws';
import Migration from './pages/Migration';
import NaturalLanguageProcessing from './pages/NaturalLanguageProcessing';
import Contact from './pages/Contact';
import Page404 from './pages/404';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Helmet} from "react-helmet";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import OilAndGas from './pages/OilAndGas';
import Retail from './pages/Retail';
import ScripticsAIGaming from './pages/ScripticsAIGaming';
import SignalProcessing from './pages/SignalProcessing';
import StatisticalDataAnalysis from './pages/StatisticalDataAnalysis'
import ThinkboxStudio from './pages/ThinkboxStudio';
import WearableComputing from './pages/WearableComputing';
import ActionableInsight from './pages/ActionableInsight';
import FutureTechnology from './pages/FutureTechnology';
import CyberSecurity from './pages/CyberSecurity';
import SOC from './pages/SOC';
import DevelopmentMaintance from './pages/DevelopmentMaintance';
import SalesForce from './pages/SalesForce';
import MobileDevelopment from './pages/MobileDevelopment';
import ScriptisCloud from './pages/ScriptisCloud';
import UI_UX from './pages/UI_UX';
import DevSecops from './pages/DevSecops';
import CloudSecurityEngineering from './pages/CloudSecurityEngineering';
import ApplicationAssessment from './pages/ApplicationAssessment';
import CloudNativeApplicationDevelopment from './pages/CloudNativeApplicationDevelopment';
import SaaSProduct from './pages/SaaSProduct';
import DataStrategy from './pages/DataStrategy';
import DataGovernanceEngineering from './pages/DataGovernanceEngineering';
import AdvancedAnalytics from './pages/AdvancedAnalytics';
import CloudGovernanceReporting from './pages/CloudGovernanceReporting';
import CloudDiscoveryOptimization from './pages/CloudDiscoveryOptimization';
import SalesforceSalesCloud from './pages/SalesforceSalesCloud';
import SalesforceCPQ from './pages/SalesforceCPQ';
import SalesforceIndustries from './pages/SalesforceIndustries';
import SalesforceMarketingCloud from './pages/SalesforceMarketingCloud';
import SalesforceInteractionStudio from './pages/SalesforceInteractionStudio';
import SalesforceServiceCloud from './pages/SalesforceServiceCloud';
import SaleforceBusinessIntelligence from './pages/SaleforceBusinessIntelligence';
import Blogs from './pages/Blogs';
import BlogInner from './pages/BlogInner';
import BlackberryCylanceDefends from './pages/BlackberryCylanceDefends';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-204814637-2');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/ai_automation' component={AIAutomation} />
            <Route exact path='/amazon_elastic_kubernetes_service' component={AmazonEKS} />
            <Route exact path='/amazon_quicksight' component={AmazonQuickSight} />
            <Route exact path='/amazon_relational_database_service' component={AmazonRelationalDatabaseService} />
            <Route exact path='/application_modernization' component={ApplicationModernization} />
            <Route exact path='/industry_automative' component={Automative} />
            <Route exact path='/aws_control_tower' component={AwsControlTower} />
            <Route exact path='/aws_elemental' component={AwsElemental} />
            <Route exact path='/industry_bfsi' component={BFSI} />
            <Route exact path='/big_data_analysis' component={BigDataAnalysis} />
            <Route exact path='/case-studies' component={Blog}/>
            <Route exact path='/case_study_bpo' component={BPO} />
            <Route exact path='/business_intelligence' component={BusinessIntelligence} />
            <Route exact path='/industry_capital_market' component={CapitalMarket} />
            <Route exact path='/industry_checmical' component={Chemical} />
            <Route exact path='/computer_vision' component={ComputerVision} />
            <Route exact path='/industry_consumer_goods' component={ConsumerGoods} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/case_study_automation' component={CsAi} />
            <Route exact path='/data_engineering_and_analytics' component={DataEngineeringAnalytics} />
            <Route exact path='/deep_learning' component={DeepLearning} />
            <Route exact path='/industry_dental' component={Dental} />
            <Route exact path='/devops' component={Devops} />
            <Route exact path='/distributed_computing' component={DistributedComputing} />
            <Route exact path='/industry_energy' component={Energy} />
            <Route exact path='/industry_health' component={Health} />
            <Route exact path='/industry_insurance' component={Insurance} />
            <Route exact path='/machine_learning' component={MachineLearning} />
            <Route exact path='/mathematical_modelling_optimization' component={MathematicalModellingOptimization} />
            <Route exact path='/industry_media_entertainment' component={MediaEntertainment} />
            <Route exact path='/microsoft_on_aws' component={MicrosoftOnAws} />
            <Route exact path='/migration' component={Migration} />
            <Route exact path='/natural_language_processing' component={NaturalLanguageProcessing} />
            <Route exact path='/industry_retail' component={Retail} />
            <Route exact path='/industry_oil_and_gas' component={OilAndGas} />
            <Route exact path='/scriptics_ai_gaming' component={ScripticsAIGaming} />
            <Route exact path='/signal_processing' component={SignalProcessing} />
            <Route exact path='/statistical_data_analysis' component={StatisticalDataAnalysis} />
            <Route exact path='/thinkbox_studio' component={ThinkboxStudio} />
            <Route exact path='/wearable_computing' component={WearableComputing} />
            <Route exact path='/actionable_insights' component={ActionableInsight} />
            <Route exact path='/future_technology' component={FutureTechnology} />
            <Route exact path='/blackberry_cybersecurity' component={CyberSecurity} />
            <Route exact path='/soc' component={SOC} />
            <Route exact path='/development-maintance' component={DevelopmentMaintance} />
            <Route exact path='/mobile_development' component={MobileDevelopment} />
            <Route exact path='/ui-ux' component={UI_UX} />
            <Route exact path='/cloud_digital_transfomation' component={ScriptisCloud} />
            <Route exact path='/devsecops' component={DevSecops} />
            <Route exact path='/cloud-sec-eng' component={CloudSecurityEngineering} />
            <Route exact path='/application-asses' component={ApplicationAssessment} />
            <Route exact path='/cloud_naive_app' component={CloudNativeApplicationDevelopment} />
            <Route exact path='/saas_product' component={SaaSProduct} />
            <Route exact path='/data_strategy' component={DataStrategy} />
            <Route exact path='/data_govern_eng' component={DataGovernanceEngineering} />
            <Route exact path='/advanced_analy' component={AdvancedAnalytics} />
            <Route exact path='/automation_reporting' component={CloudGovernanceReporting} />
            <Route exact path='/discovery_optim' component={CloudDiscoveryOptimization} />
            <Route exact path='/sales_force' component={SalesForce} />
            <Route exact path='/salesforce_salecloud' component={SalesforceSalesCloud} />
            <Route exact path='/salesforce_cpq' component={SalesforceCPQ} />
            <Route exact path='/salesforce_industry' component={SalesforceIndustries} />
            <Route exact path='/salesforce_marketing' component={SalesforceMarketingCloud} />
            <Route exact path='/salesforce_studio' component={SalesforceInteractionStudio} />
            <Route exact path='/salesforce_service' component={SalesforceServiceCloud} />
            <Route exact path='/salesforce-bussinte' component={SaleforceBusinessIntelligence} />
            <Route exact path='/blogs' component={Blogs} />
            <Route exact path='/blog-inner' component={BlogInner} />
            <Route exact path='/blackberry-cylance-defends' component={BlackberryCylanceDefends} />
            <Route component={Page404} />
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
