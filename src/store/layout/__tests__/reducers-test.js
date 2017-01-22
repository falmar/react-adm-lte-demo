// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../reducers')

import reducer from './../reducers'

const initState = {
  collapsed: false
}

describe('Store.Layout.Reducers', () => {
  it(`should return initialState`, () => {
    expect(
      reducer(undefined, {type: undefined})
    ).toEqual(initState)
  })

  it(`should toggle collapsed property to true`, () => {
    const action = {type: 'LAYOUT_COLLAPSE_TOGGLE'}
    const state = {
      ...initState
    }
    const expectedState = {
      ...initState,
      collapsed: true
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should toggle collapsed property to false`, () => {
    const action = {type: 'LAYOUT_COLLAPSE_TOGGLE'}
    const state = {
      ...initState,
      collapsed: true
    }
    const expectedState = {
      ...initState,
      collapsed: false
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })
})
