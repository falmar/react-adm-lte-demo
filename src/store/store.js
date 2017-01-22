// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import layout from './layout/reducers'

const reducers = combineReducers({
  layout
})

const store = createStore(reducers,
 applyMiddleware(
   logger(),
   thunk
 )
)

export default store
