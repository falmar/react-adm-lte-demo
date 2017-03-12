// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import {connect} from 'react-redux'
import {MainHeaderComponents} from 'react-adm-lte'

import * as actions from './../../redux/modules/controlSidebar'

const {ControlSidebarToggle} = MainHeaderComponents

const mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(actions.toggleControlSidebar())
})

export default connect(null, mapDispatchToProps)(ControlSidebarToggle)
