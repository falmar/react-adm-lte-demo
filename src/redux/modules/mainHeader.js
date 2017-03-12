// constants
const MESSAGES_TOGGLE = 'react-adm-lte-demo/mainHeader/MESSAGES_TOGGLE'
const NOTIFICATIONS_TOGGLE = 'react-adm-lte-demo/mainHeader/NOTIFICATIONS_TOGGLE'
const TASKS_TOGGLE = 'react-adm-lte-demo/mainHeader/TASKS_TOGGLE'
const USER_TOGGLE = 'react-adm-lte-demo/mainHeader/USER_TOGGLE'

// actions
export const toggleMessages = open => ({
  type: MESSAGES_TOGGLE,
  payload: {
    open
  }
})

export const toggleNotifications = open => ({
  type: NOTIFICATIONS_TOGGLE,
  payload: {
    open
  }
})

export const toggleTasks = open => ({
  type: TASKS_TOGGLE,
  payload: {
    open
  }
})

export const toggleUser = open => ({
  type: USER_TOGGLE,
  payload: {
    open
  }
})

// reducer
const initialState = {
  hydrated: false,
  messages: {
    open: false
  },
  notifications: {
    open: false
  },
  tasks: {
    open: false
  },
  user: {
    open: false
  }
}

export default function reducer (state = initialState, action) {
  if (!state.hydrated) {
    state = {...initialState, ...state, hydrated: true}
  }

  switch (action.type) {
    case MESSAGES_TOGGLE:
      return {
        ...state,
        messages: {
          ...state.messages,
          open: action.payload.open
        }
      }
    case NOTIFICATIONS_TOGGLE:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          open: action.payload.open
        }
      }
    case TASKS_TOGGLE:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          open: action.payload.open
        }
      }
    case USER_TOGGLE:
      return {
        ...state,
        user: {
          ...state.user,
          open: action.payload.open
        }
      }
    default:
      return state
  }
}
