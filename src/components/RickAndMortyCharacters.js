import { useEffect, useState } from "react";
import Character from "./Character";
import Paginator from "./Paginator";

const RickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => response.json())
            .then(async data => {
                const charactersWithEpisode = await Promise.all(data.results.map(async character => {
                    const episodeResponse = await fetch(character.episode[0]);
                    const episodeData = await episodeResponse.json();
                    return { 
                        ...character, 
                        episode: episodeData.name 
                    };
                }));
                setCharacters(charactersWithEpisode);
                setInfo(data.info);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching characters:", error);
                setIsLoading(false);
            });
    }, [page]);

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {isLoading ? 'Cargando...' : characters.map(character => (
                    <Character 
                        key={character.id} 
                        id={character.id}
                        name={character.name} 
                        image={character.image}
                        status={character.status}
                        species={character.species}
                        location={character.location}
                        episode={character.episode}
                    />
                ))}
            </div>
            <Paginator page={page} info={info} setPage={setPage} />
        </>
    );
};

export default RickAndMortyCharacters;
