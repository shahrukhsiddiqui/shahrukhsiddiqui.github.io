import React, { useState, Fragment } from 'react'
import DayPicker from "react-day-picker";
// import "react-day-picker/lib/style.css";
import '../../style.css'
import '../Table/Table.css';
import Modal from '../Modal/modal'


const dollarImage = require('../../assests/Price.png');
const csvImage = require('../../assests/file.png');
const reportImage = require('../../assests/report.png');

const calendarIcon = require('../../assests/calendar.png');


export function Table() {
    const [ selectedDay, setSelectedDay] = useState(null); // select date from calendar lib and set it to state
    const [isCalendarVisible, setIsCalendarVisible] = useState(false); // when to show what

    const onDayClick = (day) => {
        console.log(day);
        setIsCalendarVisible(false)
    }

    return (
        <React.Fragment>
            {/* {!isCalendarVisible && <img src={calendarIcon} onClick={() => setIsCalendarVisible(true)} />}
            {isCalendarVisible && <DayPicker
            onDayClick={onDayClick}
            selectedDays={selectedDay}
            />} */}
        </React.Fragment>
    )
   
}

const months =  ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
const formatDate = (dateObj) => {
    const monthIndex = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const date = dateObj.getDate()

    const dateStr = `${months[monthIndex]} ${year}, ${date}`;

    return dateStr
}


export default function ExtendedTable (props) {
    const {  body } = props;

    return (
        <table className="table-wrapper">
                <tr>
                    <th>Date</th>
                    <th>Campaign</th>
                    <th>View</th>
                    <th>Action</th>
                </tr>
            <tbody>
                {
                    body && body.map(rowValue => {
                        return (
                            <Row rowValue={rowValue} />
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}

export  function Row(props) {
    const { rowValue } = props;
    const [updatedDay, setUpdatedDay] = useState(null);
    const [diffInDay, setDiffInDay] = useState(null);

    const selectedDay = (day) => {
        const aDayInMillisecond = 1000 * 60 * 60 * 24;
        const currentDate = rowValue.date.value;
        const newDate = day;
        const diffTime = newDate - currentDate;
        const diffDay = Math.ceil(diffTime/aDayInMillisecond);
        setDiffInDay(diffDay);
        setUpdatedDay(day);
    }
    if(diffInDay<0){
            var ago = " Day Ago"
    }
    if(diffInDay>0){
        var ago = "Day Left"
}
    if(diffInDay === 0){
        var ago = "Live"
    }
   
     const [showModal,updateShow] = useState(false);


     

    
    
    return (
        <React.Fragment>
        <Modal imageshown = {rowValue.campaign.value}  name = {rowValue.campaign.name} 
        country={rowValue.campaign.country}
        showModal = {showModal}
        click ={()=>{updateShow(false)}}
        
        >
            </Modal>
        <tr>
            <td>
                <div>
                    {(updatedDay && formatDate(updatedDay)) || formatDate(rowValue.date.value)}    
                </div>
                <div style={{fontStyle:'italic', color: '#7788A3'}}>
                    
                    {diffInDay && `${Math.abs(diffInDay)} ${ago}`}
                </div>
            </td>
            <td>
                <div className="flex">
                    <div style={{ width: 40, marginRight: 7}}>
                        <img src={rowValue.campaign.value} width="100%" />
                    </div>
                    <div>
                    <div>{rowValue.campaign.name}</div>
                    <div>{rowValue.campaign.country}</div>
                    </div>
                </div>
            </td>
            <td>{
            rowValue.view.type === "view" && 
            <div className="flex"  onClick={() => updateShow(true)}>
                
                <img src={dollarImage} style={{width: 24, marginRight: 7, marginLeft: 7}}/><span style={{ cursor: 'pointer'}}>
                View Pricing 
                </span>
                    
                
            </div>}
            </td>
            <td>{rowValue.action.type === "action" && 
                <div className="action-container">
                    <div className="flex">
                        <img src={csvImage}  style={{width: 18, marginRight: 7, marginLeft: 7}} /><span>CSV</span>
                    </div>
                    <div className="flex">
                        <img src={reportImage}  style={{width: 24, marginRight: 7, marginLeft: 7}} /><span>Report</span>
                    </div>
                    <div className="flex">
                        <ScheduleComp selectedDay={selectedDay} />
                    </div>
                </div>
                }
            </td>
        </tr>
        </React.Fragment>
    );
}


export function ScheduleComp(props) {

    const [ selectedDay, setSelectedDay] = useState(null); // select date from calendar lib and set it to state
    const [isCalendarVisible, setIsCalendarVisible] = useState(false); // when to show what

    const onDayClick = (day) => {
        
        
        props.selectedDay(day);
        setIsCalendarVisible(false);
        setSelectedDay(day);


    }

    return (
        <div>
            <div className="flex" onClick={() => setIsCalendarVisible(true)} style={{ cursor: 'pointer'}}>
                <div>
                    {!isCalendarVisible && <img src={calendarIcon} style={{width: 24, marginLeft: 7, marginRight: 7}}/>}
                </div>
                <div>
                    {!isCalendarVisible && 'Schedule Again'}
                </div>
            </div>
            {isCalendarVisible && <div style={{position:'relative'}}>
                <DayPicker
                modifiersStyles={{ position: 'absolute'}}
            onDayClick={onDayClick}
            selectedDays={selectedDay}
            />
            </div>
            }
        </div>
    )
}