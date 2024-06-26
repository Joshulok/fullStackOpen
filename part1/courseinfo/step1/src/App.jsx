// Return the name of the course
const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
// Return the part and number of exercises specified
const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>    
    )
}
// Return the Parts components
const Content = (props) => {
    return (
        <>
        <Part part = {props.parts[0]} exercises = {props.exercises[0]} />
        <Part part = {props.parts[1]} exercises = {props.exercises[1]} />
        <Part part = {props.parts[2]} exercises = {props.exercises[2]} />
        </>
    )
}
// Return the total number of exercises
const Total = (props) => {
    // use .reduce to sum every exercise added in props
    const total = props.exercises.reduce(function (prevExc, actualExc) {
        return prevExc + actualExc
    })
    return (
        <p>Number of excercises {total}</p>
    )
}

const App = () => {

    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (

        <div>
        <Header course = {course}/>
        <Content parts = {[part1, part2, part3]} exercises  = {[exercises1, exercises2, exercises3]} />
        <Total exercises = {[exercises1, exercises2, exercises3]} />
        </div>
  )
}

export default App
