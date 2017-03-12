// constants
const COLLAPSE = 'react-adm-lte-demo/layout/COLLAPSE_TOGGLE'
const SIDEBAR_MINI = 'react-adm-lte-demo/layout/SIDEBAR_MINI_TOGGLE'
const BOXED = 'react-adm-lte-demo/layout/BOXED_TOGGLE'
const FIXED = 'react-adm-lte-demo/layout/FIXED_TOGGLE'
const TOP_NAVBAR = 'react-adm-lte-demo/layout/TOP_NAVBAR_TOGGLE'
const CHANGE_SKIN = 'react-adm-lte-demo/layout/CHANGE_SKIN'

// actions
export const collapse = () => ({
  type: COLLAPSE
})

export const sidebarMini = () => ({
  type: SIDEBAR_MINI
})

export const boxed = () => ({
  type: BOXED
})

export const fixed = () => ({
  type: FIXED
})

export const topNavbar = () => ({
  type: TOP_NAVBAR
})

export const changeSkin = skin => ({
  type: CHANGE_SKIN,
  payload: {
    skin
  }
})

// reducers
const initialState = {
  hydrated: false,
  collapsed: false,
  sidebarMini: true,
  boxed: false,
  fixed: false,
  topNavbar: false,
  skin: 'skin-blue'
}

export default function reducer (state = initialState, action) {
  if (!state.hydrated) {
    state = {...initialState, ...state, hydrated: true}
  }

  switch (action.type) {
    case COLLAPSE:
      return {
        ...state,
        collapsed: !state.collapsed
      }
    case SIDEBAR_MINI:
      return {
        ...state,
        sidebarMini: !state.sidebarMini
      }
    case BOXED:
      return {
        ...state,
        boxed: !state.boxed
      }
    case FIXED:
      return {
        ...state,
        fixed: !state.fixed
      }
    case TOP_NAVBAR:
      return {
        ...state,
        topNavbar: !state.topNavbar
      }
    case CHANGE_SKIN:
      return {
        ...state,
        skin: action.payload.skin
      }
    default:
      return state
  }
}
