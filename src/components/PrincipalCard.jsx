import React from "react";
import { Link } from "react-router-dom";

const PrincipalCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg bg-white h-[27rem]">
          <Link to="/">
            <img
              alt="Placeholder"
              className="block h-72 w-full"
              src={data.foodImage}
            />
          </Link>

          <header className="flex items-center justify-between  p-2 md:p-4">
            <h1 className="text-lg">
              <Link className="no-underline hover:underline text-black" to="#">
                {data.foodName}
              </Link>
            </h1>
          </header>
          <p className="text-grey-darker text-sm  pl-2 md:pl-4">
            {data.sendTime}
          </p>
          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <Link
              className="flex items-center no-underline hover:underline text-black"
              to="#"
            >
              <img
                alt="Placeholder"
                className="block rounded-full"
                src={data.restaurantImage}
                height="32"
                width="32"
              />
              <p className="ml-2 text-sm">{data.restaurantName}</p>
            </Link>
          </footer>
        </article>
      </div>
    </>
  );
};

export default PrincipalCard;
