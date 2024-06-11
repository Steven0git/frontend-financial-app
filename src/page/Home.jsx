import React from "react";
import MainLayout from "layout/MainLayout.jsx";
import Hero from "landing/Hero.jsx";
import FeatureCard from "ui/FeaturedCard.jsx";
import Slider from "ui/Slider.jsx";
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <hr className="mt-1 bg-slate-500 text-slate-500 opacity-30" />
      <section id="feature" className="section mt-2 block w-full px-2 py-6">
        <div className="mt-8 w-full">
          <h3 data-aos="fade-up" className="nunito text-3xl font-bold">
            Our feature
          </h3>

          <p
            data-aos="fade-down"
            className="roboto-mono py-6 text-base font-medium"
          >
            Gain control over your finances with Personal Accounting App. Here
            our feature:
          </p>
          <div className="items-center justify-center space-y-4 overflow-x-scroll px-6 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse">
            <Slider>
              <FeatureCard
                title="Effortless Financial Management"
                description="Experience a streamlined approach to managing your finances. Our intuitive interface simplifies data entry, allowing you to effortlessly track income and expenses. Powerful technology takes care of the calculations, empowering informed financial decisions."
                image="easy-to-manage.jpg"
                url="/"
              />
              <FeatureCard
                title="Uncover Hidden Spending Insights"
                description="Gain a deeper understanding of your financial landscape. Our comprehensive money flow tracker meticulously analyzes your spending habits, revealing previously unseen patterns. This empowers you to make data-driven choices that optimize your financial well-being."
                image="analyze.jpg"
                url="/"
              />
              <FeatureCard
                title="Streamlined Budgeting and Expenditure Control"
                description="Achieve your financial goals with ease. Establish customized spending limits and leverage our built-in expenditure control features to stay on track. Our user-friendly platform empowers you to manage your finances with greater precision."
                image="expenditure-plan.jpg"
                url="/"
              />
              <FeatureCard
                title="Personalized Financial Reporting"
                description="Access insightful reports tailored to your unique financial profile. Gain a clear and concise overview of your financial health, allowing you to identify areas for improvement and make strategic adjustments to optimize your financial future."
                image="make-data-report.jpg"
                url="/"
              />
              <FeatureCard
                title="Cutting-Edge Security and Technology"
                description="We prioritize the security and integrity of your financial data. Our platform utilizes state-of-the-art technology to ensure the utmost protection for your sensitive information. Enjoy peace of mind knowing your finances are safeguarded by industry-leading security protocols."
                image="new-teach.jpg"
                url="/"
              />
            </Slider>
          </div>
        </div>
      </section>
      <hr className="mb-3 opacity-30" />
    </MainLayout>
  );
};
export default Home;
