import { API_KEY } from "./../constants";

export const getDisplayItem = async (id, type) => {
  const fetchURL = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`;

  let res = await fetch(fetchURL);

  let data = await res.json();
  return data;
};
