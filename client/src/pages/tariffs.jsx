import MaxWidth from '../components/shared/max-width';

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

const XIcon = () => (
  <svg
    className="w-5 h-5 text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

function Tariffs() {
  return (
    <MaxWidth className="py-10 bg-middleBlue">
      <div className="px-4 py-6 md:px-6 lg:py-16 bg-gray-100 rounded-md shadow-md">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Тарифы</h1>
            <p className="text-lg text-gray-600">
              Выберите подходящий тариф и активируйте его.
            </p>
            <p className="text-sm text-gray-500">
              Для лучшего результата рекомендуем активировать два тарифа кей и
              комбо
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-xl mx-auto">
            {/* Key Plan */}
            <div className="bg-[#E9E9E9] rounded-lg shadow-xl overflow-hidden">
              <div className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">499 ₽</div>
                  <h3 className="text-xl font-semibold">
                    Тариф &quot;Key&quot;
                  </h3>
                  <p className="text-sm text-gray-500">Популярный выбор!</p>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <button className="w-full py-2 px-4 bg-orange-500 hover:bg-white hover:text-orange-500 text-white font-bold rounded-md transition duration-200">
                  Активировать тариф
                </button>

                <div className="space-y-4">
                  <h4 className="font-semibold">О тарифе &quot;Key&quot;</h4>
                  <ul className="space-y-2.5">
                    {[
                      'Прогнозы до 2 в день',
                      'Коэффициенты от 1.3 до 3.0',
                      'Спорт и киберспорт',
                      'Личный телеграм бот',
                      'Live ставки',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckIcon />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    <li className="flex items-center space-x-2">
                      <XIcon />
                      <span className="text-sm">Экспресс ставки</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Combo Plan */}
            <div className="bg-[#E9E9E9] rounded-lg shadow-xl overflow-hidden">
              <div className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">1499 ₽</div>
                  <h3 className="text-xl font-semibold">
                    Тариф &quot;Combo&quot;
                  </h3>
                  <p className="text-sm text-gray-500">
                    Выбор для лучшего успеха!
                  </p>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <button className="w-full py-2 px-4 bg-orange-500 hover:bg-white hover:text-orange-500 text-white font-bold rounded-md transition duration-200">
                  Активировать тариф
                </button>

                <div className="space-y-4">
                  <h4 className="font-semibold">О тарифе &quot;Combo&quot;</h4>
                  <ul className="space-y-2.5">
                    {[
                      'Прогнозы до 3 в день',
                      'Коэффициенты от 1.3 до 10.0',
                      'Спорт и киберспорт',
                      'Личный телеграм бот',
                      'Live ставки',
                      'Экспресс ставки',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckIcon />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
}

export default Tariffs;
