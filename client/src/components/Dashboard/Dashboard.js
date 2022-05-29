// import { Carousel } from "antd";
import { Row, Col } from "antd"
import { useLazyQuery } from "@apollo/client"
import { GET_SONGS, GET_GENRES } from "../../utils/queries/songQueries"
import React, { useState } from "react"
import DashboardPlayer from "./DashboardPlayer"
import "./styles/Dashboard.css"

const DashCarousel = () => {
    const [searchBar, setSearchBar] = useState("")
    const [song, { loading, error, data: myData }] = useLazyQuery(GET_SONGS)
    const [songByGenre, { loading: loadingGenre, error: errorGenre, data: genreData }] = useLazyQuery(GET_GENRES, {
      onCompleted: (genreData) => {
        console.log(genreData)
      }
    })

    if (loading) return <p>Loading ...</p>

    if (error) return `Error! ${error}`

    const onChange = (event) => {
        const { value } = event.target
        setSearchBar(value)
        console.log(searchBar)
    }

    const handleGenreClick = (genre) => {
      songByGenre({variables: { genre: genre } })
  }
    

    let genreList = ["Rock", "RnB", "HipHop", "EDM", "Pop", "Country", "Classical", "International"]

    const username = localStorage.getItem("username")
    // console.log(">>>>>>>>>", myData)
    return (
        <div className="main-container">
            <div className="main-header">
                <h2>
                    Welcome,{" "}
                    {username.charAt(0).toUpperCase() + username.slice(1)}
                </h2>
            </div>
            <div className="searchContainer">
                <input
                    typeof="text"
                    placeholder="Search Songs"
                    name="searchBar"
                    id="searchBar"
                    onChange={onChange}
                ></input>
                <button
                    onClick={() => song({ variables: { title: searchBar } })}
                    id="searchBtn"
                >
                    Search
                </button>
            </div>
            <div className="musicPlayer">
                <div className="main-items">
                    {" "}
                    <DashboardPlayer sdata={myData} />{" "}
                </div>
                <div className="main-items">
                    {" "}
                    <DashboardPlayer sdata={myData} />{" "}
                </div>
                <div className="main-items">
                    {" "}
                    <DashboardPlayer sdata={myData} />{" "}
                </div>

                {/* <Row>
      <Col span={8} className="main-items"> <DashboardPlayer /> </Col>
      <Col span={8} className="main-items"> <DashboardPlayer /> </Col>
      <Col span={8} className="main-items"> <DashboardPlayer /> </Col>
    </Row> */}

                {/* <div className="carousel-items">
          <DashMusicCard />
        </div>
        <div className="carousel-items">
          <DashMusicCard />
        </div>
        <div className="carousel-items">
          <DashMusicCard />
        </div> */}

            </div>
            <div>
      </div>
            {/* <div className="genreContainer">
                <button className="genre1" id="rockSong">Rock</button>
                <button className="genre1" id="rbSong">R&B</button>
                <button className="genre1" id="hhSong">Hiphop</button>
                <button className="genre1" id="edmSong">EDM</button>
                <button className="genre1" id="popSong">Pop</button>
                <button className="genre1" id="countrySong">Country</button>
                <button className="genre1" id="classicalSong">Classical</button>
                <button className="genre1" id="interSong">International</button>
            </div> */}

            <div className="genreContainer">

            {genreList.map((genre) => (
                    <button className="genre1" onClick={(event)=> {
                      let { innerHTML } = event.target
                      handleGenreClick(innerHTML)
                  }}>{genre}</button>
                 
                ))}


                {/* <button className="genre1" id="rockSong">Rock</button>
                <button className="genre1" id="rbSong">R&B</button>
                <button className="genre1" id="hhSong">Hiphop</button>
                <button className="genre1" id="edmSong">EDM</button>
                <button className="genre1" id="popSong">Pop</button>
                <button className="genre1" id="countrySong">Country</button>
                <button className="genre1" id="classicalSong">Classical</button>
                <button className="genre1" id="interSong">International</button> */}
            </div>

        </div>
    )
}

export default DashCarousel
