import {connect} from 'react-redux'
import {MainHeader} from 'react-adm-lte'

import * as actions from './../../redux/modules/controlSidebar'

const {ControlSidebarToggle} = MainHeader

const mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(actions.toggleControlSidebar())
})

export default connect(null, mapDispatchToProps)(ControlSidebarToggle)
