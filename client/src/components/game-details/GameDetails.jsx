import { useState } from "react"
import { useParams } from "react-router-dom";
import commentsApi from "../../api/comments-api";
import { useGetOneGames } from "../../hooks/useGames";


export default function GameDetails() {
    const {gameId} = useParams()
    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('');
    const [game, setGame] = useGetOneGames(gameId);



    const commentSubmitHandler = async (e) => {
        e.preventDefault()

        //TODO: this shoud be refactured
        const newComment = await commentsApi.create(gameId, username, comment)
        setGame(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment._id]: newComment,
            }
        }));
    }
   
    return(
       <>
            {/* <!--Details Page--> */}
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imgUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        {game.comments && Object.values(game.comments).map(comment => (
                            <li key={comment._id} className="comment">
                                <p>{comment.username}: {comment.text}</p>
                            </li>
                        ))}
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    <p className="no-comment">No comments.</p>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {/* <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={commentSubmitHandler}>
                    <input 
                        type="text"
                        placeholder="Pesho"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <textarea 
                        name="comment" 
                        placeholder="Comment......"
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                        
                    ></textarea>
                    <input className="btn submit" type="submit" value="Add Comment"/>
                </form>
            </article>

        </section>
       </>
    )
}