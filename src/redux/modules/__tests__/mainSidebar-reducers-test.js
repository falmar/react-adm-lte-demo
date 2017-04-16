jest.unmock('../mainSidebar')

import reducer from '../mainSidebar'

const initialState = {
  menu: {}
}

describe('Main Sidebar reducers', () => {
  it('should return initialState', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState)
  })

  it(`should set the menu passed as payload; action: 'SET_MENU'`, () => {
    const menu = {
      '1': {
        name: 'Dashboard',
        url: '/'
      },
      '2': {
        name: 'Documentation',
        onClick: () => {
          return 1
        }
      }
    }
    const action = {
      type: 'react-adm-lte-demo/mainSidebar/SET_MENU',
      payload: menu
    }
    const state = {
      ...initialState,
      menu: menu
    }
    const expectedState = {
      menu: menu
    }

    expect(
      reducer(state, action)
    ).toEqual(expectedState)
  })
})
