import { useState } from 'react';
import MaxWidth from '../components/shared/max-width';
import DocumentationLayout from './DocumentationLayout';

const Learning = () => {
  const [videos] = useState([
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/learn/1.mp4',
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/learn/1.mp4',
    'https://cdn.analiticbet.ru/f1a2f9bbf4516450aea253ef89e28efd/learn/1.mp4',
  ]);

  return (
    <MaxWidth className="py-20 bg-middleBlue">
      <div className="bg-white rounded-lg shadow-lg p-10 space-y-5">
        <h1 className="text-4xl">Обучение работе с нами</h1>
        <p className="mb-3 text-lg">
          На этой странице мы собрали наиболее частые вопросы по работе с
          AnaliticBet и ответ на них.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="aspect-video mx-auto relative rounded-lg overflow-hidden bg-black/10 min-h-52 max-w-96 w-full"
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
        <p className="text-lg">
          Основные термины и обозначения.{' '}
          <span className="text-blue-500">Читать</span>
        </p>

        <DocumentationLayout />
      </div>
    </MaxWidth>
  );
};

export default Learning;
