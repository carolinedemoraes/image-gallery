const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="favorites">
      <h2>Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Nenhuma imagem favoritada.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((image) => (
            <div key={image.id} className="favorite-item">
              <img src={image.download_url} alt={image.author} />
              <p>Autor: {image.author}</p>
              <button onClick={() => removeFromFavorites(image.id)}>
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
