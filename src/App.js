import React,{Component} from 'react';
import Header from './Header/Header'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
import Live from './Tabs/LiveCampaign/LiveCampaign'
import Past from '../src/Tabs/Pastcampaigns/pastCampaigns'
import Upcoming from '../src/Tabs/UpcomingCampaigns/upcomingCampaigns'
import classes from '../src/LinkStyle/link.module.css'
import Modal from '../src/Tabs/Modal/modal'
import Pricing from '../src/Tabs/Modal/EventSummary/eventSummary'

export default function App () {
  return (
    <Router>
      <div className={classes.Main_Nav}>
      <Header/>
      <div className={classes.ManageCam}><h1>Manage Campaigns</h1>
      </div>
      <div className={classes.Nav_Div}>
      <NavLink 
        exact 
        activeClassName={classes.active} 
        className ={classes.Nav_link} 
        to = "/upcoming-campaign"
        >
          Upcoming Campaigns
      </NavLink>
      </div>
      <div className={classes.Nav_Div}>
      <NavLink exact activeClassName={classes.active} className ={classes.Nav_link} to = "/live-campaign">Live Campaigns</NavLink>
      </div>
      <div className={classes.Nav_Div}>
      <NavLink exact activeClassName={classes.active} className ={classes.Nav_link} to = "/past-campaign">Past Campaigns</NavLink>
      </div>

    <Route path="/live-campaign" component={Live}/>
    <Route path="/past-campaign" component={Past}/>
    <Route path="/upcoming-campaign" component={Upcoming}/>
    </div>
    </Router>
  );

} 



