import { Routes, Route } from "react-router-dom"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/login"
import Register from "./components/register/Register"
import GameList from "./components/game-list/GameList"
import GameCreate from "./components/game-create/GameCreate"
import GameDetails from "./components/game-details/GameDetails"

function App() {
	return (
		<>
            <div id="box">
                <Header/>

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/games" element={<GameList/>} />
                        <Route path="/games/:gameId/details" element={<GameDetails/>} />
                        <Route path="/games/create" element={<GameCreate/>} />
                    
                    </Routes>
                </main>
            </div>
			
		</>
	)
}

export default App