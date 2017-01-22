// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../reducers')

import reducer, {initialState} from './../reducers'

const initState = {
  collapsed: false,
  sidebarMini: false,
  boxed: false,
  fixed: false,
  topNavbar: false
}

describe('Store.Layout.Reducers', () => {
  it(`should return initialState`, () => {
    expect(
      reducer(undefined, {type: undefined})
    ).toEqual(initState)
  })

  it(`should toggle collapse property to false`, () => {
    const action = {type: 'LAYOUT_COLLAPSE_TOGGLE'}
    const state = {
      ...initialState,
      collapsed: true
    }
    const expectedState = {
      ...initialState,
      collapsed: false
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should toggle collapse property to true`, () => {
    const action = {type: 'LAYOUT_COLLAPSE_TOGGLE'}
    const state = {
      ...initialState
    }
    const expectedState = {
      ...initialState,
      collapsed: true
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should toggle sidebarMini property to false`, () => {
    const action = {type: 'LAYOUT_SIDEBAR_MINI_TOGGLE'}
    const state = {
      ...initialState,
      sidebarMini: true
    }
    const expectedState = {
      ...initialState,
      sidebarMini: false
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should toggle sidebarMini property to true`, () => {
    const action = {type: 'LAYOUT_SIDEBAR_MINI_TOGGLE'}
    const state = {
      ...initialState
    }
    const expectedState = {
      ...initialState,
      sidebarMini: true
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should toggle boxed property to false`, () => {
    const action = {type: 'LAYOUT_BOXED_TOGGLE'}
    const state = {
      ...initialState,
      boxed: true
    }
    const expectedState = {
      ...initialState,
      boxed: false
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should toggle boxed property to true`, () => {
    const action = {type: 'LAYOUT_BOXED_TOGGLE'}
    const state = {
      ...initialState
    }
    const expectedState = {
      ...initialState,
      boxed: true
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should toggle fixed property to false`, () => {
    const action = {type: 'LAYOUT_FIXED_TOGGLE'}
    const state = {
      ...initialState,
      fixed: true
    }
    const expectedState = {
      ...initialState,
      fixed: false
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should toggle fixed property to true`, () => {
    const action = {type: 'LAYOUT_FIXED_TOGGLE'}
    const state = {
      ...initialState
    }
    const expectedState = {
      ...initialState,
      fixed: true
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should toggle topNavbar property to false`, () => {
    const action = {type: 'LAYOUT_TOP_NAVBAR_TOGGLE'}
    const state = {
      ...initialState,
      topNavbar: true
    }
    const expectedState = {
      ...initialState,
      topNavbar: false
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })

  it(`should toggle topNavbar property to true`, () => {
    const action = {type: 'LAYOUT_TOP_NAVBAR_TOGGLE'}
    const state = {
      ...initialState
    }
    const expectedState = {
      ...initialState,
      topNavbar: true
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })
})
