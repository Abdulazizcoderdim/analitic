import Calendar from '../shared/Calendar';
import StatisticsTable from './StatisticsTable';

const Stats = () => {
  return (
    <div className="bg-[#E9ECEF] sm:pt-20 pt-24 px-5 w-full pb-20">
      <div className="">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Обзор</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex justify-between">
              <div className="">
                <img src="/a1.png" width={50} height={50} alt="logo" />
              </div>
              <div className="flex flex-col text-[#888da8] text-lg font-bold">
                <p>Пользователи</p>
                <p className="text-end">0</p>
              </div>
            </div>
            <p className="bg-green-500 mt-4 w-fit p-1 pt-0 text-sm text-white font-medium pb-1 rounded-md">
              Активированных: 0
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex justify-between">
              <div className="">
                <img src="/a2.png" width={50} height={50} alt="logo" />
              </div>
              <div className="flex flex-col text-[#888da8] text-lg text-end font-bold">
                <p>Действующие подписки</p>
                <p className="text-end">0</p>
                <div className="flex items-center sm:gap-10 gap-5 justify-end">
                  <p className="bg-blue-500 mt-4 w-fit p-1 pt-0 text-sm text-white font-medium pb-1 rounded-md">
                    Key:
                  </p>
                  <p className="bg-green-500 mt-4 w-fit p-1 pt-0 text-sm text-white font-medium pb-1 rounded-md">
                    Combo:
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex justify-between">
              <div className="">
                <img src="/a3.png" width={50} height={50} alt="logo" />
              </div>
              <div className="flex flex-col text-[#888da8] text-xl text-end font-bold">
                <p>Отписки</p>
                <p className="text-end">0</p>
                <div className="flex items-center sm:gap-10 gap-2 justify-end">
                  <p className="bg-blue-500 mt-4 w-fit p-1 pt-0 text-sm text-white font-medium pb-1 rounded-md">
                    Key: 0
                  </p>
                  <p className="bg-green-500 mt-4 w-fit p-1 pt-0 text-sm text-white font-medium pb-1 rounded-md">
                    Combo: 0
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex justify-between">
              <div className="">
                <img src="/a4.png" width={50} height={50} alt="logo" />
              </div>
              <div className="flex flex-col text-[#888da8] text-xl text-end font-bold">
                <p>Заработано сегодня</p>
                <p className="text-end">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-7 shadow-md rounded-md py-4">
        <Calendar />
      </div>

      <StatisticsTable />
    </div>
  );
};

export default Stats;
