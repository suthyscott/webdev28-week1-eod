import { useState } from "react"
import "./App.css"
import DogBreed from './DogBreed'

function App() {
    const [newBreed, setNewBreed] = useState("")
    const [dogBreeds, setDogBreeds] = useState(['Husky', 'Chihuahua', 'Beagle', "Labrador"])
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
    const deleteBreed = index => {
        if(dogBreeds[index] === favoriteBreed){
            setFavoriteBreed('Undetermined')
        }
        setDogBreeds(dogBreeds.filter((e,i) => i !== index))
    }
    
    // console.log(dogBreeds)
    
    return (
        <div className="App">
            <p>My favorite breed is {favoriteBreed}</p>
            <form onSubmit={e => handleSubmit(e)}>
                <label>New dog breed</label>
                <input value={newBreed} onChange={e => handleChange(e)} />
            </form>
            {/* <DogBreed dogBreed={dogBreeds[0]} updateFavorite={updateFavorite}/>
            <DogBreed dogBreed={dogBreeds[1]} updateFavorite={updateFavorite}/> */}
            {dogBreeds.map((breed, index)=> {
                return <DogBreed 
                dogBreed={breed} 
                updateFavorite={updateFavorite} 
                deleteBreed={deleteBreed}
                index={index}
                key={index}/>
            })}
        </div>
    )
}

export default App
