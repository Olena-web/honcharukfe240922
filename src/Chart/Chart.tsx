import React, { useEffect, useState } from 'react';
import { getRandomNum } from '../helpers';

import './Chart.css';

export function Chart() {
    let colorProgressBefore = 'lightgray';
    let colorProgressAfter = ' rgb(107, 227, 207)';
    
    let backgroundColorInit = `linear-gradient(to right, ${colorProgressAfter}, ${colorProgressAfter}, 50%, ${colorProgressBefore} 75%, ${colorProgressBefore} 75%)`
    // const style = {
    //     background: linear-gradient(to right, ${colorProgressAfter}, ${colorProgressAfter}, 50%, ${colorProgressBefore} 75%, ${colorProgressBefore} 75%))
    // }

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
         
    const UseSubmitHandler = () => {
      const landingTime = getRandomNum(0.1, 10.0);
      const configTime = getRandomNum(0.1, 10.0);
      const checkoutTime = getRandomNum(0.1, 10.0);
      const dealTime = getRandomNum(0.1, 10.0);
     
      
      let landingImage = `linear-gradient(to right,  ${colorProgressAfter} ${landingTime}%, ${colorProgressBefore} ${landingTime}%, ${colorProgressBefore} 100%)`;

      let configImage = `linear-gradient(to right, ${colorProgressBefore} ${landingTime}%, ${colorProgressAfter} ${landingTime}%, ${colorProgressAfter} ${landingTime + configTime}%, ${colorProgressBefore} ${landingTime + configTime}%, ${colorProgressBefore} 100%)`;

      let checkoutImage = `linear-gradient(to right, ${colorProgressBefore} ${landingTime + configTime}%, ${colorProgressAfter} ${landingTime+ configTime}%, ${colorProgressAfter} ${landingTime + configTime + checkoutTime}%, ${colorProgressBefore} ${landingTime + configTime + checkoutTime}%, ${colorProgressBefore} 100%)`;

      let dealImage = `linear-gradient(to right, ${colorProgressBefore} ${landingTime + configTime+checkoutTime}%, ${colorProgressAfter} ${landingTime+ configTime+checkoutTime}%, ${colorProgressAfter} ${landingTime + configTime + checkoutTime+ dealTime}%, ${colorProgressBefore} ${landingTime + configTime +checkoutTime+ dealTime}%, ${colorProgressBefore} 100%)`;
      
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
         
      useEffect(() => {
          UseSubmitHandler();
        }, []);
       
      };
      // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      //   e.preventDefault();
      //   console.log(e.target, e.target.value);      
      //   setData({
      //       ...data,
      //       [e.target.name]: e.target.value
      //   });

        
        
      //   };
       
    return (
        <div className="Chart">
        
            <div className='line-chart'>
            <input
                className="data"
                name="landingData"
                type="text"
                value={data.landingData.name}
                //onChange={onChange}
            />
      <input
        className="time"
        name="landingTime"
        type="text"
        value={data.landingData.time}
        style={{ backgroundImage: data.landingData.backgroundImage }}
        //onChange={SubmitHandler}
      />
            </div>
            <div className="line-chart">
            <input
        className="data"
        name="configData"
        type="text"
        value={data.configData.name}
        //onChange={onChange}
      />
      <input
        className="time"
        name="configTime"
        type="text"
        value={data.configData.time}
        style={{ backgroundImage: data.configData.backgroundImage}}
        //onChange={onChange}
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
        //onChange={onChange}
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
       // onChange={onChange}
      />
    </div>
    
      
     
      
      
      {/* Submit Button */}
      <button type="submit"
      className="submitButton"
      onClick={UseSubmitHandler}
      
      >Submit</button>
     
    
  
    </div>
    );
    }