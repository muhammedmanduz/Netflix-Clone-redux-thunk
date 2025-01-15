import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";

const Detail = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "videos%2Ccredits",
      language: "tr",
    };
    api.get(`movie/${id}`, { params });
  }, []);

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Detail;
