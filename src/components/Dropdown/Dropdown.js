import "./drop.css";

import React from "react";
import { Button, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";




function Dropdownn(){
  const navigate = useNavigate();


  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href=""
        
        >
          Facial Care
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={()=>{
              navigate("/hot-products");
            }}
        >
          Hot Product
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Pet Care
        </a>
      ),
    },
  
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Soft Gels
        </a>
      ),
    },
  
    {
      key: "5",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Body Care
        </a>
      ),
    },
  
    {
      key: "6",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Tincture
        </a>
      ),
    },
  ];

    return(
        <>
    <Dropdown
        className="mainDrop text"
      menu={{
        items,
      }}
      
      trigger="click"
      placement="bottom"
      arrow
    >
      <Button>PRODUCTS</Button>
    </Dropdown>
  </>
    );
} 

export default Dropdownn;
