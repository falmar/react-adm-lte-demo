// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React from 'react'
import {connect} from 'react-redux'

import {Layout} from 'react-adm-lte/dist/react-adm-lte.min'

const MyLayout = (props) => {
  return (
    <Layout {...props} />
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

export default connect(mapStateToProps)(MyLayout)
