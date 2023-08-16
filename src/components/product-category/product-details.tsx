"use client";

import Image from "next/image";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";
import MovieLoading from "./movie-loading";

interface IMovieDetail {
  movie: {
    imdb_id: string;
    title: string;
    year: number;
    popularity: number;
    description: string;
    content_rating: string;
    movie_length: number;
    rating: number;
    created_at: string;
    trailer: string;
    image_url: string;
    release: string;
    plot: string;
    banner: string;
    type: string;
    gen: {
      id: number;
      genre: string;
    }[];
    keyword: {
      id: number;
      keyword: string;
    }[];
  };
  pid?: string;
}

function ProductDetails({ pid }: { pid: string }) {
  const [movie, setMovie] = useState<IMovieDetail>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://moviesminidatabase.p.rapidapi.com/movie/id/" + pid + "/",
        headers: {
          "X-RapidAPI-Key":
            "f13c1c12e1msh9f72345c9744524p1a53d0jsnf62b816c16ae",
          "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      if (response) {
        const res = response.data.results as IMovieDetail;
        setMovie({ movie: res });
        setLoading(false);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="product-details-container py-2 px-2 md:px-4 md:py-6 lg:px-[70px] flex flex-col gap-3 lg:gap-10  ">
      {loading ? (
        <MovieLoading />
      ) : (
        <div className="product-details-wrapper flex flex-col lg:flex-row gap-10 ">
          <Image
            src={movie?.movie?.banner as string} // Provide a default image URL or use a placeholder image
            width={500}
            height={500}
            alt={movie?.movie?.title as string}
            className="product-image"
          />
          <div className="product-detail-information w-full flex flex-col gap-5">
            <div className="product-highlight  w-full flex justify-between">
              <h1 className="product-title text-2xl font-bold text-light-gray">
                {movie?.movie?.title}
              </h1>
              <h1 className="product-title text-2xl font-bold text-light-gray flex gap-2">
                {movie?.movie?.rating}
                <BsFillStarFill className="star w-6 h-6 text-dark-yellow" />
              </h1>
            </div>
            <div className="product-detail-times flex ">
              <h1 className="produt-information  text-gray-500 pr-4  border-r-2 border-gray-600">
                {movie?.movie.year}
              </h1>
              <h1 className="produt-information  text-gray-500 px-4  border-r-2 border-gray-600">
                {movie?.movie.movie_length} min
              </h1>
              <h1 className="produt-information  text-gray-500 px-4">
                {movie?.movie.popularity} +
              </h1>
            </div>
            <p className="product-description text-gray-400">
              {movie?.movie.description}
            </p>
            <p className="product-description text-gray-400">
              {movie?.movie.plot}
            </p>
            <h1 className="product-release-date text-gray-300">
              Release Date : {movie?.movie.release}
            </h1>
            <div className="product-category flex flex-wrap gap-4">
              Movie Categories{" "}
              {movie?.movie.gen?.map((category, i) => (
                <h1 className="category text-gray-400" key={i}>
                  {category?.genre}
                </h1>
              ))}
            </div>
            <div className="Video-trailer">
              <h1 className="trailer text-gray-400 text-lg font-bold">
                Trailer in Youtube
              </h1>
              <iframe
                className="youtube-trailer w-full h-[250px] md:w-[560px] md:h-[315px] mt-4"
                src={`${movie?.movie?.trailer}?autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductDetails;
