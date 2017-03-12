import reducer from '../layout'

const initialState = {
  hydrated: true,
  collapsed: false,
  sidebarMini: true,
  boxed: false,
  fixed: false,
  topNavbar: false,
  skin: 'skin-blue'
}

describe('Store.Layout.Reducers', () => {
  it(`should return initialState`, () => {
    expect(
      reducer(undefined, {type: undefined})
    ).toEqual(initialState)
  })

  describe('collapse', () => {
    it(`should toggle collapse property to false`, () => {
      const action = {type: 'react-adm-lte-demo/layout/COLLAPSE_TOGGLE'}
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
      const action = {type: 'react-adm-lte-demo/layout/COLLAPSE_TOGGLE'}
      const state = {
        ...initialState,
        collapsed: false
      }
      const expectedState = {
        ...initialState,
        collapsed: true
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })
  })

  // sidebarMini
  describe('sidebarMini', () => {
    it(`should toggle sidebarMini property to false`, () => {
      const action = {type: 'react-adm-lte-demo/layout/SIDEBAR_MINI_TOGGLE'}
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
      const action = {type: 'react-adm-lte-demo/layout/SIDEBAR_MINI_TOGGLE'}
      const state = {
        ...initialState,
        sidebarMini: false
      }
      const expectedState = {
        ...initialState,
        sidebarMini: true
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })
  })

  // boxed
  describe('boxed', () => {
    it(`should toggle boxed property to false`, () => {
      const action = {type: 'react-adm-lte-demo/layout/BOXED_TOGGLE'}
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
      const action = {type: 'react-adm-lte-demo/layout/BOXED_TOGGLE'}
      const state = {
        ...initialState,
        boxed: false
      }
      const expectedState = {
        ...initialState,
        boxed: true
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })
  })

  // fixed
  describe('fixed', () => {
    it(`should toggle fixed property to false`, () => {
      const action = {type: 'react-adm-lte-demo/layout/FIXED_TOGGLE'}
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
      const action = {type: 'react-adm-lte-demo/layout/FIXED_TOGGLE'}
      const state = {
        ...initialState,
        fixed: false
      }
      const expectedState = {
        ...initialState,
        fixed: true
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })
  })

  // topNavbar
  describe('topNavbar', () => {
    it(`should toggle topNavbar property to false`, () => {
      const action = {type: 'react-adm-lte-demo/layout/TOP_NAVBAR_TOGGLE'}
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
      const action = {type: 'react-adm-lte-demo/layout/TOP_NAVBAR_TOGGLE'}
      const state = {
        ...initialState,
        topNavbar: false
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

  describe('changeSkin', () => {
    it(`should change skin to skin-red`, () => {
      const action = {
        type: 'react-adm-lte-demo/layout/CHANGE_SKIN',
        payload: {
          skin: 'skin-red'
        }
      }
      const state = {
        ...initialState,
        skin: 'skin-blue'
      }
      const expectedState = {
        ...initialState,
        skin: 'skin-red'
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })
  })
})
