const Header = (props) => <h2>{props.course}</h2>

const Part = (props) =>  (
  <p>
    {props.parts.name} {props.parts.exercises}
  </p>
)

const Content = (props) => (
  <div>
    {props.parts.map((part) => (
      <Part key={part.id} parts={part} />
    ))}
  </div>
)


const Total = (props) => {
  return (
    <p>
      <strong>total of {props.total} exercises</strong>
    </p>
  )
}

const Course = (props) => {
  // console.log(props)
  const total = props.course.parts.reduce((sum, part) => {
    // console.log('what is happening', sum, part)
    return sum + part.exercises
  }
  , 0)
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total 
        total={total} />
    </div>
  )
}

export default Course