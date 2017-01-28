// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React from 'react'
import {MainSidebarComponents} from 'react-adm-lte'

const {MainSidebar, UserPanel, SearchForm, Menu, Item} = MainSidebarComponents

const MySidebar = () => (
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
      <Item header name='Main Section' />
      <Item isTreeview name='Dashboard' active iconClass='fa fa-dashboard'>
        <Menu>
          <Item name='Item 1' iconClass='fa fa-circle-o' />
          <Item name='Item 2' iconClass='fa fa-circle-o' />
        </Menu>
      </Item>
      <Item isTreeview name='Users' iconClass='fa fa-user'>
        <Menu>
          <Item name='Item Users 1' iconClass='fa fa-circle-o' />
          <Item name='Item Users 2' iconClass='fa fa-circle-o' />
        </Menu>
      </Item>
    </Menu>
  </MainSidebar>
)

export default MySidebar
