const Dashboard = () => {
  return (
    <div className="h-[140vh] bg-[#E9ECEF] pt-20 px-5">
      <div className="">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Обзор</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex justify-between">
              <div className="">
                <img src="/a1.png" width={50} height={50} alt="" />
              </div>
              <div className="flex flex-col text-[#888da8] text-lg font-medium">
                <p>Пользователи</p>
                <p className="text-end">0</p>
              </div>
            </div>
            <p className="bg-green-500 mt-4 w-fit p-1 pt-0 text-sm text-white font-medium pb-1 rounded-md">
              Активированных: 0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
