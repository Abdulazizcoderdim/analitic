import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetPay = () => {
  return (
    <div className="bg-[#E9ECEF] min-h-screen sm:pt-20 pt-24 px-5 w-full pb-20">
      <h1 className="text-2xl font-semibold text-gray-900 mb-5">
        Заказать выплату
      </h1>

      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm mb-8 ml-4">
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          <Home className="h-4 w-4" />
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 cursor-pointer">Заказать выплату</span>
      </nav>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          to="/dashboard/payout"
          className="px-5 pb-2 pt-1.5 shadow-md bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors flex items-center"
        >
          Список выплат
        </Link>
        <Link
          to="/dashboard/payout/requisites"
          className="px-5 pb-2 pt-1.5 shadow-md bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors flex items-center"
        >
          Мои реквизиты
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 max-w-6xl mx-auto">
        <h1 className="uppercase text-lg font-normal text-blue-500">
          Мои реквизиты
        </h1>

        <p className="mt-4 text-base text-[#888da8]">
          У Вас не заполнены реквизиты, сначала нужно их заполнить
        </p>
      </div>
    </div>
  );
};

export default GetPay;
