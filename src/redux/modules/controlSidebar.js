// constants
const TOGGLE = 'react-adm-lte-demo/controlSidebar/TOGGLE'
const SELECT_TAB = 'react-adm-lte-demo/controlSidebar/SELECT_TAB'

// actions
export const toggleControlSidebar = () => ({
  type: TOGGLE
})

export const selectControlSidebarTab = key => ({
  type: SELECT_TAB,
  payload: {
    key
  }
})

// reducers
const initialState = {
  hydrated: false,
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

export default function reducer (state = initialState, action) {
  if (!state.hydrated) {
    state = {...initialState, ...state, hydrated: true}
  }

  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        open: !state.open
      }
    case SELECT_TAB: {
      const {key} = action.payload

      if (!state.hasOwnProperty(key)) {
        return state
      }

      return {
        ...state,
        wrench: {
          ...state.wrench,
          active: key === 'wrench'
        },
        home: {
          ...state.home,
          active: key === 'home'
        },
        gears: {
          ...state.gears,
          active: key === 'gears'
        }
      }
    }
    default:
      return state
  }
}
