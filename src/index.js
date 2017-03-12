import React from 'react'
import ReactDOM from 'react-dom'
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader'
import {Provider} from 'react-redux'

import 'admin-lte/bootstrap/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/skin-blue.min.css'

import App from './components/App'

import configureStore from './redux/configureStore'

const preloadedState = window.__PRELOADED_STATE__ || {}
const store = configureStore(preloadedState)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>
    ,
    document.getElementById('root')
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
