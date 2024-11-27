import { Home } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Postbacks = () => {
  const [postbacks, setPostbacks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPostbacks();
  }, []);

  const fetchPostbacks = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_API}/api/postbacks/get-all`
      );
      if (!response.ok) throw new Error('Malumotlarni yuklashda xatolik');
      const data = await response.json();

      setPostbacks(data);
    } catch (err) {
      console.error(err);
    }
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    return `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()} в ${date.getHours()}:${String(
      date.getMinutes()
    ).padStart(2, '0')}`;
  };
  return (
    <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-5">Postback</h1>

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8 ml-4">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 cursor-pointer">Postback</span>
        </nav>

        <Link
          to={'/dashboard/postbacks/create'}
          className="px-5 pb-2 pt-1.5 shadow-md bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
        >
          <span className="mr-1">+</span> Создать postback
        </Link>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-8 pb-14 mt-10">
          <h2 className="text-lg font-medium mb-6 text-blue-500 uppercase">
            Postback
          </h2>
          <div className="border-l-4 border-blue-500 rounded-lg flex items-center shadow-lg min-h-20 py-4 pl-4">
            <p className="text-gray-600">
              Postback — это ссылка, на которую отправляются сведения о событиях
              в партнерской программе: регистрации, подписки, оплаты, отписки.
            </p>
          </div>
          <div className="w-full overflow-x-auto mt-10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-t border-gray-200">
                  <th className="py-3 px-4 font-medium text-gray-700">ID</th>
                  <th className="py-3 px-4 font-medium text-gray-700">Метод</th>
                  <th className="py-3 px-4 font-medium text-gray-700">
                    Название
                  </th>
                  <th className="py-3 px-4 font-medium text-gray-700">Дата</th>
                </tr>
              </thead>
              <tbody>
                {postbacks.map((postback, i) => (
                  <tr key={postback._id} className=" hover:bg-gray-50">
                    <td className="py-1 px-4 text-gray-800">{250 + i}</td>
                    <td className="py-1 px-4 text-gray-800">
                      {postback.method}
                    </td>
                    <td className="py-1 px-4 text-gray-800">{postback.name}</td>
                    <td className="py-1 px-4 text-gray-500">
                      {formatDate(postback.createdAt)}
                    </td>
                    <td className="py-1 px-4">
                      <button
                        className="px-4 text-xs shadow-sm text-end py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                        onClick={() =>
                          navigate(`/dashboard/postbacks/edit/${postback._id}`)
                        }
                      >
                        Настройки
                      </button>
                    </td>
                  </tr>
                ))}
                {postbacks.length === 0 && (
                  <tr>
                    <td
                      className="py-8 px-4 text-center text-gray-500"
                      colSpan={4}
                    >
                      Постбеки еще не добавлены.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postbacks;
