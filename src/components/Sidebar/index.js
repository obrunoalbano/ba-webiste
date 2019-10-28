import React, { useState } from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import { Navicon as Nav } from "styled-icons/evil/Navicon"
import { Close } from "styled-icons/evil/Close"

import * as S from "./styled"

const Sidebar = () => {

  const [isNav, setIsNav] = useState(false);
  
  return (
    <S.SidebarWrapper className={isNav ? '-isnav' : ''}>
      <Profile />
      <S.SidebarNav onClick={() => { 
        setIsNav(!isNav)
      }}>
        {!isNav ? <Nav/> : <Close/>}
      </S.SidebarNav>
      <SocialLinks />
      <MenuLinks />
    </S.SidebarWrapper>
  )
}

export default Sidebar