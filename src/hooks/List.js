import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { firstName: 'Rip', lastName: 'Byte III' },
        { firstName: 'DJ', lastName: 'State' }
      ]
    }
  }

  render() {
    return (
      <ul>
        list component
        {this.state.items.map(item => (
          <Item key={item.id} />
        ))}
      </ul>
    )
  }
}

export default List
