import React from "react";

const PrincipalCard = () => {
  return (
    <div>
      <div className="card bg-white/90 shadow-xl mt-10 mb-10 ml-96 mr-96">
        <figure>
          <img
            src="https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1200x670.png"
            alt="Movie"
            className="h-96 pt-8 "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black ">Mc Donalds!</h2>
          <p className=" text-black">Click en el boton para poder comprar.</p>
          <p className=" text-black/50">10 - 25 min · Envío $49</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-red-500 border-none">
              Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalCard;
