// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../reducers')

import reducer, {initialState} from './../reducers'

const initState = {
  open: false
}

describe('Store.Layout.Reducers', () => {
  it(`should return initialState`, () => {
    expect(
      reducer(undefined, {type: undefined})
    ).toEqual(initState)
  })

  it(`should toggle open property to true`, () => {
    const action = {type: 'CTS_TOGGLE'}
    const state = {
      ...initialState,
      open: false
    }
    const expectedState = {
      ...initialState,
      open: true
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should toggle open property to false`, () => {
    const action = {type: 'CTS_TOGGLE'}
    const state = {
      ...initialState,
      open: true
    }
    const expectedState = {
      ...initialState,
      open: false
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })
})
