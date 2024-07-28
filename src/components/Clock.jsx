import React, { useState, useEffect } from 'react';
import styles from './clock.module.css';

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the date every second
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  // Formatting the date
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <div className={styles}>
      <p className={styles.time}>{formattedTime}</p>
      <p className={styles.date}>{formattedDate}</p>
     
    </div>
  );
};

export default Clock;
