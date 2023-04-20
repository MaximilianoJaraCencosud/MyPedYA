import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Princial = () => {
  const { user } = useAuth();
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
            {user && (
              <Link to="/list">
                <button className="btn btn-block text-white bg-black/70">
                  ¡Ve nuestras opciones!
                </button>
              </Link>
            )}
            {!user && (
              <label
                htmlFor="my-modal-4"
                className="btn btn-block text-white bg-black/70"
              >
                ¡Ve nuestras opciones!
              </label>
            )}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative  bg-white " htmlFor="">
                <h3 className="text-lg font-bold text-black/70">
                  Para disfrutar de todas nuestras opciones recuerda de ingresar
                  con tu cuenta, en caso de no tener una registrarte es
                  extremadamente sencillo!
                </h3>
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Princial;
