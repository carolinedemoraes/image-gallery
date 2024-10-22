import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageGallery = ({ addToFavorites, favorites }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=1&limit=12")
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar imagens:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.download_url} alt={image.author} />
          <p>Autor: {image.author}</p>
          <button
            onClick={() => addToFavorites(image)}
            disabled={favorites.some((favorite) => favorite.id === image.id)}
          >
            {favorites.some((favorite) => favorite.id === image.id)
              ? "Favoritado"
              : "Favoritar"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
