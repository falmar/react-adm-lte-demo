// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import constants from './constants'

const initialState = {
  collapsed: false,
  sidebarMini: false
}

export {initialState}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.COLLAPSE:
      return {
        ...state,
        collapsed: !state.collapsed
      }
    case constants.SIDEBAR_MINI:
      return {
        ...state,
        sidebarMini: !state.sidebarMini
      }
    default:
      return state
  }
}
