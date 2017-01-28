// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../reducers.js')

import reducer, {initialState} from './../reducers.js'

const initState = {
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

describe('Store.MainHeader.Reducers', () => {
  it('should have initialState at first run', () => {
    expect(
      reducer(undefined, {type: ''})
    ).toEqual(initState)
  })

  describe('Messages', () => {
    it('should toggle open property to true', () => {
      const action = {type: 'MAINHEADER_MESSAGES_TOGGLE', payload: {open: true}}
      const state = {
        ...initialState,
        messages: {
          ...initialState.messages,
          open: false
        }
      }
      const expectedState = {
        ...initialState,
        messages: {
          ...initialState.messages,
          open: true
        }
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })

    it('should toggle open property to false', () => {
      const action = {type: 'MAINHEADER_MESSAGES_TOGGLE', payload: {open: false}}
      const state = {
        ...initialState,
        messages: {
          ...initialState.messages,
          open: true
        }
      }
      const expectedState = {
        ...initialState,
        messages: {
          ...initialState.messages,
          open: false
        }
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })
  })

  describe('Notifications', () => {
    it('should toggle open property to true', () => {
      const action = {type: 'MAINHEADER_NOTIFICATIONS_TOGGLE', payload: {open: true}}
      const state = {
        ...initialState,
        notifications: {
          ...initialState.notifications,
          open: false
        }
      }
      const expectedState = {
        ...initialState,
        notifications: {
          ...initialState.notifications,
          open: true
        }
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })

    it('should toggle open property to false', () => {
      const action = {type: 'MAINHEADER_NOTIFICATIONS_TOGGLE', payload: {open: false}}
      const state = {
        ...initialState,
        notifications: {
          ...initialState.notifications,
          open: true
        }
      }
      const expectedState = {
        ...initialState,
        notifications: {
          ...initialState.notifications,
          open: false
        }
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })
  })

  describe('Tasks', () => {
    it('should toggle open property to true', () => {
      const action = {type: 'MAINHEADER_TASKS_TOGGLE', payload: {open: true}}
      const state = {
        ...initialState,
        tasks: {
          ...initialState.tasks,
          open: false
        }
      }
      const expectedState = {
        ...initialState,
        tasks: {
          ...initialState.tasks,
          open: true
        }
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })

    it('should toggle open property to false', () => {
      const action = {type: 'MAINHEADER_TASKS_TOGGLE', payload: {open: false}}
      const state = {
        ...initialState,
        tasks: {
          ...initialState.tasks,
          open: true
        }
      }
      const expectedState = {
        ...initialState,
        tasks: {
          ...initialState.tasks,
          open: false
        }
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })
  })

  describe('Tasks', () => {
    it('should toggle open property to true', () => {
      const action = {type: 'MAINHEADER_USER_TOGGLE', payload: {open: true}}
      const state = {
        ...initialState,
        user: {
          ...initialState.user,
          open: false
        }
      }
      const expectedState = {
        ...initialState,
        user: {
          ...initialState.user,
          open: true
        }
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })

    it('should toggle open property to false', () => {
      const action = {type: 'MAINHEADER_USER_TOGGLE', payload: {open: false}}
      const state = {
        ...initialState,
        user: {
          ...initialState.user,
          open: true
        }
      }
      const expectedState = {
        ...initialState,
        user: {
          ...initialState.user,
          open: false
        }
      }

      expect(
        reducer(state, action)
      ).toEqual(expectedState)
    })
  })
})
