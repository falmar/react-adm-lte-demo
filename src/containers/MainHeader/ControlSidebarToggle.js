import {connect} from 'react-redux'
import {MainHeaderComponents} from 'react-adm-lte'

import * as actions from './../../redux/modules/controlSidebar'

const {ControlSidebarToggle} = MainHeaderComponents

const mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(actions.toggleControlSidebar())
})

export default connect(null, mapDispatchToProps)(ControlSidebarToggle)
