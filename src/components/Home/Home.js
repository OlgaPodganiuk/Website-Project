import react from "react";

// import 'Home.css';
import HomeAbout from "./HomeAbout";
import HomeShop from "./HomeShop";

const Home = () => {
  return (
    <div className='home'>
      <HomeAbout />
      <HomeShop />
    </div>
  );
};

export default Home;