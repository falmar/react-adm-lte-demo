// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {ControlSidebarComponents} from 'react-adm-lte'

const {ControlSidebar, ControlSidebarBackground, NavTab, Tab} = ControlSidebarComponents

const MyControlSidebar = ({open}) => {
  return (
    <ControlSidebar open={open}>
      <NavTab>
        <Tab active icon='fa fa-wrench' />
        <Tab icon='fa fa-home' />
        <Tab icon='fa fa-gears' />
      </NavTab>
    </ControlSidebar>
  )
}

MyControlSidebar.propTypes = {
  open: PropTypes.bool
}

const ControlSidebarContainer = connect(
  ({controlSidebar: {open}}) => ({open})
)(MyControlSidebar)

export {ControlSidebarBackground}

export default ControlSidebarContainer
