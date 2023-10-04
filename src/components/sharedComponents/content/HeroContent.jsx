import { BsArrowRight } from "react-icons/bs";

const HeroContent = () => {
  return (
    <div className="col-span-2 space-y-2 ml-10">
      <h1 className="text-5xl font-bold text-white uppercase">
        Cox&rsquo;s bazar
      </h1>
      <p className="text-white max-w-sm">
        Cox&rsquo;s Bazar is a city, fishing port, tourism centre and district
        headquarters in southeastern Bangladesh. It is famous mostly for its
        long natural sandy beach, and it ...
      </p>
      <button className="btn btn-warning normal-case">
        Booking <BsArrowRight />
      </button>
    </div>
  );
};

export default HeroContent;
