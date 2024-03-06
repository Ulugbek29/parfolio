import React, { useState } from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index,className, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="w-full mt-8"
      {...other}
    >
      {value === index && (
        <div className={className}>
          {children}
        </div>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Index() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="works" className="px-[8%] py-[10rem] bg-[#0F0715]">
      <div className="w-full flex items-center text-center flex-col gap-4">
        <h2 className="text-transparent bg-gradient-to-r from-[#8750F7] to-white bg-clip-text font-bold text-5xl">
          My Recent Works
        </h2>
        <p className="text-xl w-1/2">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>
      <div className="w-full flex flex-col items-center mt-8">
        <div>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
              sx={{ fontSize: "1rem", fontWeight: "600", color: "white" }}
                label="All"
                {...a11yProps(0)}
                
            />
            <Tab
            sx={{ fontSize: "1rem", fontWeight: "600", color: "white" }}
                label="UI/UX"
                {...a11yProps(1)}
            />
            <Tab
            sx={{ fontSize: "1rem", fontWeight: "600", color: "white" }}
                label="Admin Panels"
                {...a11yProps(2)}
            />
             <Tab
             sx={{ fontSize: "1rem", fontWeight: "600", color: "white" }}
                label="Apps"
                {...a11yProps(3)}
            />
            </Tabs>
          </div>
          <CustomTabPanel value={value} index={0} className="w-full grid grid-cols-2 gap-4">
            <div className="flex-1 h-[500px] border-[1rem] border-[#221330] rounded-xl ">
                <div className="w-full h-full flex items-center justify-center bg-red-500">
                    <h2 className="text-4xl">Project-1</h2>
                </div>
            </div>
            <div className="flex-1 h-[500px] border-[1rem] border-[#221330] rounded-xl ">
               <div className="w-full h-full flex items-center justify-center bg-blue-500">
               <h2 className="text-4xl">Project-2</h2>
               </div>
            </div>
            <div className="flex-1 h-[500px] border-[1rem] border-[#221330] rounded-xl ">
                <div className="w-full h-full flex items-center justify-center bg-red-500">
                    <h2 className="text-4xl">Project-3</h2>
                </div>
            </div>
            <div className="flex-1 h-[500px] border-[1rem] border-[#221330] rounded-xl ">
               <div className="w-full h-full flex items-center justify-center bg-blue-500">
               <h2 className="text-4xl">Project-4</h2>
               </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} className="w-full grid grid-cols-2 gap-4">
          <div className="flex-1 h-[500px] border-[1rem] border-[#221330] rounded-xl ">
                <div className="w-full h-full flex items-center justify-center bg-orange-500">
                    <h2 className="text-4xl">Project-1</h2>
                </div>
            </div>
            <div className="flex-1 h-[500px] border-[1rem] border-[#221330] rounded-xl ">
               <div className="w-full h-full flex items-center justify-center bg-red-500">
               <h2 className="text-4xl">Project-2</h2>
               </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2} className="w-full grid grid-cols-2 gap-4">
          <div className="flex-1 h-[500px] border-[1rem] border-[#221330] rounded-xl ">
                <div className="w-full h-full flex items-center justify-center bg-yellow-500">
                    <h2 className="text-4xl">Project-1</h2>
                </div>
            </div>
            <div className="flex-1 h-[500px] border-[1rem] border-[#221330] rounded-xl ">
               <div className="w-full h-full flex items-center justify-center bg-blue-500">
               <h2 className="text-4xl">Project-2</h2>
               </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3} className="w-full grid grid-cols-2 gap-4">
          <div className="flex-1 h-[500px] border-[1rem] border-[#221330] rounded-xl ">
                <div className="w-full h-full flex items-center justify-center bg-orange-500">
                    <h2 className="text-4xl">Project-1</h2>
                </div>
            </div>
            <div className="flex-1 h-[500px] border-[1rem] border-[#221330] rounded-xl ">
               <div className="w-full h-full flex items-center justify-center bg-pink-500">
               <h2 className="text-4xl">Project-2</h2>
               </div>
            </div>
          </CustomTabPanel>
      </div>
    </section>
  );
}
