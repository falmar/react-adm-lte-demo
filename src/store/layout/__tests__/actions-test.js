// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../actions')

import actions from './../actions'

describe('Store.Layout.Actions', () => {
  it(`must have type: LAYOUT_TOGGLE`, () => {
    const action = {type: 'LAYOUT_COLLAPSE_TOGGLE'}

    expect(
      actions.toggle()
    ).toEqual(action)
  })
})
