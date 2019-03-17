import React from "react"
import Pet from "./pet"
import pf from "petfinder-client"

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
})

class App extends React.Component {
  state = { pets: [] }
  componentDidMount() {
    petfinder.pet
      .find({ location: "San Jose, CA", output: "full" })
      .then(data => {
        let pets
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet
          } else {
            pets = [data.petfinder.pets.pet]
          }
        } else {
          pets = []
        }
        this.setState({
          pets,
        })
      })
  }

  render() {
    return (
      <div>
        <h1>CoolPet</h1>
        {this.state.pets.map(pet => {
          let breed
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ")
          } else {
            breed = pet.breeds.breed
          }
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          )
        })}
      </div>
    )
  }
}

export default App
