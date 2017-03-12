import {combineReducers} from 'redux'

// import your reducers
import layout from './layout'
import controlSidebar from './controlSidebar'
import mainHeader from './mainHeader'

export default combineReducers({
  layout,
  controlSidebar,
  mainHeader
})
