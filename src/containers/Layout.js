import React from 'react'
import {connect} from 'react-redux'

import {Layout} from 'react-adm-lte'

import MainHeader from './MainHeader/MainHeader'
import MainSidebar from './../components/MainSidebar'
import ContentWrapper from '../components/ContentWrapper'
import MainFooter from './../components/MainFooter'
import ControlSidebar, {ControlSidebarBackground} from './ControlSidebar'

const LayoutContainer = props => {
  return (
    <Layout {...props}>
      <MainHeader />
      <MainSidebar />
      <ContentWrapper />
      <MainFooter />
      <ControlSidebar />
      <ControlSidebarBackground />
    </Layout>
  )
}

const mapStateToProps = ({layout}) => {
  const {collapsed, sidebarMini, boxed} = layout
  const {fixed, topNavbar, skin} = layout

  return {
    sidebarCollapse: collapsed,
    sidebarMini,
    boxed,
    fixed,
    topNavbar,
    skin
  }
}

export default connect(mapStateToProps)(LayoutContainer)
