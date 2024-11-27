import { Home } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StreamList from '../components/dashboard/get-streams';

const Streams = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        setData(true);
        const response = await fetch(
          `${import.meta.env.VITE_PUBLIC_API}/api/streams/get-all`
        );
        if (!response.ok) throw new Error('Malumotlarni yuklashda xatolik');
        const data = await response.json();

        if (data.length > 0) {
          setData(true);
        } else {
          setData(false);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchStreams();
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-5">Потоки</h1>

          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8 ml-4">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              <Home className="h-4 w-4" />
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 cursor-pointer">Потоки</span>
          </nav>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="/dashboard/streams/create/"
              className="px-5 pb-2 pt-1.5 shadow-md bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors flex items-center"
            >
              <span className="mr-1">+</span> Создать поток
            </Link>
            <Link
              to={'/dashboard/streams/stats'}
              className="px-5 pb-2 pt-1.5 shadow-md bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
            >
              Статистика по потокам
            </Link>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl text-blue-500 mb-6">потоки</h2>
            {/* get streams */}
            {data ? (
              <StreamList />
            ) : (
              <div className="border-l-4 border-blue-500 rounded-lg flex items-center shadow-lg h-20 pl-4">
                <p className="text-gray-600">
                  К сожалению, потоков не найдено.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streams;
