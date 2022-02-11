import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("");
    const [breed, updateBreed] = useState("");
    const breeds = [];
    const [pets, setPets] = useState([]);

    useEffect(() => {
        requestPets();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
      //  to avoid infinite useEffect recall

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        
        const json = await res.json();
        
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" onChange={(e) => setLocation(e.target.value)} value={location.toUpperCase()}
                    placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}
                    >
                        <option />
                        {
                            ANIMALS.map(animal => (
                                <option value={animal} key={animal}>
                                    {animal}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        disabled={!breeds.length}
                        id="breed"
                        value={breed}
                        onChange={(e) => updateBreed(e.target.value)}
                        onBlur={(e) => updateBreed(e.target.value)}
                    >
                        <option />
                        {breeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
                {
                    pets.map((pet) => (
                        <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                    ))
                }
            </form>
        </div>
    );
};

export default SearchParams;