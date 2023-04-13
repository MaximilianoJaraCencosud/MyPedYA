import React from "react";
import { Link } from "react-router-dom";

const Princial = () => {
  return (
    <div>
      <div
        className=" hero min-h-screen "
        style={{
          backgroundImage: `url(https://tofuu.getjusto.com/orioneat-prod/w8CgTmXBaCYm2dqKk-PORTADA%20PEDIDOS-YA-1600x620-13ABR.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              ¡Pedí lo que quieras!
            </h1>
            <p className="mb-5 text-white">
              Restaurantes, mercados, farmacias, kioscos y mucho más.
            </p>
            <Link to="/list">
              <button className="btn btn-block  text-white bg-black/70 ">
                ¡Ve nuestras opciones!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Princial;
