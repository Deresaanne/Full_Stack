// // import { useState } from 'react'

// // const Button = ({ onClick, text }) => (
// //   <button onClick={onClick}>{text}</button>
// // )

// // const Login = () => {
// //   const [username, setUsername] = useState('')
// //   const [password, setPassword] = useState('')
// //   const [isLoggedIn, setIsLoggedIn] = useState(false)

// //   const handleSubmit = (event) => {
// //     event.preventDefault()
// //     if (!username.trim() || !password) return
// //     setIsLoggedIn(true)
// //   }

// //   const handleLogout = () => {
// //     setIsLoggedIn(false)
// //     setUsername('')
// //     setPassword('')
// //   }

// //   if (isLoggedIn) {
// //     return (
// //       <div style={{ marginBottom: '16px' }}>
// //         <p>Welcome, {username}!</p>
// //         <button onClick={handleLogout}>Logout</button>
// //       </div>
// //     )
// //   }

// //   return (
// //     <form
// //       onSubmit={handleSubmit}
// //       style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}
// //     >
// //       <input
// //         value={username}
// //         onChange={(event) => setUsername(event.target.value)}
// //         placeholder="Username"
// //       />
// //       <input
// //         type="password"
// //         value={password}
// //         onChange={(event) => setPassword(event.target.value)}
// //         placeholder="Password"
// //       />
// //       <button type="submit">Login</button>
// //     </form>
// //   )
// // }

// // const History = ({ allClicks }) => {
// //   if (allClicks.length === 0) {
// //     return <div>the app is used by pressing the buttons</div>
// //   }

// //   return <div>button press history: {allClicks.join(' ')}</div>
// // }

// // const App = () => {
// //   const [left, setLeft] = useState(0)
// //   const [right, setRight] = useState(0)
// //   const [allClicks, setAll] = useState([])

// //   const handleLeftClick = () => {
// //     setAll(allClicks.concat('L'))
// //     setLeft(left + 1)
// //   }

// //   const handleRightClick = () => {
// //     setAll(allClicks.concat('R'))
// //     setRight(right + 1)
// //   }

// //   const handleReset = () => {
// //     console.log('resetting counters and history')
// //     setLeft(0)
// //     setRight(0)
// //     setAll([])
// //   }

// //   return (
// //     <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
// //       <h1>Login + Counter App</h1>
// //       <Login />

// //       <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
// //         <Button onClick={handleLeftClick} text="left" />
// //         <Button onClick={handleRightClick} text="right" />
// //         <Button onClick={handleReset} text="reset" />
// //         <div>Left: {left}</div>
// //         <div>Right: {right}</div>
// //       </div>

// //       <History allClicks={allClicks} />
// //     </div>
// //   )
// // }

// // const App = (props) => {
// //   const { notes } = props

// //   return (
// //     <div>
// //       <h1>Notes</h1>
// //       <ul>
// //         {notes.map(note => 
// //         <li key={note.id}>
// //           {note.content}
// //           </li>
// //         )}
// //       </ul>
// //     </div>
// //   )
// // }

// import { useState } from 'react'

// const StatisticLine = (props) => {
//   return (
//     <div>
//       <p>{props.name} {props.value}</p>
//     </div>
//   )
// }

// const Button = (props) => (
//   <button onClick={props.onClick}>{props.text}</button>
// )


// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const all = good + neutral + bad
//   const average = all > 0 ? (good -bad)/all : 0
//   const positive = all > 0 ? (good / all) * 100 : 0

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button onClick={() => setGood(good + 1)} text="good" />
//       <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
//       <Button onClick={() => setBad(bad + 1)} text="bad" />

//       <h1>statistics</h1>
//       {all === 0 ? (
//         <p>No feedback given</p>
//       ) : (
//         <div>
//           <StatisticLine name="good" value={good} />
//           <StatisticLine name="neutral" value={neutral} />
//           <StatisticLine name="bad" value={bad} />
//           <StatisticLine name="all" value={all} />
//           <StatisticLine name="average" value={average} />
//           <StatisticLine name="positive" value={positive} />
//         </div>
//       )}
//     </div>
//   )
// }

// const Note = ({ note }) => {
//   return (
//     <li>{note.content}</li>
//   )
// }

import {useState, useEffect} from 'react'
import Footer from './components/Footer'
import Note from './components/Note.jsx'
// import axios from 'axios'
import noteService from './services/notes'
import Notification from './components/Notification'

// Make axios globally available
// window.axios = axios

const App = (props) => {
  const [notes, setNotes] = useState(null)
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
  noteService
    .getAll()
    .then(initialNotes => {
      console.log('promise fulfilled')
      setNotes(initialNotes)
    })
  }, [])

  //do not render anything if notes is still null
  if (!notes) { 
    return null 
  }

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
        .update(id, changedNote)
        .then(returnedNote  => {
          setNotes(notes.map(note => note.id === id ? returnedNote : note))
        })
        .catch(error => {
          setErrorMessage(`Note '${note.content}' was already removed from server`
          )
          setTimeout(() => {
          setErrorMessage(null)
          }, 5000)
          setNotes(notes.filter(n => n.id !== id))
        })

    console.log(`importance of ${id} needs to be toggled`)
  }


  console.log('render', notes.length, 'notes')
  //const [notes, setNotes] = useState([])
  //const { notes } = props
  // const result = notes.map(note =>
  //   note.content
  //     .split(/[.?!]\s*/)
  //     .map(sentence => sentence.trim())
  //     .filter(Boolean)
  // )

  // console.log(result)
  // setTimeout(() => {
  //   console.log('loop..')
  //   let i = 0
  //   while (i < 99999999999) {
  //     i++
  //   }
  //   console.log('end')
  // }, 5000)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote  => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note
            key={note.id}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote}
        onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form> 
      <Footer />
    </div>
  )
}

export default App

