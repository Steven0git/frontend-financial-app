import React from "react";
import Card from "ui/Card.jsx";
const About = () => {
  const introCard = {
    title: "Effortlessly Manage Your Money", // Clear benefit
    content:
      "Our Personal Accounting App makes it easy to track income, expenses, and stay on top of your finances.", // Explains functionalit
    image: "/image/headline.jpg",
  };
  const whatWeDoCard = {
    title: "Take Control of Your Finances", // Action-oriented title
    content:
      "Track income, expenses, and see exactly where your money goes. Get organized and reach your financial goals faster.", // Explains key features
  };
  const learnCard = {
    title: "Discover How We Can Help", // Creates intrigue
    content:
      "Learn more about how our app simplifies money management and empowers you to make informed financial decisions.", // Explains the app's value
  };

  return (
    <>
      <section
        id="about"
        className="hover:opaciy-90 w-full transition-all"
        data-theme="helloween"
      >
        <div className="mx-2 mt-2">
          <div className="block px-2">
            <div
              data-aos="flip-down"
              className="mb-2 mt-6 flex flex-row flex-wrap justify-center"
            >
              <Card {...introCard} />
            </div>
            <div data-aos="flip-down" className="grid grid-cols-2 gap-1 px-2">
              <Card {...whatWeDoCard} />
              <Card {...learnCard} />
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
