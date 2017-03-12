import {connect} from 'react-redux'
import {MainHeaderComponents} from 'react-adm-lte'

import * as layoutActions from '../../redux/modules/layout'

const {SidebarToggle} = MainHeaderComponents

const mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(layoutActions.collapse())
})

export default connect(null, mapDispatchToProps)(SidebarToggle)
