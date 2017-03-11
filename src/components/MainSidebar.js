// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {Component} from 'react'
import {MainSidebarComponents} from 'react-adm-lte'

const {MainSidebar, UserPanel, SearchForm, Menu, Item} = MainSidebarComponents

const items = [
  {id: '1', parentId: null, title: 'Dashboard', isTreeview: true, iconClass: 'fa fa-dashboard'},
  {id: '1-1', parentId: '1', title: 'Dashboard v1'},
  {id: '1-2', parentId: '1', title: 'Dashboard v2'},

  {
    id: '2',
    parentId: null,
    title: 'Layout Options',
    isTreeview: true,
    iconClass: 'fa fa-files-o',
    label: '4',
    labelClassName: 'label-primary'
  },
  {id: '2-1', parentId: '2', title: 'Top Navigation'},
  {id: '2-2', parentId: '2', title: 'Boxed'},
  {id: '2-3', parentId: '2', title: 'Fixed'},
  {id: '2-4', parentId: '2', title: 'Collapsed Sidebar'}
]

class MySidebar extends Component {
  buildMenu (items, parentId) {
    return items
    .filter(item => item.parentId === parentId)
    .map(item => {
      const children = this.buildMenu(items, item.id)

      if (children.length > 0) {
        return (
          <Item
            key={item.id}
            {...item}
            iconClass={item.iconClass || 'fa fa-circle-o'}>
            <Menu>
              {children}
            </Menu>
          </Item>
        )
      }

      return (
        <Item
          key={item.id}
          {...item}
          iconClass={item.iconClass || 'fa fa-circle-o'}
          />
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
          onSubmit={() => {}} />
        <Menu isRoot>
          {this.buildMenu(items, null)}
        </Menu>
      </MainSidebar>
    )
  }
}

export default MySidebar
