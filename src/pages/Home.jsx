import React from 'react';
import cakeImage from '../assets/cake.png'; // Reemplaza con la ruta a tu imagen de pastel

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center">Bienvenido a Happy Cake</h1>
      <p className="text-center">El lugar de los pasteles felices</p>
      <div className="d-flex justify-content-center mt-5">
        <img src={cakeImage} alt="Pastel Feliz" className="img-fluid" />
      </div>
    </div>
  );
};

export default Home;
