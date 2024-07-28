import React, { useState, useEffect } from 'react';

const DateComponent = () => {
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
    <div>
     
      <p>Date: {formattedDate}</p>
      <p>Time: {formattedTime}</p>
    </div>
  );
};

export default DateComponent;
