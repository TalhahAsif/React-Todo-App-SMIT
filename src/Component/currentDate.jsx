import React from "react";

const currentDate = () => {
  const localDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday ",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[localDate.getDay()];

  const currentDate = localDate.getDate();

  const currentMonth = months[localDate.getMonth()];

  const currentYear = localDate.getFullYear();

  return (
    <div>
      <p>{currentDay} </p>
      <p>{currentDate} </p>
      <p>{currentMonth} </p>
      <p>{currentYear}</p>
    </div>
  );
};

export default currentDate;
