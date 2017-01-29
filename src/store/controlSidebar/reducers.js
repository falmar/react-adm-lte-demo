// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import constants from './constants'

const initialState = {
  open: false,
  wrench: {
    active: true
  },
  home: {
    active: false
  },
  gears: {
    active: false
  }
}

export {initialState}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CTS_TOGGLE:
      return {
        ...state,
        open: !state.open
      }
    case constants.CTS_TOGGLE_TAB: {
      const {key} = action.payload

      if (!state.hasOwnProperty(key)) {
        return state
      }

      return {
        ...state,
        [key]: {
          ...state[key],
          active: !state[key].active
        }
      }
    }
    default:
      return state
  }
}
