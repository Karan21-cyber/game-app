"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./product-card";
import Loading from "./Loading";
import LoadingSkeleton from "./LoadingSkeleton";

function CategoryPage({ params }: { params: {genres: string } }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        url:
          "https://moviesminidatabase.p.rapidapi.com/movie/byGen/" +
          params.genres +
          "/",
        headers: {
          "X-RapidAPI-Key":
            "f13c1c12e1msh9f72345c9744524p1a53d0jsnf62b816c16ae",
          "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      if (response) {
        setProducts(response.data.results);
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
    <section className="category-page py-2 px-2 md:px-4 md:py-6 lg:px-[70px] flex flex-col md:flex-row gap-4  ">
      <div className="product-list-container flex flex-wrap justify-center gap-5">
        {!loading ? (
          <>
            {products.map((item, i) => (
              <ProductCard item={item} key={i} params={params.genres} />
            ))}
          </>
        ) : (
          <LoadingSkeleton />
        )}
      </div>
    </section>
  );
}

export default CategoryPage;
