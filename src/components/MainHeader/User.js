// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React from 'react'
import {connect} from 'react-redux'
import {MainHeaderComponents} from 'react-adm-lte'

import actions from './../../store/mainHeader/actions'

const {User} = MainHeaderComponents

const outerProps = {
  imageUrl: 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg',
  label: 'Alexander Pierce',
  header: {
    url: 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg',
    title: 'Alexander Pierce - Web Developer',
    description: 'Member since Nov. 2012'
  },
  body: [{
    label: 'Followers'
  }, {
    label: 'Sales'
  }, {
    label: 'Friends'
  }],
  footer: {
    right: {
      label: 'Sign out'
    },
    left: {
      label: 'Profile'
    }
  }
}

const MyUser = props => {
  return (
    <User.Base {...outerProps} {...props} />
  )
}

const mapStateToProps = ({mainHeader: {user}}) => ({
  open: user.open
})

const mapDispatchToProps = dispatch => ({
  onToggle: open => dispatch(actions.toggleUser(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyUser)
