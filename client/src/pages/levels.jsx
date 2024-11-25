import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Levels = () => {
  return (
    <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-5">
          Уровни отчислений
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8 ml-4">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 cursor-pointer">
            Уровни отчислений
          </span>
        </nav>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-8 pb-14">
          <h2 className="text-xl mb-6">Персональный уровень отчислений</h2>
          <div className="border-l-4 border-blue-500 rounded-lg flex items-center shadow-lg min-h-20 pl-4">
            <p className="text-gray-600">
              Ваш персональный уровень отчислений 50% от всех платежей
              приведенных вами клиентов. <br /> Вы получаете 5% от дохода тех
              партнеров которые присоединились по вашей реферальной ссылке.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 pb-14 mt-8">
          <h2 className="text-xl mb-6">Внимание!</h2>
          <div className="px-5 py-6 bg-[#E9B02B] space-y-5 text-white">
            <h1 className="text-3xl font-normal">Отчисления 50% каждому!</h1>
            <p className="text-lg ">
              Уважаемый партнер! Процент установленный в партнерской программе
              является неизменным. Не важно какой объем пользователей вы
              привлекаете - вы всегда получается фиксированный процент. Даже
              если вы прекратили привлекать пользователей - вы будете получать
              доход по фиксированной стравке!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Levels;
