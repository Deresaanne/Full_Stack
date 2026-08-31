const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://Deresaanne:${password}@cluster0.nbsij7j.mongodb.net/noteApp?appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
  date: {
    type: Date,
    default: Date.now
  }
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'The sky is blue',
//   important: false,
// })

// note.save().then(result => {
//   console.log(`note saved! ${result}`)
//   mongoose.connection.close()
// })

Note.find({important: true}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})