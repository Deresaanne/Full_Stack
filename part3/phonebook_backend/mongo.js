const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://Deresaanne:${password}@cluster0.nbsij7j.mongodb.net/phonebookApp?appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', noteSchema)

// const person = new Person({
//   name: name,
//   number: number,
// })

// person.save().then(result => {
//   console.log(`added ${name} number ${number} to phonebook`)
//   mongoose.connection.close()
// })

Person.find({}).then(result => {
  console.log("phonebook:")
  result.forEach(person => {
    console.log(person.name, person.number)
  })
  mongoose.connection.close()
})