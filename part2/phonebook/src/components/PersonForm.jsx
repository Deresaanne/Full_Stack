// const Notification = ({ message }) => {
//   if (message === null) {
//     return null
//   }

//   return (
//     <div className="error">
//       {message}
//     </div>
//   )
// }

// export default Notification
const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
    return (
      <form onSubmit={addPerson}> 
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
    )
}

export default PersonForm

