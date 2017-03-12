import * as actions from '../controlSidebar'

describe('ControlSidebar actions creators', () => {
  describe('Toggle', () => {
    it(`must have type: TOGGLE`, () => {
      const action = {
        type: 'react-adm-lte-demo/controlSidebar/TOGGLE'
      }

      expect(
        actions.toggleControlSidebar()
      ).toEqual(action)
    })
  })

  describe('Tabs', () => {
    it(`must have type: SELECT_TAB and tab its key: wrench`, () => {
      const action = {
        type: 'react-adm-lte-demo/controlSidebar/SELECT_TAB',
        payload: {key: 'wrench'}
      }

      expect(
        actions.selectControlSidebarTab('wrench')
      ).toEqual(action)
    })

    it(`must have type: SELECT_TAB and tab its key: gears`, () => {
      const action = {
        type: 'react-adm-lte-demo/controlSidebar/SELECT_TAB',
        payload: {key: 'gears'}
      }

      expect(
        actions.selectControlSidebarTab('gears')
      ).toEqual(action)
    })
  })
})
