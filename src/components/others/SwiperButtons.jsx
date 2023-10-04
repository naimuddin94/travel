import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSwiper } from "swiper/react";

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex gap-5 mt-3">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-gray-100 rounded-full p-2"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-gray-100 rounded-full p-2"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default SwiperButtons;
