import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSwiper } from "swiper/react";
import useAuthInfo from "../../hooks/useAuthInfo";

const SwiperButtons = ({ length }) => {
  const { imageIdx, setImageIdx } = useAuthInfo();
  const swiper = useSwiper();

  console.log(length);

  const handleSlide = (command) => {
    if (command === "next") {
      if (imageIdx < length - 1) {
        setImageIdx(imageIdx + 1);
        swiper.slideNext();
      }
    } else if (command === "prev") {
      if (imageIdx > 0) {
        setImageIdx(imageIdx - 1);
        swiper.slidePrev();
      }
    }
  };
  return (
    <div className="flex gap-5 mt-3">
      <button
        onClick={() => handleSlide("prev")}
        className="bg-gray-100 rounded-full p-2"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => handleSlide("next")}
        className="bg-gray-100 rounded-full p-2"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default SwiperButtons;
