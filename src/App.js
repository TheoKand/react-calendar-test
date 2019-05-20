import React from 'react';
import './App.css';

const CalendarHeader = (props) => {

  const month = props.date.toLocaleString('en-us', { month: 'long' });
  const year = props.date.getFullYear();

  return (
    <div className="Calendar-header">{month} {year}</div>
  );
}

const CalendarDaysHeader = (props) => {

  const days =   ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa','Sun'];

  return (
    <div className="Calendar-dayNames">
      { days.map( d=>  (
        <div key={days.indexOf(d)} className="Calendar-cell">{d}</div>
      ))}    
    </div>
  );
} 

const CalendarDays = (props) => {

  const firstDayOfMonth = new Date( props.date.getFullYear() , props.date.getMonth(),1);
  const firstDayOfMonthDayOfWeek = firstDayOfMonth.getDay();
  
  const firstDayOfCalendar = new Date();
  firstDayOfCalendar.setDate( firstDayOfMonth.getDate() -  firstDayOfMonthDayOfWeek);

  const daysInMonth = 32 - new Date(props.date.getFullYear(), props.date.getMonth(), 32).getDate();
  const daysInCalendar =  daysInMonth + firstDayOfMonthDayOfWeek;

  const cells = [];
  for(let i=0;i<=daysInCalendar;i++) {
    
    const cellDay = addDays(firstDayOfCalendar,i+1);
    const cellText = cellDay.getMonth()== props.date.getMonth()? cellDay.getDate():"";
    const className = (cellDay.toDateString() == props.date.toDateString()) ? "Calendar-cell Calendar-today":"Calendar-cell";

    cells.push( <div key={i} className={className}>{cellText} </div>);
  }

  return (
    <div>
      {cells}
    </div>
  );


} 

const App = (props) => {

  const calendarDate = new Date();

  return (
    <div className="Calendar">
    <CalendarHeader date={calendarDate}></CalendarHeader>
    <CalendarDaysHeader></CalendarDaysHeader>
    <CalendarDays date={calendarDate}></CalendarDays>
    </div>
  );
}

export default App;

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
