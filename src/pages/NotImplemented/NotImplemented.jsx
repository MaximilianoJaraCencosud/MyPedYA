import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const NotImplemented = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i0.wp.com/desdeelmurete.com/wp-content/uploads/2015/10/1.-Estructura-de-obra..jpg?fit=1280%2C853&ssl=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">¡Hola!</h1>
            <p className="mb-5 text-white">
              Esta seccion esta todavia en desarrollo. Espero puedas disfrutar
              del resto de funcionalidades
            </p>
            <Link to="/">
              <button className="btn btn-block  text-white bg-black/70 ">
                Vuelve al inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotImplemented;
