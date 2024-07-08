const Course = ({course}) => {
    return (
      <>
        <Header title={course.name}/>
        <Content parts={course.parts}/>
        <Total sum={course.parts.reduce((total, part) => total + part.exercises, 0)}/>
      </>
    )
  }
  
  const Total = ({sum}) => <h3>total of {sum} exercises</h3>
  
  const Header = ({title}) => <h2>{title}</h2>
  
  const Part = ({part}) => <p>{part.name} {part.exercises}</p>
  
  const Content = ({parts}) => {
    return (
      <>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </>
    )
  }

export default Course