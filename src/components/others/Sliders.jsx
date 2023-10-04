import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import images from "./SlideImg";
import SwiperButtons from "./SwiperButtons";

const Sliders = () => {
  return (
    <div className="col-span-3">
      <Swiper
        slidesPerView={2.8}
        spaceBetween={25}
        modules={[Navigation]}
        navigation
        className="mySwiper"
      >
        {images?.map((image, index) => (
          <SwiperSlide
            key={index}
            className="rounded-2xl overflow-hidden min-h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></SwiperSlide>
        ))}
        <SwiperButtons />
      </Swiper>
    </div>
  );
};

export default Sliders;
