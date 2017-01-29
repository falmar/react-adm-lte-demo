// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import constants from './constants'

const toggleControlSidebar = () => ({
  type: constants.CTS_TOGGLE
})

const toggleControlSidebarTab = key => ({
  type: constants.CTS_TOGGLE_TAB,
  payload: {
    key
  }
})

export default {
  toggleControlSidebar,
  toggleControlSidebarTab
}
