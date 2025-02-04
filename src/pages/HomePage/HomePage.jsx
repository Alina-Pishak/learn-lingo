import Header from "../../components/Header/Header";
import Hero from "../../components/Home/Hero";
import Statistics from "../../components/Statistics/Statistics";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
      </main>
    </>
  );
};

export default HomePage;
