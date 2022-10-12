import { useState } from "react"
import "./App.css"
import DogBreed from './DogBreed'

function App() {
    const [newBreed, setNewBreed] = useState("")
    const [dogBreeds, setDogBreeds] = useState(['Husky', 'Chihuahua'])
    const [favoriteBreed, setFavoriteBreed] = useState('Undetermined')

    const handleChange = e => {
        e.preventDefault()
        setNewBreed(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        setDogBreeds([...dogBreeds, newBreed])
        setNewBreed("")
    }
    const updateFavorite = newFav => {
        setFavoriteBreed(newFav)
    }
    
    console.log(dogBreeds)
    
    return (
        <div className="App">
            <p>My favorite breed is {favoriteBreed}</p>
            <form onSubmit={e => handleSubmit(e)}>
                <label>New dog breed</label>
                <input value={newBreed} onChange={e => handleChange(e)} />
            </form>
            <DogBreed dogBreed={dogBreeds[0]} updateFavorite={updateFavorite}/>
            <DogBreed dogBreed={dogBreeds[1]} updateFavorite={updateFavorite}/>
        </div>
    )
}

export default App
