
const Persons = ({persons, filterName, handleDeletion}) => {

    return (
        <ul>
            {filterName === '' 
            ? persons.map(person => <li key={person.name}>{person.name} {person.number} <button onClick={() => handleDeletion(person.id)}>delete</button></li>)
            : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase())).map(person => <li key={person.name}>{person.name} {person.number} <button onClick={handleDeletion(person.id)}>delete</button></li>)
            }
        </ul>
    )
}
















export default Persons