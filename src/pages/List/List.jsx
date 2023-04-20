import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PrincipalCard from "../../components/PrincipalCard";
import data from "../../data/data.json";

const List = () => {
  return (
    <div className="bg-red-500/30">
      <Header />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {data.map((i) => {
            return <PrincipalCard data={i} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default List;
