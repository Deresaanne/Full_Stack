// import { useState } from 'react'

// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>{text}</button>
// )

// const Login = () => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     if (!username.trim() || !password) return
//     setIsLoggedIn(true)
//   }

//   const handleLogout = () => {
//     setIsLoggedIn(false)
//     setUsername('')
//     setPassword('')
//   }

//   if (isLoggedIn) {
//     return (
//       <div style={{ marginBottom: '16px' }}>
//         <p>Welcome, {username}!</p>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     )
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}
//     >
//       <input
//         value={username}
//         onChange={(event) => setUsername(event.target.value)}
//         placeholder="Username"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//         placeholder="Password"
//       />
//       <button type="submit">Login</button>
//     </form>
//   )
// }

// const History = ({ allClicks }) => {
//   if (allClicks.length === 0) {
//     return <div>the app is used by pressing the buttons</div>
//   }

//   return <div>button press history: {allClicks.join(' ')}</div>
// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   const handleReset = () => {
//     console.log('resetting counters and history')
//     setLeft(0)
//     setRight(0)
//     setAll([])
//   }

//   return (
//     <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
//       <h1>Login + Counter App</h1>
//       <Login />

//       <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
//         <Button onClick={handleLeftClick} text="left" />
//         <Button onClick={handleRightClick} text="right" />
//         <Button onClick={handleReset} text="reset" />
//         <div>Left: {left}</div>
//         <div>Right: {right}</div>
//       </div>

//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// const App = (props) => {
//   const { notes } = props

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => 
//         <li key={note.id}>
//           {note.content}
//           </li>
//         )}
//       </ul>
//     </div>
//   )
// }

import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.name} {props.value}</p>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = all > 0 ? (good -bad)/all : 0
  const positive = all > 0 ? (good / all) * 100 : 0

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatisticLine name="good" value={good} />
          <StatisticLine name="neutral" value={neutral} />
          <StatisticLine name="bad" value={bad} />
          <StatisticLine name="all" value={all} />
          <StatisticLine name="average" value={average} />
          <StatisticLine name="positive" value={positive} />
        </div>
      )}
    </div>
  )
}

export default App
