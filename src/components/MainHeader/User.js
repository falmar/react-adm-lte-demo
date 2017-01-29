// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React from 'react'
import {connect} from 'react-redux'
import {MainHeaderComponents} from 'react-adm-lte'

import actions from '../../store/mainHeader/actions'

const {User, UserHeader, UserBody, UserFooter} = MainHeaderComponents
const {UserBodyItem, UserFooterItem} = MainHeaderComponents

const MyUser = ({open, onToggle}) => {
  const toggle = () => onToggle(!open)

  return (
    <User
      open={open}
      onToggle={toggle}
      imageUrl='https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg'
      label='Alexander Pierce'>
      <UserHeader
        imageUrl='https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg'
        title='Alexander Pierce'
        description='Member since Nov. 2012' />
      <UserBody>
        <UserBodyItem onClick={toggle}>Followers</UserBodyItem>
        <UserBodyItem onClick={toggle}>Sales</UserBodyItem>
        <UserBodyItem onClick={toggle}>Friends</UserBodyItem>
      </UserBody>
      <UserFooter>
        <UserFooterItem onClick={toggle} left>Profile</UserFooterItem>
        <UserFooterItem onClick={toggle} right>Sign out</UserFooterItem>
      </UserFooter>
    </User>
  )
}

const mapStateToProps = ({mainHeader: {user}}) => ({
  open: user.open
})

const mapDispatchToProps = dispatch => ({
  onToggle: open => dispatch(actions.toggleUser(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyUser)
