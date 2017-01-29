// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../reducers')

import reducer, {initialState} from './../reducers'

const initState = {
  open: false,
  wrench: {
    active: true
  },
  home: {
    active: false
  },
  gears: {
    active: false
  }
}

describe('Store.ControlSidebar.Reducers', () => {
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

  it(`should toggle wrench 'active' property to true`, () => {
    const action = {type: 'CTS_SELECT_TAB', payload: {key: 'wrench'}}
    const state = {
      ...initialState,
      wrench: {
        ...initialState.wrench,
        active: false
      }
    }
    const expectedState = {
      ...initialState,
      wrench: {
        ...initialState.wrench,
        active: true
      }
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should toggle wrench.active to false and home.active to true`, () => {
    const action = {type: 'CTS_SELECT_TAB', payload: {key: 'home'}}
    const state = {
      ...initialState,
      wrench: {
        ...initialState.wrench,
        active: true
      },
      home: {
        ...initialState.home,
        active: false
      }
    }
    const expectedState = {
      ...initialState,
      wrench: {
        ...initialState.wrench,
        active: false
      },
      home: {
        ...initialState.home,
        active: true
      }
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should not change state if CTS Tab key does not exist `, () => {
    const action = {type: 'CTS_SELECT_TAB', payload: {key: 'bleh'}}

    expect(
      reducer(initialState, action)
    ).toEqual(initialState)
  })
})
