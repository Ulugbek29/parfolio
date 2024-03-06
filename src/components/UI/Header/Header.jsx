import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import cls from "./style.module.css"



export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [openSideBar, setOpenSideBar] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  };


  return (
    <>
    {/* SideBar */}
    {/* {openSideBar && <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>} */}
    
    <div className={`${visible ? "bg-[#0F0715]" : "shadow-lg shadow-[#2F80ED] bg-[#0F0715]"} fixed w-full h-[70px] flex items-center justify-between transition-all  px-[8%] bg-[#0F0715] text-white z-50`}>
    <a href="/">
      <div className='text-5xl font-semibold'>
        U
      </div>
    </a>
      <div className='flex items-center gap-4'>
        <ul className='max-[640px]:hidden flex gap-8'>
          <li>
              <NavLink
              to="#services"
              className={cls.nav_link}
                activeClassName={cls.nav_link_active}
              // className={isActive => isActive ? cls.nav_link : cls.nav_link_active}
              >Services</NavLink>
          </li>
          <li>
          <NavLink
              to="#services"
              className={cls.nav_link}
                activeClassName={cls.nav_link_active}
              >Works</NavLink>
          </li>
                <li>
                <NavLink
              to="#services"
              className={cls.nav_link}
                activeClassName={cls.nav_link_active}
              >Resume</NavLink>
          </li>
          <li>
                <NavLink
              to="#services"
              className={cls.nav_link}
                activeClassName={cls.nav_link_active}
              >Skills</NavLink>
          </li>
          <li>
                <NavLink
              to="#services"
              className={cls.nav_link}
                activeClassName={cls.nav_link_active}
              >Testimonials</NavLink>
          </li>
          <li>
                <NavLink
              to="#services"
              className={cls.nav_link}
                activeClassName={cls.nav_link_active}
              >Contact</NavLink>
          </li>
        </ul>
        <button className='px-6 py-2 rounded-full text-lg font-semibold bg-gradient-to-r from-[#8750F7] to-[#331A65] hover:from-[#331A65] hover:to-[#8750F7] duration-500 ease-in-out transition'>Hire Me!</button>
        <span onClick={()=>setOpenSideBar(true)} className='max-[640px]:block hidden text-white cursor-pointer'>
            <MenuIcon color='inherit' fontSize='large'/>
        </span>
      </div>
    </div>
    </>
    )
}
