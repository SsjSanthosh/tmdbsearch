import React, { useEffect, useState } from "react";
import "./DisplayItem.scss";
import { getDisplayItem } from "./getDisplayItem";
import imdbLogo from "./imdbLogo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function DisplayItem(props) {
  console.log(props.type);
  let id = props.match.params.id;
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getDisplayItem(id, props.type).then(data => {
      setItem(data);
      setLoading(false);
    });
  }, []);

  const bg = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url("https://image.tmdb.org/t/p/original${item.backdrop_path}")`,
    backgroundSize: "cover"
  };
  console.log(item);

  return (
    <div>
      {!loading && (
        <div className="display-item-page" style={item && bg}>
          <div className="display-item-container">
            <div className="display-title-container">
              <p className="display-title">
                {item.title ? item.title : item.name}
              </p>
            </div>
            <div className="display-flex">
              <div className="display-poster-container">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt="poster"
                  className="display-poster"
                />
              </div>
              <div className="display-util">
                <p className="display-release">
                  {item.release_date ? (
                    <span>Released on - {item.release_date}</span>
                  ) : (
                    <span> First air date - {item.first_air_date}</span>
                  )}
                </p>
                <p className="display-rating">
                  {" "}
                  Average Rating - <i class="fas fa-star"></i>{" "}
                  {item.vote_average}
                </p>
                <p className="display-runtime">
                  Runtime -{" "}
                  {item.runtime ? (
                    <span>{item.runtime} minutes</span>
                  ) : (
                    <span>{item.episode_run_time[0]}</span>
                  )}{" "}
                  minutes
                </p>
                {/* <p className="display-imdb">
                  IMDb Link -{" "}
                  <a
                    href={`https://imdb.com/title/${item.imdb_id}`}
                    target="_blank"
                    alt="imdb"
                  >
                    <img src={imdbLogo} className="imdb" alt="png"></img>
                  </a>
                </p> */}
                <p className="display-genres">
                  Genres - [
                  {item.genres.map(i => (
                    <span>{i.name + " "}</span>
                  ))}
                  ]
                </p>

                <p className="display-overview">
                  Plot - <br />
                  {item.overview}
                </p>
                <p className="display-budget">
                  {item.budget ? (
                    <span>
                      Budget - ${" "}
                      {parseInt(item.budget)
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </span>
                  ) : (
                    <span>Number of seasons - {item.number_of_seasons}</span>
                  )}
                </p>
                <p className="display-boxoffice">
                  {item.revenue ? (
                    <span>
                      {" "}
                      Box-Office - $
                      {parseInt(item.revenue)
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </span>
                  ) : (
                    <span>Number of episodes - {item.number_of_episodes}</span>
                  )}
                </p>
                <p className="display-status">
                  {item.status && <span>Status - {item.status} </span>}
                </p>
                <Link to="/">
                  {" "}
                  <button className="button">Go Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    type: state.search.type
  };
};
export default connect(mapStateToProps)(DisplayItem);
