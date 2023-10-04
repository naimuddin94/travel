import Sliders from "../../components/others/Sliders";
import HeroContent from "../../components/sharedComponents/content/HeroContent";

const Home = () => {
  return (
    <div className="grid grid-cols-5 gap-6 items-center mt-10">
      <HeroContent />
      <Sliders />
    </div>
  );
};

export default Home;
