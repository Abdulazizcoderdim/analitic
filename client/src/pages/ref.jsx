import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ref = () => {
  return (
    <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-5">
          Приведи друга
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8 ml-4">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 cursor-pointer">Приведи друга</span>
        </nav>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-8 pb-14">
          <h2 className="text-xl mb-6">Приведи друга</h2>
          <div className="border-l-4 border-blue-500 rounded-lg flex items-center shadow-lg min-h-20 py-4 pl-4">
            <p className="text-gray-600">
              Вы можете рекомендовать партнерскую программу другим
              пользователям. Вы будете получать 5% от дохода партнеров, которые
              зарегистрируются по вашей ссылке.
            </p>
          </div>
          <div className="px-5 py-6 bg-[#E9B02B] space-y-5 text-white mt-10">
            <p className="text-lg ">
              Ваша реф-ссылка: https://partners.analiticbet.ru/?p=1289
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full px-4 py-6 bg-white rounded-lg shadow-sm mt-10">
          <h2 className="text-xl font-medium text-gray-800 mb-6">
            Партнеры которых вы привели
          </h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-t border-gray-200">
                  <th className="py-3 px-4 font-medium text-gray-700">ID</th>
                  <th className="py-3 px-4 font-medium text-gray-700">
                    Регистрация
                  </th>
                  <th className="py-3 px-4 font-medium text-gray-700">Email</th>
                  <th className="py-3 px-4 font-medium text-gray-700">Имя</th>
                  <th className="py-3 px-4 font-medium text-gray-700">
                    Ваш доход
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="py-8 px-4 text-center text-gray-500"
                    colSpan={5}
                  >
                    По вашей ссылке еще никто не зарегистрировался.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ref;
