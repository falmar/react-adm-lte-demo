import * as actions from '../layout'

describe('Store.Layout.Actions', () => {
  it(`must have type: COLLAPSE_TOGGLE`, () => {
    const action = {type: 'react-adm-lte-demo/layout/COLLAPSE_TOGGLE'}

    expect(
      actions.collapse()
    ).toEqual(action)
  })

  it(`must have type: SIDEBAR_MINI_TOGGLE`, () => {
    const action = {type: 'react-adm-lte-demo/layout/SIDEBAR_MINI_TOGGLE'}

    expect(
      actions.sidebarMini()
    ).toEqual(action)
  })

  it(`must have type: BOXED_TOGGLE`, () => {
    const action = {type: 'react-adm-lte-demo/layout/BOXED_TOGGLE'}

    expect(
      actions.boxed()
    ).toEqual(action)
  })

  it(`must have type: FIXED_TOGGLE`, () => {
    const action = {type: 'react-adm-lte-demo/layout/FIXED_TOGGLE'}

    expect(
      actions.fixed()
    ).toEqual(action)
  })

  it(`must have type: TOP_NAVBAR_TOGGLE`, () => {
    const action = {type: 'react-adm-lte-demo/layout/TOP_NAVBAR_TOGGLE'}

    expect(
      actions.topNavbar()
    ).toEqual(action)
  })

  describe('changeSkin', () => {
    it(`should have type: CHANGE_SKIN`, () => {
      const {type} = actions.changeSkin()
      const expectedType = 'react-adm-lte-demo/layout/CHANGE_SKIN'

      expect(
        type
      ).toEqual(expectedType)
    })

    it(`should have payload.skin: undefined`, () => {
      const {payload} = actions.changeSkin()
      const expectedPayload = {skin: undefined}

      expect(
        payload
      ).toEqual(expectedPayload)
    })

    it(`should have payload.skin: skin-blue`, () => {
      const {payload} = actions.changeSkin('skin-blue')
      const expectedPayload = {skin: 'skin-blue'}

      expect(
        payload
      ).toEqual(expectedPayload)
    })
  })
})
