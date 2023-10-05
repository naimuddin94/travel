import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import images from "./SlideImg";
import SwiperButtons from "./SwiperButtons";
import useAuthInfo from "../../hooks/useAuthInfo";
const Sliders = () => {
  const { imageIdx, setImageIdx } = useAuthInfo();

  return (
    <div className="col-span-3">
      <Swiper
        slidesPerView={2.8}
        spaceBetween={25}
        modules={[Navigation]}
        navigation
        className="mySwiper"
      >
        {images?.map((place, index) => (
          <SwiperSlide
            key={place.id}
            onClick={() => setImageIdx(index)}
            className={`rounded-2xl overflow-hidden min-h-[400px] bg-cover bg-center border-yellow-500 bg-gradient-to-b from-black/50 bg-blend-overlay ${
              imageIdx === index && " border-2"
            }`}
            style={{ backgroundImage: `url(${place.url})` }}
          >
            <div className="absolute w-full h-full flex justify-center items-end">
              <h2 className="text-2xl font-bold text-white uppercase p-8  bg-gradient-to-t from-black w-full">
                {place.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
        <SwiperButtons length={images.length} />
      </Swiper>
    </div>
  );
};

export default Sliders;
