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

  describe('changeSkin', () => {
    it(`should have type: LAYOUT_CHANGE_SKIN`, () => {
      const {type} = actions.changeSkin()
      const expectedType = 'LAYOUT_CHANGE_SKIN'

      expect(
        type
      ).toEqual(expectedType)
    })

    it(`should have payload.skin: undefined`, () => {
      const {payload} = actions.changeSkin()
      const expectedPayload = {skin: undefined}

      expect(
        payload
      ).toEqual(expectedPayload)
    })

    it(`should have payload.skin: skin-blue`, () => {
      const {payload} = actions.changeSkin('skin-blue')
      const expectedPayload = {skin: 'skin-blue'}

      expect(
        payload
      ).toEqual(expectedPayload)
    })
  })
})
