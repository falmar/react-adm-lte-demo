// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {ControlSidebarComponents} from 'react-adm-lte'

import actions from '../store/controlSidebar/actions'

const {ControlSidebar, ControlSidebarBackground, NavTab, Tab} = ControlSidebarComponents

const MyControlSidebar = props => {
  const {open, onClickTab} = props
  const {wrenchActive, homeActive, gearsActive} = props

  return (
    <ControlSidebar open={open}>
      <NavTab>
        <Tab
          onClick={() => onClickTab('wrench')}
          active={wrenchActive}
          icon='fa fa-wrench' />
        <Tab
          onClick={() => onClickTab('home')}
          active={homeActive}
          icon='fa fa-home' />
        <Tab
          onClick={() => onClickTab('gears')}
          active={gearsActive}
          icon='fa fa-gears' />
      </NavTab>
    </ControlSidebar>
  )
}

MyControlSidebar.propTypes = {
  open: PropTypes.bool,
  onClickTab: PropTypes.func.isRequired,
  wrenchActive: PropTypes.bool,
  homeActive: PropTypes.bool,
  gearsActive: PropTypes.bool
}

const mapStateToProps = ({controlSidebar}) => ({
  open: controlSidebar.open,
  wrenchActive: controlSidebar.wrench.active,
  homeActive: controlSidebar.home.active,
  gearsActive: controlSidebar.gears.active
})

const mapDispatchToProps = dispatch => ({
  onClickTab: key => dispatch(actions.selectControlSidebarTab(key))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyControlSidebar)

export {ControlSidebarBackground}
