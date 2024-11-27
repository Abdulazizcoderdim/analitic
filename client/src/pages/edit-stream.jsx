import { Home } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { datas } from '../constants';

const EditStream = () => {
  const [active, setActive] = useState('Главная страницы');
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [trial, setTrial] = useState(data?.trialDays);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        setData(true);
        const response = await fetch(
          `${import.meta.env.VITE_PUBLIC_API}/api/streams/get-one/${id}`
        );
        if (!response.ok) throw new Error('Malumotlarni yuklashda xatolik');
        const data = await response.json();

        setData(data);
        setTrial(data?.trialDays || 0); // trial qiymatini yangilash
      } catch (err) {
        console.error(err);
      }
    };

    fetchStreams();
  }, [id]);

  const editStream = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_API}/api/streams/edit/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ trialDays: trial }),
        }
      );
      if (!response.ok) throw new Error('Malumotlarni yuklashda xatolik');
      toast.success('Поток успешно обновлен');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-5">
          Редактировать поток
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8 ml-4">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 cursor-pointer">
            Редактировать поток
          </span>
        </nav>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Link
            to="/dashboard/streams"
            className="px-5 pb-2 pt-1.5 shadow-md bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors flex items-center"
          >
            Список потоков
          </Link>
        </div>

        {/* Content Area */}
        <div className=" flex justify-between max-sm:flex-col gap-5">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-white rounded-lg shadow-sm p-4">
              <h1 className="pb-3 text-lg font-medium border-b">
                Основные данные
              </h1>
              <div className="py-3 flex gap-4 text-[#888da8]">
                <div className="space-y-2 w-full">
                  <p className="sm:text-sm text-xs">
                    <span className="font-medium">Редактировать поток</span>{' '}
                    <br /> Название
                  </p>
                  <input
                    value={data?.name}
                    type="text"
                    className="border w-full rounded-md py-1 px-3 bg-gray-100"
                    disabled
                  />
                  <p className="text-xs">
                    Только символы английского алфавита, цифры и знак _, 5-15
                    символов. Используется в качестве части реф-ссылки, а также
                    создается одноименный промокод.
                  </p>
                </div>
                <div className="space-y-2 w-1/3">
                  <p className="sm:text-sm text-xs">
                    Триал, дней (дополнительно к 5-ти)
                  </p>
                  <input
                    value={trial}
                    onChange={e => setTrial(e.target.value)}
                    type="number"
                    min={1}
                    max={10}
                    className="border w-full rounded-md py-1 px-3 bg-white"
                    placeholder="0"
                  />
                  <p className="text-xs">
                    Количество дополнительных бесплатных дней доступа перед
                    первым продлением. 0-10 дней.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg shadow-sm p-4">
              <h1 className="text-lg font-medium text-gray-900 pb-4 mb-5 border-b">
                Выберете лендинг
              </h1>
              <div className="flex items-center gap-3 max-w-md w-full">
                <div className="">
                  <p className="text-[#888da8]">Главная страницы</p>
                  <img src="/land-1.jpg" alt="" />
                  <div className="mt-2 text-center">
                    <button
                      onClick={() => setActive('Главная страницы')}
                      className={`px-4 text-sm text-white rounded-sm shadow-md ${
                        active === 'Главная страницы'
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-blue-500 hover:bg-blue-600'
                      } transition pb-1.5 pt-1`}
                    >
                      {active === 'Главная страницы' ? 'Выбрано' : 'Выбрать'}
                    </button>
                  </div>
                </div>
                <div className="">
                  <p className="text-[#888da8]">Страница регистрации</p>
                  <img src="/land-2.jpg" alt="" />
                  <div className="mt-2 text-center">
                    <button
                      onClick={() => setActive('Страница регистрации')}
                      className={`px-4 text-sm text-white rounded-sm shadow-md ${
                        active === 'Страница регистрации'
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-blue-500 hover:bg-blue-600'
                      } transition pb-1.5 pt-1`}
                    >
                      {active === 'Страница регистрации'
                        ? 'Выбрано'
                        : 'Выбрать'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg shadow-sm p-4">
              <h1 className="text-lg font-medium text-gray-900 pb-4 mb-5 border-b">
                Ссылки для привлечения
              </h1>

              <div className="">
                <p className="text-sm text-gray-400">Ссылка для привлечения</p>
                <div className="px-3 py-1 bg-gray-100 text-gray-400 rounded-md border border-gray-300">
                  https://analiticbet.ru/streams/?u=1289&stream=asdasdadsads
                </div>
                <ul className="bg-[#E9B02B] px-4 py-2 mt-5 rounded-md">
                  {datas.map((data, index) => (
                    <li className="text-sm text-white" key={index}>
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between gap-4 border-b pb-3">
                <p>Postback</p>
                <Link
                  to={'#'}
                  className="bg-[#E9ECEF] px-4 py-1 rounded-sm hover:bg-gray-200 transition text-gray-500 text-sm shadow-md"
                >
                  Управление Postback
                </Link>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg shadow-sm p-4">
              <button
                onClick={() => {
                  setActive('Страница регистрации');
                  editStream();
                }}
                className={`px-4 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md mt-2 shadow-md transition pb-1.5 pt-1`}
              >
                {loading ? 'Подождите...' : 'Сохранить'}
              </button>
            </div>
          </div>
          <div className="sm:w-1/2 bg-white rounded-lg shadow-sm p-4 h-fit">
            <h1 className="text-lg font-medium text-gray-900 pb-4 mb-5 border-b">
              Правила
            </h1>

            <div className="space-y-8 text-[#888da8]">
              {/* Allowed Methods Section */}
              <section>
                <p className="text-base font-medium mb-4">
                  Правила привлечения Разрешенные способы привлечение
                </p>
                <ul className="space-y-2 text-xs pl-4 font-medium">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Брокерский трафик
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Дорвей-трафик
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Контекстная реклама
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Реклама в социальных сетях
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Тизерные сети
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Adult-трафик
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Cashback
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Email-рассылка (по своей базе, по согласованию)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    PopUp / ClickUnder
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    YouTube-канал
                  </li>
                </ul>
              </section>

              {/* Prohibited Methods Section */}
              <section>
                <h2 className="ttext-base font-medium mb-4">
                  Запрещенные способы привлечения
                </h2>
                <ul className="space-y-2 text-xs pl-4 font-medium">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Email-спам
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Контекстная реклама на бренд
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Мотивированный трафик
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Toolbar
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#888da8] rounded-full mr-3"></span>
                    Кукистаффинг
                  </li>
                </ul>
              </section>

              {/* Warning Message */}
              <p className="text-red-500 text-sm mt-6">
                В случае обнаружения использования запрещенных способов
                привлечения, аккаунт блокируется вместе с активным балансом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStream;
