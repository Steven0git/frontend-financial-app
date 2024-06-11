import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-[url('/image/bg-home.jpg')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div data-aos="zoom-out" className="text-neutral-content">
            <h1
              data-aos="fade-down-left"
              className="nunito-extrabold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-center text-5xl font-extrabold text-transparent"
            >
              Take Control of Your Finances with We Analyze Your{" "}
              <span
                data-aos="fade-right"
                className="underline decoration-slate-500 dark:decoration-slate-500"
              >
                Money
              </span>
            </h1>
            <p className="py-6 text-center text-base italic antialiased">
              <span className="nunito-bold font-bold text-white">
                Stop Guessing, Start Knowing.
              </span>{" "}
              <br />
              <p className="roboto-mono font-normal italic sm:text-xl md:text-base">
                We Analyze Your Money, Transforming Every Transaction into
                Financial Freedom...
                <br />
                <strong className="roboto-mono-semibold mt-4 font-semibold italic">
                  Grab your freedoom now!
                </strong>
              </p>
            </p>

            <a
              href="/login"
              data-aos="flip-up"
              className="inline-flex items-center justify-center p-2 text-center text-base font-medium"
            >
              <button className="nunito-bold btn btn-primary text-base font-bold transition-all hover:opacity-80">
                Get started!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
