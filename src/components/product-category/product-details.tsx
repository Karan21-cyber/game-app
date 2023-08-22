"use client";

import Image from "next/image";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";
import MovieLoading from "./movie-loading";

export interface Results {
  imdb_id: string;
  title: string;
  year: number;
  popularity: number;
  description: string;
  content_rating: string;
  movie_length: number;
  rating: number;
  created_at: Date;
  trailer: string;
  image_url: string;
  release: string;
  plot: string;
  banner: string;
  type: string;
  more_like_this: MoreLikeThis;
  gen: Gen[];
  keywords: Keyword[];
}

interface Gen {
  id: number;
  genre: string;
}

interface Keyword {
  id: number;
  keyword: string;
}

interface MoreLikeThis {}

interface IMovieDetail {
  pid?: string;
}

function ProductDetails({ pid }: IMovieDetail) {
  const [movies, setMovie] = useState<Results>();
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
        const res = response.data.result;
        console.log(res);
        setMovie(res);
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
            src={movies?.banner as string} // Provide a default image URL or use a placeholder image
            width={500}
            height={500}
            alt={movies?.title as string}
            className="product-image"
          />
          <div className="product-detail-information w-full flex flex-col gap-5">
            <div className="product-highlight  w-full flex justify-between">
              <h1 className="product-title text-2xl font-bold text-light-gray">
                {movies?.title}
              </h1>
              <h1 className="product-title text-2xl font-bold text-light-gray flex gap-2">
                {movies?.rating}
                <BsFillStarFill className="star w-6 h-6 text-dark-yellow" />
              </h1>
            </div>
            <div className="product-detail-times flex ">
              <h1 className="produt-information  text-gray-500 pr-4  border-r-2 border-gray-600">
                {movies?.year}
              </h1>
              <h1 className="produt-information  text-gray-500 px-4  border-r-2 border-gray-600">
                {movies?.movie_length} min
              </h1>
              <h1 className="produt-information  text-gray-500 px-4">
                {movies?.popularity} +
              </h1>
            </div>
            <p className="product-description text-gray-400">
              {movies?.description}
            </p>
            <p className="product-description text-gray-400">{movies?.plot}</p>
            <h1 className="product-release-date text-gray-300">
              Release Date : {movies?.release}
            </h1>
            <div className="product-category flex flex-wrap gap-4">
              Movie Categories{" "}
              {movies?.gen?.map((category, i) => (
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
                src={`${movies?.trailer}?autoplay=1&mute=1`}
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
