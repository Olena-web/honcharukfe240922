import React, { useState } from 'react';
import { getRandomNum } from '../utils';
import { colorProgressAfter, colorProgressBefore } from '../constants'

import './Chart.css';

export function Chart() {
  const landingTime = getRandomNum(0.1, 10.0);
  const configTime = getRandomNum(0.1, 10.0);
  const checkoutTime = getRandomNum(0.1, 10.0);
  const dealTime = getRandomNum(0.1, 10.0);
  const total = landingTime + configTime + checkoutTime + dealTime;
  const multiplier = 100 / total;
  const landingPercent = landingTime * multiplier;
  const configPercent = configTime * multiplier;
  const checkoutPercent = checkoutTime * multiplier;
  const dealPercent = dealTime * multiplier;
     
  let landingImage = `linear-gradient(to right,  
  ${colorProgressAfter} ${landingPercent}%, 
  ${colorProgressBefore} ${landingPercent}%, 
  ${colorProgressBefore} 100%)`;

  let configImage = `linear-gradient(to right, 
    ${colorProgressBefore} ${landingPercent}%, 
    ${colorProgressAfter} ${landingPercent}%, 
    ${colorProgressAfter} ${landingPercent + configPercent}%, 
    ${colorProgressBefore} ${landingPercent + configPercent}%, 
    ${colorProgressBefore} 100%)`;

  let checkoutImage = `linear-gradient(to right, 
    ${colorProgressBefore} ${landingPercent + configPercent}%, 
    ${colorProgressAfter} ${landingPercent + configPercent}%, 
    ${colorProgressAfter} ${landingPercent + configPercent + checkoutPercent}%, 
    ${colorProgressBefore} ${landingPercent + configPercent + checkoutPercent}%, 
    ${colorProgressBefore} 100%)`;

  let dealImage = `linear-gradient(to right, 
    ${colorProgressBefore} ${landingPercent + configPercent + checkoutPercent}%, 
    ${colorProgressAfter} ${landingPercent + configPercent + checkoutPercent}%, 
    ${colorProgressAfter} ${landingPercent + configPercent + checkoutPercent + dealPercent}%, 
    ${colorProgressBefore} ${landingPercent + configPercent + checkoutPercent + dealPercent}%, 
    ${colorProgressBefore} 100%)`;
  
  const initState = {
    landingData: {
    name: "Landing Page",
    time: 7.4 ,
    backgroundImage: landingImage,
  }    ,
    configData: {
    name: "Configurator", 
    time: 0.2,
    backgroundImage: configImage,
  }   ,
    checkoutData: {

    name: "Check-out", 
    time: 7.0,
    backgroundImage: checkoutImage,
  }     ,
    dealData: {
    name: "Deal", 
    time: 3.8,
    backgroundImage: dealImage,
    }
    };
    
    const [data, setData] = useState(initState);
     
  const submitHandler = () => {
    setData({
      landingData: {
        name: "Landing Page",
        time: landingTime,
        backgroundImage: landingImage,
      },
      configData: {
        name: "Configurator",
        time: configTime,
        backgroundImage: configImage,
      },
      checkoutData: {
        name: "Check-out",
        time: checkoutTime,
        backgroundImage: checkoutImage,
      },
      dealData: {
        name: "Deal",
        time: dealTime,
        backgroundImage: dealImage,
      }
    });
   
    };
  return (
    <div className="chart" onChange={submitHandler}>
      <div className='line-chart'>
        <input
          className="data"
          name="landingData"
          type="text"
          value={data.landingData.name}
          onChange={submitHandler}
        />
        <input
          className="time"
          name="landingTime"
          type="text"
          value={data.landingData.time}
          style={{ backgroundImage: data.landingData.backgroundImage }}
          onChange={submitHandler}
        />
      </div>
      <div className="line-chart">
        <input
        className="data"
        name="configData"
        type="text"
        value={data.configData.name}
        onChange={submitHandler}
        />
        <input
        className="time"
        name="configTime"
        type="text"
        value={data.configData.time}
        style={{ backgroundImage: data.configData.backgroundImage}}
        onChange={submitHandler}
        />
      </div>
      <div className="line-chart">
        <input
        className="data"
        name="checkoutData"
        type="text"
        value={data.checkoutData.name}
        onChange={submitHandler}
        />
        <input
        className="time"
        name="checkoutTime"
        type="text"
        value={data.checkoutData.time}
        style={{ backgroundImage: data.checkoutData.backgroundImage }}
        onChange={submitHandler}
        />
      </div>
      <div className="line-chart">
      <input
    className="data"
    name="dealData"
    type="text"
    value={data.dealData.name}
    onChange={submitHandler}
    />
    <input
    className="time"
    name="dealTime"
    type="text"
    value={data.dealData.time}
    style={{ backgroundImage: data.dealData.backgroundImage }}
    onChange={submitHandler}
    />
      </div>
    {/* Submit Button */}
    <button type="submit"
    className="submitButton"
    onClick={submitHandler}
    >Submit</button>
   </div>
  );
  }
   setInterval(() => {
    document.querySelector<HTMLButtonElement>('.submitButton')?.click();
    
    }, 31800);