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
  topNavbar: false,
  skin: 'skin-blue'
}

describe('Store.Layout.Reducers', () => {
  it(`should return initialState`, () => {
    expect(
      reducer(undefined, {type: undefined})
    ).toEqual(initState)
  })

  describe('collapse', () => {
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
      const expectedState = {
        ...initialState,
        collapsed: true
      }

      expect(
        reducer(initialState, action)
      ).toEqual(expectedState)
    })
  })

  // sidebarMini
  describe('sidebarMini', () => {
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
      const expectedState = {
        ...initialState,
        sidebarMini: true
      }

      expect(
        reducer(initialState, action)
      ).toEqual(expectedState)
    })
  })

  // boxed
  describe('boxed', () => {
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
      const expectedState = {
        ...initialState,
        boxed: true
      }

      expect(
        reducer(initialState, action)
      ).toEqual(expectedState)
    })
  })

  // fixed
  describe('fixed', () => {
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
      const expectedState = {
        ...initialState,
        fixed: true
      }

      expect(
        reducer(initialState, action)
      ).toEqual(expectedState)
    })
  })

  // topNavbar
  describe('topNavbar', () => {
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
      const expectedState = {
        ...initialState,
        topNavbar: true
      }

      expect(
        reducer(initialState, action)
      ).toEqual(expectedState)
    })
  })

  describe('changeSkin', () => {
    it(`should change skin to skin-red`, () => {
      const action = {
        type: 'LAYOUT_CHANGE_SKIN',
        payload: {
          skin: 'skin-red'
        }
      }
      const expectedState = {
        ...initialState,
        skin: 'skin-red'
      }

      expect(
        reducer(initialState, action)
      ).toEqual(expectedState)
    })
  })
})
