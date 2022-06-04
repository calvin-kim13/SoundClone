import {
    LandingPage,
    Register,
    Login,
    AddSong,
    SongList,
    Playlists,
} from "./pages"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import SongDetails from "./pages/SongDetails"
import { AuthContext } from "./context/authContext"
import { useContext, useEffect, useState } from "react"
import Footer from "./components/Footer"
import DashResults from "./components/Dashboard/DashResults"

function App() {
    const [genreClickCount, setGenreClickCount] = useState(0)
    const [audioR, setAudioR] = useState(null)
    const [oneSongClick, setOneSongClick] = useState(false)
    const [audioList, setAudioList] = useState([])
    const [currentSong, setCurrentSong] = useState(null)
    const [playing, getPlaying] = useState(false)
    const location = useLocation()
    const [dashSearchResults, setDashSearchResults] = useState()

    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (location.pathname.split("/") !== "")
            if (audioList[0] !== undefined)
                for (let each in audioList) audioList[each].pause()
    }, [location.pathname])

    return (
        <div>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <LandingPage
                            setAudioList={setAudioList}
                            genreClickCount={genreClickCount}
                            setGenreClickCount={setGenreClickCount}
                            setAudioR={setAudioR}
                            setCurrentSong={setCurrentSong}
                            setDashSearchResults={setDashSearchResults}
                        />
                    }
                />
                <Route
                    path="/DashResults"
                    element={
                        <DashResults
                            dashSearchResults={dashSearchResults}
                            setOneSongClick={setOneSongClick}
                            setCurrentSong={setCurrentSong}
                        />
                    }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/upload" element={<AddSong />} /> */}
                <Route
                    path="/songs"
                    element={user ? <SongList /> : <Navigate to="/" />}
                />
                <Route
                    path="/song/:songId"
                    element={
                        <SongDetails
                            getPlaying={getPlaying}
                            setAudioR={setAudioR}
                            setCurrentSong={setCurrentSong}
                        />
                    }
                />
                <Route
                    path="/playlists"
                    element={user ? <Playlists /> : <Navigate to="/" />}
                />
            </Routes>

            {user && (
                <Footer
                    playing={playing}
                    genreClickCount={genreClickCount}
                    audioR={audioR}
                    currentSong={currentSong}
                    oneSongClick={oneSongClick}
                    setOneSongClick={setOneSongClick}
                />
            )}
        </div>
    )
}

export default App
