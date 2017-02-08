// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component} from 'react'
import {MainSidebarComponents} from 'react-adm-lte'

const {MainSidebar, UserPanel, SearchForm, Menu, Item} = MainSidebarComponents

const menuItems = [{
  name: 'Main Section',
  header: true
}, {
  name: 'Dashboard',
  iconClass: 'fa fa-dashboard',
  children: [{
    name: 'Dashboard 1'
  }, {
    name: 'Dashboard 2'
  }]
}, {
  name: 'Users',
  iconClass: 'fa fa-user',
  children: [{
    name: 'Dashboard 1'
  }, {
    name: 'Dashboard 2'
  }]
}]

class MySidebar extends Component {
  buildMenu (items) {
    return items.map(item => {
      if (item.children instanceof Array && item.children.length > 0) {
        return (
          <Item
            isTreeview name={item.name}
            iconClass={item.iconClass || 'fa fa-circle-o'}>
            <Menu>
              {this.buildMenu(item.children)}
            </Menu>
          </Item>
        )
      }

      return (
        <Item
          header={item.header}
          name={item.name}
          iconClass={item.iconClass || 'fa fa-circle-o'} />
      )
    })
  }

  render () {
    return (
      <MainSidebar>
        <UserPanel
          imageUrl='https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg'
          title='Alexander Pierce'
          statusText=' Online'
          statusClass='text-success' />
        <SearchForm
          placeholder='Search...'
          value='default-value'
          onSubmit={() => {}} />
        <Menu isRoot>
          {this.buildMenu(menuItems)}
        </Menu>
      </MainSidebar>
    )
  }
}

export default MySidebar
