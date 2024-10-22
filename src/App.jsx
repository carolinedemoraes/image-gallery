import React, { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery";
import Favorites from "./components/Favorites";
import "./styles/App.sass";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (image) => {
    const updatedFavorites = [...favorites, image];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="App">
      <h1>Galeria de Imagens</h1>
      <ImageGallery addToFavorites={addToFavorites} favorites={favorites} />
      <Favorites
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
}

export default App;
