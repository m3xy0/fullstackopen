

const PersonForm = ({addName, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return (
        <form onSubmit={addName}>
            <div>
                name: <input name="name" value={newName} onChange={handleNameChange} required/>
            </div>
            <div>
                number: <input name="number" value={newNumber} onChange={handleNumberChange} type="tel" pattern="[0-9]{3}-[0-9]{6}" required/>
            </div>
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    )
}

export default PersonForm