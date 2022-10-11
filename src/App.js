import { useState } from "react"
import "./App.css"

function App() {
    const [newBreed, setNewBreed] = useState("")
    const [dogBreeds, setDogBreeds] = useState([])

    const handleChange = e => {
        e.preventDefault()
        setNewBreed(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        setDogBreeds([...dogBreeds, newBreed])
        setNewBreed("")
    }

    console.log(dogBreeds)
    
    return (
        <div className="App">
            <form onSubmit={e => handleSubmit(e)}>
                <label>New dog breed</label>
                <input value={newBreed} onChange={e => handleChange(e)} />
            </form>
        </div>
    )
}

export default App
