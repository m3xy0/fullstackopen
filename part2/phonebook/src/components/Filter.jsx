

const Filter = ({ filterName, onChange }) => {

    return(
        <div>
            filter shown with <input name="filter" value={filterName} onChange={onChange}/>
        </div>
    )
}

export default Filter