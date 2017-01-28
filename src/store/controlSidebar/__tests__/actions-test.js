// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../actions')

import actions from './../actions'

describe('Store.ControlSidebar.Actions', () => {
  it(`must have type: CTS_TOGGLE`, () => {
    const action = {type: 'CTS_TOGGLE'}

    expect(
      actions.toggleControlSidebar()
    ).toEqual(action)
  })
})
