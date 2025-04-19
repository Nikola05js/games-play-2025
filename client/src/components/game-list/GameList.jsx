import { useEffect, useState } from 'react'

import * as gamesAPI from '../../api/games-api'

import GameListItem from './game-list-item/GameListItem';


export default function GameList() {
    const [games, setGames] = useState([]);
    
    useEffect(() => {
        // (async () => {
        //     const result = await gamesApi.getAll()
        
        //     setGames(result)
        // })()
        gamesAPI.getAll()
            .then(result => setGames(result))
        },[])

    return(
       <>
            {/* <!-- Catalogue --> */}
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            
            {/* {games.map(game => <GameListItem key={game._id} {...game}/>)} */}
            
            {games.length > 0
                ?  games.map(game => <GameListItem key={game._id} {...game}/>)
                :    <h3 className="no-articles">No articles yet</h3>
            }  
        </section>
       </>
    )
}