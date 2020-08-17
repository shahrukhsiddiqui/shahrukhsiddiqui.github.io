import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table from '../Table/Table'
import {TableBody} from '../Table/Constanst.js/Constant'
const liveCampaign = (props)=>
{

    
        
        
 return(
    <div style={{padding:200}}>
          <Table body={TableBody}/>
          </div>
 );
 
}

export default liveCampaign