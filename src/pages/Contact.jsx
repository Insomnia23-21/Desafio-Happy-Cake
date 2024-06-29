import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center">Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo:</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripción:</label>
          <textarea className="form-control" id="description" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
