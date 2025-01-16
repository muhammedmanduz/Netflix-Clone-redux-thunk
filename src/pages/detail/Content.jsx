import React from "react";
import List from "./List";

const Content = ({ movie }) => {
  console.log(movie);
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
      <div className="">
        <List title="Kategoriler" arr={movie.genres} />
        <List title="Konuşulan Diller" arr={movie.spoken_languages} />
        <List title="Yapımcı Şirketler" arr={movie.production_companies} />
        <List title="Yapımcı Ülkeler" arr={movie.production_countries} />
      </div>

      <div className=" flex flex-col gap-3">
        <p className="">{movie.overview}</p>

        <p className="">
          <span className="">Bütçe : </span>
          <span className="text-green-500 font-semibold">${movie.budget}</span>
        </p>

        <p className="">
          <span className="">Hasılat : </span>
          <span className="text-green-500 font-semibold">${movie.revenue}</span>
        </p>
      </div>
    </div>
  );
};

export default Content;
