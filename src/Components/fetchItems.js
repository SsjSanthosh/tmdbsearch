import { API_KEY } from "./../constants";

export const getItems = async (search, type = "movie") => {
  const fetchURL = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${search}&page=1`;
  let res = await fetch(fetchURL);

  let data = await res.json();
  console.log(fetchURL);
  // const movie = `https://api.themoviedb.org/3/movie/359724?api_key=${API_KEY}&language=en-US&query=${search}&page=1`;
  // let res1 = await fetch(movie);
  // let data1 = await res1.json();
  // console.log(data1);
  return data;
};
