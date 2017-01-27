// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React from 'react'
import {connect} from 'react-redux'
import {MainHeaderComponents} from 'react-adm-lte'

import actions from './../../store/mainHeader/actions'

const {Tasks} = MainHeaderComponents

const outerProps = {
  count: 4,
  complete: 'Completed',
  header: 'You have 4 tasks',
  footer: 'Show All Tasks',
  data: [{
    id: 1,
    title: 'Design some buttons',
    progress: 20,
    progressClass: 'progress-bar-aqua'
  }, {
    id: 2,
    title: 'Create a nice theme',
    progress: 40,
    progressClass: 'progress-bar-green'
  }, {
    id: 3,
    title: 'Same task I need to do',
    progress: 60,
    progressClass: 'progress-bar-red'
  }, {
    id: 4,
    title: 'Make beautiful transitions',
    progress: 80,
    progressClass: 'progress-bar-yellow'
  }]
}

const MyTasks = props => {
  return (
    <Tasks {...outerProps} {...props} />
  )
}

const mapStateToProps = ({mainHeader: {tasks}}) => ({
  open: tasks.open
})

const mapDispatchToProps = dispatch => ({
  onToggle: open => dispatch(actions.toggleTasks(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks)
