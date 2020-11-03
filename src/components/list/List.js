import React from 'react'
import { connect } from 'react-redux'

const List = ({todoList}) => (
    <ul>
      {todoList.map(({id, name}) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  )

  const mapStateToProps = state => ({
    todoList: state.todo.list
  })

export default connect(mapStateToProps)(List)
