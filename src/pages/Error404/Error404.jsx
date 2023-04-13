import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">Ups!!</h1>
            <p className=" text-white mb-5">Disculpa, Página no encontrada</p>
            <p className=" text-white mb-5">
              La página que deseas acceder no existe
            </p>
            <Link to="/">
              <button className="btn btn-block  text-white bg-black/70 ">
                Vuelve al inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
