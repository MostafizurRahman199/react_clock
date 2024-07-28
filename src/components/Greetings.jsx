import React from 'react'
import styles from "./greetings.module.css";
import Clock from "./Clock"

export default function greetings() {

    let currentDate = new Date();
    let color = "black"
    currentDate = currentDate.getHours();
    let greetings = "";
    if (currentDate <= 12 && currentDate >= 6) {
      greetings = "Good Morning";
      color = "#FB773C";

    } else if (currentDate > 12 && currentDate <= 16) {
      greetings = "Good Afternoon";
      color = "#EB3678";
    } else if (currentDate > 16 && currentDate <= 18) {
      greetings = "Good Evening";
      color = "#4F1787";
    } else if (currentDate > 19 && currentDate <= 24) {
      greetings = "Good Night";
      color = "#180161";
    }
  return (
    <div className={styles.parent}>
     <h1 className={styles.title}>Hello Sir! <span style={{
       backgroundColor: color,
       color: "white",
       padding : "10px",
       borderRadius: "5px"
       
      }}>{greetings}</span></h1>
      <Clock></Clock>
   </div>
  )
}
