import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {MainHeader} from 'react-adm-lte'

import * as actions from '../../redux/modules/mainHeader'

const {Messages, MessageItem} = MainHeader

const items = [{
  id: 1,
  title: 'Support Team',
  time: '5 mins',
  imageUrl: 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg',
  message: 'Why not use ReactAdminLTE?'
}, {
  id: 2,
  title: 'AdminLTE Design Team',
  time: '2 hours',
  imageUrl: 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user3-128x128.jpg',
  message: 'You should definitely try React!'
}, {
  id: 3,
  title: 'Developers',
  time: '5 mins',
  imageUrl: 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user4-128x128.jpg',
  message: 'Could use Redux too!'
}]

const buildMessages = onClick => {
  return items.map(item => {
    return (
      <MessageItem key={item.id} {...item} onClick={() => onClick(item)} />
    )
  })
}

const MyMessages = props => {
  const onToggle = () => props.onToggle(!props.open)

  return (
    <Messages
      {...props}
      label={3}
      header='You have 3 messages'
      footer='View all messages'
      onToggle={onToggle}
      onClickFooter={onToggle}
      >
      {buildMessages(onToggle)}
    </Messages>
  )
}

MyMessages.propTypes = {
  onToggle: PropTypes.func,
  open: PropTypes.bool
}

const mapStateToProps = ({mainHeader: {messages}}) => ({
  open: messages.open
})

const mapDispatchToProps = dispatch => ({
  onToggle: open => dispatch(actions.toggleMessages(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyMessages)
