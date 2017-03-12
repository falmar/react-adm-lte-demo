import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {MainHeaderComponents} from 'react-adm-lte'

import * as actions from '../../redux/modules/mainHeader'

const {Notifications, NotificationItem} = MainHeaderComponents

const items = [{
  id: 1,
  title: '5 new members joined today',
  iconClass: 'fa fa-users text-aqua'
}, {
  id: 2,
  title: 'Very long description here that may not be show',
  iconClass: 'fa fa-warning text-yellow'
}, {
  id: 3,
  title: '5 new members joined',
  iconClass: 'fa fa-users text-red'
}, {
  id: 4,
  title: '25 sales made',
  iconClass: 'fa fa-shopping-cart text-green'
}, {
  id: 5,
  title: 'You changed your username',
  iconClass: 'fa fa-user text-red'
}]

const buildNotifications = onClick => {
  return items.map(item => {
    return (
      <NotificationItem key={item.id} {...item} onClick={() => onClick(item)} />
    )
  })
}

const MyNotifications = props => {
  const onToggle = () => props.onToggle(!props.open)

  return (
    <Notifications
      {...props}
      label={5}
      header='You have 5 notifications'
      footer='View all notifications'
      onToggle={onToggle}
      onClickFooter={onToggle}
      >
      {buildNotifications(onToggle)}
    </Notifications>
  )
}

MyNotifications.propTypes = {
  onToggle: PropTypes.func,
  open: PropTypes.bool
}

const mapStateToProps = ({mainHeader: {notifications}}) => ({
  open: notifications.open
})

const mapDispatchToProps = dispatch => ({
  onToggle: open => dispatch(actions.toggleNotifications(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyNotifications)
