import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Payout = () => {
  return (
    <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-5">Выплаты</h1>

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8 ml-4">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 cursor-pointer">Выплаты</span>
        </nav>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-5 pb-2 pt-1.5 shadow-md bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors flex items-center">
            Мои реквизиты
          </button>
          <button className="px-5 pb-2 pt-1.5 shadow-md bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors">
            <span className="mr-1">+</span> Заказать выплату
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl mb-6">Выплаты</h2>
          <div className="border-l-4 border-blue-500 rounded-lg flex items-center shadow-lg min-h-20 py-5 pl-4">
            <p className="text-gray-600">
              Уважаемые партнеры! В связи с техническими работами на сайте,
              информируем Вас о том, что все выплаты денежных средств будут
              производиться в ручном режиме по запросу у менеджера. Контакты
              наших менеджеров можно найти в разделе «Поддержка».
              Ориентировочный срок вывода по запросу — в течение 3 рабочих дней.
              Просим учитывать данную информацию при планировании вашей работы.
              Надеемся на понимание и дальнейшее плодотворное и взаимовыгодное
              сотрудничество.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm pt-4 pb-10 px-5 mt-10">
          <p className="text-lg">Список выплат</p>
        </div>
      </div>
    </div>
  );
};

export default Payout;
