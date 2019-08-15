import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

// import List from './components/List'

const boardData = [
  {
    name: 'Winnie',
    position: 0,
    listItems: [
      {
        desciption: 'break UI into component hierarchy',
        boardId: 0
      },
      {
        desciption: 'build a static version that renders correct layout',
        boardId: 0
      },
      {
        desciption: 'wire up react hooks',
        boardId: 0
      }
    ]
  },
  {
    name: 'Bob',
    position: 1,
    listItems: [
      {
        title: 'app development plan',
        desciption: 'create the blueprint for app development ',
        boardId: 1
      },
      {
        desciption: 'cash checks! ',
        boardId: 1
      }
    ]
  }
]

function App() {
  // const [boards, setBoards] = useState(['winnie', 'bob'])
  const [boards, setBoards] = useState(boardData)
console.log(boardData)
  return (
    <div className="App">
      <div className="main-wrapper">
        <h2>KanBan Board</h2>
        <Board boards=boards />
      </div>
    </div>
  )
}

const Board = () => {
  const [list, setList] = useState([])
  
  useEffect(() => (
    setList(() => {
       
    }, [list, setList])
  ))

  return (
    <div className="board">
      {boards &&
        boards.map(board => <h3 className="board-title">{board.name}</h3>)}
    </div>
  )
}

const List = () => {
  const [listItems, setListItems] = useState([])

  return <div className="board-list">list placeholder</div>
}

// const Item = () => {

//   return (
//     <div className="list-item">
//       item placeholder
//       {items && items.map(item => <Item name={item.name} />)}
//     </div>
//   )
// }

// Button Components
const CreateNewBoard = () => {
  return (
    <div className="create-new-board-btn">
      <button>create new board button placeholder</button>
    </div>
  )
}

const MoveItem = () => {
  return (
    <div className="move-item-btn">
      <button>move button placeholder</button>
    </div>
  )
}

export default App
