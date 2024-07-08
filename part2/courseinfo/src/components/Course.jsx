const Course = ({course}) => {
    return (
      <>
        <Header title={course.name}/>
        <Content parts={course.parts}/>
        <Total sum={course.parts.reduce((total, part) => total + part.exercises, 0)}/>
      </>
    )
  }
  
  const Total = ({sum}) => <p>total of {sum} exercises</p>
  
  const Header = ({title}) => <h1>{title}</h1>
  
  const Part = ({part}) => <p>{part.name} {part.exercises}</p>
  
  const Content = ({parts}) => {
    return (
      <>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </>
    )
  }

export default Course