import { API_KEY } from "./../constants";

export const getDisplayItem = async (id, type) => {
  console.log(type);
  const fetchURL = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`;
  console.log(fetchURL);
  let res = await fetch(fetchURL);

  let data = await res.json();
  console.log(data);
  // const movie = `https://api.themoviedb.org/3/movie/359724?api_key=${API_KEY}&language=en-US&query=${search}&page=1`;
  // let res1 = await fetch(movie);
  // let data1 = await res1.json();
  // console.log(data1);
  return data;
};
