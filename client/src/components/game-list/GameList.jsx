

import { useGetAllGames } from '../../hooks/useGames';
import GameListItem from './game-list-item/GameListItem';


export default function GameList() {
    const [games] = useGetAllGames();

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