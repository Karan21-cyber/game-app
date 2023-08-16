import React from "react";

function MovieLoading() {
  return (
      <div className="product-details-wrapper flex flex-col lg:flex-row gap-10 ">
        <div className="image-section w-[320px] h-[400px] lg:w-[500px] lg:h-[700px] flex justify-center items-center bg-gray-600"> Loading...</div>

        <div className="product-detail-information w-full flex flex-col gap-5">
          <div className="product-highlight  w-full flex justify-between">
            <h1 className="product-title text-2xl font-boldw-[100px] h-20px bg-gray-600 flex justify-center items-center"></h1>
            <h1 className="product-title text-2xl font-bold w-[50px] h-20px bg-gray-600 flex justify-center items-center"></h1>
          </div>

          <p className="product-description  min-w-[320px] w-full min-h-[150px] h-[20vh] bg-gray-600 flex justify-center items-center">Loading...</p>
          <p className="product-description  min-w-[320px] w-full min-h-[150px] h-[20vh] bg-gray-600 flex justify-center items-center">Loading...</p>
          <h1 className="category  w-[100px] h-20px bg-gray-600 flex justify-center items-center"></h1>
          <div className="product-category flex flex-wrap gap-4">
            {Array(5)
              .fill(0)
              ?.map((category, i) => (
                <h1
                  className="category  w-[50px] h-[20px] bg-gray-600 flex justify-center items-center"
                  key={i}
                ></h1>
              ))}
          </div>

          <div className="youtube-trailer w-[320px] h-[200px] mt-4 bg-gray-600 flex justify-center items-center"> Loadi</div>
        </div>
      </div>
  );
}

export default MovieLoading;
