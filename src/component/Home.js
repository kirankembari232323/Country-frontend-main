import React from "react";
import SimpleMap from "./SimpleMap";

const Home = () => {
  return (
    <main>
      <header style = {{"margin": "20px"}}>
        Hi!<span role = "img" aria-label = "hello">👋</span>
        In this application, you can get information about all of the different countries in the world.
        Also, you can add an  country
      </header>
      <SimpleMap />
    </main>
  );
};
export default Home;
