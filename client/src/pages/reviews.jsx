import { useState } from 'react';
import MaxWidth from '../components/shared/max-width';

function Reviews() {
  const [videos] = useState([
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/e50a268fccebb1e9e1329a7ef01ea72d.mp4',
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/9cafe82416d1da770691953d1e54ccf0.mp4',
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/8dcea3230081bce86225e68d9804afa5.mp4',
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/928ee2a586b023001f2061d33c4fda2c.mp4',
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/2e46a609a86ed19079dcc44afd73e0f8.mp4',
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/09ee8d78eb8f7e1a1d506357b722150d.mp4',
  ]);

  return (
    <MaxWidth className="py-10 bg-middleBlue">
      <div className="px-4 py-6 md:px-6 lg:py-16 bg-gray-100 rounded-md shadow-md">
        <div className="max-w-6xl mx-auto space-y-5">
          <h1 className="md:text-5xl text-4xl">Отзывы наших клиентов</h1>
          <p className='md:text-base'>
            Наши клиенты очень довольны сервисом, Вы можете ознакомиться со
            всеми отзывами о нас на этой странице.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="aspect-video mx-auto relative rounded-lg overflow-hidden bg-black/10 min-h-96 w-72 max-sm:w-52"
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
      </div>
    </MaxWidth>
  );
}

export default Reviews;
