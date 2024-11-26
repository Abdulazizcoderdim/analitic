import { Home } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateStream = () => {
  const [name, setName] = useState('');
  const [trialDays, setTrialDays] = useState('0');

  const allowedMethods = [
    'Брокерский трафик',
    'Дорвей-трафик',
    'Контекстная реклама',
    'Реклама в социальных сетях',
    'Тизерные сети',
    'Adult-трафик',
    'Cashback',
    'Email-рассылка (по своей базе, по согласованию)',
    'PopUp / ClickUnder',
    'YouTube-канал',
  ];

  const forbiddenMethods = [
    'Email-spam',
    'Контекстная реклама на бренд',
    'Мотивированный трафик',
    'Toolbar',
    'Кукистаффинг',
  ];

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, trialDays });
  };

  return (
    <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-5">
          Создать поток
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8 ml-4">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 cursor-pointer">Создать поток</span>
        </nav>

        {/* Action Buttons */}
        <button className="px-5 pb-2 pt-1.5 mb-8 shadow-md bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors flex items-center">
          Список потоков
        </button>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-medium text-gray-800 mb-6 border-b pb-6">
            Создать поток
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4 flex items-center max-w-4xl gap-5 text-[#888da8]">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  <span>Создать поток</span> <br /> Название
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Только символы английского алфавита, цифры и знак _. 5-15
                  символов. Используется в качестве части реф-ссылки, а также
                  создается одноименный промокод.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="trial" className="block text-gray-600 mb-2">
                  Триал, дней
                </label>
                <input
                  id="trial"
                  type="number"
                  min="0"
                  max="10"
                  value={trialDays}
                  onChange={e => setTrialDays(e.target.value)}
                  className="w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Количество дополнительных бесплатных дней доступа перед первым
                  продлением. 0-10 дней.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Сохранить
            </button>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h2 className="text-lg text-gray-600 mb-4">
                  Правила привлечения <br /> Разрешенные способы привлечение
                </h2>
                <ul className="space-y-2">
                  {allowedMethods.map(method => (
                    <li key={method} className="text-gray-600">
                      {method}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg text-gray-600 mb-4">
                  Запрещенные способы привлечения
                </h2>
                <ul className="space-y-2">
                  {forbiddenMethods.map(method => (
                    <li key={method} className="text-gray-600">
                      {method}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-red-500">
                  В случае обнаружения использования запрещенных способов
                  привлечения, аккаунт блокируется вместе с активным балансом.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStream;
