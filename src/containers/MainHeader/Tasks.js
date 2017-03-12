// Copyright 2017 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {MainHeaderComponents} from 'react-adm-lte'

import * as actions from '../../redux/modules/mainHeader'

const {Tasks, TaskItem} = MainHeaderComponents

const items = [{
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

const completedText = 'Completed'

const buildTasks = onClick => {
  return items.map(item => {
    return (
      <TaskItem
        key={item.id} {...item}
        onClick={() => onClick(item)}
        completedText={completedText} />
    )
  })
}

const MyTasks = props => {
  const onToggle = () => props.onToggle(!props.open)

  return (
    <Tasks
      {...props}
      label={4}
      header='You have 4 tasks'
      footer='View all tasks'
      onToggle={onToggle}
      onClickFooter={onToggle}
      >
      {buildTasks(onToggle)}
    </Tasks>
  )
}

MyTasks.propTypes = {
  onToggle: PropTypes.func,
  open: PropTypes.bool
}

const mapStateToProps = ({mainHeader: {tasks}}) => ({
  open: tasks.open
})

const mapDispatchToProps = dispatch => ({
  onToggle: open => dispatch(actions.toggleTasks(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks)
