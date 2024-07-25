import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAllList = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const newPhoneNumber = (newObject) => {
    const request = axios. post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deletePhoneNumber = (uselessId) => {
    const request = axios.delete(`${baseUrl}/${uselessId}`)
    return request.then(response => response.data)
}
export default {getAllList, newPhoneNumber, deletePhoneNumber}