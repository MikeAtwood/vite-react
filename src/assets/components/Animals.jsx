const Animals = () => {
    const animals = ["Lion", "Cow", "Snake", "Lizard", "Bull"]

    if (animals.length === 0) {
        return <div>No animals found.</div>
    }

    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)
                    
    return (
        <div>
            <h1>Animals: </h1>
            <ul>
                {animalsList}
            </ul>
        </div>
    )
}

export default Animals