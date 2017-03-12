import * as actions from '../mainHeader.js'

describe('Store.MainHeader.Actions', () => {
  describe('Messages', () => {
    it('should have type MESSAGES_TOGGLE and payload.open false', () => {
      const expectedAction = {
        type: 'react-adm-lte-demo/mainHeader/MESSAGES_TOGGLE',
        payload: {
          open: false
        }
      }

      expect(
        actions.toggleMessages(false)
      ).toEqual(expectedAction)
    })

    it('should have type MESSAGES_TOGGLE and payload.open true', () => {
      const expectedAction = {
        type: 'react-adm-lte-demo/mainHeader/MESSAGES_TOGGLE',
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
    it('should have type NOTIFICATIONS_TOGGLE and payload.open false', () => {
      const expectedAction = {
        type: 'react-adm-lte-demo/mainHeader/NOTIFICATIONS_TOGGLE',
        payload: {
          open: false
        }
      }

      expect(
        actions.toggleNotifications(false)
      ).toEqual(expectedAction)
    })

    it('should have type NOTIFICATIONS_TOGGLE and payload.open true', () => {
      const expectedAction = {
        type: 'react-adm-lte-demo/mainHeader/NOTIFICATIONS_TOGGLE',
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
    it('should have type TASKS_TOGGLE and payload.open false', () => {
      const expectedAction = {
        type: 'react-adm-lte-demo/mainHeader/TASKS_TOGGLE',
        payload: {
          open: false
        }
      }

      expect(
        actions.toggleTasks(false)
      ).toEqual(expectedAction)
    })

    it('should have type TASKS_TOGGLE and payload.open true', () => {
      const expectedAction = {
        type: 'react-adm-lte-demo/mainHeader/TASKS_TOGGLE',
        payload: {
          open: true
        }
      }

      expect(
        actions.toggleTasks(true)
      ).toEqual(expectedAction)
    })
  })

  describe('User', () => {
    it('should have type USER_TOGGLE and payload.open false', () => {
      const expectedAction = {
        type: 'react-adm-lte-demo/mainHeader/USER_TOGGLE',
        payload: {
          open: false
        }
      }

      expect(
        actions.toggleUser(false)
      ).toEqual(expectedAction)
    })

    it('should have type USER_TOGGLE and payload.open true', () => {
      const expectedAction = {
        type: 'react-adm-lte-demo/mainHeader/USER_TOGGLE',
        payload: {
          open: true
        }
      }

      expect(
        actions.toggleUser(true)
      ).toEqual(expectedAction)
    })
  })
})
