// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React from 'react'
import {connect} from 'react-redux'
import {MainHeaderComponents} from 'react-adm-lte'

import actions from './../../store/mainHeader/actions'

const {Messages} = MainHeaderComponents

const outerProps = {
  count: 3,
  data: [{
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
  }],
  header: 'You have 3 messages',
  footer: 'See All Messages'
}

const MyMessages = props => {
  return (
    <Messages {...outerProps} {...props} />
  )
}

const mapStateToProps = ({mainHeader: {messages}}) => ({
  open: messages.open
})

const mapDispatchToProps = dispatch => ({
  onToggle: open => dispatch(actions.toggleMessages(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyMessages)
