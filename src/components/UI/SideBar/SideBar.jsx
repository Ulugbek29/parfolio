import React from "react";
import {Box,Drawer,List,ListItem,ListItemButton,ListItemIcon, ListItemText,IconButton } from "@mui/material";

export default function SideBar({ openSideBar, setOpenSideBar }) {
  const handleDrawerClose = () => {
    setOpenSideBar(false);
  };

  const navList =[
    {key: "bot-link", title: "Перейти в бот", link: "https://t.me/Cinema_Magicbot", icon:"" },
    {key: "partnership", title: "Сотрудничество", link: "https://t.me/yusufbekovv24", icon:""},
    {key: "our-channel", title: "Наш канал", link: "https://t.me/FilmPrimiere", icon:""},
  ]

  const DrawerList = (
    <Box role="presentation" className="relative w-[250px] h-full bg-[#0b111a] flex items-start py-20 transition-all">
      <IconButton onClick={handleDrawerClose} className="absolute top-2 right-4"><GrClose /></IconButton>
      <List className="w-full transition-all">
        {navList.map((navObj) => (
          <ListItem key={navObj.key} disablePadding className="w-full">
          <a href={navObj.link} className="w-full">
            <ListItemButton>
              <ListItemIcon>
                <navObj.icon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary={navObj.title} />
            </ListItemButton>
          </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        open={openSideBar}
        onClose={handleDrawerClose}
        anchor="right"
        className={"transition-all"}
        style={{ transition: "all  0.8s ease-in" }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
}
