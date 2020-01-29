import { API_KEY } from "./../constants";

export const getItems = async (search, type = "movie") => {
  const fetchURL = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${search}&page=1`;
  let res = await fetch(fetchURL);

  let data = await res.json();
  return data;
};
