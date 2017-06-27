import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {MainHeader} from 'react-adm-lte'

import * as actions from '../../redux/modules/mainHeader'

const {User, UserHeader, UserBody, UserFooter} = MainHeader
const {UserBodyItem, UserFooterItem} = MainHeader

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

MyUser.propTypes = {
  onToggle: PropTypes.func,
  open: PropTypes.bool
}

const mapStateToProps = ({mainHeader: {user}}) => ({
  open: user.open
})

const mapDispatchToProps = dispatch => ({
  onToggle: open => dispatch(actions.toggleUser(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyUser)
