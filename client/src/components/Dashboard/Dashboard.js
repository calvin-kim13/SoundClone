// import { Carousel } from "antd";
import { useState } from "react";
import { Row, Col } from "antd";
import DashboardPlayer from "./DashboardPlayer";
import "./styles/Dashboard.css";

const DashCarousel = () => {
  const [searchBar, setSearchBar] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setSearchBar(value);
    console.log(setSearchBar);
  };

  const username = localStorage.getItem("username");

  return (
    <div className="main-container">
      <div className="main-header">
        <h2>Welcome, {username.charAt(0).toUpperCase() + username.slice(1)}</h2>
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
          // onClick={(event) => {
          //   event.preventDefault();
          //   setSearchBar = document.getElementById("searchBar").value;
          //   // setSearchTerm(event.target.value);
          //   console.log(setSearchBar)
          //   document.getElementById("searchBar").value = "";
          // }}
          type="submit"
          id="searchBtn"
        >
          Search
        </button>
      </div>
      <div className="musicPlayer">
        <div className="main-items">
          {" "}
          <DashboardPlayer />{" "}
        </div>
        <div className="main-items">
          {" "}
          <DashboardPlayer />{" "}
        </div>
        <div className="main-items">
          {" "}
          <DashboardPlayer />{" "}
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

      <div className="genreContainer">
        <button className="genre1">Rock</button>
        <button className="genre1">R&B</button>
        <button className="genre1">Hiphop</button>
        <button className="genre1">EDM</button>
        <button className="genre1">Pop</button>
        <button className="genre1">Classical</button>
      </div>
    </div>
  );
};

export default DashCarousel;
