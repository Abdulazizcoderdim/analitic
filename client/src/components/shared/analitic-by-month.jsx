import Slider from './carusel2';
import MaxWidth from './max-width';
import Tarriffs from './Tariffs';

const AnaliticByMonth = () => {
  return (
    <MaxWidth className="py-20 bg-middleBlue text-white">
      <h1 className="text-4xl uppercase font-bold text-center">
        Аналитика по месяцам
      </h1>
      <Slider />
      <Tarriffs />

      <div className="mt-16 md:mt-28 text-white px-4 md:px-0">
        <div className="bg-lighBlue w-full rounded-md p-6 md:p-10 lg:p-14 flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-5">
          <div className="md:w-1/2 space-y-4 md:space-y-5">
            <h1 className="uppercase text-2xl md:text-3xl font-bold leading-tight">
              Гарантия <br className="hidden md:inline" /> полного возврата
            </h1>
            <p className="text-base md:text-lg">
              Если наши прогнозы показали отрицательный результат, Мы
              гарантируем полный возврат стоимости подписок за весь месяц.
            </p>
            <p className="text-xs md:text-sm opacity-75">
              Условие возврата — соблюдение прогнозов и рекомендаций по размеру
              ставок и одновременное использование Key и Combo.
            </p>
          </div>
          <div className="md:w-1/2 bg-[#0D2324] rounded-md relative h-64 md:h-auto">
            <img
              loading="lazy"
              src="/icon_secure.svg"
              alt="Secure icon"
              width={80}
              height={80}
              className="absolute -bottom-4 left-4 w-16 md:w-20 lg:w-24"
            />
            <img
              loading="lazy"
              src="/icon_coin.svg"
              alt="Coin icon"
              width={80}
              height={80}
              className="absolute -top-4 right-4 w-16 md:w-20 lg:w-24"
            />
            <img
              loading="lazy"
              src="/girl.webp"
              alt="Girl illustration"
              width={200}
              height={200}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 md:w-48 lg:w-52"
            />
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default AnaliticByMonth;
