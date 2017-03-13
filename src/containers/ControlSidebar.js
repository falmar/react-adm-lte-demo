import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {ControlSidebar} from 'react-adm-lte'

import * as actions from '../redux/modules/controlSidebar'

const {ControlSidebarBackground, NavTab, Tab} = ControlSidebar

const MyControlSidebar = props => {
  const {open, onClickTab} = props
  const {wrenchActive, homeActive, gearsActive} = props

  return (
    <ControlSidebar open={open}>
      <NavTab>
        <Tab
          onClick={() => onClickTab('wrench')}
          active={wrenchActive}
          iconClass='fa fa-wrench' />
        <Tab
          onClick={() => onClickTab('home')}
          active={homeActive}
          iconClass='fa fa-home' />
        <Tab
          onClick={() => onClickTab('gears')}
          active={gearsActive}
          iconClass='fa fa-gears' />
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
