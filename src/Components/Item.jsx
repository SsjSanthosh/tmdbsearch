import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";
export default function Item({ item }) {
  const posterUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
    : "http://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg";

  return (
    <Link to={`/tmdbsearch/display/${item.id}`}>
      <div className="item-container">
        <div className="poster-container">
          <img src={posterUrl} className="poster-img" alt="poster" />
        </div>
        <div className="item-title-container">
          <p className="item-title">
            {item.original_title ? item.original_title : item.original_name}
          </p>
          <p className="item-vote">
            {item.vote_average} <i className="fas fa-star"></i>
          </p>
        </div>
        <p className="item-desc">
          {item.overview.length > 100
            ? item.overview.substring(0, 100) + "..."
            : item.overview.length === 0
            ? "No overview available"
            : item.overview}
        </p>
      </div>
    </Link>
  );
}
