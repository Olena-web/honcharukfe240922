import React, { useRef, useState } from 'react';
import { getRandomNum } from '../helpers';

import './Chart.css';

export function Chart() {
 
    let colorProgressBefore = 'rgb(236, 242, 245)';
    let colorProgressAfter = ' rgb(184, 225, 219)';
    
    let backgroundColorInit = `linear-gradient(to right, ${colorProgressAfter}, ${colorProgressAfter}, 50%, ${colorProgressBefore} 75%, ${colorProgressBefore} 75%)`
    
    const initState = {
        landingData: {
        name: "Landing Page",
        time: 7.4 ,
        backgroundImage: backgroundColorInit,
    }      ,
        configData: {
        name: "Configurator", 
        time: 0.2,
        backgroundImage: backgroundColorInit
    }     ,
        checkoutData: {

        name: "Check-out", 
        time: 7.0,
        backgroundImage: backgroundColorInit
    }       ,
        dealData: {
        name: "Deal", 
        time: 3.8,
        backgroundImage: backgroundColorInit
        }
      };
      
      const [data, setData] = useState(initState);
         
    const submitHandler = () => {
      const landingTime = getRandomNum(0.1, 10.0);
      const configTime = getRandomNum(0.1, 10.0);
      const checkoutTime = getRandomNum(0.1, 10.0);
      const dealTime = getRandomNum(0.1, 10.0);
      const total = landingTime + configTime + checkoutTime + dealTime;
      const multiplier = 100 / total;
     
      
      let landingImage = `linear-gradient(to right,  
        ${colorProgressAfter} ${landingTime*multiplier}%, 
        ${colorProgressBefore} ${landingTime*multiplier}%, 
        ${colorProgressBefore} 100%)`;

      let configImage = `linear-gradient(to right, 
        ${colorProgressBefore} ${landingTime*multiplier}%, 
        ${colorProgressAfter} ${landingTime*multiplier}%, 
        ${colorProgressAfter} ${landingTime*multiplier + configTime*multiplier}%, 
        ${colorProgressBefore} ${landingTime*multiplier + configTime*multiplier}%, 
        ${colorProgressBefore} 100%)`;

      let checkoutImage = `linear-gradient(to right, 
        ${colorProgressBefore} ${(landingTime + configTime)*multiplier}%, 
        ${colorProgressAfter} ${(landingTime+ configTime)*multiplier}%, 
        ${colorProgressAfter} ${(landingTime + configTime + checkoutTime)*multiplier}%, 
        ${colorProgressBefore} ${(landingTime + configTime + checkoutTime)*multiplier}%, 
        ${colorProgressBefore} 100%)`;

      let dealImage = `linear-gradient(to right, 
        ${colorProgressBefore} ${(landingTime + configTime+checkoutTime)*multiplier}%, 
        ${colorProgressAfter} ${(landingTime+ configTime+checkoutTime)*multiplier}%, 
        ${colorProgressAfter} ${(landingTime + configTime + checkoutTime+ dealTime)*multiplier}%, 
        ${colorProgressBefore} ${(landingTime + configTime +checkoutTime+ dealTime)*multiplier}%, 
        ${colorProgressBefore} 100%)`;
      
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
        <div className="chart">
        
            <div className='line-chart'>
            <input
                className="data"
                name="landingData"
                type="text"
                value={data.landingData.name}
                
            />
      <input
        className="time"
        name="landingTime"
        type="text"
        value={data.landingData.time}
        style={{ backgroundImage: data.landingData.backgroundImage }}
       
      />
            </div>
            <div className="line-chart">
            <input
        className="data"
        name="configData"
        type="text"
        value={data.configData.name}
       
      />
      <input
        className="time"
        name="configTime"
        type="text"
        value={data.configData.time}
        style={{ backgroundImage: data.configData.backgroundImage}}
        
      />
            </div>
            <div className="line-chart">
            <input
        className="data"
        name="checkoutData"
        type="text"
        value={data.checkoutData.name}
        
      />
      <input
        className="time"
        name="checkoutTime"
        type="text"
        value={data.checkoutData.time}
        style={{ backgroundImage: data.checkoutData.backgroundImage }}
        
      />
                
            </div>
            <div className="line-chart">
            <input
        className="data"
        name="dealData"
        type="text"
        value={data.dealData.name}
       
      />
      <input
        className="time"
        name="dealTime"
        type="text"
        value={data.dealData.time}
        style={{ backgroundImage: data.dealData.backgroundImage }}
       
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