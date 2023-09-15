import React from 'react';
import './tabs.css';
import { Radio, Tabs, ConfigProvider } from 'antd';
import Basic from '../Modal/Basic';
import Personal from '../Information/Personal';

export default function Reviews() {
  return (
    <div className='reviewMain'>

<ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#223043',
        borderRadius: 2,
        colorFillAlter:"#ffff",

        // Alias Token
        colorBgContainer: '#FBFBFB',
      },
    }}
  >
  
  <Tabs
        style={{
          backgroundColor:"#FBFBFB",
          width:"81%",
          borderRadius:"0px 10px 10px 10px",
          

        }}
        defaultActiveKey="1"
        type="card"
        items={new Array(2).fill(null).map((_, i) => {
          const id = String(i + 1);
          var labell="";
          id==1? labell="Product Details" : id==2? labell="Reviews": labell="Outta Bounds";

            if(id==1){
                return {
            label: labell,
            key: id,
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac,",
          };
            }

            else{
                return {
            label: labell,
            key: id,
            children: <Personal />,
          };
            }
         
        })}
      />
      
   </ConfigProvider>
      
    </div>
  )
}
