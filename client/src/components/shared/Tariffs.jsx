import { Check } from 'lucide-react';

export default function Tarriffs() {
  return (
    <div className="max-w-3xl mx-auto text-center text-white">
      <h1 className="text-5xl font-bold mb-4">ТАРИФЫ</h1>
      <p className="text-xl mb-12">Тарифы можно комбинировать</p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Key Tariff */}
        <div className="border-2 flex flex-col justify-between border-dashed border-teal-600/50 rounded-2xl p-8 text-left">
          <div>
            <div className="text-3xl font-bold mb-4 text-center">499 ₽</div>
            <h2 className="text-xl mb-8 text-center">Тариф &quot;Key&quot;</h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
                Прогнозы до 2 в день
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
                Коэффициенты от 1.7 до 3.0
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
                Спорт и киберспорт
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
                Личный телеграм бот
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
                Live ставки
              </li>
            </ul>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 px-4 transition-colors">
            Выбрать количество дней
          </button>
        </div>

        {/* Combo Tariff */}
        <div className="bg-[#348A8E] rounded-2xl p-8 text-left">
          <div>
            <div className="text-3xl font-bold mb-4 text-center">1499 ₽</div>
            <h2 className="text-xl mb-8 text-center">
              Тариф &quot;Combo&quot;
            </h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
                Прогнозы до 4 в день
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
                Коэффициенты от 1.7 до 10.0
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
                Спорт и киберспорт
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
                Личный телеграм бот
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
                Live ставки
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
                Экспресс ставки
              </li>
            </ul>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 px-4 transition-colors">
            Выбрать количество дней
          </button>
        </div>
      </div>

      <p className="text-lg mt-8 max-w-4xl mx-auto">
        Для лучшего результата рекомендуем активировать два тарифа кей и комбо
      </p>
    </div>
  );
}
