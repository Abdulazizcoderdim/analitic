import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Postbacks = () => {
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

        <button className="px-5 pb-2 pt-1.5 shadow-md bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors">
          <span className="mr-1">+</span> Создать postback
        </button>

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
                <tr>
                  <td
                    className="py-8 px-4 text-center text-gray-500"
                    colSpan={4}
                  >
                    Постбеки еще не добавлены.
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

export default Postbacks;
