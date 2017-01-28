// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import constants from './constants'

const toggleMessages = open => ({
  type: constants.MAINHEADER_MESSAGES_TOGGLE,
  payload: {
    open
  }
})

const toggleNotifications = open => ({
  type: constants.MAINHEADER_NOTIFICATIONS_TOGGLE,
  payload: {
    open
  }
})

const toggleTasks = open => ({
  type: constants.MAINHEADER_TASKS_TOGGLE,
  payload: {
    open
  }
})

const toggleUser = open => ({
  type: constants.MAINHEADER_USER_TOGGLE,
  payload: {
    open
  }
})

export default {
  toggleMessages,
  toggleNotifications,
  toggleTasks,
  toggleUser
}
