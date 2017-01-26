// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../actions.js')

import actions from './../actions.js'

describe('Store.MainHeader.Actions', () => {
  describe('Messages', () => {
    it('should have type MAINHEADER_MESSAGES_TOGGLE and payload.open false', () => {
      const expectedAction = {
        type: 'MAINHEADER_MESSAGES_TOGGLE',
        payload: {
          open: false
        }
      }

      expect(
        actions.toggleMessages(false)
      ).toEqual(expectedAction)
    })

    it('should have type MAINHEADER_MESSAGES_TOGGLE and payload.open true', () => {
      const expectedAction = {
        type: 'MAINHEADER_MESSAGES_TOGGLE',
        payload: {
          open: true
        }
      }

      expect(
        actions.toggleMessages(true)
      ).toEqual(expectedAction)
    })
  })

  describe('Notifications', () => {
    it('should have type MAINHEADER_NOTIFICATIONS_TOGGLE and payload.open false', () => {
      const expectedAction = {
        type: 'MAINHEADER_NOTIFICATIONS_TOGGLE',
        payload: {
          open: false
        }
      }

      expect(
        actions.toggleNotifications(false)
      ).toEqual(expectedAction)
    })

    it('should have type MAINHEADER_NOTIFICATIONS_TOGGLE and payload.open true', () => {
      const expectedAction = {
        type: 'MAINHEADER_NOTIFICATIONS_TOGGLE',
        payload: {
          open: true
        }
      }

      expect(
        actions.toggleNotifications(true)
      ).toEqual(expectedAction)
    })
  })

  describe('Tasks', () => {
    it('should have type MAINHEADER_TASKS_TOGGLE and payload.open false', () => {
      const expectedAction = {
        type: 'MAINHEADER_TASKS_TOGGLE',
        payload: {
          open: false
        }
      }

      expect(
        actions.toggleTasks(false)
      ).toEqual(expectedAction)
    })

    it('should have type MAINHEADER_TASKS_TOGGLE and payload.open true', () => {
      const expectedAction = {
        type: 'MAINHEADER_TASKS_TOGGLE',
        payload: {
          open: true
        }
      }

      expect(
        actions.toggleTasks(true)
      ).toEqual(expectedAction)
    })
  })
})
