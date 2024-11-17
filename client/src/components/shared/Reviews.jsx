import { useState } from 'react';
import MaxWidth from './max-width';

const Reviews = () => {
  const [videos] = useState([
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/e50a268fccebb1e9e1329a7ef01ea72d.mp4',
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/9cafe82416d1da770691953d1e54ccf0.mp4',
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/8dcea3230081bce86225e68d9804afa5.mp4',
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/928ee2a586b023001f2061d33c4fda2c.mp4',
  ]);

  return (
    <MaxWidth className="bg-[#3B8F8C] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-5 md:mb-7">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">ОТЗЫВЫ</h2>
          <p className="text-md md:text-lg max-w-2xl mx-auto">
            Посмотрите отзывы о нас,
            <br />
            чтобы убедиться, что мы профессионалы
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="aspect-video mx-auto relative rounded-lg overflow-hidden bg-black/10 min-h-96 sm:w-56 max-w-56 w-full"
            >
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/placeholder.svg?height=200&width=300"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </MaxWidth>
  );
};

export default Reviews;
