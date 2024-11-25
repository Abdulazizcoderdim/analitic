import Calendar from '../components/shared/Calendar';

const Users = () => {
  return (
    <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2">
          <p className="text-lg font-medium">Пользователи</p>{' '}
          <span className="bg-white p-1 rounded-md text-xs">0</span>
        </div>

        <div className="bg-white mt-7 shadow-md rounded-md py-4">
          <Calendar />
        </div>

        <div className="w-full px-4 py-6 bg-white rounded-lg shadow-sm mt-10">
          <h2 className="text-lg font-normal text-gray-800 mb-6">
            Зарегистрированные пользователи
          </h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-t border-gray-200 text-xs">
                  <th className="py-3 px-4 font-medium text-gray-700">ID</th>
                  <th className="py-3 px-4 font-medium text-gray-700">
                    Регистрация
                  </th>
                  <th className="py-3 px-4 font-medium text-gray-700">Имя</th>
                  <th className="py-3 px-4 font-medium text-gray-700">Email</th>
                  <th className="py-3 px-4 font-medium text-gray-700">
                    Телефон
                  </th>
                  <th className="py-3 px-4 font-medium text-gray-700">Tg</th>
                  <th className="py-3 px-4 font-medium text-gray-700">
                    Активации
                  </th>
                  <th className="py-3 px-4 font-medium text-gray-700">Поток</th>
                  <th className="py-3 px-4 font-medium text-gray-700">
                    Click ID
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
