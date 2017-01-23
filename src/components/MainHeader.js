// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React from 'react'

import {MainHeaderComponents} from 'react-adm-lte'

const {MainHeader, Logo, LogoText} = MainHeaderComponents

const MySidebar = () => {
  return (
    <MainHeader>
      <Logo>
        <LogoText isLarge boldTitle='React' title='AdminLTE' />
        <LogoText isMini boldTitle='R' title='LTE' />
      </Logo>
    </MainHeader>
  )
}

export default MySidebar