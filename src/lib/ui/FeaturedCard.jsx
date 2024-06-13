import React from "react";

export default function FeatureCard({ title, description, image, url }) {
  let img =import.meta.env.VITE_IS_PRODUCTION == "true" ? `${import.meta.env.VITE_PRODUCTION_BASE_URL}/image/${image}`:`/image/${image}`;;

  return (
    <>
      <section id="feature">
        <div
          className="title card skeleton flex w-full items-center justify-center px-4 shadow-xl"
          data-swiper-parallax="-1800"
        >
          <img
            className="h-auto w-1/2 rounded-t-lg border-2 border-gray-300 transition-all hover:scale-105 hover:opacity-90 hover:shadow hover:shadow-slate-100"
            src={img}
            alt={image}
          />

          <div className="card-title p-5">
            <a href={url}>
              <h5 className="nunito-semibold mb-2 text-xl font-semibold tracking-tight sm:text-xl md:text-base">
                {title}
              </h5>
            </a>
          </div>
          <div className="px-2" data-swiper-parallax="-400">
            <p className="roboto-mono card-title mb-3 px-4 text-center text-base font-normal">
              {description}
            </p>

            <a
              href={url}
              className="card-action roboto-mono flex justify-center py-2 text-center text-sm font-medium italic"
            >
              <button
                className="btn btn-primary hover:opacity-80"
                type="button"
              >
                Read more...
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
