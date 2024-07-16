
const Persons = ({persons, filterName}) => {

    return (
        <ul>
            {filterName === '' 
            ? persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)
            : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase())).map(person => <li key={person.name}>{person.name} {person.number}</li>)
            }
        </ul>
    )
}




















export default Persons