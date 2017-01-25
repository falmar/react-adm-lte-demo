// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React from 'react'

import {MainHeaderComponents} from 'react-adm-lte'

import SidebarToggle from './SidebarToggle'
import ControlSidebarToggle from './ControlSidebarToggle'
import Messages from './Messages'
import Notifications from './Notifications'
import Tasks from './Tasks'

const {MainHeader, Logo, LogoText} = MainHeaderComponents
const {Navbar, Menu} = MainHeaderComponents

const MySidebar = () => {
  return (
    <MainHeader>
      <Logo>
        <LogoText isLarge boldTitle='React' title='AdminLTE' />
        <LogoText isMini boldTitle='R' title='LTE' />
      </Logo>
      <Navbar>
        <SidebarToggle />
        <Menu>
          <Messages />
          <Notifications />
          <Tasks />
          <ControlSidebarToggle />
        </Menu>
      </Navbar>
    </MainHeader>
  )
}

export default MySidebar
