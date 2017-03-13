import {connect} from 'react-redux'
import {MainHeader} from 'react-adm-lte'

import * as layoutActions from '../../redux/modules/layout'

const {SidebarToggle} = MainHeader

const mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(layoutActions.collapse())
})

export default connect(null, mapDispatchToProps)(SidebarToggle)
