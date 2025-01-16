import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../utils/api";
import Error from "../../components/error";
import Loader from "../../components/loader";
import Banner from "./Banner";
import Content from "./Content";
import ActorList from "./ActorList";
import VideoList from "./VideoList";
import Button from "./Button";
import { RiArrowLeftSLine } from "react-icons/ri";

const Detail = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "videos,credits",
      language: "tr",
    };
    api
      .get(`movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err));
  }, [id]);

  console.log(movie);

  if (error) return <Error info={message} />;
  if (!movie) return <Loader />;

  return (
    <div>
      <div className="mb-5 flex justify-between">
        <Link
          to={".."}
          className="bg-gray-600 py-2 px-4 rounded hover:bg-gray-500 transition flex gap-2 items-center"
        >
          <RiArrowLeftSLine className="text-xl" />
          Geri
        </Link>

        {/* izleme listesi butonu */}
        <Button movie={movie} />
      </div>

      {/* üst resim alanı */}
      <Banner movie={movie} />

      {/* orta içerik alanı */}
      <Content movie={movie} />

      {/* oyuncu listesi */}
      <ActorList actors={movie.credits.cast} />

      {/* fragman listesi */}
      <VideoList videos={movie.videos.results} />
    </div>
  );
};

export default Detail;
