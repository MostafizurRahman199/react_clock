import React from 'react'
import styles from "./greetings.module.css";
import Clock from "./Clock"
import goodNightImg from './good-night (1).gif'
import goodMorningImg from './cutie.gif';
import goodAfternoon from './good-afternoon-afternoon.gif';
import goodEvening from './good-evening-evening.gif';




export default function greetings() {

    let currentDate = new Date();
    let color = "black"
    currentDate = currentDate.getHours();
    let greetings = "";
    let image = '';
  
  
    if (currentDate <= 12 && currentDate >= 6) {
      greetings = "Good Morning";
      color = "#FB773C";
      image = goodMorningImg;
    } else if (currentDate > 12 && currentDate <= 16) {
      greetings = "Good Afternoon";
      color = "#EB3678";
      image = goodAfternoon;
    } else if (currentDate > 16 && currentDate <= 18) {
      greetings = "Good Evening";
      color = "#4F1787";
      image = goodEvening;
    } else if (currentDate > 19 && currentDate <= 24) {
      greetings = "Good Night";
      color = "#180161";
      image = goodNightImg;
    }


  return (
    <div className={styles.parent}>
         <img className={styles.image} src={image} width={50} height={50}  alt="" />
     {/* <h1 className={styles.title}>Hello Sir! <span style={{
       backgroundColor: color,
       color: "white",
       padding : "10px",
       borderRadius: "5px"
       
      }}>{greetings}</span></h1> */}
    
      <Clock></Clock>
   </div>
  )
}
