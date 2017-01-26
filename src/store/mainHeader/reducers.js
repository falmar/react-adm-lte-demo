// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import constants from './constants'

const initialState = {
  messages: {
    open: false
  },
  notifications: {
    open: false
  },
  tasks: {
    open: false
  }
}

export {initialState}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.MAINHEADER_MESSAGES_TOGGLE:
      return {
        ...state,
        messages: {
          ...state.messages,
          open: action.payload.open
        }
      }
    case constants.MAINHEADER_NOTIFICATIONS_TOGGLE:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          open: action.payload.open
        }
      }
    case constants.MAINHEADER_TASKS_TOGGLE:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          open: action.payload.open
        }
      }
    default:
      return state
  }
}
