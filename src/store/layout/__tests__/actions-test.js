// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../actions')

import actions from './../actions'

describe('Store.Layout.Actions', () => {
  it(`must have type: LAYOUT_COLLAPSE_TOGGLE`, () => {
    const action = {type: 'LAYOUT_COLLAPSE_TOGGLE'}

    expect(
      actions.collapse()
    ).toEqual(action)
  })

  it(`must have type: LAYOUT_SIDEBAR_MINI_TOGGLE`, () => {
    const action = {type: 'LAYOUT_SIDEBAR_MINI_TOGGLE'}

    expect(
      actions.sidebarMini()
    ).toEqual(action)
  })

  it(`must have type: LAYOUT_BOXED_TOGGLE`, () => {
    const action = {type: 'LAYOUT_BOXED_TOGGLE'}

    expect(
      actions.boxed()
    ).toEqual(action)
  })

  it(`must have type: LAYOUT_FIXED_TOGGLE`, () => {
    const action = {type: 'LAYOUT_FIXED_TOGGLE'}

    expect(
      actions.fixed()
    ).toEqual(action)
  })

  it(`must have type: LAYOUT_TOP_NAVBAR_TOGGLE`, () => {
    const action = {type: 'LAYOUT_TOP_NAVBAR_TOGGLE'}

    expect(
      actions.topNavbar()
    ).toEqual(action)
  })
})
