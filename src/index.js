// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import 'admin-lte/bootstrap/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/skin-blue.min.css'
import './css/app.css'

import store from './store/store'

import Layout from './components/Layout'

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>
, document.getElementById('app'))
