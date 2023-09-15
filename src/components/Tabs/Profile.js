import React from 'react';
import './tabs.css';
import { Radio, Tabs, ConfigProvider } from 'antd';
import Basic from '../Modal/Basic';
import Personal from '../Information/Personal';

export default function Profile() {
  return (
    <div>

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
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          var labell="";
          id==1? labell="Personal Information" : id==2? labell="Manage Cards":id==3 ? labell="Saved Cards" : labell="Outta Bounds";

          return {
            label: labell,
            key: id,
            children: <Personal />,
          };
        })}
      />
      
   </ConfigProvider>
      
    </div>
  )
}
