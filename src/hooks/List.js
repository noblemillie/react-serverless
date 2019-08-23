import React, { useState, useEffect } from 'react'
import Item from './Item'

const List = () => {
  const defaultItem = [
    {firstName: 'Rip', lastName: 'Byte III'},
    {firstName: 'DJ', lastName: 'State'}
  ];

  const [items, setItems] = useState(defaultItem)
    

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
