import React from 'react'
import classes from '../Modal/modal.module.css'
const modal =(props)=>{
 
   
    return(
        
        <div className={classes.Modal}  style={{
            transform:props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
            opacity:props.showModal ? '1' : '0'
            }}  >
            <div className ={classes.modalImage}>
                <img style={{float:'left'}} src ={props.imageshown}></img>
                <div>
                   <span className={classes.SpanName}>{props.name}</span>
                   <br/>
                   <span className={classes.SpanName} style={{fontStyle:'italic'}}>{props.country}</span>
                   </div>
            </div>
            <div className={classes.Price}>
                <h2>Pricing</h2>
             <div/>
            
                     <ul className={classes.weeks}>
                         <li>1 week - 1 Month</li>
                         <li>6 Month</li>
                         <li>1 Year</li>
                     </ul>

                
                <ul className={classes.Prices}>
                         <li>$100.00</li>
                         <li>$500.00</li>
                         <li>$900.00</li>
                     </ul>
                </div>
                
                
        <div style={{paddingTop:'2em'}}>
            <button className={classes.btnbot} onClick={props.click}>Close</button>
        </div>
        </div>
    )
}

export default modal