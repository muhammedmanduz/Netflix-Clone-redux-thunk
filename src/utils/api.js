import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { lang: "en" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzZmMDZhODQzMjJlZWRmNjliNDU5N2Q3ZTdjYjgyNiIsIm5iZiI6MTcyNTcxNDU4Ny4xNzYsInN1YiI6IjY2ZGM1MDliNGYwMTU4YjUyYjlkYjllNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.By5_2GfXd1Rh90ZdsX2bbuJQv2YGNT631NwfbH8bRVg",
  },
});

//   url: 'https://api.themoviedb.org/3/genre/movie/list'

export default api;
