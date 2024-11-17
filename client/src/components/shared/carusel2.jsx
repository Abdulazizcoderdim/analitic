import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { stats } from '../../constants';

export default function Slider() {
  const [swiper, setSwiper] = useState();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 relative">
      <button
        onClick={() => swiper?.slidePrev()}
        className="absolute bg-brown max-sm:hidden transition-all duration-75 top-1/2 -translate-y-1/2 -left-7 z-[1000] rounded-full p-2"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className="absolute bg-brown max-sm:hidden transition-all duration-75 top-1/2 -translate-y-1/2 -right-7 z-[1000] p-2 rounded-full"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>
      <Swiper
        onSwiper={swiper => setSwiper(swiper)}
        modules={[Navigation]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="relative"
      >
        {stats.map((stat, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-[#348A8E] rounded-lg p-6 text-white">
              <div className="absolute top-2 right-2 bg-orange-500 text-white text-sm font-medium px-2 py-1 rounded">
                {stat.percentage}
              </div>
              <h3 className="text-xl font-semibold mb-4">{stat.month}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Доход</span>
                  <span className="font-medium">{stat.income}</span>
                </div>
                <div className="flex justify-between">
                  <span>Прогнозов</span>
                  <span className="font-medium">{stat.forecasts}</span>
                </div>
                <div className="flex justify-between">
                  <span>Проходимость</span>
                  <span className="font-medium">{stat.passRate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Средний коeff:</span>
                  <span className="font-medium">{stat.avgCoef}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
