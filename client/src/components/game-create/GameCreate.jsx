export default function GameCreate() {
    return(
       <>  
            {/* <!-- Create Page ( Only for logged-in users ) --> */}
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">

                    <h1>Create Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..."/>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..."/>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1"/>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game"/>
                </div>
            </form>
        </section>
       </>
    )
}