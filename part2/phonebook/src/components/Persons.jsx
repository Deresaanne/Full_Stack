const Persons = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map(person => (
        <div key={person.id}>
          {person.name} {person.number}
          <button
            id="windowButton"
            style={{ marginLeft: '10px' }}
            onClick={() => {
              if (window.confirm(`Delete ${person.name} ?`)) {
                console.log(`delete ${person.name} with id ${person.id}`)
                deletePerson(person.id)
              } else {
                console.log(`deletion cancelled for ${person.name}(${person.id})`)
              }
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Persons
