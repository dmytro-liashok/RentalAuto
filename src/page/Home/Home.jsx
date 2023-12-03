import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.homePage}>
      <h1 className={css.homeTitle}>Choose a car at RentalAuto</h1>
    </div>
  );
};

export default Home;