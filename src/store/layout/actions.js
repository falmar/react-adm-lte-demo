// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import constants from './constants'

const collapse = () => ({
  type: constants.COLLAPSE
})

const sidebarMini = () => ({
  type: constants.SIDEBAR_MINI
})

const boxed = () => ({
  type: constants.BOXED
})

const fixed = () => ({
  type: constants.FIXED
})

const topNavbar = () => ({
  type: constants.TOP_NAVBAR
})

const changeSkin = skin => ({
  type: constants.CHANGE_SKIN,
  payload: {
    skin
  }
})

export default {
  collapse,
  sidebarMini,
  boxed,
  fixed,
  topNavbar,
  changeSkin
}
