// constants
const SET_MENU = 'react-adm-lte-demo/mainSidebar/SET_MENU'

// actions

// reducer
const initialState = {
  menu: {}
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        menu: action.payload
      }
    default:
      return state
  }
}
