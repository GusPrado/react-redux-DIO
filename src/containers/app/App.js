import React, {Component} from 'react'
import { connect } from 'react-redux'

import Button from '../../components/button'
import Input from '../../components/input'
import List from '../../components/list'

import {addTodo} from '../../store/actions/todo'

class App extends Component {
  state= {
    input: ''
  }

  handleClick = () => {
    // console.log('button clicked')
    const {addTodo} = this.props
    const {input} = this.state

    addTodo(input)
  }

  handleChange = (evt) => {
    // console.log('Event', evt.target.value )

    this.setState({input: evt.target.value})
  }

  render() {
    const { input } = this.state
    const { todoList } = this.props
    console.log(todoList)
    return (
      <div>
        <List />
        <Input 
          onChange={(evt) => this.handleChange(evt)} 
          value={input}>
        </Input>
        <Button onClick={() => this.handleClick()}>
          Adicionar
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todo
})

export default connect(mapStateToProps, { addTodo })(App)