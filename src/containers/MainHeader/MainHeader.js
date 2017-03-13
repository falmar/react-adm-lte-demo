import React from 'react'

import {MainHeader} from 'react-adm-lte'

import SidebarToggle from './SidebarToggle'
import ControlSidebarToggle from './ControlSidebarToggle'
import Messages from './Messages'
import Notifications from './Notifications'
import Tasks from './Tasks'
import User from './User'

const {Logo, LogoText} = MainHeader
const {Navbar, NavbarMenu} = MainHeader

const MainHeaderComponent = () => {
  return (
    <MainHeader>
      <Logo>
        <LogoText isLarge boldTitle='React' title='AdminLTE' />
        <LogoText isMini boldTitle='R' title='LT' />
      </Logo>
      <Navbar>
        <SidebarToggle />
        <NavbarMenu>
          <Messages />
          <Notifications />
          <Tasks />
          <User />
          <ControlSidebarToggle />
        </NavbarMenu>
      </Navbar>
    </MainHeader>
  )
}

export default MainHeaderComponent
