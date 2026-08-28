// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import { StrictMode } from 'react'
// import ReactDOM from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'
// import { StrictMode } from 'react';

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true
//   }
// ]

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(
//   <StrictMode>
//     <App notes={notes} />
//   </StrictMode>
// )

// import { StrictMode } from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import axios from 'axios'

// // Make axios globally available
// window.axios = axios

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true
//   }
// ]

//ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)

// axios
// .get('http://localhost:3001/notes')
// .then(response => {
//   const notes = response.data
//   ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
//   console.log(notes)
// })

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)


